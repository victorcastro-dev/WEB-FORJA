"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button";
import { mobileNav } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20 lg:hidden">
      <button
        aria-expanded={open}
        aria-label="Abrir navegação"
        className={cn(
          "control-shell inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-border/80 bg-surface/90 text-text backdrop-blur-lg transition hover:border-signature/35",
          open && "border-signature/40 bg-signature/10 text-signature shadow-[0_12px_24px_rgba(215,154,61,0.16)]",
        )}
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col gap-1">
          <span className={cn("block h-0.5 w-5 rounded bg-current transition", open && "translate-y-1.5 rotate-45")} />
          <span className={cn("block h-0.5 w-5 rounded bg-current transition", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-5 rounded bg-current transition", open && "-translate-y-1.5 -rotate-45")} />
        </span>
      </button>

      {open ? (
        <>
          <button
            aria-label="Fechar menu"
            className="fixed inset-0 z-[70] bg-canvas/82 backdrop-blur-md"
            onClick={() => setOpen(false)}
            type="button"
          />
          <div
            className="fixed inset-x-4 top-[5.7rem] z-[80] max-h-[calc(100vh-6.7rem)] overflow-y-auto rounded-[30px] border border-border/80 p-5 shadow-premium"
            style={{
              background:
                "linear-gradient(180deg, rgb(var(--color-surface-strong) / 0.985), rgb(var(--color-surface) / 0.965))",
              boxShadow:
                "var(--shadow-premium), inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 0 0 1px rgb(var(--color-border) / 0.18)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-signature/0" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="meta-label">Navegação</p>
                <p className="mt-2 text-sm text-text/80">Explore serviços, cases e orçamento.</p>
              </div>
              <span className="signature-chip">Menu</span>
            </div>

            <nav className="mt-5 grid gap-2">
              {mobileNav.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "control-shell rounded-[20px] px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-primary/14 text-primary"
                        : "text-text hover:bg-surface-soft/90 hover:text-secondary",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="accent-line my-5" />
            <div className="grid gap-3 sm:grid-cols-2">
              <ButtonLink className="w-full" href="/orcamento" variant="primary">
                Pedir orçamento
              </ButtonLink>
              <ButtonLink className="w-full" href="/portfolio" variant="secondary">
                Ver projetos
              </ButtonLink>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
