import { FaqItem } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <Reveal
          as="details"
          className="group panel interactive-panel overflow-hidden p-0 transition open:border-primary/25"
          delay={index * 55}
          key={item.question}
          variant="soft"
        >
          <summary className="control-shell flex cursor-pointer items-center justify-between gap-4 px-5 py-5 transition hover:bg-surface-soft/40 sm:px-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-surface-soft/80 text-sm font-semibold text-signature">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-left text-base font-semibold text-text">{item.question}</span>
            </div>
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-surface-soft/80 text-sm font-semibold text-primary transition group-open:rotate-45 group-open:border-primary/30">
              +
            </span>
          </summary>
          <div className="border-t border-border/60 px-5 pb-5 pt-4 sm:px-6">
            <p className="text-sm sm:text-base">{item.answer}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
