import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/sections/service-card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { maintenanceChoices, servicePages } from "@/content/site-content";
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
        badge="Foco comercial"
        bullets={[
          "Landing pages focadas em conversão",
          "Sites institucionais com autoridade e clareza",
          "Sistemas web e automações com lógica de negócio",
        ]}
        description="A WEBFORJA trabalha com serviços digitais para marcas que precisam vender melhor, se apresentar com mais clareza e organizar melhor a operação."
        eyebrow="Serviços"
        title="Soluções pensadas para combinar posicionamento, captação e eficiência real"
      />

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            description="Cada frente responde a um tipo de necessidade, mas todas seguem a mesma lógica: presença forte, boa experiência e base pronta para crescer."
            eyebrow="Visão geral"
            title="O serviço certo depende do objetivo, do momento e da maturidade do negócio"
          />
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
            description="Manutenção não é o centro da venda, mas pode entrar como continuidade quando isso ajuda o projeto a permanecer saudável."
            eyebrow="Serviço complementar"
            title="Depois da entrega, a continuidade pode acontecer do jeito que fizer mais sentido"
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

      <CtaBand
        description="Se você ainda não sabe qual serviço pedir, o orçamento também ajuda a definir o formato mais adequado para o seu cenário."
        eyebrow="Planejamento"
        title="Vamos entender seu momento e recomendar a solução mais inteligente para a próxima etapa"
      />
    </>
  );
}
