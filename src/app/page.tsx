import { TrackedWhatsAppButtonLink } from "@/components/analytics/tracked-whatsapp-button-link";
import { BudgetForm } from "@/components/forms/budget-form";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServiceCard } from "@/components/sections/service-card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import {
  budgetExpectations,
  caseStudies,
  generalFaq,
  homeClientFit,
  homeDifferentials,
  homeProofPoints,
  maintenanceChoices,
  processSteps,
  servicePages,
  siteConfig,
} from "@/content/site-content";
import { buildGenericWhatsAppUrl } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sites institucionais, landing pages, sistemas e automações",
  description:
    "A WEBFORJA cria sites institucionais, landing pages, sistemas web e automações para negócios que precisam vender melhor, transmitir confiança e organizar a operação.",
  path: "/",
});

export default function HomePage() {
  const heroWhatsAppUrl = buildGenericWhatsAppUrl("Olá! Quero falar sobre um projeto da WEBFORJA.");

  return (
    <>
      <section className="section-space section-texture section-texture-hero">
        <Container className="grid gap-7 xl:grid-cols-[1.14fr_0.86fr]">
          <Reveal as="div" className="panel-strong hero-card-glow relative overflow-hidden p-7 sm:p-10 lg:p-12" variant="scale">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/60 to-signature/0" />
            <ParallaxLayer
              className="right-[-5rem] top-[-4rem] h-44 w-44 rounded-full blur-3xl"
              rotate={2.5}
              scale={1.06}
              strength={22}
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-primary)_/_0.26),transparent_70%)]" />
            </ParallaxLayer>
            <ParallaxLayer
              className="bottom-[-6rem] left-[-4rem] h-48 w-48 rounded-full blur-3xl"
              rotate={-2.2}
              scale={1.04}
              strength={-20}
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-signature)_/_0.18),transparent_72%)]" />
            </ParallaxLayer>
            <ParallaxLayer className="left-[52%] top-[18%] h-px w-40" rotate={0.4} strength={10}>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/32 to-transparent" />
            </ParallaxLayer>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Sites, landing pages, sistemas e automações</span>
                <span className="signature-chip">Projetos publicados</span>
              </div>
              <h1 className="mt-6 max-w-4xl text-[2.35rem] leading-[1.08] sm:text-5xl lg:text-6xl">
                {siteConfig.heroHeadline}
              </h1>
              <p className="lead-copy mt-5 max-w-2xl">{siteConfig.heroSubheadline}</p>

              <div className="cta-cluster mt-8">
                <ButtonLink className="sm:min-w-[11rem]" href="/orcamento#formulario-orcamento" variant="primary">
                  Pedir orçamento
                </ButtonLink>
                {heroWhatsAppUrl ? (
                  <TrackedWhatsAppButtonLink
                    className="sm:min-w-[11rem]"
                    href={heroWhatsAppUrl}
                    placement="home_hero"
                    variant="secondary"
                  >
                    Falar no WhatsApp
                  </TrackedWhatsAppButtonLink>
                ) : (
                  <ButtonLink className="sm:min-w-[10rem]" href="/portfolio" variant="secondary">
                    Ver projetos
                  </ButtonLink>
                )}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {siteConfig.heroHighlights.map((item) => (
                  <div className="panel-soft interactive-panel p-4" key={item.label}>
                    <p className="meta-label">{item.label}</p>
                    <p className="mt-3 text-sm text-text/90">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal as="div" className="panel p-5 sm:p-8" delay={90} variant="soft">
              <p className="meta-label">Projetos reais no ar</p>
              <h2 className="mt-4 text-2xl text-text">
                Três sites publicados logo no início para mostrar, na prática, o nível do trabalho.
              </h2>
              <div className="mt-5 grid gap-3">
                {caseStudies.map((caseStudy) => (
                  <div className="panel-soft flex items-center gap-4 p-4" key={caseStudy.id}>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-text">{caseStudy.name}</p>
                      <p className="mt-1 text-sm text-text/72">{caseStudy.service}</p>
                    </div>
                    <ButtonLink className="min-w-[7.75rem] shrink-0" external href={caseStudy.url} size="sm" variant="secondary">
                      Abrir site
                    </ButtonLink>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal as="div" className="panel p-5 sm:p-8" delay={160} variant="soft">
              <p className="meta-label">Quando a WEBFORJA faz sentido</p>
              <h2 className="mt-4 text-2xl text-text">
                Para negócios que precisam vender melhor, explicar o serviço e facilitar contato.
              </h2>
              <p className="mt-4 text-base text-text/80">
                O foco está em organizar a mensagem, fortalecer a confiança e dar um próximo passo
                comercial claro para o visitante.
              </p>
              <div className="accent-line my-6" />
              <ul className="grid gap-3">
                {homeClientFit.map((item, index) => (
                  <li className="flex items-start gap-3 text-sm text-text/90" key={item}>
                    <span
                      className={`mt-1 h-2.5 w-2.5 rounded-full ${
                        index === 0 ? "bg-primary" : index === 1 ? "bg-secondary" : "bg-signature"
                      }`}
                    />
                    <span className="min-w-0 leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-5 md:grid-cols-3">
          {homeProofPoints.map((item, index) => (
            <Reveal
              as="article"
              className="panel-soft interactive-panel h-full p-6"
              delay={index * 70}
              key={item.title}
              variant="soft"
            >
              <p className="meta-label">Prova social</p>
              <h2 className="mt-4 text-2xl text-text">{item.title}</h2>
              <p className="mt-4 text-sm text-text/86 sm:text-base">{item.description}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              description="Os serviços da WEBFORJA foram organizados para fortalecer a marca, facilitar a venda e reduzir ruídos na operação."
              eyebrow="Serviços"
              title="Quatro frentes para vender melhor, fortalecer sua presença e ganhar eficiência"
            />
            <ButtonLink className="sm:min-w-[13rem]" href="/orcamento#formulario-orcamento" variant="secondary">
              Falar sobre meu projeto
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {servicePages.map((service, index) => (
              <ServiceCard delay={index * 80} key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            description="Cada entrega combina direção comercial, design funcional e base técnica limpa para que o projeto seja útil hoje e sustentável depois."
            eyebrow="Diferenciais"
            title="O que ajuda a WEBFORJA a transformar layout bonito em ferramenta comercial"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeDifferentials.map((item, index) => (
              <Reveal
                as="article"
                className="panel-soft interactive-panel h-full p-6"
                delay={index * 70}
                key={item.title}
                variant="soft"
              >
                <h3 className="text-xl text-text">{item.title}</h3>
                <p className="mt-4 text-sm sm:text-base">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              description="Cada case mostra o projeto no ar, o desafio do cliente e a solução criada, de forma direta e sem exagero."
              eyebrow="Portfólio"
              title="Projetos publicados com contexto real para gerar confiança logo nos primeiros segundos"
            />
            <ButtonLink className="sm:min-w-[13rem]" href="/portfolio" variant="secondary">
              Ver portfólio completo
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard caseStudy={caseStudy} compact delay={index * 80} key={caseStudy.id} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            description="O processo foi desenhado para reduzir ruído, alinhar expectativa e manter o projeto organizado do briefing à publicação."
            eyebrow="Processo"
            title="Da conversa inicial à entrega, cada etapa existe para manter clareza e ritmo de execução"
          />
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            description="Depois da entrega, você pode assumir a operação com autonomia ou seguir com suporte contínuo quando fizer sentido."
            eyebrow="Pós-entrega"
            title="Continuidade sob medida para o momento do seu negócio"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {maintenanceChoices.map((choice, index) => (
              <Reveal
                as="article"
                className="panel h-full p-6 sm:p-7"
                delay={index * 80}
                key={choice.title}
                variant="scale"
              >
                <h3 className="text-2xl text-text">{choice.title}</h3>
                <p className="mt-4 text-base">{choice.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <SectionIntro
              description="Aqui você entende pontos essenciais sobre orçamento, personalização, manutenção e formato de projeto antes de seguir."
              eyebrow="FAQ resumido"
              title="Dúvidas importantes antes de avançar para a proposta"
            />
            <ButtonLink className="sm:min-w-[10rem]" href="/faq" variant="secondary">
              Ver FAQ completo
            </ButtonLink>
          </div>
          <FaqList items={generalFaq.slice(0, 4)} />
        </Container>
      </section>

      <section className="section-space section-texture pt-0" id="formulario-orcamento">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              description="Compartilhe o cenário do seu projeto para receber uma proposta mais alinhada com a sua necessidade. Mesmo sem integração final, o contato pode seguir normalmente pelo WhatsApp."
              eyebrow="Orçamento"
              title="Abra a conversa com as informações certas para receber um orçamento mais alinhado"
            />
            <div className="panel p-5 sm:p-8">
              <p className="meta-label">Como tratamos a proposta</p>
              <div className="mt-5 grid gap-4">
                {budgetExpectations.map((item, index) => (
                  <Reveal
                    as="div"
                    className="panel-soft interactive-panel flex items-start gap-3 p-4"
                    delay={index * 55}
                    key={item}
                    variant="soft"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-signature" />
                    <p className="min-w-0 text-sm leading-6 text-text/90">{item}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <Reveal as="div" delay={120} variant="scale">
            <BudgetForm />
          </Reveal>
        </Container>
      </section>

      <CtaBand
        description="Se você precisa de um projeto digital mais claro, mais convincente e pronto para captar contato com menos atrito, a próxima conversa pode começar agora."
        title="Sua presença digital pode vender melhor sem parecer mais do mesmo"
      />
    </>
  );
}
