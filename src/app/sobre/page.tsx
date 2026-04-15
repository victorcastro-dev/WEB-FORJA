import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { aboutManifesto, aboutPrinciples, aboutWorkingStyle } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sobre a WEBFORJA",
  description:
    "Conheça o posicionamento da WEBFORJA, uma marca que une personalização, clareza, funcionalidade, performance e resultado de negócio.",
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        bullets={[
          "Estúdio digital premium, comercial e técnico",
          "Projetos personalizados com critério",
          "Direção clara da copy ao código",
        ]}
        description="A WEBFORJA existe para entregar projetos digitais sob medida sem cair na lógica de agência genérica."
        eyebrow="Sobre"
        title="Uma forma de trabalhar que combina clareza, critério e execução"
      />

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal as="div" className="panel p-6 sm:p-8" variant="scale">
            <SectionIntro
              description="A proposta é construir ativos digitais que ajudem a vender, apresentar melhor a marca ou organizar a operação."
              eyebrow="Manifesto"
              title="Projetos personalizados com função real no negócio"
            />
            <div className="mt-6 grid gap-4">
              {aboutManifesto.map((paragraph) => (
                <p className="text-base sm:text-lg" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className="panel p-6 sm:p-8" delay={110} variant="soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
              Princípios
            </p>
            <div className="mt-5 grid gap-4">
              {aboutPrinciples.map((principle, index) => (
                <Reveal
                  as="div"
                  className="panel-soft p-5"
                  delay={index * 70}
                  key={principle.title}
                  variant="soft"
                >
                  <h2 className="text-xl text-text">{principle.title}</h2>
                  <p className="mt-3 text-sm sm:text-base">{principle.description}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="panel p-6 sm:p-8 lg:p-10">
          <SectionIntro
            description="Na prática, isso aparece na forma como o projeto é pensado, escrito e implementado."
            eyebrow="Como isso aparece"
            title="O que você encontra no trabalho da WEBFORJA"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutWorkingStyle.map((item, index) => (
              <Reveal
                as="div"
                className="panel-soft h-full p-5"
                delay={index * 70}
                key={item}
                variant="soft"
              >
                <p className="text-sm leading-6 text-text/88 sm:text-base">{item}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        description="Se essa forma de trabalhar combina com o seu momento, o próximo passo é abrir o briefing."
        secondaryHref="/orcamento#formulario-orcamento"
        secondaryLabel="Abrir briefing"
        title="Projetos melhores começam com direção clara e execução bem feita"
      />
    </>
  );
}
