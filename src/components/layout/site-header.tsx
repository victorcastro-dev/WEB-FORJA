"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLockup } from "@/components/layout/brand-lockup";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { primaryNav } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-canvas/72 shadow-[0_14px_36px_rgba(4,10,18,0.12)] backdrop-blur-xl">
      <Container className="flex h-[4.85rem] items-center justify-between gap-3 sm:h-[5.1rem] sm:gap-4">
        <Link
          aria-label="WEBFORJA, voltar para a página inicial"
          className="premium-link relative z-10 min-w-0 max-w-[calc(100vw-8.5rem)] sm:max-w-none"
          href="/"
        >
          <>
            <BrandLockup className="sm:hidden" showSubtitle={false} size="sm" />
            <BrandLockup className="hidden sm:inline-flex" size="md" />
          </>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-border/60 bg-surface/72 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] lg:flex">
          {primaryNav.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "nav-pill px-4 py-2 text-sm font-medium transition",
                pathname === item.href
                  ? "nav-pill-active bg-primary/14 text-text shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  : "text-muted hover:border-border/80 hover:bg-surface-soft/82 hover:text-text",
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <ButtonLink href="/orcamento" size="sm" variant="primary">
            Pedir orçamento
          </ButtonLink>
        </div>

        <div className="relative z-20 flex shrink-0 items-center gap-3 lg:hidden">
          <ThemeToggle compact />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
