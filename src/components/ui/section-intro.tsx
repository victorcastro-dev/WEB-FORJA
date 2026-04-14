import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <Reveal as="div" className={cn("inline-flex", align === "center" && "justify-center")} variant="soft">
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={70} variant="lift">
        <h2 className={cn("section-heading mt-5", align === "center" && "mx-auto")}>{title}</h2>
      </Reveal>
      <Reveal delay={120} variant="soft">
        <div className={cn("accent-line mt-5 max-w-32", align === "center" && "mx-auto")} />
      </Reveal>
      <Reveal delay={170} variant="soft">
        <p className={cn("lead-copy mt-5 max-w-2xl", align === "center" && "mx-auto")}>
          {description}
        </p>
      </Reveal>
    </div>
  );
}
