import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { getServiceBySlug } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("automacoes");

export const metadata = buildMetadata({
  title: "Automações para vendas e operação",
  description:
    "Automações da WEBFORJA para conectar ferramentas, reduzir tarefas manuais e dar mais previsibilidade à operação.",
  path: "/automacoes",
});

export default function AutomationsPage() {
  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
