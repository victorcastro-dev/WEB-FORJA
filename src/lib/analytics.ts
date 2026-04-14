type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

type LeadTrackingPayload = {
  delivery: "webhook" | "whatsapp" | "manual";
  projectType: string;
  budgetRange: string;
};

type WhatsAppClickPayload = {
  href?: string;
  placement: string;
};

type Gtag = (
  command: "config" | "event" | "js" | "set",
  targetOrDate: string | Date,
  params?: AnalyticsEventParams,
) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: Gtag;
  }
}

function normalizeEnvValue(value: string | undefined) {
  const candidate = value?.trim();
  return candidate ? candidate : null;
}

export const analyticsConfig = {
  gaMeasurementId: normalizeEnvValue(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
  googleAdsId: normalizeEnvValue(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID),
  googleAdsLeadLabel: normalizeEnvValue(process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL),
};

export const hasAnalytics = Boolean(analyticsConfig.gaMeasurementId || analyticsConfig.googleAdsId);

export const analyticsScriptId =
  analyticsConfig.gaMeasurementId ?? analyticsConfig.googleAdsId ?? null;

function canTrack() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

function sendEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (!canTrack()) {
    return;
  }

  window.gtag?.("event", eventName, params);
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") {
    return;
  }

  sendEvent("page_view", {
    page_location: new URL(path, window.location.origin).toString(),
    page_path: path,
    page_title: document.title,
  });
}

export function trackLeadSubmission({ delivery, projectType, budgetRange }: LeadTrackingPayload) {
  sendEvent("lead_form_submit", {
    budget_range: budgetRange,
    delivery,
    project_type: projectType,
  });

  sendEvent("generate_lead", {
    budget_range: budgetRange,
    currency: "BRL",
    delivery,
    project_type: projectType,
    value: 1,
  });

  if (analyticsConfig.googleAdsId && analyticsConfig.googleAdsLeadLabel) {
    sendEvent("conversion", {
      currency: "BRL",
      send_to: `${analyticsConfig.googleAdsId}/${analyticsConfig.googleAdsLeadLabel}`,
      value: 1,
    });
  }
}

export function trackWhatsAppClick({ href, placement }: WhatsAppClickPayload) {
  sendEvent("click_whatsapp", {
    link_url: href,
    method: "whatsapp",
    placement,
  });
}
