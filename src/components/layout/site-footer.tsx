import Link from "next/link";

import { TrackedWhatsAppAnchor } from "@/components/analytics/tracked-whatsapp-anchor";
import { BrandLockup } from "@/components/layout/brand-lockup";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { footerGroups, siteConfig } from "@/content/site-content";
import { buildGenericWhatsAppUrl } from "@/lib/contact";

export function SiteFooter() {
  const whatsappUrl = buildGenericWhatsAppUrl("Olá! Quero falar sobre um projeto da WEBFORJA.");

  return (
    <footer className="mt-8 border-t border-border/40 bg-surface-soft/45">
      <Container className="py-14">
        <div className="panel-strong overflow-hidden p-7 sm:p-9 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <Link aria-label="WEBFORJA, voltar para a página inicial" href="/">
                <BrandLockup size="lg" />
              </Link>
              <h2 className="mt-5 text-3xl leading-tight text-text sm:text-4xl">
                Sites, landing pages, sistemas e automações para vender melhor e operar com mais clareza.
              </h2>
              <p className="mt-4 lead-copy max-w-xl">
                A WEBFORJA estrutura presença digital, captação e fluxos para negócios que precisam
                transmitir confiança e facilitar o próximo passo comercial.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href="/orcamento" variant="primary">
                Pedir orçamento
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="secondary">
                Ver projetos
              </ButtonLink>
            </div>
          </div>

          <div className="accent-line my-8" />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(2,0.8fr)]">
            <div className="max-w-md">
              <p className="meta-label">Contato</p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
                <a className="hover:text-text" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                {whatsappUrl ? (
                  <TrackedWhatsAppAnchor
                    className="hover:text-text"
                    href={whatsappUrl}
                    placement="footer_contact"
                    rel="noreferrer"
                    target="_blank"
                  >
                    WhatsApp comercial
                  </TrackedWhatsAppAnchor>
                ) : (
                  <Link className="hover:text-text" href="/orcamento#formulario-orcamento">
                    Abrir formulário de orçamento
                  </Link>
                )}
              </div>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-text/90">
                  {group.title}
                </h3>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link className="text-sm text-muted hover:text-text" href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className="border-t border-border/40 py-5">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} WEBFORJA. Projetos personalizados, manutenção opcional e
          evolução contínua quando fizer sentido.
        </p>
      </Container>
    </footer>
  );
}
