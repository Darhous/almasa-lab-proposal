import { useState } from "react";
import { CheckCircle2, PenLine, Clock3, XCircle, Save } from "lucide-react";
import {
  setSectionDecision,
  setSectionNote,
  useDecisionsState,
} from "../../store/decisionsStore";
import type { DecisionStatus } from "../../types/decision";
import { DECISION_LABELS } from "../../types/decision";
import { SuggestionsBlock } from "./SuggestionsBlock";
import { getSuggestionsForSection } from "../../content/suggestions";

const OPTIONS: { status: DecisionStatus; icon: typeof CheckCircle2 }[] = [
  { status: "approved", icon: CheckCircle2 },
  { status: "approved_with_changes", icon: PenLine },
  { status: "deferred", icon: Clock3 },
  { status: "excluded", icon: XCircle },
];

const TONE: Record<DecisionStatus, string> = {
  approved: "border-success/50 bg-success/10 text-success",
  approved_with_changes: "border-warning/50 bg-warning/10 text-warning",
  deferred: "border-accent-500/50 bg-accent-500/10 text-accent-300",
  excluded: "border-danger/50 bg-danger/10 text-danger",
};

export function DecisionBlock({ sectionId }: { sectionId: string }) {
  const state = useDecisionsState();
  const decision = state.sections[sectionId];
  const status = decision?.status;
  const [note, setNote] = useState(decision?.note ?? "");
  const [savedFlash, setSavedFlash] = useState(false);
  const suggestions = getSuggestionsForSection(sectionId);

  function flashSaved() {
    setSavedFlash(true);
    window.setTimeout(() => setSavedFlash(false), 1400);
  }

  return (
    <div className="mt-14 print-break rounded-3xl border border-border bg-surface-2/60 p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-text">قرار العميل</h3>
        {!status && (
          <span className="text-xs text-faint">
            بدون تفاعل = معتمد كما هو تلقائيًا
          </span>
        )}
        {savedFlash && (
          <span className="print-hidden flex items-center gap-1.5 text-xs font-semibold text-success">
            <Save className="h-3.5 w-3.5" /> تم الحفظ محليًا
          </span>
        )}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {OPTIONS.map(({ status: optionStatus, icon: Icon }) => {
          const active = status === optionStatus || (!status && optionStatus === "approved");
          return (
            <button
              key={optionStatus}
              type="button"
              onClick={() => {
                setSectionDecision(sectionId, optionStatus);
                flashSaved();
              }}
              className={`relative flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center text-sm font-semibold transition-all ${
                active
                  ? `border-2 ${TONE[optionStatus]}`
                  : "border border-border bg-surface text-muted hover:border-brand-500/40 hover:text-text"
              }`}
              aria-pressed={active}
            >
              {active && (
                <CheckCircle2
                  className="absolute -top-2 -end-2 h-4 w-4 rounded-full bg-ink"
                  aria-hidden
                />
              )}
              <Icon className="h-5 w-5" aria-hidden />
              {DECISION_LABELS[optionStatus]}
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        <label htmlFor={`note-${sectionId}`} className="mb-2 block text-sm font-semibold text-muted">
          ملاحظات العميل
        </label>
        <textarea
          id={`note-${sectionId}`}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onBlur={() => {
            setSectionNote(sectionId, note);
            flashSaved();
          }}
          rows={3}
          placeholder="اكتب أي تعديل أو ملاحظة تخص هذا القسم..."
          className="w-full resize-y rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-faint focus:border-brand-500 focus:outline-none"
        />
      </div>

      {suggestions.length > 0 && (
        <div className="mt-8 border-t border-border-soft pt-6">
          <SuggestionsBlock suggestions={suggestions} />
        </div>
      )}
    </div>
  );
}
