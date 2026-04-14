import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="section-space section-texture section-texture-hero">
      <Container>
        <div className="panel-strong mx-auto max-w-3xl p-8 text-center sm:p-10">
          <span className="eyebrow">404</span>
          <h1 className="mt-5 text-4xl">A página que você tentou acessar não foi encontrada.</h1>
          <p className="mt-4 text-base">
            Você pode voltar para a home, revisar os serviços ou seguir direto para o orçamento.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/" variant="secondary">
              Voltar para a home
            </ButtonLink>
            <ButtonLink href="/orcamento" variant="primary">
              Solicitar orçamento
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
