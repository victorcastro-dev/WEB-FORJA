import { CaseStudyCard } from "@/components/sections/case-study-card";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/ui/section-intro";
import { caseStudies } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Portfólio com projetos publicados",
  description:
    "Veja projetos reais da WEBFORJA já publicados, com contexto do cliente, solução criada e links oficiais dos sites no ar.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        bullets={[
          "Projetos reais publicados com link oficial",
          "Cases organizados em contexto, problema e solução",
          "Leitura rápida para avaliar o nível de execução",
        ]}
        description="O portfólio da WEBFORJA existe para provar execução com contexto real, sem narrativa inflada."
        eyebrow="Portfólio"
        title="Cases publicados para mostrar o que foi feito e por que funcionou"
      />

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            description="Cada case resume contexto, problema, solução e destaques do projeto."
            eyebrow="Cases"
            title="Menos introdução, mais projeto real para analisar"
          />
        </Container>
        <Container className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard caseStudy={caseStudy} delay={index * 80} key={caseStudy.id} />
          ))}
        </Container>
      </section>

      <CtaBand
        description="Se você quer um projeto com o mesmo nível de critério, vamos conversar sobre o seu cenário."
        secondaryHref="/servicos"
        secondaryLabel="Ver serviços"
        title="O próximo case publicado pode começar no seu briefing"
      />
    </>
  );
}
