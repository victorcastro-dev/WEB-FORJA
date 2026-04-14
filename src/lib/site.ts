import { sanitizePhone } from "@/lib/utils";

const DEFAULT_SITE_URL = "https://webforja.com.br";

function normalizeSiteUrl(value: string | undefined) {
  const candidate = value?.trim();

  if (!candidate) {
    return DEFAULT_SITE_URL;
  }

  try {
    return new URL(candidate).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function normalizeWhatsAppNumber(value: string | undefined) {
  const digits = sanitizePhone(value ?? "");
  return digits.length >= 10 ? digits : null;
}

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const rawWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
let hasWarnedMissingEnv = false;

export const siteRuntimeConfig = {
  siteUrl: normalizeSiteUrl(rawSiteUrl),
  hasExplicitSiteUrl: Boolean(rawSiteUrl),
  whatsappNumber: normalizeWhatsAppNumber(rawWhatsAppNumber),
  hasWhatsAppNumber: Boolean(normalizeWhatsAppNumber(rawWhatsAppNumber)),
};

export function formatUrl(path: string) {
  return new URL(path, siteRuntimeConfig.siteUrl).toString();
}

export function buildWhatsAppUrl(message: string) {
  if (!siteRuntimeConfig.whatsappNumber) {
    return null;
  }

  return `https://wa.me/${siteRuntimeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getProductionEnvStatus() {
  const missing: string[] = [];

  if (!siteRuntimeConfig.hasExplicitSiteUrl) {
    missing.push("NEXT_PUBLIC_SITE_URL");
  }

  if (!siteRuntimeConfig.hasWhatsAppNumber) {
    missing.push("NEXT_PUBLIC_WHATSAPP_NUMBER");
  }

  return {
    missing,
    isReady: missing.length === 0,
  };
}

export function warnMissingProductionEnvOnce() {
  if (process.env.NODE_ENV !== "production" || hasWarnedMissingEnv) {
    return;
  }

  const envStatus = getProductionEnvStatus();

  if (!envStatus.isReady) {
    console.warn(
      `[WEBFORJA] Variáveis obrigatórias para produção ausentes: ${envStatus.missing.join(", ")}`,
    );
    hasWarnedMissingEnv = true;
  }
}
