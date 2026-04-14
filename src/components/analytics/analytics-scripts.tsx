import Script from "next/script";

import { analyticsConfig, analyticsScriptId } from "@/lib/analytics";

export function AnalyticsScripts() {
  if (!analyticsScriptId) {
    return null;
  }

  const configCommands = [
    analyticsConfig.gaMeasurementId
      ? `gtag('config', '${analyticsConfig.gaMeasurementId}', { send_page_view: false });`
      : "",
    analyticsConfig.googleAdsId ? `gtag('config', '${analyticsConfig.googleAdsId}');` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsScriptId}`}
        strategy="afterInteractive"
      />
      <Script id="webforja-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${configCommands}
        `}
      </Script>
    </>
  );
}
