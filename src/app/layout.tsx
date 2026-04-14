import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";

import { AnalyticsPageViewTracker } from "@/components/analytics/analytics-page-view-tracker";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { MotionScript } from "@/components/layout/motion-script";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeScript } from "@/components/layout/theme-script";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { siteConfig } from "@/content/site-content";
import { siteRuntimeConfig, warnMissingProductionEnvOnce } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteRuntimeConfig.siteUrl),
  applicationName: "WEBFORJA",
  title: {
    default: "WEBFORJA | Sites, landing pages, sistemas e automações",
    template: "%s",
  },
  description: siteConfig.description,
  category: "technology",
  keywords: [
    "landing pages",
    "sites institucionais",
    "sistemas web",
    "automação",
    "desenvolvimento web",
    "WEBFORJA",
  ],
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" },
    { media: "(prefers-color-scheme: light)", color: "#F4F7FC" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  warnMissingProductionEnvOnce();

  const jsonLd: {
    "@context": string;
    "@graph": Array<Record<string, unknown>>;
  } = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
      },
      {
        "@type": "ProfessionalService",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        areaServed: "BR",
        serviceType: [
          "Sites institucionais",
          "Landing pages",
          "Sistemas web",
          "Automações",
        ],
      },
    ],
  };

  if (siteRuntimeConfig.whatsappNumber) {
    const phone = `+${siteRuntimeConfig.whatsappNumber}`;

    Object.assign(jsonLd["@graph"][0], { telephone: phone });
    Object.assign(jsonLd["@graph"][1], { telephone: phone });
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <AnalyticsScripts />
        <ThemeScript />
        <MotionScript />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <AnalyticsPageViewTracker />
        </Suspense>
        <div className="relative min-h-screen">
          <a
            className="sr-only fixed left-4 top-4 z-[60] rounded-full border border-primary/50 bg-surface px-4 py-2 text-sm font-semibold text-text focus:not-sr-only"
            href="#main-content"
          >
            Pular para o conteúdo
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
