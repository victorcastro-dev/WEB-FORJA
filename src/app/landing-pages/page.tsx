import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { getServiceBySlug } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("landing-pages");

export const metadata = buildMetadata({
  title: "Landing pages para captação e campanhas",
  description:
    "Landing pages da WEBFORJA com foco em conversão, clareza de oferta, campanhas, lançamentos e captação qualificada.",
  path: "/landing-pages",
});

export default function LandingPagesPage() {
  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
