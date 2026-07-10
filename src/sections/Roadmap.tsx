import {
  SearchCheck,
  Palette,
  Database,
  Server,
  Globe,
  Smartphone,
  LayoutDashboard,
  Monitor,
  DatabaseBackup,
  Workflow,
  TestTube2,
  Rocket,
  Flag,
  Clock,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Timeline } from "../components/ui/Timeline";
import { Reveal } from "../components/ui/Reveal";

const STEPS = [
  { icon: <SearchCheck className="h-4 w-4" />, title: "تحليل النظام الحالي", description: "فحص فعلي لملف Access والعمليات اليومية الحقيقية داخل المعمل." },
  { icon: <Palette className="h-4 w-4" />, title: "اعتماد الهوية البصرية", description: "اختيار الاتجاه التصميمي النهائي من الأقسام السابقة." },
  { icon: <Database className="h-4 w-4" />, title: "تصميم قاعدة البيانات", description: "بناء هيكل PostgreSQL بناءً على البيانات والعمليات الفعلية المكتشفة." },
  { icon: <Server className="h-4 w-4" />, title: "بناء Backend الموحّد", description: "الطبقة البرمجية التي تخدم كل الأنظمة (الموقع، البوابة، Windows، الإدارة)." },
  { icon: <Globe className="h-4 w-4" />, title: "موقع المعمل", description: "الواجهة العامة التعريفية للمعمل بخدماته وفروعه." },
  { icon: <Smartphone className="h-4 w-4" />, title: "بوابة المريض", description: "حساب المريض، النتائج، المقارنة، والإشعارات." },
  { icon: <LayoutDashboard className="h-4 w-4" />, title: "لوحة الإدارة", description: "الشاشات الإدارية الكاملة لفريق المعمل." },
  { icon: <Monitor className="h-4 w-4" />, title: "برنامج الموظفين (Windows)", description: "أداة العمل اليومي للاستقبال والفنيين والمراجعين." },
  { icon: <DatabaseBackup className="h-4 w-4" />, title: "نقل البيانات من Access", description: "تنفيذ خطة النقل الموصوفة سابقًا بكل خطواتها واختباراتها." },
  { icon: <Workflow className="h-4 w-4" />, title: "دمج واتساب والذكاء الاصطناعي", description: "تفعيل الإشعارات والشرح الذكي للنتائج بعد استقرار الأنظمة الأساسية." },
  { icon: <TestTube2 className="h-4 w-4" />, title: "الاختبارات الشاملة", description: "اختبار كل سيناريو قبل وصوله لأي مستخدم حقيقي." },
  { icon: <Rocket className="h-4 w-4" />, title: "التشغيل التجريبي", description: "تشغيل موازٍ لفترة محدودة مع فريق مختار قبل التعميم الكامل." },
  { icon: <Flag className="h-4 w-4" />, title: "الإطلاق الرسمي", description: "الانتقال الكامل للنظام الجديد كمصدر رسمي وحيد لعمل المعمل." },
];

export function Roadmap() {
  return (
    <SectionShell
      id="roadmap"
      kicker="خطوة بخطوة، دون قفز مراحل"
      title="مراحل التنفيذ"
      subtitle="ثلاث عشرة مرحلة متسلسلة، كل مرحلة تُبنى على ما قبلها ولا تنتقل للتالية إلا بعد استقرارها."
    >
      <Timeline steps={STEPS} />

      <Reveal delay={0.15} className="mt-8 flex items-start gap-2.5 rounded-2xl border border-warning/30 bg-warning/5 p-4 text-sm text-muted">
        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />
        <span>
          <span className="font-bold text-text">لا يوجد جدول زمني نهائي مؤكد حتى الآن. </span>
          أي تقدير مدة قبل فحص ملف Access الفعلي وحجم بياناته الحقيقي سيكون تخمينًا غير دقيق —
          الجدول الزمني الملزم يُحدَّد بعد إتمام مرحلة "تحليل النظام الحالي" مباشرة.
        </span>
      </Reveal>

      <DecisionBlock sectionId="roadmap" />
    </SectionShell>
  );
}
