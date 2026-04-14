import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ServicePageContent } from "@/content/site-content";

type ServiceCardProps = {
  service: ServicePageContent;
  delay?: number;
};

export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  return (
    <Reveal
      as="article"
      className="panel interactive-panel group flex h-full flex-col overflow-hidden p-6 sm:p-7"
      delay={delay}
      variant="scale"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <span className="eyebrow">{service.shortLabel}</span>
        <p className="max-w-[15rem] text-right text-sm text-signature">{service.highlight}</p>
      </div>
      <h3 className="mt-6 text-2xl leading-tight text-text">
        <Link className="transition hover:text-primary" href={`/${service.slug}`}>
          {service.title}
        </Link>
      </h3>
      <p className="mt-4 text-base text-text/80">{service.description}</p>
      <div className="accent-line my-6" />
      <ul className="grid gap-3">
        {service.hero.bullets.map((bullet) => (
          <li className="flex items-start gap-3 text-sm text-text/90" key={bullet}>
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
        <ButtonLink href={`/${service.slug}`} variant="secondary">
          Entender serviço
        </ButtonLink>
        <Link
          className="premium-link text-sm font-semibold text-signature transition hover:text-text"
          href="/orcamento#formulario-orcamento"
        >
          Falar sobre meu projeto
        </Link>
      </div>
    </Reveal>
  );
}
