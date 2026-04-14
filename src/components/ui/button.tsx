import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = SharedProps & {
  href: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: Omit<SharedProps, "children">) {
  return cn(
    "control-shell inline-flex items-center justify-center gap-2 rounded-full border font-semibold tracking-[0.01em] transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:translate-y-0",
    variant === "primary" &&
      "border-primary/55 bg-primary text-white shadow-[0_16px_34px_rgba(79,140,255,0.22)] hover:-translate-y-0.5 hover:border-primary hover:bg-primary/92 hover:shadow-[0_24px_48px_rgba(79,140,255,0.26)] active:translate-y-0",
    variant === "secondary" &&
      "border-border/80 bg-surface/90 text-text shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] hover:-translate-y-0.5 hover:border-signature/35 hover:bg-signature/10 hover:text-text hover:shadow-[0_18px_34px_rgba(6,12,22,0.14)] active:translate-y-0",
    variant === "ghost" &&
      "border-transparent bg-transparent text-text hover:border-border/70 hover:bg-surface-soft/80 active:translate-y-0",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-5 py-3 text-sm sm:px-6",
    size === "lg" && "px-6 py-3.5 text-sm sm:px-7",
    className,
  );
}

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  external,
  onClick,
  variant,
  size,
  className,
  children,
}: ButtonLinkProps) {
  const sharedClassName = buttonClasses({ variant, size, className });

  if (external) {
    return (
      <a className={sharedClassName} href={href} onClick={onClick} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={sharedClassName} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
