import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  eyebrow = "Próximo passo",
  title,
  description,
  secondaryLabel = "Falar sobre meu projeto",
  secondaryHref = "/orcamento#formulario-orcamento",
}: CtaBandProps) {
  return (
    <section className="section-space section-texture section-texture-band pt-0">
      <Container>
        <Reveal as="div" className="panel-strong overflow-hidden p-7 sm:p-10 lg:p-12" variant="scale">
          <ParallaxLayer
            className="left-[-5rem] top-[-3rem] h-44 w-44 rounded-full blur-3xl"
            rotate={-2.2}
            scale={1.04}
            strength={20}
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-primary)_/_0.18),transparent_72%)]" />
          </ParallaxLayer>
          <ParallaxLayer
            className="bottom-[-5rem] right-[-3rem] h-40 w-40 rounded-full blur-3xl"
            rotate={2}
            scale={1.06}
            strength={-18}
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-signature)_/_0.2),transparent_70%)]" />
          </ParallaxLayer>
          <ParallaxLayer className="right-[14%] top-[26%] h-px w-40" rotate={0.4} strength={10}>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/28 to-transparent" />
          </ParallaxLayer>
          <div className="relative z-10">
            <span className="eyebrow">{eyebrow}</span>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-[2.2rem] leading-[1.08] sm:text-4xl lg:text-5xl">{title}</h2>
                <p className="lead-copy mt-4 max-w-2xl">{description}</p>
              </div>
              <div className="cta-cluster cta-cluster-tight">
                <ButtonLink className="sm:min-w-[11rem]" href="/orcamento" variant="primary">
                  Pedir orçamento
                </ButtonLink>
                <ButtonLink className="sm:min-w-[12rem]" href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
