"use client";

import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/lib/analytics";

type TrackedWhatsAppButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  placement: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
};

export function TrackedWhatsAppButtonLink({
  children,
  className,
  href,
  placement,
  size,
  variant,
}: TrackedWhatsAppButtonLinkProps) {
  return (
    <ButtonLink
      className={className}
      external
      href={href}
      onClick={() => trackWhatsAppClick({ href, placement })}
      size={size}
      variant={variant}
    >
      {children}
    </ButtonLink>
  );
}
