import { budgetProjectTypes, budgetRanges } from "@/content/site-content";
import { buildBudgetEmailUrl, buildBudgetWhatsAppUrl } from "@/lib/contact";
import { sanitizePhone } from "@/lib/utils";

export type BudgetFormData = {
  name: string;
  segment: string;
  whatsapp: string;
  email: string;
  projectType: string;
  objective: string;
  description: string;
  budgetRange: string;
  referenceUrl?: string;
  desiredTimeline?: string;
  website?: string;
};

type LeadPayload = Omit<BudgetFormData, "website">;

type LeadEnvelope = {
  id: string;
  createdAt: string;
  source: string;
  lead: LeadPayload;
};

type ValidationResult = {
  isValid: boolean;
  errors: Partial<Record<keyof BudgetFormData, string>>;
  data: BudgetFormData;
};

type LeadSuccessResult = {
  ok: true;
  leadId: string;
  delivery: "webhook" | "whatsapp" | "manual";
  message: string;
  contactUrl?: string;
  contactLabel?: string;
};

type LeadErrorResult = {
  ok: false;
  message: string;
  errors?: Partial<Record<keyof BudgetFormData, string>>;
  contactUrl?: string;
  contactLabel?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validProjectTypes = new Set(budgetProjectTypes.map((item) => item.value));
const validBudgetRanges = new Set(budgetRanges.map((item) => item.value));

function cleanText(value: string | undefined) {
  return value?.trim().replace(/\s+/g, " ") ?? "";
}

function getWebhookUrl() {
  const rawValue = process.env.LEADS_WEBHOOK_URL?.trim();

  if (!rawValue) {
    return null;
  }

  try {
    return new URL(rawValue).toString();
  } catch {
    console.error("[WEBFORJA lead] LEADS_WEBHOOK_URL inválida.");
    return null;
  }
}

function toLeadPayload(data: BudgetFormData): LeadPayload {
  return {
    name: data.name,
    segment: data.segment,
    whatsapp: data.whatsapp,
    email: data.email,
    projectType: data.projectType,
    objective: data.objective,
    description: data.description,
    budgetRange: data.budgetRange,
    referenceUrl: data.referenceUrl,
    desiredTimeline: data.desiredTimeline,
  };
}

function getManualFallback(data: BudgetFormData) {
  const whatsappUrl = buildBudgetWhatsAppUrl(data);

  if (whatsappUrl) {
    return {
      contactUrl: whatsappUrl,
      contactLabel: "Continuar no WhatsApp",
    };
  }

  return {
    contactUrl: buildBudgetEmailUrl(data),
    contactLabel: "Enviar por e-mail",
  };
}

export function normalizeLeadPayload(input: BudgetFormData): BudgetFormData {
  return {
    name: cleanText(input.name),
    segment: cleanText(input.segment),
    whatsapp: cleanText(input.whatsapp),
    email: cleanText(input.email).toLowerCase(),
    projectType: cleanText(input.projectType),
    objective: cleanText(input.objective),
    description: cleanText(input.description),
    budgetRange: cleanText(input.budgetRange),
    referenceUrl: cleanText(input.referenceUrl),
    desiredTimeline: cleanText(input.desiredTimeline),
    website: cleanText(input.website),
  };
}

export function validateLeadPayload(input: BudgetFormData): ValidationResult {
  const data = normalizeLeadPayload(input);
  const errors: Partial<Record<keyof BudgetFormData, string>> = {};

  if (data.name.length < 2) {
    errors.name = "Informe o nome da empresa ou da pessoa responsável.";
  }

  if (data.segment.length < 2) {
    errors.segment = "Informe o ramo ou segmento do projeto.";
  }

  if (sanitizePhone(data.whatsapp).length < 10) {
    errors.whatsapp = "Informe um WhatsApp válido com DDD.";
  }

  if (!emailRegex.test(data.email)) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!validProjectTypes.has(data.projectType)) {
    errors.projectType = "Selecione o tipo de projeto.";
  }

  if (data.objective.length < 8) {
    errors.objective = "Descreva de forma breve o objetivo do projeto.";
  }

  if (data.description.length < 12) {
    errors.description = "Adicione uma descrição resumida com mais contexto.";
  }

  if (data.referenceUrl) {
    try {
      new URL(data.referenceUrl);
    } catch {
      errors.referenceUrl = "Informe uma URL válida com http:// ou https://.";
    }
  }

  if (!validBudgetRanges.has(data.budgetRange)) {
    errors.budgetRange = "Selecione a faixa de investimento.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data,
  };
}

async function sendLeadToWebhook(webhookUrl: string, envelope: LeadEnvelope) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(envelope),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Falha ao enviar o lead para o webhook.");
  }
}

export async function processLeadSubmission(payload: BudgetFormData): Promise<LeadSuccessResult | LeadErrorResult> {
  const validation = validateLeadPayload(payload);

  if (!validation.isValid) {
    return {
      ok: false,
      message: "Revise os campos obrigatórios e tente novamente.",
      errors: validation.errors,
    };
  }

  if (validation.data.website) {
    return {
      ok: true,
      leadId: crypto.randomUUID(),
      delivery: "manual",
      message: "Solicitação recebida.",
    };
  }

  const envelope: LeadEnvelope = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    source: "webforja-site-launch",
    lead: toLeadPayload(validation.data),
  };

  const webhookUrl = getWebhookUrl();
  const fallbackContact = getManualFallback(validation.data);

  if (webhookUrl) {
    try {
      await sendLeadToWebhook(webhookUrl, envelope);

      return {
        ok: true,
        leadId: envelope.id,
        delivery: "webhook",
        message:
          "Recebemos seu briefing com sucesso. Se quiser agilizar o contexto, você também pode continuar a conversa pelo contato abaixo.",
        ...fallbackContact,
      };
    } catch (error) {
      console.error("[WEBFORJA lead webhook]", error);
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info("[WEBFORJA lead preview]", JSON.stringify(envelope));
  }

  if (fallbackContact.contactUrl) {
    return {
      ok: true,
      leadId: envelope.id,
      delivery: fallbackContact.contactLabel === "Continuar no WhatsApp" ? "whatsapp" : "manual",
      message: webhookUrl
        ? "Seu briefing foi validado, mas o envio interno falhou agora. Para não perder o contato, continue pelo canal abaixo."
        : "Seu briefing foi validado. Como o webhook ainda não está configurado, continue pelo canal abaixo para concluir o contato agora.",
      ...fallbackContact,
    };
  }

  return {
    ok: false,
    message:
      "Não foi possível concluir o envio agora. Configure LEADS_WEBHOOK_URL ou NEXT_PUBLIC_WHATSAPP_NUMBER antes de publicar em produção.",
  };
}
