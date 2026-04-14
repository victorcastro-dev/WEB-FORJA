import { cn } from "@/lib/utils";

type BrandLockupProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
};

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const markSizes: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  sm: "h-[2.85rem] w-[2.85rem]",
  md: "h-[3.45rem] w-[3.45rem]",
  lg: "h-[4.2rem] w-[4.2rem]",
};

const lockupSizes: Record<NonNullable<BrandLockupProps["size"]>, { word: string; sub: string }> = {
  sm: {
    word: "text-[0.92rem] tracking-[0.18em]",
    sub: "text-[0.55rem] tracking-[0.34em]",
  },
  md: {
    word: "text-[1.02rem] tracking-[0.21em]",
    sub: "text-[0.58rem] tracking-[0.38em]",
  },
  lg: {
    word: "text-[1.18rem] tracking-[0.22em]",
    sub: "text-[0.62rem] tracking-[0.42em]",
  },
};

export function BrandMark({ className, size = "md" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex items-center justify-center",
        markSizes[size],
        className,
      )}
    >
      <svg
        className="h-full w-full drop-shadow-[0_20px_32px_rgba(6,10,18,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M20 5H44L57 18V44L44 57H20L7 44V18L20 5Z"
          fill="rgb(var(--color-surface-strong) / 0.96)"
          stroke="rgb(var(--color-border) / 0.82)"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M21.5 10H42.8L52 19.2V42.4L42.8 51.6H21.5L12.3 42.4V19.2L21.5 10Z"
          fill="rgb(var(--color-surface) / 0.82)"
        />
        <path
          d="M15 18H22.2L27.8 37.8L32 26.6L36.2 37.8L41.8 18H49L39.5 46H34.4L32 39.4L29.6 46H24.5L15 18Z"
          fill="rgb(var(--color-text))"
        />
        <path
          d="M40.2 17.8H50L46.4 21.5H42.9V29.6H47.2L44.2 33.1H42.9V46H38.5V17.8H40.2Z"
          fill="rgb(var(--color-signature))"
        />
        <path
          d="M49.8 13.2L53.8 17.2L49.8 21.2"
          stroke="rgb(var(--color-signature) / 0.92)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          d="M12.5 46.8L16.8 42.5"
          stroke="rgb(var(--color-primary) / 0.48)"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}

export function BrandLockup({
  className,
  size = "md",
  showSubtitle = true,
}: BrandLockupProps) {
  const typography = lockupSizes[size];

  return (
    <span className={cn("inline-flex items-center gap-3 sm:gap-4", className)}>
      <BrandMark size={size} />
      <span className="flex min-w-0 flex-col justify-center">
        <span className="flex items-center gap-3 leading-none">
          <span className={cn("font-display font-[650] uppercase text-text", typography.word)}>
            WEBFORJA
          </span>
        </span>
        {showSubtitle ? (
          <span className="mt-2 flex items-center gap-2.5">
            <span className="h-px w-6 bg-gradient-to-r from-signature/70 to-signature/0 sm:w-8" />
            <span className={cn("font-semibold uppercase text-muted/90", typography.sub)}>
              Estúdio Digital
            </span>
          </span>
        ) : null}
      </span>
    </span>
  );
}
