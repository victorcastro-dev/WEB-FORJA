import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { getServiceBySlug } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("sistemas-web");

export const metadata = buildMetadata({
  title: "Sistemas web para processos reais",
  description:
    "Sistemas web da WEBFORJA para centralizar processos, reduzir retrabalho e apoiar a operação do negócio.",
  path: "/sistemas-web",
});

export default function WebSystemsPage() {
  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
