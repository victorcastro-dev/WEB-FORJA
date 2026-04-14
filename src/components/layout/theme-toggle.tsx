"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type Theme = "dark" | "light";
type ThemeToggleProps = {
  compact?: boolean;
};

function SunIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.75V5.25M12 18.75V21.25M21.25 12H18.75M5.25 12H2.75M18.54 5.46L16.77 7.23M7.23 16.77L5.46 18.54M18.54 18.54L16.77 16.77M7.23 7.23L5.46 5.46"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.47 14.3A8.5 8.5 0 1 1 9.7 3.53a7 7 0 1 0 10.77 10.77Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== "undefined" && document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark",
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("webforja-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      aria-label="Alternar tema"
      aria-pressed={theme === "light"}
      className={cn(
        "control-shell inline-flex h-11 touch-manipulation items-center gap-2 rounded-full border border-border/80 bg-surface/90 px-4 text-sm font-semibold text-text backdrop-blur-lg transition-all duration-300 hover:border-signature/35 hover:bg-surface-soft/90",
        theme === "light" && "border-signature/40",
        compact && "w-11 justify-center px-0",
      )}
      onClick={toggleTheme}
      type="button"
    >
      <span
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/70 bg-canvas/55 text-muted transition-all duration-300",
          theme === "light"
            ? "border-signature/30 bg-signature/10 text-signature shadow-[0_10px_20px_rgba(215,154,61,0.14)]"
            : "border-primary/20 bg-primary/10 text-primary shadow-[0_10px_20px_rgba(79,140,255,0.12)]",
        )}
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </span>
      {compact ? null : <span>{theme === "dark" ? "Escuro" : "Claro"}</span>}
    </button>
  );
}
