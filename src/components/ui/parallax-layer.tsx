"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type ParallaxLayerProps = {
  children?: ReactNode;
  className?: string;
  rotate?: number;
  scale?: number;
  strength?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ParallaxLayer({
  children,
  className,
  rotate = 0,
  scale = 1,
  strength = 18,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const applyTransform = (progress: number) => {
      const limited = clamp(progress, -1, 1);
      const offsetY = limited * strength;
      const offsetX = limited * strength * -0.18;
      const angle = limited * rotate;

      element.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0) scale(${scale}) rotate(${angle.toFixed(2)}deg)`;
    };

    const update = () => {
      frame = 0;

      if (mediaQuery.matches) {
        applyTransform(0);
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const progress = (viewportCenter - elementCenter) / viewportHeight;

      applyTransform(progress);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    const handleMotionChange = () => requestUpdate();

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    mediaQuery.addEventListener?.("change", handleMotionChange);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mediaQuery.removeEventListener?.("change", handleMotionChange);
    };
  }, [rotate, scale, strength]);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute transform-gpu will-change-transform", className)}
      ref={ref}
    >
      {children}
    </div>
  );
}
