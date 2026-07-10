import {
  LogIn,
  Search,
  UserPlus,
  FilePlus2,
  ListChecks,
  KeyboardIcon,
  FileCheck2,
  Printer,
  UserCheck,
  Link2,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";
import { WindowFrame } from "../components/mockups/WindowFrame";
import { BarcodeMockup } from "../components/mockups/BarcodeMockup";

const FLOW = [
  { icon: LogIn, title: "تسجيل الدخول" },
  { icon: Search, title: "البحث عن المريض" },
  { icon: UserPlus, title: "إضافة مريض" },
  { icon: FilePlus2, title: "زيارة جديدة" },
  { icon: ListChecks, title: "اختيار التحاليل" },
  { icon: KeyboardIcon, title: "إدخال النتائج" },
  { icon: FileCheck2, title: "مراجعة واعتماد" },
  { icon: Printer, title: "طباعة الباركود" },
  { icon: UserCheck, title: "تفعيل حساب المريض" },
];

export function WindowsApp() {
  return (
    <SectionShell
      id="windows-app"
      kicker="أداة الفريق داخل المعمل"
      title="برنامج الموظفين (Windows)"
      subtitle="برنامج سطح مكتب سريع للاستخدام اليومي المكثف من الاستقبال والفنيين، بدون الاعتماد على متصفح إنترنت — لكنه متصل بنفس قاعدة البيانات التي تغذي الموقع وبوابة المريض لحظيًا."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {FLOW.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.04}>
            <div className="flex items-center gap-3 rounded-2xl border border-border-soft bg-surface px-4 py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                <step.icon className="h-4.5 w-4.5" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-text">{step.title}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <WindowFrame title="زيارة جديدة — مريض: منى عبد الله">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-border-soft bg-surface-2 px-3 py-2">
                <p className="text-faint">رقم الملف</p>
                <p className="mt-0.5 font-semibold text-text">PT-00842</p>
              </div>
              <div className="rounded-lg border border-border-soft bg-surface-2 px-3 py-2">
                <p className="text-faint">الفرع</p>
                <p className="mt-0.5 font-semibold text-text">فرع المعادي</p>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold text-muted">التحاليل المطلوبة</p>
              <div className="space-y-1.5">
                {["صورة دم كاملة CBC", "وظائف كبد", "سكر صائم"].map((t) => (
                  <label key={t} className="flex items-center gap-2 rounded-lg bg-surface-2 px-3 py-2 text-xs text-text">
                    <input type="checkbox" defaultChecked readOnly className="accent-brand-500" />
                    {t}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-brand-600 to-accent-500 py-2.5 text-xs font-bold text-white"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden />
              طباعة باركود العينة
            </button>
          </div>
        </WindowFrame>

        <div>
          <div className="mx-auto max-w-[220px] lg:mx-0">
            <BarcodeMockup code="PT-00842-01" />
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent-500/30 bg-accent-500/5 p-4">
            <Link2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" aria-hidden />
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-bold text-text">نفس Backend ونفس قاعدة PostgreSQL: </span>
              أي زيارة أو نتيجة يسجّلها الموظف من هذا البرنامج تظهر فورًا في بوابة المريض ولوحة
              الإدارة — بلا أي مزامنة يدوية أو تصدير/استيراد ملفات بين الأنظمة.
            </p>
          </div>
        </div>
      </Reveal>

      <DecisionBlock sectionId="windows-app" />
    </SectionShell>
  );
}
