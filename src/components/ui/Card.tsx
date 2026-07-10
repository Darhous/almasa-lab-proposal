import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-border-soft bg-surface/70 p-6 shadow-card ${className}`}
    >
      {children}
    </div>
  );
}
