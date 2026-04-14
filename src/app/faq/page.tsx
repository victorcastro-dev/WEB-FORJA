import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { generalFaq } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Perguntas frequentes",
  description:
    "Veja as perguntas frequentes da WEBFORJA sobre orçamento, mobile, manutenção, sistemas, automações e processo comercial.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        badge="Respostas diretas"
        bullets={[
          "Orçamento, revisão e pagamento",
          "Formato do projeto e versão mobile",
          "Domínio, hospedagem e manutenção opcional",
        ]}
        description="Esta página reúne respostas diretas para dúvidas recorrentes antes do início do projeto."
        eyebrow="FAQ"
        title="Perguntas frequentes para entender como a WEBFORJA trabalha"
      />

      <section className="section-space section-texture pt-0">
        <Container className="max-w-5xl">
          <FaqList items={generalFaq} />
        </Container>
      </section>

      <CtaBand
        description="Se a sua dúvida não apareceu aqui, envie o contexto do projeto e seguimos a conversa a partir do seu cenário real."
        eyebrow="Ainda com dúvida?"
        title="Podemos esclarecer os detalhes do seu projeto já na etapa de orçamento"
      />
    </>
  );
}
