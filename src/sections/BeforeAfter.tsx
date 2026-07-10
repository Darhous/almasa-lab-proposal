import { X, Check, ArrowLeft } from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

const ROWS = [
  { before: "الاعتماد الكامل على Microsoft Access", after: "منظومة رقمية متكاملة (موقع + بوابة + Windows + إدارة)" },
  { before: "لا توجد بوابة مريض على الإطلاق", after: "بوابة مريض متاحة على مدار الساعة طوال أيام الأسبوع" },
  { before: "لا تتبّع لحالة العينة أو التحليل", after: "تتبّع كامل لرحلة المريض خطوة بخطوة" },
  { before: "لا تسويق منظّم عبر واتساب", after: "حملات تسويقية منظّمة، بموافقة صريحة قابلة للإلغاء" },
  { before: "أنظمة منفصلة لا تتحدث مع بعضها", after: "موقع وبرنامج Windows على نفس قاعدة البيانات الموحّدة" },
];

export function BeforeAfter() {
  return (
    <SectionShell
      id="before-after"
      tone="sunken"
      kicker="الفرق بالأرقام والواقع، لا بالكلام فقط"
      title="قبل وبعد"
      subtitle="مقارنة مباشرة بين وضع المعمل الحالي والوضع المستهدف بعد تنفيذ المشروع."
    >
      <div className="space-y-3">
        <Reveal className="hidden gap-4 px-5 text-xs font-bold text-faint sm:grid sm:grid-cols-[1fr_auto_1fr]">
          <span>الوضع الحالي</span>
          <span />
          <span>بعد المشروع</span>
        </Reveal>
        {ROWS.map((row, i) => (
          <Reveal key={row.before} delay={i * 0.05}>
            <div className="grid items-center gap-3 rounded-2xl border border-border-soft bg-surface p-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-4 sm:p-5">
              <div className="flex items-start gap-2.5 text-sm text-muted">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden />
                {row.before}
              </div>
              <ArrowLeft className="hidden h-4 w-4 shrink-0 text-faint sm:block" aria-hidden />
              <div className="flex items-start gap-2.5 text-sm font-semibold text-text">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                {row.after}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <DecisionBlock sectionId="before-after" />
    </SectionShell>
  );
}
