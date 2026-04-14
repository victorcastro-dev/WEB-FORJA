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
    "Veja projetos reais da WEBFORJA já publicados, com contexto comercial, solução desenvolvida e links oficiais dos sites no ar.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        bullets={[
          "Três projetos reais publicados com link oficial",
          "Cases com objetivo, solução e highlights em leitura rápida",
          "Portfólio pronto para crescer sem espaço para placeholder",
        ]}
        description="O portfólio da WEBFORJA mostra projetos publicados com contexto suficiente para o visitante entender rápido o que foi construído, para quem foi feito e como a solução ajuda a vender melhor."
        eyebrow="Portfólio"
        title="Projetos reais no ar, apresentados de forma clara, comercial e confiável"
      />

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            description="Cada case combina site publicado, nicho atendido, objetivo do projeto e solução desenvolvida em linguagem direta."
            eyebrow="Cases"
            title="Uma vitrine de projetos para provar entrega sem depender de promessa abstrata"
          />
          <div className="panel p-6 sm:p-8">
            <div className="grid gap-4">
              <div className="panel-soft p-4">
                <p className="meta-label">Projetos publicados</p>
                <p className="mt-2 text-sm text-text/88">
                  Atlas Cálculos, Castro & Alves Advogados e Erick Davi Barbearia já estão no ar.
                </p>
              </div>
              <div className="panel-soft p-4">
                <p className="meta-label">Contexto de negócio</p>
                <p className="mt-2 text-sm text-text/88">
                  Cada card explica o cenário do cliente, a solução construída e os pontos fortes do projeto.
                </p>
              </div>
              <div className="panel-soft p-4">
                <p className="meta-label">Pronto para expansão</p>
                <p className="mt-2 text-sm text-text/88">
                  A estrutura do portfólio já está preparada para receber novos cases sem depender de refactor grande.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard caseStudy={caseStudy} delay={index * 80} key={caseStudy.id} />
          ))}
        </Container>
      </section>

      <CtaBand
        description="Se você quer construir um projeto com o mesmo cuidado de clareza, estrutura e apresentação, vamos conversar sobre o seu cenário."
        eyebrow="Novo projeto"
        title="O próximo case publicado pode nascer a partir do seu negócio"
      />
    </>
  );
}
