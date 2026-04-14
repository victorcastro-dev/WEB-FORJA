import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { ServicePageContent } from "@/content/site-content";

type ServicePageTemplateProps = {
  service: ServicePageContent;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      <PageHero
        badge="Foco no objetivo"
        bullets={service.hero.bullets}
        description={service.hero.description}
        eyebrow={service.hero.eyebrow}
        title={service.hero.title}
      />

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <Reveal as="div" className="panel p-6 sm:p-8" variant="scale">
            <SectionIntro
              description={service.description}
              eyebrow={`Sobre ${service.label}`}
              title={service.title}
            />
            <div className="mt-6 grid gap-4">
              {service.overview.map((paragraph) => (
                <p className="text-base sm:text-lg" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className="panel p-6 sm:p-8" delay={120} variant="soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
              Para quem serve
            </p>
            <ul className="mt-5 grid gap-4">
              {service.forWho.map((item, index) => (
                <Reveal
                  as="li"
                  className="panel-soft flex items-start gap-3 p-4 text-sm text-text/90"
                  delay={index * 60}
                  key={item}
                  variant="soft"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span>{item}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <Reveal
            as="div"
            className="panel flex flex-col gap-4 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
            variant="scale"
          >
            <div className="max-w-2xl">
              <p className="meta-label">Próximo passo</p>
              <p className="mt-3 text-base text-text/80">
                Se este formato parece alinhado ao momento do seu negócio, o orçamento ajuda a
                definir escopo e prioridade com mais clareza.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/orcamento#formulario-orcamento" variant="primary">
                Pedir orçamento
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="secondary">
                Ver projetos
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-12">
          <div>
            <SectionIntro
              description="Problemas que esse serviço costuma resolver quando o negócio precisa de mais clareza, eficiência ou presença digital."
              eyebrow="Problemas que resolve"
              title="Onde esse tipo de projeto costuma gerar mais impacto"
            />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {service.problems.map((problem, index) => (
                <Reveal
                  as="article"
                  className="panel interactive-panel h-full p-6"
                  delay={index * 70}
                  key={problem}
                  variant="scale"
                >
                  <p className="text-base text-text/90">{problem}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionIntro
              description="Benefícios pensados para entregar valor real ao negócio, sem inflar promessa nem complicar a operação."
              eyebrow="Benefícios"
              title="O que esse serviço entrega na prática"
            />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {service.benefits.map((benefit, index) => (
                <Reveal
                  as="article"
                  className="panel-soft interactive-panel h-full p-6"
                  delay={index * 70}
                  key={benefit}
                  variant="soft"
                >
                  <p className="text-base text-text/90">{benefit}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionIntro
              description="Algumas situações em que esse formato se encaixa bem e ajuda a destravar crescimento ou organização."
              eyebrow="Exemplos de aplicação"
              title="Cenários em que essa solução faz sentido"
            />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {service.examples.map((example, index) => (
                <Reveal
                  as="article"
                  className="panel interactive-panel h-full p-6"
                  delay={index * 70}
                  key={example}
                  variant="scale"
                >
                  <p className="text-base text-text/90">{example}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            description="Respostas rápidas para dúvidas comuns antes de seguir para a proposta."
            eyebrow="FAQ do serviço"
            title={`Perguntas frequentes sobre ${service.label.toLowerCase()}`}
          />
          <FaqList items={service.faq} />
        </Container>
      </section>

      <CtaBand
        description="Se você quer entender como esse serviço se encaixa no seu momento, vamos estruturar o escopo com clareza."
        eyebrow={service.label}
        title="Vamos transformar a necessidade do seu negócio em uma proposta bem desenhada"
      />
    </>
  );
}
