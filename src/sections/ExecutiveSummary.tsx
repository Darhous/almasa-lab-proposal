import { Lightbulb, TrendingUp, Gift, ShieldAlert } from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";
import { Card } from "../components/ui/Card";

const CARDS = [
  {
    icon: Lightbulb,
    title: "فكرة المشروع",
    text: "توحيد كل ما يخص المعمل — الموقع، بيانات المرضى، النتائج، والتواصل — في منظومة رقمية واحدة تحل محل الاعتماد الكامل على برنامج Access وملفات منفصلة، دون تغيير طريقة عمل الفريق جذريًا دفعة واحدة.",
  },
  {
    icon: TrendingUp,
    title: "الفائدة للمعمل",
    text: "تقليل الوقت الضائع في البحث والاتصالات المتكررة، تقليل الأخطاء اليدوية في إدخال النتائج، فتح قناة تسويق منظمة عبر واتساب، وبناء صورة معمل حديث يثق فيه المريض والطبيب المُحيل.",
  },
  {
    icon: Gift,
    title: "ما الذي سيحصل عليه المعمل",
    text: "موقع تعريفي احترافي، بوابة مريض تعمل ٢٤ ساعة، برنامج سطح مكتب للموظفين متصل بنفس القاعدة، لوحة إدارة شاملة، وقاعدة بيانات PostgreSQL موثوقة تحل محل Access تدريجيًا وبأمان.",
  },
  {
    icon: ShieldAlert,
    title: "لماذا المشروع مهم الآن",
    text: "الاعتماد الكامل على Access يعني خطر فقدان بيانات، صعوبة التوسع لفرع جديد، وغياب أي وسيلة رقمية يتواصل بها المريض مع المعمل — وهي فجوة تزداد وضوحًا كل عام مقارنة بمعامل أخرى بدأت التحول الرقمي.",
  },
];

export function ExecutiveSummary() {
  return (
    <SectionShell
      id="executive-summary"
      kicker="لمحة سريعة قبل الدخول في التفاصيل"
      title="ملخص تنفيذي"
      subtitle="أربع نقاط تلخّص كل ما تحتاج معرفته عن المشروع قبل مراجعة الأقسام التفصيلية التالية."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.06}>
            <Card className="h-full">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/30 to-accent-500/20 text-brand-300">
                <card.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold text-text">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <DecisionBlock sectionId="executive-summary" />
    </SectionShell>
  );
}
