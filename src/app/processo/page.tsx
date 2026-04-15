import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { processSteps } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Processo de projeto",
  description:
    "Entenda o processo da WEBFORJA do briefing à entrega, com proposta personalizada, sinal, desenvolvimento, revisão e suporte opcional.",
  path: "/processo",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        badge="Execução organizada"
        bullets={[
          "Briefing, análise e proposta personalizada",
          "Desenvolvimento com revisão antes da entrega",
          "Continuidade opcional depois da publicação",
        ]}
        description="O processo da WEBFORJA foi desenhado para dar previsibilidade sem burocracia desnecessária."
        eyebrow="Processo"
        title="Um fluxo claro para tirar o projeto do papel com segurança"
      />

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            description="Cada etapa existe para alinhar escopo, manter ritmo e reduzir ruído no caminho."
            eyebrow="Etapas"
            title="Como a WEBFORJA conduz um projeto personalizado"
          />
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-5 md:grid-cols-3">
          <Reveal as="article" className="panel h-full p-6" variant="scale">
            <h2 className="text-xl text-text">Escopo sob medida</h2>
            <p className="mt-4 text-sm sm:text-base">
              A proposta considera contexto, prioridade e complexidade do projeto.
            </p>
          </Reveal>
          <Reveal as="article" className="panel h-full p-6" delay={80} variant="scale">
            <h2 className="text-xl text-text">Início com sinal</h2>
            <p className="mt-4 text-sm sm:text-base">
              Depois da aprovação, a agenda é reservada conforme a condição apresentada na proposta.
            </p>
          </Reveal>
          <Reveal as="article" className="panel h-full p-6" delay={160} variant="scale">
            <h2 className="text-xl text-text">Continuidade opcional</h2>
            <p className="mt-4 text-sm sm:text-base">
              Depois da entrega, você pode seguir com autonomia ou contratar suporte contínuo.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        description="Se o processo fizer sentido para o seu momento, o próximo passo é abrir o contexto do projeto."
        secondaryHref="/orcamento#formulario-orcamento"
        secondaryLabel="Abrir briefing"
        title="Vamos estruturar a proposta com clareza antes de qualquer decisão"
      />
    </>
  );
}
