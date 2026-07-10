import { useMemo, useState } from "react";
import {
  Printer,
  FileJson,
  FileText,
  Save,
  CheckCircle2,
  PenLine,
  Clock3,
  XCircle,
  Sparkles,
  StickyNote,
  ClipboardList,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { DECISION_SECTIONS } from "../content/sections";
import { SUGGESTIONS } from "../content/suggestions";
import { useDecisionsState } from "../store/decisionsStore";
import { DECISION_LABELS, SUGGESTION_LABELS } from "../types/decision";
import type { DecisionStatus } from "../types/decision";

const STATUS_META: Record<DecisionStatus, { icon: typeof CheckCircle2; tone: string }> = {
  approved: { icon: CheckCircle2, tone: "border-success/40 bg-success/10 text-success" },
  approved_with_changes: { icon: PenLine, tone: "border-warning/40 bg-warning/10 text-warning" },
  deferred: { icon: Clock3, tone: "border-accent-500/40 bg-accent-500/10 text-accent-300" },
  excluded: { icon: XCircle, tone: "border-danger/40 bg-danger/10 text-danger" },
};

function download(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function MasterDecisionLog() {
  const state = useDecisionsState();
  const [savedFlash, setSavedFlash] = useState(false);

  const rows = useMemo(
    () =>
      DECISION_SECTIONS.map((section) => {
        const decision = state.sections[section.id];
        const status: DecisionStatus = decision?.status ?? "approved";
        const note = decision?.note ?? "";
        const linkedSuggestions = SUGGESTIONS.filter((s) => s.sectionId === section.id).map((s) => ({
          ...s,
          status: state.suggestions[s.id]?.status,
        }));
        return { section, status, note, isImplicit: !decision, linkedSuggestions };
      }),
    [state],
  );

  const counts = useMemo(() => {
    const base: Record<DecisionStatus, number> = {
      approved: 0,
      approved_with_changes: 0,
      deferred: 0,
      excluded: 0,
    };
    for (const row of rows) base[row.status]++;
    return base;
  }, [rows]);

  const addedSuggestions = SUGGESTIONS.filter((s) => state.suggestions[s.id]?.status === "add");
  const discussSuggestions = SUGGESTIONS.filter((s) => state.suggestions[s.id]?.status === "discuss");
  const notesRows = rows.filter((r) => r.note.trim().length > 0);

  function flashSaved() {
    setSavedFlash(true);
    window.setTimeout(() => setSavedFlash(false), 1600);
  }

  function handleExportDecisions() {
    download(
      "almasa-lab-decisions.json",
      JSON.stringify(
        {
          exportedAt: new Date().toISOString(),
          sections: rows.map((r) => ({
            id: r.section.id,
            title: r.section.title,
            status: r.status,
            note: r.note,
          })),
          suggestions: SUGGESTIONS.map((s) => ({
            id: s.id,
            title: s.title,
            sectionId: s.sectionId,
            status: state.suggestions[s.id]?.status ?? null,
          })),
        },
        null,
        2,
      ),
      "application/json",
    );
  }

  function handleExportScope() {
    const lines: string[] = [];
    lines.push("# النطاق المعتمد — معمل الماسة للتحاليل الطبية");
    lines.push("");
    lines.push(`تاريخ التصدير: ${new Date().toLocaleDateString("ar-EG")}`);
    lines.push("");
    lines.push("## الأقسام المعتمدة (كما هي أو مع تعديل)");
    for (const row of rows) {
      if (row.status === "approved" || row.status === "approved_with_changes") {
        lines.push(`- **${row.section.title}** — ${DECISION_LABELS[row.status]}`);
        if (row.note) lines.push(`  - ملاحظة: ${row.note}`);
      }
    }
    lines.push("");
    lines.push("## الأقسام المؤجلة للمرحلة الثانية");
    for (const row of rows) {
      if (row.status === "deferred") lines.push(`- ${row.section.title}`);
    }
    lines.push("");
    lines.push("## الأقسام المستبعدة");
    for (const row of rows) {
      if (row.status === "excluded") lines.push(`- ${row.section.title}`);
    }
    lines.push("");
    lines.push("## الاقتراحات الإضافية المعتمدة للإضافة");
    if (addedSuggestions.length === 0) lines.push("- لا يوجد");
    for (const s of addedSuggestions) lines.push(`- ${s.title} (قسم: ${s.sectionId})`);
    lines.push("");
    lines.push("## اقتراحات مطلوب مناقشتها لاحقًا");
    if (discussSuggestions.length === 0) lines.push("- لا يوجد");
    for (const s of discussSuggestions) lines.push(`- ${s.title} (قسم: ${s.sectionId})`);

    download("almasa-lab-approved-scope.md", lines.join("\n"), "text/markdown");
  }

  function handleSaveProgress() {
    flashSaved();
  }

  return (
    <SectionShell id="master-decision-log" wide kicker="خلاصة كل قرار اتخذته أثناء المراجعة" title="سجل القرار الرئيسي">
      <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {(Object.keys(DECISION_LABELS) as DecisionStatus[]).map((status) => {
          const { icon: Icon, tone } = STATUS_META[status];
          return (
            <div key={status} className={`rounded-2xl border p-4 text-center ${tone}`}>
              <Icon className="mx-auto h-5 w-5" aria-hidden />
              <p className="mt-2 text-2xl font-extrabold">{counts[status]}</p>
              <p className="mt-1 text-[11px] font-semibold opacity-90">{DECISION_LABELS[status]}</p>
            </div>
          );
        })}
      </Reveal>

      <Reveal delay={0.1} className="print-hidden mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-5 py-2.5 text-sm font-semibold text-text hover:border-brand-500/50"
        >
          <Printer className="h-4 w-4" aria-hidden /> طباعة العرض
        </button>
        <button
          type="button"
          onClick={handleExportDecisions}
          className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-5 py-2.5 text-sm font-semibold text-text hover:border-brand-500/50"
        >
          <FileJson className="h-4 w-4" aria-hidden /> تصدير القرارات (JSON)
        </button>
        <button
          type="button"
          onClick={handleExportScope}
          className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-5 py-2.5 text-sm font-semibold text-text hover:border-brand-500/50"
        >
          <FileText className="h-4 w-4" aria-hidden /> تصدير النطاق المعتمد
        </button>
        <button
          type="button"
          onClick={handleSaveProgress}
          className="flex items-center gap-2 rounded-full bg-gradient-to-l from-brand-600 to-accent-500 px-5 py-2.5 text-sm font-bold text-white"
        >
          <Save className="h-4 w-4" aria-hidden />
          {savedFlash ? "تم الحفظ محليًا ✓" : "حفظ التقدم محليًا"}
        </button>
      </Reveal>

      <Reveal delay={0.15} className="mt-10 overflow-x-auto rounded-3xl border border-border-soft bg-surface">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-border-soft text-right text-xs text-faint">
              <th className="p-4 font-semibold">القسم</th>
              <th className="p-4 font-semibold">القرار</th>
              <th className="p-4 font-semibold">ملاحظات العميل</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const { icon: Icon, tone } = STATUS_META[row.status];
              return (
                <tr key={row.section.id} className="border-b border-border-soft/60 last:border-0 align-top">
                  <td className="p-4">
                    <p className="font-semibold text-text">{row.section.title}</p>
                    {row.isImplicit && (
                      <p className="mt-0.5 text-[11px] text-faint">بدون تفاعل — معتمد تلقائيًا</p>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${tone}`}>
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                      {DECISION_LABELS[row.status]}
                    </span>
                  </td>
                  <td className="max-w-xs p-4 text-xs leading-relaxed text-muted">
                    {row.note || <span className="text-faint">—</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-border-soft bg-surface p-6">
            <h3 className="flex items-center gap-2 text-sm font-bold text-text">
              <Sparkles className="h-4 w-4 text-brand-300" aria-hidden />
              الاقتراحات الإضافية المُعتمدة للإضافة
            </h3>
            {addedSuggestions.length === 0 ? (
              <p className="mt-3 text-xs text-faint">لم يتم اعتماد أي اقتراح إضافي بعد.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {addedSuggestions.map((s) => (
                  <li key={s.id} className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" aria-hidden />
                    {s.title}
                  </li>
                ))}
              </ul>
            )}
            {discussSuggestions.length > 0 && (
              <>
                <h4 className="mt-5 flex items-center gap-2 text-xs font-bold text-muted">
                  <ClipboardList className="h-3.5 w-3.5 text-accent-300" aria-hidden />
                  اقتراحات {SUGGESTION_LABELS.discuss}
                </h4>
                <ul className="mt-2 space-y-2">
                  {discussSuggestions.map((s) => (
                    <li key={s.id} className="flex items-start gap-2 text-xs text-muted">
                      <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-300" aria-hidden />
                      {s.title}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="h-full rounded-3xl border border-border-soft bg-surface p-6">
            <h3 className="flex items-center gap-2 text-sm font-bold text-text">
              <StickyNote className="h-4 w-4 text-brand-300" aria-hidden />
              كل ملاحظات العميل المسجَّلة
            </h3>
            {notesRows.length === 0 ? (
              <p className="mt-3 text-xs text-faint">لا توجد ملاحظات مسجَّلة حتى الآن.</p>
            ) : (
              <ul className="mt-3 space-y-3">
                {notesRows.map((row) => (
                  <li key={row.section.id} className="rounded-xl bg-surface-2 p-3 text-xs">
                    <p className="font-bold text-text">{row.section.title}</p>
                    <p className="mt-1 leading-relaxed text-muted">{row.note}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>

      <Container className="print-hidden mt-8 px-0">
        <p className="text-center text-xs text-faint">
          كل القرارات والملاحظات تُحفظ تلقائيًا في متصفحك فقط (localStorage) — لن تُفقد عند إغلاق
          الصفحة، لكنها لن تُرسل لأي خادم أو طرف ثالث.
        </p>
      </Container>
    </SectionShell>
  );
}
