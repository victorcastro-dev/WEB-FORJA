import { BudgetForm } from "@/components/forms/budget-form";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { budgetExpectations } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pedir orçamento",
  description:
    "Envie o briefing do seu projeto para receber um orçamento personalizado da WEBFORJA e continuar o contato pelo canal mais seguro para o lançamento.",
  path: "/orcamento",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        badge="Captação pronta"
        bullets={[
          "Briefing rápido com campos estratégicos",
          "Fallback validado para WhatsApp quando o webhook ainda não estiver ativo",
          "Rascunho preservado no navegador para evitar perda de contexto",
        ]}
        description="O objetivo desta etapa é entender o suficiente sobre o projeto para organizar uma proposta coerente, sem empurrar você para um pacote genérico."
        eyebrow="Orçamento"
        title="Abra o contexto do seu projeto e receba uma proposta mais alinhada ao que o negócio realmente precisa"
      />

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              description="A WEBFORJA trabalha com orçamento personalizado. Quanto mais claro for o contexto, melhor fica a proposta e o direcionamento comercial."
              eyebrow="Como avaliamos"
              title="O que você precisa saber antes de enviar"
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
                    <p className="text-sm text-text/90">{item}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
            <Reveal as="div" className="panel p-6 sm:p-8" delay={100} variant="soft">
              <h3 className="text-xl text-text">O formulário não trava você em uma escolha definitiva.</h3>
              <p className="mt-4 text-base">
                Se ainda existir dúvida entre site, landing page, sistema ou automação, marque
                &quot;não sei ao certo&quot;. O orçamento também ajuda a identificar o formato mais
                inteligente para o seu cenário.
              </p>
            </Reveal>
          </div>

          <Reveal as="div" delay={140} variant="scale">
            <BudgetForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
