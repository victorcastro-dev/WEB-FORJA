import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/sections/service-card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { servicePages } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Serviços digitais para vender e operar melhor",
  description:
    "Conheça os serviços da WEBFORJA em landing pages, sites institucionais, sistemas web e automações com base preparada para evolução.",
  path: "/servicos",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Escolha com critério"
        bullets={[
          "Landing pages para campanha e captação",
          "Sites institucionais para autoridade e confiança",
          "Sistemas web e automações para organizar operação",
        ]}
        description="Esta página existe para ajudar você a escolher o formato certo para o momento do negócio."
        eyebrow="Serviços"
        title="Compare as soluções pelo problema que precisam resolver"
      />

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            description="Cada card responde quando faz sentido, o que resolve e para quem serve."
            eyebrow="Comparativo"
            title="Escolha pelo objetivo do projeto, não pelo nome da entrega"
          />
          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {servicePages.map((service, index) => (
              <ServiceCard delay={index * 80} key={service.slug} service={service} variant="chooser" />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-5 md:grid-cols-3">
          <Reveal as="article" className="panel h-full p-6" variant="scale">
            <p className="meta-label">Campanha</p>
            <h2 className="mt-4 text-2xl text-text">Landing page</h2>
            <p className="mt-4 text-sm text-text/88 sm:text-base">
              Melhor quando existe uma oferta específica e a prioridade é converter clique em contato.
            </p>
          </Reveal>
          <Reveal as="article" className="panel-soft h-full p-6" delay={80} variant="soft">
            <p className="meta-label">Apresentação</p>
            <h2 className="mt-4 text-2xl text-text">Site institucional</h2>
            <p className="mt-4 text-sm text-text/88 sm:text-base">
              Melhor quando a empresa precisa explicar valor, mostrar autoridade e apoiar a venda.
            </p>
          </Reveal>
          <Reveal as="article" className="panel h-full p-6" delay={160} variant="scale">
            <p className="meta-label">Operação</p>
            <h2 className="mt-4 text-2xl text-text">Sistema web ou automação</h2>
            <p className="mt-4 text-sm text-text/88 sm:text-base">
              Sistema organiza um processo próprio. Automação acelera etapas repetitivas entre ferramentas.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        description="Se o cenário ainda estiver aberto, o briefing ajuda a indicar a solução mais adequada."
        secondaryHref="/portfolio"
        secondaryLabel="Ver projetos"
        title="Vamos definir o formato certo antes de falar em escopo"
      />
    </>
  );
}
