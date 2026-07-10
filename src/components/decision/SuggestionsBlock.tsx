import { useState } from "react";
import { ChevronDown, Sparkles, Plus, EyeOff, MessagesSquare } from "lucide-react";
import type { Suggestion } from "../../content/suggestions";
import {
  setSuggestionDecision,
  useDecisionsState,
} from "../../store/decisionsStore";
import type { SuggestionStatus } from "../../types/decision";
import { SUGGESTION_LABELS } from "../../types/decision";

const BUTTONS: { status: SuggestionStatus; icon: typeof Plus }[] = [
  { status: "add", icon: Plus },
  { status: "ignore", icon: EyeOff },
  { status: "discuss", icon: MessagesSquare },
];

const TONE: Record<SuggestionStatus, string> = {
  add: "border-success/50 bg-success/10 text-success",
  ignore: "border-border bg-surface text-faint",
  discuss: "border-accent-500/50 bg-accent-500/10 text-accent-300",
};

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span className="rounded-full border border-border-soft bg-surface px-2.5 py-1 text-[11px] text-muted">
      {label}: <span className="text-text">{value}</span>
    </span>
  );
}

function SuggestionRow({ suggestion }: { suggestion: Suggestion }) {
  const [open, setOpen] = useState(false);
  const state = useDecisionsState();
  const status = state.suggestions[suggestion.id]?.status;

  return (
    <div className="rounded-2xl border border-border-soft bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-right"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-text">
          <Sparkles className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
          {suggestion.title}
        </span>
        <span className="flex items-center gap-2 shrink-0">
          {status && (
            <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${TONE[status]}`}>
              {SUGGESTION_LABELS[status]}
            </span>
          )}
          <ChevronDown
            className={`h-4 w-4 text-faint transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </span>
      </button>
      {open && (
        <div className="border-t border-border-soft px-4 py-4">
          <div className="flex flex-wrap gap-2">
            <Meta label="القيمة" value={suggestion.value} />
            <Meta label="التعقيد" value={suggestion.complexity} />
            <Meta label="الأولوية" value={suggestion.priority} />
            <Meta label="المرحلة المقترحة" value={suggestion.phase} />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            <span className="font-semibold text-text">لماذا نقترحها: </span>
            {suggestion.rationale}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            <span className="font-semibold text-text">الفائدة المتوقعة: </span>
            {suggestion.benefit}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {BUTTONS.map(({ status: optionStatus, icon: Icon }) => (
              <button
                key={optionStatus}
                type="button"
                onClick={() => setSuggestionDecision(suggestion.id, optionStatus)}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  status === optionStatus
                    ? TONE[optionStatus]
                    : "border-border bg-surface-2 text-muted hover:text-text"
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {SUGGESTION_LABELS[optionStatus]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SuggestionsBlock({ suggestions }: { suggestions: Suggestion[] }) {
  return (
    <div>
      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-text">
        <Sparkles className="h-4 w-4 text-brand-300" aria-hidden />
        اقتراحات إضافية لهذا القسم
      </h4>
      <div className="space-y-2">
        {suggestions.map((s) => (
          <SuggestionRow key={s.id} suggestion={s} />
        ))}
      </div>
    </div>
  );
}
