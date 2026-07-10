import {
  FileSpreadsheet,
  Tags,
  DollarSign,
  PackageSearch,
  FolderTree,
  ShieldCheck,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";
import { WindowFrame } from "../components/mockups/WindowFrame";

const PIPELINE = [
  { icon: FileSpreadsheet, title: "استخراج من Access الحالي", text: "قائمة كل التحاليل كما هي مسجّلة اليوم، دون حذف أو افتراض." },
  { icon: FolderTree, title: "تنظيم في هيكل موحّد", text: "كل تحليل يُصنَّف تحت قسمه (دم، هرمونات، فيروسات...) بشكل متّسق." },
  { icon: ShieldCheck, title: "مراجعة واعتماد إدارة المعمل", text: "الفريق الطبي بالمعمل يراجع كل قيمة قبل نشرها في أي نظام." },
];

const COLUMNS = [
  { icon: Tags, label: "الوحدات" },
  { icon: PackageSearch, label: "القيم المرجعية" },
  { icon: DollarSign, label: "الأسعار" },
  { icon: FolderTree, label: "الباقات والأقسام" },
];

export function TestCatalog() {
  return (
    <SectionShell
      id="test-catalog"
      kicker="مصدر الحقيقة لكل نظام آخر"
      title="كتالوج التحاليل"
      subtitle="كتالوج التحاليل هو الأساس الذي يعمل عليه إدخال النتائج، والتسعير، وبوابة المريض — لذلك مصدره الوحيد هو بيانات المعمل الفعلية، معتمدة من إدارته."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {PIPELINE.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.06}>
            <div className="relative h-full rounded-2xl border border-border-soft bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                <step.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-3 text-sm font-bold text-text">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{step.text}</p>
              {i < PIPELINE.length - 1 && (
                <ArrowLeft
                  className="absolute -start-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-faint sm:block"
                  aria-hidden
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8 flex items-start gap-2.5 rounded-2xl border border-warning/30 bg-warning/5 p-4 text-sm text-muted">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />
        <span>
          <span className="font-bold text-text">لن نستخدم أي قيمة طبية جاهزة من الإنترنت. </span>
          هيكل الجدول أدناه للتوضيح فقط — الأعمدة الفعلية تُملأ حصريًا من ملف Access الحقيقي بعد
          فحصه، وتُعتمد من الفريق الطبي بالمعمل قبل الإطلاق.
        </span>
      </Reveal>

      <Reveal delay={0.25} className="mt-6">
        <WindowFrame title="هيكل كتالوج التحاليل (مثال بنيوي — بدون قيم حقيقية)">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-border-soft text-right text-xs text-faint">
                  <th className="py-2 font-semibold">اسم التحليل</th>
                  <th className="py-2 font-semibold">القسم</th>
                  <th className="py-2 font-semibold">الوحدة</th>
                  <th className="py-2 font-semibold">المعدل المرجعي</th>
                  <th className="py-2 font-semibold">السعر</th>
                  <th className="py-2 font-semibold">ضمن باقة</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((row) => (
                  <tr key={row} className="border-b border-border-soft/60 last:border-0 text-faint">
                    <td className="py-3">يُستورد من Access</td>
                    <td className="py-3">—</td>
                    <td className="py-3">—</td>
                    <td className="py-3">—</td>
                    <td className="py-3">—</td>
                    <td className="py-3">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </WindowFrame>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {COLUMNS.map((col) => (
          <div key={col.label} className="flex items-center gap-2 rounded-xl border border-border-soft bg-surface px-3 py-2.5">
            <col.icon className="h-4 w-4 shrink-0 text-accent-300" aria-hidden />
            <span className="text-xs font-semibold text-text">{col.label}</span>
          </div>
        ))}
      </div>

      <DecisionBlock sectionId="test-catalog" />
    </SectionShell>
  );
}
