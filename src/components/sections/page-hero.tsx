import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  badge?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  bullets = [],
  badge = "Estrutura clara",
  primaryHref = "/orcamento",
  primaryLabel = "Pedir orçamento",
  secondaryHref = "/portfolio",
  secondaryLabel = "Ver projetos",
}: PageHeroProps) {
  return (
    <section className="section-space section-texture section-texture-hero">
      <Container className="grid gap-8 lg:grid-cols-[1.16fr_0.84fr] lg:items-stretch">
        <Reveal as="div" className="panel-strong hero-card-glow relative overflow-hidden p-8 sm:p-10 lg:p-12" variant="scale">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-signature/0" />
          <ParallaxLayer
            className="right-[-5rem] top-[-4.5rem] h-40 w-40 rounded-full blur-3xl"
            rotate={2.4}
            scale={1.04}
            strength={22}
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-primary)_/_0.26),transparent_68%)]" />
          </ParallaxLayer>
          <ParallaxLayer
            className="bottom-[-6rem] left-[-3.5rem] h-44 w-44 rounded-full blur-3xl"
            rotate={-2}
            scale={1.05}
            strength={-18}
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-signature)_/_0.18),transparent_70%)]" />
          </ParallaxLayer>
          <ParallaxLayer className="right-[18%] top-[22%] h-px w-32" rotate={0.6} strength={10}>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          </ParallaxLayer>
          <div className="relative z-10">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-6 max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="lead-copy mt-5 max-w-2xl">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={primaryHref} variant="primary">
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="panel h-full p-6 sm:p-8" delay={120} variant="soft">
          <ParallaxLayer
            className="right-[-4rem] top-[-2.25rem] h-28 w-28 rounded-full blur-3xl"
            rotate={1.5}
            scale={1.02}
            strength={16}
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-secondary)_/_0.16),transparent_72%)]" />
          </ParallaxLayer>
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4">
              <p className="meta-label">Direção do projeto</p>
              <span className="signature-chip">{badge}</span>
            </div>
            <div className="mt-5 grid gap-4">
              {bullets.map((bullet, index) => (
                <Reveal
                  as="div"
                  className="panel-soft interactive-panel flex items-start gap-4 p-4"
                  delay={index * 70}
                  key={bullet}
                  variant="soft"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-signature/25 bg-signature/10 text-sm font-semibold text-signature">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-text/90">{bullet}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
