import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { getServiceBySlug } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("sites-institucionais");

export const metadata = buildMetadata({
  title: "Sites institucionais com clareza e autoridade",
  description:
    "Sites institucionais da WEBFORJA com autoridade visual, clareza comercial, SEO de base e estrutura pronta para evoluir.",
  path: "/sites-institucionais",
});

export default function InstitutionalSitesPage() {
  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
