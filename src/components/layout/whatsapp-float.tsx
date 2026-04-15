"use client";

import { useEffect, useState } from "react";

import { TrackedWhatsAppAnchor } from "@/components/analytics/tracked-whatsapp-anchor";
import { buildGenericWhatsAppUrl } from "@/lib/contact";

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-[1.2rem] w-[1.2rem]" viewBox="0 0 16 16" fill="currentColor">
      <path
        d="M13.601 2.326A7.85 7.85 0 0 0 8.02 0a7.9 7.9 0 0 0-6.86 11.82L0 16l4.31-1.129A7.9 7.9 0 0 0 8.017 16h.003A7.99 7.99 0 0 0 16 8.01a7.85 7.85 0 0 0-2.399-5.684ZM8.02 14.652h-.003a6.55 6.55 0 0 1-3.333-.909l-.239-.142-2.558.67.683-2.49-.142-.222a6.5 6.5 0 0 1-1.001-3.47c.002-3.623 2.952-6.574 6.579-6.574 1.756 0 3.404.684 4.648 1.926A6.53 6.53 0 0 1 14.58 8.09c-.001 3.622-2.951 6.562-6.56 6.562Zm3.602-4.917c-.197-.1-1.166-.575-1.347-.64-.18-.065-.312-.1-.444.1-.131.197-.509.639-.624.77-.115.133-.23.149-.427.05-.198-.1-.833-.307-1.586-.98-.586-.523-.982-1.169-1.098-1.366-.115-.197-.012-.304.087-.403.09-.09.197-.23.296-.345.1-.115.132-.197.197-.328.066-.132.033-.247-.016-.345-.05-.1-.444-1.071-.608-1.468-.16-.385-.324-.333-.444-.339l-.378-.006c-.131 0-.345.05-.526.247-.18.198-.689.674-.689 1.643s.706 1.903.805 2.035c.099.132 1.39 2.124 3.367 2.977.47.203.836.324 1.122.415.472.15.902.129 1.242.079.379-.058 1.166-.476 1.33-.936.164-.46.164-.854.115-.936-.05-.083-.181-.132-.378-.231Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg aria-hidden="true" className="h-[1.2rem] w-[1.2rem]" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 3.75A1.75 1.75 0 0 1 4.75 2h6.5A1.75 1.75 0 0 1 13 3.75v8.5A1.75 1.75 0 0 1 11.25 14h-6.5A1.75 1.75 0 0 1 3 12.25v-8.5Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-6.5ZM6 5.25c0-.414.336-.75.75-.75h2.5a.75.75 0 1 1 0 1.5h-2.5A.75.75 0 0 1 6 5.25Zm0 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 1 1 0 1.5h-2.5A.75.75 0 0 1 6 8.25Zm0 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 6 11.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

const mobileFloatClasses =
  "control-shell group fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-surface/92 p-0 text-sm font-semibold text-text shadow-[0_18px_45px_rgba(6,18,14,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:h-auto sm:w-auto sm:gap-2.5 sm:py-2.5 sm:pl-3 sm:pr-4";

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = buildGenericWhatsAppUrl("Olá! Quero falar sobre um projeto para a WEBFORJA.");

  useEffect(() => {
    function syncVisibility() {
      setIsVisible(window.scrollY > 180);
    }

    syncVisibility();
    window.addEventListener("scroll", syncVisibility, { passive: true });

    return () => window.removeEventListener("scroll", syncVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  if (!whatsappUrl) {
    return (
      <a
        aria-label="Abrir formulário de orçamento"
        className={`${mobileFloatClasses} hover:border-primary/35 hover:shadow-[0_24px_54px_rgba(6,18,14,0.22)]`}
        href="/orcamento#formulario-orcamento"
      >
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-300 group-hover:scale-105">
          <FormIcon />
        </span>
        <span className="hidden sm:inline">Pedir orçamento</span>
      </a>
    );
  }

  return (
    <TrackedWhatsAppAnchor
      aria-label="Falar no WhatsApp"
      className={`${mobileFloatClasses} hover:border-emerald-300/35 hover:shadow-[0_24px_54px_rgba(6,18,14,0.22)]`}
      href={whatsappUrl}
      placement="floating_whatsapp"
      rel="noreferrer"
      target="_blank"
    >
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-300 group-hover:scale-105">
        <WhatsAppIcon />
      </span>
      <span className="hidden sm:inline">Falar sobre meu projeto</span>
    </TrackedWhatsAppAnchor>
  );
}
