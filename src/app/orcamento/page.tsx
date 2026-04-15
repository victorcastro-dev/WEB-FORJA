import { BudgetForm } from "@/components/forms/budget-form";
import { FaqList } from "@/components/sections/faq-list";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { budgetExpectations, budgetFaq } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pedir orçamento",
  description:
    "Envie as informações do seu projeto para receber um orçamento personalizado da WEBFORJA e seguir o contato pelo canal mais conveniente.",
  path: "/orcamento",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        badge="Briefing objetivo"
        bullets={[
          "Preencha só o essencial para eu entender o cenário",
          "Se ainda houver dúvida sobre o formato, eu ajudo a definir",
          "O contato pode continuar pelo canal disponível no momento",
        ]}
        description="Preencha o briefing e eu retorno com a direção mais adequada para o projeto."
        eyebrow="Orçamento"
        title="Orçamento rápido de entender e simples de enviar"
      />

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              description="Envie o contexto do projeto e as prioridades."
              eyebrow="Antes do formulário"
              title="O suficiente para eu montar uma proposta coerente"
            />
            <Reveal as="div" className="panel p-6 sm:p-8" variant="soft">
              <div className="grid gap-4">
                {budgetExpectations.map((item, index) => (
                  <Reveal
                    as="div"
                    className="panel-soft flex items-start gap-3 p-4"
                    delay={index * 55}
                    key={item}
                    variant="soft"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm leading-6 text-text/90">{item}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal as="div" delay={140} variant="scale">
            <BudgetForm />
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            description="Os detalhes comerciais ficam aqui para não atrapalhar o envio do briefing."
            eyebrow="FAQ de orçamento"
            title="O que normalmente você precisa saber antes de enviar"
          />
          <FaqList items={budgetFaq} />
        </Container>
      </section>
    </>
  );
}
