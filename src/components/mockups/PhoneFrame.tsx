import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[300px] ${className}`}>
      <div className="relative rounded-[2.5rem] border-4 border-surface-3 bg-ink p-2 shadow-glow">
        <div className="absolute inset-x-0 top-2 z-10 mx-auto h-5 w-28 rounded-full bg-surface-3" />
        <div className="relative overflow-hidden rounded-[2rem] bg-surface">
          <div className="h-[560px] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
