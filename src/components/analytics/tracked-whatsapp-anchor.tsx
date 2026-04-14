"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackWhatsAppClick } from "@/lib/analytics";

type TrackedWhatsAppAnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href"
> & {
  children: ReactNode;
  href: string;
  placement: string;
};

export function TrackedWhatsAppAnchor({
  children,
  href,
  onClick,
  placement,
  ...props
}: TrackedWhatsAppAnchorProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        trackWhatsAppClick({ href, placement });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
