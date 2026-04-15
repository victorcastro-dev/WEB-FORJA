"use client";

import type { FormEvent, HTMLAttributes } from "react";
import { useEffect, useState } from "react";

import { Button, buttonClasses } from "@/components/ui/button";
import { budgetProjectTypes, budgetRanges } from "@/content/site-content";
import { trackLeadSubmission, trackWhatsAppClick } from "@/lib/analytics";
import { buildBudgetEmailUrl, buildBudgetWhatsAppUrl } from "@/lib/contact";
import { BudgetFormData, validateLeadPayload } from "@/lib/lead";
import { cn } from "@/lib/utils";

const DRAFT_STORAGE_KEY = "webforja:budget-form-draft";

const initialState: BudgetFormData = {
  name: "",
  segment: "",
  whatsapp: "",
  email: "",
  projectType: "",
  objective: "",
  description: "",
  budgetRange: "",
  referenceUrl: "",
  desiredTimeline: "",
  website: "",
};

type SubmissionState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string; contactUrl?: string; contactLabel?: string }
  | {
      status: "success";
      leadId: string;
      message: string;
      delivery: "webhook" | "whatsapp" | "manual";
      contactUrl?: string;
      contactLabel?: string;
    };

function isEmptyFormData(data: BudgetFormData) {
  return Object.values(data).every((value) => value === "");
}

