import { useEffect, useMemo, useState } from "react";
import { Menu, X, ClipboardCheck } from "lucide-react";
import { DiamondMark } from "../ui/DiamondMark";
import { ScrollProgress } from "./ScrollProgress";
import { NAV_GROUPS, SECTIONS, DECISION_SECTIONS } from "../../content/sections";
import { useDecisionsState } from "../../store/decisionsStore";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const state = useDecisionsState();

  const reviewedCount = useMemo(
    () => DECISION_SECTIONS.filter((s) => state.sections[s.id]).length,
    [state],
  );

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function goTo(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header
      className={`print-hidden sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-ink/85 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            goTo("hero");
          }}
          className="flex items-center gap-2.5"
        >
          <DiamondMark className="h-7 w-7" />
          <span className="text-sm font-extrabold text-text sm:text-base">
            معمل الماسة للتحاليل الطبية
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#master-decision-log"
            onClick={(e) => {
              e.preventDefault();
              goTo("master-decision-log");
            }}
            className="hidden items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted hover:text-text sm:flex"
          >
            <ClipboardCheck className="h-3.5 w-3.5 text-brand-300" aria-hidden />
            {reviewedCount}/{DECISION_SECTIONS.length} تم التفاعل معها
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-semibold text-text hover:border-brand-500/50"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <Menu className="h-4 w-4" aria-hidden />
            الأقسام
          </button>
        </div>
      </div>
      <ScrollProgress />

      {open && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 start-0 w-full max-w-sm overflow-y-auto border-e border-border bg-surface p-6 shadow-glow sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DiamondMark className="h-6 w-6" />
                <span className="text-sm font-bold text-text">فهرس الأقسام</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-border p-2 text-muted hover:text-text"
                aria-label="إغلاق"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <nav className="mt-8 space-y-8">
              {NAV_GROUPS.map((group) => (
                <div key={group}>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wide text-faint">
                    {group}
                  </p>
                  <ul className="space-y-1">
                    {SECTIONS.filter((s) => s.group === group).map((s) => {
                      const decision = state.sections[s.id];
                      return (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => goTo(s.id)}
                            className="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm text-muted hover:bg-surface-2 hover:text-text"
                          >
                            <span className="flex items-center gap-2">
                              {s.number !== null && (
                                <span className="text-xs text-faint">
                                  {String(s.number).padStart(2, "0")}
                                </span>
                              )}
                              {s.navLabel}
                            </span>
                            {s.hasDecision && decision && (
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
