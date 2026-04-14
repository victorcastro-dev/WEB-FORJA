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
          "Suporte e manutenção só quando fizer sentido",
        ]}
        description="O processo da WEBFORJA foi desenhado para dar previsibilidade sem engessar o projeto. A ideia é alinhar bem o escopo, reduzir ruído e manter o trabalho profissional do início ao fim."
        eyebrow="Processo"
        title="Um fluxo claro para transformar briefing em entrega com segurança e critério"
      />

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            description="Essas etapas ajudam a organizar expectativa, tomada de decisão e evolução do projeto sem transformar a experiência em burocracia."
            eyebrow="Etapas"
            title="Como a WEBFORJA conduz um projeto personalizado"
          />
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-5 md:grid-cols-3">
          <Reveal as="article" className="panel h-full p-6" variant="scale">
            <h3 className="text-xl text-text">Orçamento personalizado</h3>
            <p className="mt-4 text-sm sm:text-base">
              O escopo não nasce de tabela fixa. Ele é definido conforme contexto, objetivos,
              prioridades e complexidade.
            </p>
          </Reveal>
          <Reveal as="article" className="panel h-full p-6" delay={80} variant="scale">
            <h3 className="text-xl text-text">Pagamento com sinal</h3>
            <p className="mt-4 text-sm sm:text-base">
              Depois da aprovação da proposta, o projeto é iniciado com sinal conforme a condição
              apresentada ao cliente.
            </p>
          </Reveal>
          <Reveal as="article" className="panel h-full p-6" delay={160} variant="scale">
            <h3 className="text-xl text-text">Continuidade opcional</h3>
            <p className="mt-4 text-sm sm:text-base">
              Depois da entrega, você pode seguir com autonomia ou contratar suporte e manutenção
              conforme a necessidade.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        description="Se você quer entender como esse processo se aplica ao seu cenário, o próximo passo é abrir o contexto do projeto."
        eyebrow="Alinhamento"
        title="Vamos estruturar a proposta com clareza antes de qualquer decisão"
      />
    </>
  );
}
