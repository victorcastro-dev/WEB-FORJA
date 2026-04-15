import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { PageHero } from "@/components/sections/page-hero";
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
        <Container className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal as="div" className="panel p-5 sm:p-8" variant="scale">
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

          <Reveal as="div" className="panel p-5 sm:p-8" delay={120} variant="soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
              Quando escolher este formato
            </p>
            <dl className="mt-5 grid gap-4">
              <div className="panel-soft p-4">
                <dt className="meta-label">Quando faz sentido</dt>
                <dd className="mt-2 text-sm leading-6 text-text/88">{service.chooser.whenToChoose}</dd>
              </div>
              <div className="panel-soft p-4">
                <dt className="meta-label">O que resolve</dt>
                <dd className="mt-2 text-sm leading-6 text-text/88">{service.chooser.solves}</dd>
              </div>
              <div className="panel-soft p-4">
                <dt className="meta-label">Para quem serve</dt>
                <dd className="mt-2 text-sm leading-6 text-text/88">{service.chooser.bestFor}</dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            description={service.angle.description}
            eyebrow={service.angle.eyebrow}
            title={service.angle.title}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {service.angle.bullets.map((item, index) => (
              <Reveal
                as="article"
                className="panel-soft interactive-panel h-full p-6"
                delay={index * 70}
                key={item}
                variant="soft"
              >
                <p className="text-base text-text/90">{item}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-5 xl:grid-cols-3">
          <Reveal as="article" className="panel h-full p-6 sm:p-7" variant="scale">
            <p className="meta-label">3 dores</p>
            <h2 className="mt-4 text-2xl text-text">Sinais de que este formato pode fazer sentido</h2>
            <ul className="mt-5 grid gap-3">
              {service.problems.map((problem) => (
                <li className="flex items-start gap-3 text-sm leading-6 text-text/88" key={problem}>
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="min-w-0">{problem}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="panel-soft h-full p-6 sm:p-7" delay={80} variant="soft">
            <p className="meta-label">3 ganhos</p>
            <h2 className="mt-4 text-2xl text-text">O que a solução precisa entregar na prática</h2>
            <ul className="mt-5 grid gap-3">
              {service.benefits.map((benefit) => (
                <li className="flex items-start gap-3 text-sm leading-6 text-text/88" key={benefit}>
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span className="min-w-0">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="panel h-full p-6 sm:p-7" delay={160} variant="scale">
            <p className="meta-label">Exemplos</p>
            <h2 className="mt-4 text-2xl text-text">Onde esse serviço costuma entrar</h2>
            <ul className="mt-5 grid gap-3">
              {service.examples.map((example) => (
                <li className="flex items-start gap-3 text-sm leading-6 text-text/88" key={example}>
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-signature" />
                  <span className="min-w-0">{example}</span>
                </li>
              ))}
            </ul>
          </Reveal>
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
        description={service.cta.description}
        eyebrow={service.label}
        secondaryHref="/portfolio"
        secondaryLabel="Ver projetos"
        title={service.cta.title}
      />
    </>
  );
}
