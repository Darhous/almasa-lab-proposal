import {
  Users,
  CalendarCheck2,
  FlaskConical,
  Wallet,
  Building2,
  UserCog,
  AlertOctagon,
  Megaphone,
  FileText,
  FileSpreadsheet,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

const REPORTS = [
  { icon: Users, title: "تقرير المرضى" },
  { icon: CalendarCheck2, title: "تقرير الزيارات" },
  { icon: FlaskConical, title: "تقرير التحاليل" },
  { icon: Wallet, title: "تقرير الإيرادات" },
  { icon: Building2, title: "تقرير الفروع" },
  { icon: UserCog, title: "تقرير الموظفين" },
  { icon: AlertOctagon, title: "تقرير النتائج الحرجة" },
  { icon: Megaphone, title: "تقرير الحملات" },
];

export function Reports() {
  return (
    <SectionShell
      id="reports"
      tone="sunken"
      kicker="أرقام تدعم القرار، لا مجرد أرشيف"
      title="التقارير"
      subtitle="ثمانية تقارير أساسية تغطي كل جوانب عمل المعمل، قابلة للتصدير فورًا لمن يحتاج مشاركتها خارج النظام."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {REPORTS.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.04}>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border-soft bg-surface p-5 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                <r.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-sm font-bold text-text">{r.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border-soft bg-surface-2/50 p-5">
        <span className="text-sm text-muted">كل تقرير قابل للتصدير مباشرة بصيغة:</span>
        <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold text-text">
          <FileText className="h-3.5 w-3.5 text-danger" aria-hidden /> PDF
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold text-text">
          <FileSpreadsheet className="h-3.5 w-3.5 text-success" aria-hidden /> Excel
        </span>
      </Reveal>

      <DecisionBlock sectionId="reports" />
    </SectionShell>
  );
}
