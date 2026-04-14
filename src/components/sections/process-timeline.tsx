import { Reveal } from "@/components/ui/reveal";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {steps.map((step, index) => (
        <Reveal
          as="article"
          className="panel interactive-panel relative overflow-hidden p-6 sm:p-7"
          delay={index * 70}
          key={step.title}
          variant="scale"
        >
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-signature/0" />
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-signature/25 bg-signature/10 text-sm font-semibold text-signature">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-xl text-text">{step.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{step.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
