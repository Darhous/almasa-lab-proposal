import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export interface TimelineStep {
  title: string;
  description: string;
  icon: ReactNode;
}

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative space-y-8">
      <div
        className="absolute top-2 bottom-2 start-[19px] w-px bg-gradient-to-b from-brand-500/60 via-border-soft to-transparent"
        aria-hidden
      />
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 0.05} className="relative flex gap-5">
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-500/40 bg-surface-2 text-brand-300">
            {step.icon}
          </span>
          <div className="pt-1.5">
            <p className="text-sm font-bold text-text sm:text-base">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
