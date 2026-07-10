import type { ReactNode } from "react";

export function WindowFrame({
  children,
  title,
  className = "",
}: {
  children: ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-glow ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border-soft bg-surface-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="mx-auto -translate-x-3 text-xs font-semibold text-faint">{title}</span>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
