import type { ReactNode } from "react";
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { getSectionMeta } from "../../content/sections";

export function SectionShell({
  id,
  kicker,
  title,
  subtitle,
  children,
  tone = "default",
  wide = false,
}: {
  id: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "default" | "sunken";
  wide?: boolean;
}) {
  const meta = getSectionMeta(id);
  return (
    <section
      id={id}
      data-section-id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${
        tone === "sunken" ? "bg-surface/40" : ""
      }`}
    >
      <Container className={wide ? "max-w-7xl" : undefined}>
        {(kicker || title) && (
          <Reveal className="mb-12 sm:mb-16 max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-brand-300 font-semibold">
              {meta.number !== null && (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 text-xs text-muted">
                  {String(meta.number).padStart(2, "0")}
                </span>
              )}
              {kicker && <span>{kicker}</span>}
            </div>
            {title && (
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-text text-balance leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-muted leading-relaxed text-balance">
                {subtitle}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