function getClientFallbackContact(data: BudgetFormData) {
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

function isWhatsAppUrl(url: string | undefined) {
  return Boolean(url?.startsWith("https://wa.me/"));
}

export function BudgetForm() {
  const [formData, setFormData] = useState<BudgetFormData>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof BudgetFormData, string>>>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ status: "idle" });
  const [draftReady, setDraftReady] = useState(false);

  const selectedProjectType = budgetProjectTypes.find((item) => item.value === formData.projectType);

  useEffect(() => {
    try {
      const savedDraft = window.localStorage.getItem(DRAFT_STORAGE_KEY);

      if (!savedDraft) {
        return;
      }

      const parsedDraft = JSON.parse(savedDraft) as Partial<BudgetFormData>;

      setFormData((current) => ({
        ...current,
        ...parsedDraft,
      }));
    } catch {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    } finally {
      setDraftReady(true);
    }
  }, []);

  useEffect(() => {
    if (!draftReady) {
      return;
    }

    if (isEmptyFormData(formData)) {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
  }, [draftReady, formData]);

  function updateField(field: keyof BudgetFormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateLeadPayload(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmissionState({ status: "error", message: "Revise os campos obrigatórios para continuar." });
      return;
    }

    setErrors({});
    setSubmissionState({ status: "loading" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as
        | {
            ok: true;
            leadId: string;
            delivery: "webhook" | "whatsapp" | "manual";
            message: string;
            contactUrl?: string;
            contactLabel?: string;
          }
        | {
            ok: false;
            message: string;
            errors?: Partial<Record<keyof BudgetFormData, string>>;
            contactUrl?: string;
            contactLabel?: string;
          };

      if (!result.ok) {
        setErrors(result.errors ?? {});
        setSubmissionState({
          status: "error",
          message: result.message ?? "Não foi possível enviar agora. Tente novamente em instantes.",
          contactUrl: result.contactUrl,
          contactLabel: result.contactLabel,
        });
        return;
      }

      if (!validation.data.website) {
        trackLeadSubmission({
          budgetRange: validation.data.budgetRange,
          delivery: result.delivery,
          projectType: validation.data.projectType,
        });
      }

      setSubmissionState({
        status: "success",
        leadId: result.leadId,
        message: result.message,
        delivery: result.delivery,
        contactUrl: result.contactUrl,
        contactLabel: result.contactLabel,
      });
      setFormData(initialState);
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {
      const fallbackContact = getClientFallbackContact(validation.data);

      setSubmissionState({
        status: "error",
        message:
          "Não conseguimos concluir o envio por aqui agora, mas suas informações foram mantidas. Continue pelo canal abaixo para seguir com o atendimento.",
        ...fallbackContact,
      });
    }
  }

  if (submissionState.status === "success") {
    return (
      <div aria-live="polite" className="panel-strong p-5 sm:p-8">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="eyebrow">
            {submissionState.delivery === "webhook" ? "Pedido recebido" : "Próximo passo"}
          </span>
          <span className="signature-chip">
            {submissionState.delivery === "webhook" ? "Contato registrado" : "Contato pronto"}
          </span>
        </div>
        <h3 className="mt-5 text-3xl text-text">
          {submissionState.delivery === "webhook"
            ? "Seu pedido foi enviado com sucesso."
            : "Recebemos suas informações. Você pode seguir pelo canal abaixo."}
        </h3>
        <p className="mt-4 text-base text-text/80">{submissionState.message}</p>
        <div className="panel-soft mt-6 p-4">
          <p className="meta-label">Protocolo</p>
          <p className="mt-2 text-base text-text">{submissionState.leadId}</p>
        </div>
        <div className="cta-cluster mt-7">
          {submissionState.contactUrl ? (
            <a
              className={buttonClasses({ className: "sm:min-w-[11rem]", variant: "primary" })}
              href={submissionState.contactUrl}
              onClick={() => {
                if (isWhatsAppUrl(submissionState.contactUrl)) {
                  trackWhatsAppClick({
                    href: submissionState.contactUrl,
                    placement: "budget_form_success",
                  });
                }
              }}
              rel="noreferrer"
              target="_blank"
            >
              {submissionState.contactLabel ?? "Continuar contato"}
            </a>
          ) : null}
          <Button
            className="sm:min-w-[11rem]"
            onClick={() => {
              setSubmissionState({ status: "idle" });
              setErrors({});
            }}
            variant="secondary"
          >
            Enviar outro pedido
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form aria-live="polite" className="panel-strong p-5 sm:p-8 lg:p-9" noValidate onSubmit={handleSubmit}>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow">Briefing inicial</span>
          <h3 className="mt-5 text-[2.2rem] leading-[1.08] text-text">
            Compartilhe o essencial para eu entender o projeto.
          </h3>
          <p className="mt-4 text-base text-text/80">
            Se ainda existir dúvida sobre o formato, descreva o cenário. O briefing também serve
            para orientar a solução.
          </p>
        </div>
        <span className="signature-chip">Briefing objetivo</span>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          autoComplete="off"
          id="website"
          name="website"
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          type="text"
          value={formData.website ?? ""}
        />
      </div>

      <div className="accent-line my-8" />

      <div className="space-y-8">
        <section>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="meta-label">Contato</p>
            <p className="text-sm text-muted">Retorno e contexto.</p>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <Field
              autoComplete="organization"
              error={errors.name}
              label="Nome da empresa ou pessoa"
              name="name"
              onChange={(value) => updateField("name", value)}
              required
              value={formData.name}
            />
            <Field
              error={errors.segment}
              label="Ramo ou segmento"
              name="segment"
              onChange={(value) => updateField("segment", value)}
              required
              value={formData.segment}
            />
            <Field
              autoComplete="tel"
              error={errors.whatsapp}
              inputMode="tel"
              label="WhatsApp"
              name="whatsapp"
              onChange={(value) => updateField("whatsapp", value)}
              required
              type="tel"
              value={formData.whatsapp}
            />
            <Field
              autoComplete="email"
              error={errors.email}
              label="E-mail"
              name="email"
              onChange={(value) => updateField("email", value)}
              required
              type="email"
              value={formData.email}
            />
          </div>
        </section>

        <section>
          <fieldset>
            <legend className="meta-label">Tipo de projeto *</legend>
            <p className="helper-text" id="project-type-help">
              {selectedProjectType?.description ?? "Escolha a opção mais próxima do que você precisa hoje."}
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {budgetProjectTypes.map((item) => (
                <ChoiceCard
                  description={item.description}
                  isSelected={formData.projectType === item.value}
                  key={item.value}
                  name="projectType"
                  onChange={() => updateField("projectType", item.value)}
                  title={item.label}
                  value={item.value}
                />
              ))}
            </div>
            {errors.projectType ? <ErrorText id="projectType-error">{errors.projectType}</ErrorText> : null}
          </fieldset>

          <fieldset className="mt-8">
            <legend className="field-label">Faixa de investimento *</legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {budgetRanges.map((item) => (
                <ChoiceChip
                  checked={formData.budgetRange === item.value}
                  key={item.value}
                  label={item.label}
                  name="budgetRange"
                  onChange={() => updateField("budgetRange", item.value)}
                  value={item.value}
                />
              ))}
            </div>
            <p className="helper-text">A proposta final é ajustada ao escopo e às prioridades.</p>
            {errors.budgetRange ? <ErrorText id="budgetRange-error">{errors.budgetRange}</ErrorText> : null}
          </fieldset>

          <div className="mt-6 grid gap-6">
            <TextAreaField
              error={errors.objective}
              label="Objetivo do projeto"
              name="objective"
              onChange={(value) => updateField("objective", value)}
              placeholder="Ex.: captar mais leads qualificados, apresentar melhor a marca, organizar um processo interno."
              required
              rows={3}
              value={formData.objective}
            />
            <TextAreaField
              error={errors.description}
              label="Descrição resumida"
              name="description"
              onChange={(value) => updateField("description", value)}
              placeholder="Conte o que você precisa, o momento do negócio e qualquer informação importante para entendermos o contexto."
              required
              rows={5}
              value={formData.description}
            />
          </div>
        </section>

        <section>
          <p className="meta-label">Complementos</p>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <Field
              error={errors.referenceUrl}
              label="Referência de site (opcional)"
              name="referenceUrl"
              onChange={(value) => updateField("referenceUrl", value)}
              placeholder="https://exemplo.com"
              type="url"
              value={formData.referenceUrl ?? ""}
            />
            <Field
              label="Prazo desejado (opcional)"
              name="desiredTimeline"
              onChange={(value) => updateField("desiredTimeline", value)}
              placeholder="Ex.: o quanto antes, nas próximas semanas, sem urgência"
              value={formData.desiredTimeline ?? ""}
            />
          </div>
        </section>
      </div>

      {submissionState.status === "error" ? (
        <div className="mt-6 rounded-2xl border border-rose-400/35 bg-rose-500/10 px-4 py-4 text-sm text-rose-100">
          <p>{submissionState.message}</p>
          {submissionState.contactUrl ? (
            <div className="mt-4">
              <a
                className={buttonClasses({
                  className: "w-full sm:w-auto sm:min-w-[12rem]",
                  variant: "secondary",
                  size: "sm",
                })}
                href={submissionState.contactUrl}
                onClick={() => {
                  if (isWhatsAppUrl(submissionState.contactUrl)) {
                    trackWhatsAppClick({
                      href: submissionState.contactUrl,
                      placement: "budget_form_error",
                    });
                  }
                }}
                rel="noreferrer"
                target="_blank"
              >
                {submissionState.contactLabel ?? "Continuar contato"}
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm text-muted">
          Ao enviar, suas informações seguem para o canal disponível e a conversa pode continuar
          sem perder o briefing.
        </p>
        <Button
          className="w-full sm:min-w-[11rem] sm:w-auto"
          disabled={submissionState.status === "loading"}
          type="submit"
          variant="primary"
        >
          {submissionState.status === "loading" ? "Enviando..." : "Pedir orçamento"}
        </Button>
      </div>
    </form>
  );
}

type ChoiceCardProps = {
  title: string;
  description: string;
  isSelected: boolean;
  name: string;
  value: string;
  onChange: () => void;
};

function ChoiceCard({ title, description, isSelected, name, value, onChange }: ChoiceCardProps) {
  return (
    <label
      className={cn(
        "panel-soft interactive-panel control-shell rounded-[24px] p-4 text-left",
        isSelected && "border-signature/35 bg-signature/10",
      )}
    >
      <input
        checked={isSelected}
        className="peer sr-only"
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <div className="flex items-start justify-between gap-4 rounded-[18px] peer-focus-visible:ring-2 peer-focus-visible:ring-primary/60 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-canvas">
        <div className="min-w-0">
          <p className="text-base font-semibold text-text">{title}</p>
          <p className="mt-2 text-sm leading-6 text-text/80">{description}</p>
        </div>
        <span
          className={cn(
            "mt-1 inline-flex h-5 w-5 shrink-0 rounded-full border",
            isSelected ? "border-signature bg-signature" : "border-border/80 bg-transparent",
          )}
        />
      </div>
    </label>
  );
}

type ChoiceChipProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
};

function ChoiceChip({ label, name, value, checked, onChange }: ChoiceChipProps) {
  return (
    <label
      className={cn(
        "control-shell rounded-full border px-4 py-2 text-sm font-semibold transition",
        checked
          ? "border-signature/35 bg-signature/10 text-text"
          : "border-border/80 bg-surface/80 text-muted hover:border-signature/30 hover:text-text",
      )}
    >
      <input
        checked={checked}
        className="peer sr-only"
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span className="whitespace-nowrap rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-primary/60 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-canvas">
        {label}
      </span>
    </label>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required,
  autoComplete,
  inputMode,
}: FieldProps) {
  const describedBy = error ? `${name}-error` : undefined;

  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <input
        aria-describedby={describedBy}
        aria-invalid={Boolean(error)}
        autoComplete={autoComplete}
        className={cn("field", error && "border-rose-400/80")}
        id={name}
        inputMode={inputMode}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
      {error ? <ErrorText id={describedBy}>{error}</ErrorText> : null}
    </div>
  );
}

type TextAreaFieldProps = FieldProps & {
  rows?: number;
};

function TextAreaField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
  rows = 4,
}: TextAreaFieldProps) {
  const describedBy = error ? `${name}-error` : undefined;

  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <textarea
        aria-describedby={describedBy}
        aria-invalid={Boolean(error)}
        className={cn("field min-h-[140px] resize-y", error && "border-rose-400/80")}
        id={name}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
      />
      {error ? <ErrorText id={describedBy}>{error}</ErrorText> : null}
    </div>
  );
}

function ErrorText({ children, id }: { children: string; id?: string }) {
  return (
    <p className="mt-2 text-sm text-rose-300" id={id}>
      {children}
    </p>
  );
}
