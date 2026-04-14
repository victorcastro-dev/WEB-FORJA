import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { aboutManifesto, aboutPrinciples } from "@/content/site-content";
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
          "Tom institucional com proximidade",
          "Compromisso com personalização e clareza",
          "Foco em funcionalidade, performance e resultado",
        ]}
        description="A WEBFORJA se posiciona como empresa digital moderna, com linguagem próxima, leitura profissional e cuidado real com o impacto de cada projeto no negócio."
        eyebrow="Sobre"
        title="Uma marca feita para entregar sofisticação, clareza e tecnologia sem virar uma agência genérica"
      />

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal as="div" className="panel p-6 sm:p-8" variant="scale">
            <SectionIntro
              description="Mais do que presença visual, a WEBFORJA quer construir estruturas digitais que façam sentido para a operação e para o posicionamento da marca."
              eyebrow="Manifesto"
              title="Institucional no tom, próxima na forma de trabalhar"
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
              Compromissos da marca
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
                  <h3 className="text-xl text-text">{principle.title}</h3>
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
            description="A WEBFORJA acredita que um projeto digital forte precisa unir direção estratégica, clareza na apresentação, boa performance e uma base técnica que não limite o próximo passo."
            eyebrow="Como pensamos"
            title="Cada entrega precisa parecer premium, funcionar bem e continuar útil conforme o negócio evolui"
          />
        </Container>
      </section>

      <CtaBand
        description="Se essa forma de trabalhar combina com o momento da sua marca, podemos começar pelo orçamento e desenhar a próxima etapa com mais clareza."
        eyebrow="Parceria"
        title="Projetos personalizados fazem mais sentido quando a estratégia e a execução andam juntas"
      />
    </>
  );
}
