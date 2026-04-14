import { budgetProjectTypes, budgetRanges, siteConfig } from "@/content/site-content";
import { buildWhatsAppUrl } from "@/lib/site";

type LeadContactPayload = {
  name: string;
  segment: string;
  projectType: string;
  objective: string;
  budgetRange: string;
  desiredTimeline?: string;
};

function getProjectTypeLabel(value: string) {
  return budgetProjectTypes.find((item) => item.value === value)?.label ?? value;
}

function getBudgetLabel(value: string) {
  return budgetRanges.find((item) => item.value === value)?.label ?? value;
}

export function buildBudgetWhatsAppMessage(lead: LeadContactPayload) {
  const lines = [
    "Olá, WEBFORJA!",
    `Quero falar sobre um projeto de ${getProjectTypeLabel(lead.projectType).toLowerCase()}.`,
    `Nome: ${lead.name}`,
    `Segmento: ${lead.segment}`,
    `Objetivo: ${lead.objective}`,
    `Faixa de investimento: ${getBudgetLabel(lead.budgetRange)}`,
  ];

  if (lead.desiredTimeline) {
    lines.push(`Prazo desejado: ${lead.desiredTimeline}`);
  }

  return lines.join("\n");
}

export function buildBudgetWhatsAppUrl(lead: LeadContactPayload) {
  return buildWhatsAppUrl(buildBudgetWhatsAppMessage(lead));
}

export function buildGenericWhatsAppUrl(message: string) {
  return buildWhatsAppUrl(message);
}

export function buildBudgetEmailUrl(lead: LeadContactPayload) {
  const subject = `Orçamento WEBFORJA - ${getProjectTypeLabel(lead.projectType)}`;
  const body = [
    "Olá, WEBFORJA!",
    "",
    "Quero solicitar um orçamento com o contexto abaixo:",
    `Nome: ${lead.name}`,
    `Segmento: ${lead.segment}`,
    `Projeto: ${getProjectTypeLabel(lead.projectType)}`,
    `Objetivo: ${lead.objective}`,
    `Faixa de investimento: ${getBudgetLabel(lead.budgetRange)}`,
    lead.desiredTimeline ? `Prazo desejado: ${lead.desiredTimeline}` : undefined,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
