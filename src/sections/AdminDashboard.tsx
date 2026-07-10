import {
  Users,
  CalendarCheck2,
  FileCheck2,
  ClipboardCheck,
  Building2,
  UserCog,
  KeyRound,
  BarChart3,
  Megaphone,
  ScrollText,
  TrendingUp,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

const NAV_ITEMS = [
  { icon: Users, label: "المرضى" },
  { icon: CalendarCheck2, label: "الزيارات" },
  { icon: FileCheck2, label: "النتائج" },
  { icon: ClipboardCheck, label: "المراجعات" },
  { icon: Building2, label: "الفروع" },
  { icon: UserCog, label: "المستخدمون" },
  { icon: KeyRound, label: "الصلاحيات" },
  { icon: BarChart3, label: "التقارير" },
  { icon: Megaphone, label: "الحملات" },
  { icon: ScrollText, label: "سجل العمليات" },
];

const STATS = [
  { label: "زيارات اليوم", value: "128", trend: "+12%" },
  { label: "نتائج بانتظار الاعتماد", value: "9", trend: "-3%" },
  { label: "مرضى جدد هذا الشهر", value: "341", trend: "+8%" },
  { label: "نتائج حرجة اليوم", value: "2", trend: "" },
];

export function AdminDashboard() {
  return (
    <SectionShell
      id="admin-dashboard"
      kicker="مركز القيادة"
      title="لوحة الإدارة"
      subtitle="كل ما يحتاجه مدير المعمل أو الفرع ليرى الصورة الكاملة، في مكان واحد بدل التنقل بين ملفات متفرقة."
    >
      <Reveal className="overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-glow">
        <div className="flex items-center gap-2 border-b border-border-soft bg-surface-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="mx-auto -translate-x-3 text-xs font-semibold text-faint">
            لوحة إدارة معمل الماسة
          </span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-border-soft bg-surface-2/40 p-2.5 sm:w-56 sm:flex-col sm:overflow-visible sm:border-b-0 sm:border-e">
            {NAV_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold ${
                  i === 0 ? "bg-gradient-to-l from-brand-600/30 to-accent-500/20 text-text" : "text-muted"
                }`}
              >
                <item.icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 p-5">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border-soft bg-surface-2/50 p-4">
                  <p className="text-[11px] text-faint">{s.label}</p>
                  <div className="mt-1.5 flex items-end justify-between">
                    <span className="text-xl font-extrabold text-text">{s.value}</span>
                    {s.trend && (
                      <span
                        dir="ltr"
                        className="flex items-center gap-0.5 text-[10px] font-semibold text-success"
                      >
                        <TrendingUp className="h-3 w-3" aria-hidden />
                        {s.trend}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-border-soft bg-surface-2/50 p-4">
              <p className="mb-3 text-xs font-bold text-muted">أحدث الزيارات</p>
              <div className="space-y-2">
                {[
                  { name: "منى عبد الله", branch: "فرع المعادي", status: "قيد المراجعة" },
                  { name: "كريم سامي", branch: "فرع مدينة نصر", status: "معتمدة" },
                  { name: "ياسمين علي", branch: "فرع المعادي", status: "معتمدة" },
                ].map((row) => (
                  <div key={row.name} className="flex items-center justify-between rounded-xl bg-surface px-3 py-2 text-xs">
                    <span className="font-semibold text-text">{row.name}</span>
                    <span className="text-faint">{row.branch}</span>
                    <span
                      className={
                        row.status === "معتمدة" ? "text-success" : "text-warning"
                      }
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <DecisionBlock sectionId="admin-dashboard" />
    </SectionShell>
  );
}
