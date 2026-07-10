import type { ReactNode } from "react";

const TONES = {
  brand: "border-brand-500/40 bg-brand-500/10 text-brand-300",
  accent: "border-accent-500/40 bg-accent-500/10 text-accent-300",
  success: "border-success/40 bg-success/10 text-success",
  warning: "border-warning/40 bg-warning/10 text-warning",
  danger: "border-danger/40 bg-danger/10 text-danger",
  critical: "border-critical/40 bg-critical/10 text-critical",
  neutral: "border-border bg-surface-2 text-muted",
} as const;

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
