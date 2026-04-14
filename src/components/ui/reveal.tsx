"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type RevealTag = "article" | "details" | "div" | "li" | "section";
type RevealVariant = "soft" | "lift" | "scale";

type RevealProps = {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
  variant?: RevealVariant;
} & Record<string, unknown>;

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  id,
  once = true,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.16,
  variant = "lift",
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Component = as;

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      element.dataset.revealState = "visible";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          element.dataset.revealState = "visible";

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.dataset.revealState = "hidden";
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <Component
      className={cn("scroll-reveal", `scroll-reveal-${variant}`, className)}
      data-reveal-state="hidden"
      id={id}
      ref={ref as never}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </Component>
  );
}
