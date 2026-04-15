import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { CaseStudy } from "@/content/site-content";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  compact?: boolean;
  delay?: number;
};

function CaseBadge({
  children,
  tone = "default",
}: {
  children: string;
  tone?: "default" | "signature" | "secondary";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em]",
        tone === "default" && "border-border/75 bg-surface-soft/70 text-text/78",
        tone === "signature" && "border-signature/25 bg-signature/10 text-signature",
        tone === "secondary" && "border-secondary/20 bg-secondary/10 text-secondary",
      )}
    >
      {children}
    </span>
  );
}

export function CaseStudyCard({ caseStudy, compact = false, delay = 0 }: CaseStudyCardProps) {
  const highlightItems = caseStudy.highlights.slice(0, compact ? 2 : 3);

  return (
    <Reveal
      as="article"
      className="panel interactive-panel group flex h-full flex-col overflow-hidden p-4 sm:p-5"
      delay={delay}
      id={caseStudy.id}
      variant="scale"
    >
      <div
        className="relative overflow-hidden rounded-[26px] border border-border/75"
        style={{
          background:
            "linear-gradient(180deg, rgb(var(--color-surface-strong) / 0.96), rgb(var(--color-surface) / 0.9))",
        }}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-4 py-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-canvas/55 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-text/72 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-signature" />
            {caseStudy.url ? "Projeto no ar" : "Prévia interna"}
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-canvas/55 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted/90 backdrop-blur-md sm:inline-flex">
            {caseStudy.url ? "Publicado" : "Sem link externo"}
          </div>
        </div>

        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            alt={caseStudy.imageAlt}
            className="object-cover object-top transition duration-500 group-hover:scale-[1.018]"
            fill
            priority={!compact && caseStudy.id === "atlas-calculos"}
            sizes={compact ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
            src={caseStudy.imageSrc}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-canvas/70 via-canvas/12 to-transparent" />
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap gap-2">
          <CaseBadge tone="secondary">{caseStudy.service}</CaseBadge>
          <CaseBadge tone="signature">{caseStudy.sector}</CaseBadge>
        </div>

        <h3 className="mt-4 text-[1.75rem] leading-tight text-text">{caseStudy.name}</h3>

        {compact ? (
          <dl className="mt-5 grid gap-3">
            <div className="panel-soft p-4">
              <dt className="meta-label">Contexto</dt>
              <dd className="mt-2 min-w-0 text-sm leading-6 text-text/88">{caseStudy.context}</dd>
            </div>
            <div className="panel-soft p-4">
              <dt className="meta-label">Solução</dt>
              <dd className="mt-2 min-w-0 text-sm leading-6 text-text/88">{caseStudy.solution}</dd>
            </div>
          </dl>
        ) : (
          <dl className="mt-5 grid gap-3">
            <div className="panel-soft p-4">
              <dt className="meta-label">Contexto</dt>
              <dd className="mt-2 min-w-0 text-sm leading-6 text-text/88">{caseStudy.context}</dd>
            </div>
            <div className="panel-soft p-4">
              <dt className="meta-label">Problema</dt>
              <dd className="mt-2 min-w-0 text-sm leading-6 text-text/88">{caseStudy.problem}</dd>
            </div>
            <div className="panel-soft p-4">
              <dt className="meta-label">Solução</dt>
              <dd className="mt-2 min-w-0 text-sm leading-6 text-text/88">{caseStudy.solution}</dd>
            </div>
          </dl>
        )}

        <div className="mt-4 flex flex-wrap gap-2.5">
          {highlightItems.map((highlight) => (
            <span
              className="inline-flex items-center rounded-full border border-border/70 bg-surface-soft/65 px-3 py-2 text-xs font-medium text-text/84"
              key={highlight}
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="cta-cluster cta-cluster-tight mt-auto pt-6">
          {caseStudy.url ? (
            <>
              <ButtonLink
                className={compact ? "sm:min-w-[8.5rem]" : "sm:min-w-[9.5rem]"}
                external
                href={caseStudy.url}
                size={compact ? "sm" : "md"}
                variant="primary"
              >
                Abrir site
              </ButtonLink>
              {compact ? (
                <ButtonLink
                  className="sm:min-w-[8.5rem]"
                  href={`/portfolio#${caseStudy.id}`}
                  size="sm"
                  variant="secondary"
                >
                  Ver case
                </ButtonLink>
              ) : null}
            </>
          ) : compact ? (
            <ButtonLink
              className="sm:min-w-[8.5rem]"
              href={`/portfolio#${caseStudy.id}`}
              size="sm"
              variant="secondary"
            >
              Ver case
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
