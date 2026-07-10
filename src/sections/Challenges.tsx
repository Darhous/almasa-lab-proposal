import {
  DatabaseZap,
  UserX,
  History,
  PhoneCall,
  RadarIcon,
  MessagesSquare,
  KeyboardIcon,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

const CHALLENGES = [
  {
    icon: DatabaseZap,
    title: "الاعتماد الكامل على Microsoft Access",
    text: "قاعدة بيانات تعمل على جهاز واحد أو شبكة محلية محدودة، صعبة التوسّع، وغير مصمّمة أصلًا للعمل المتزامن من عدة فروع أو لتحمّل نمو بيانات المعمل.",
  },
  {
    icon: UserX,
    title: "لا يوجد حساب موحّد للمريض",
    text: "كل زيارة أو نتيجة تُحفظ بمعزل عن الأخرى، فلا يملك المريض مكانًا واحدًا يجمع كل تاريخه الطبي مع المعمل.",
  },
  {
    icon: History,
    title: "صعوبة الوصول للنتائج السابقة",
    text: "استرجاع نتيجة قديمة يحتاج بحثًا يدويًا من الموظف، وأحيانًا مراجعة أرشيف ورقي، مما يبطئ خدمة المريض والطبيب المُحيل.",
  },
  {
    icon: PhoneCall,
    title: "كثرة الاتصالات للاستفسار",
    text: "نسبة كبيرة من مكالمات الاستقبال يوميًا هي أسئلة متكررة: هل النتيجة جاهزة؟ هل وصلت العينة؟ ما السعر؟ — وقت فريق كامل يُستهلك في إجابات يمكن أتمتتها.",
  },
  {
    icon: RadarIcon,
    title: "لا متابعة لحالة التحليل",
    text: "المريض لا يعرف أين وصلت عينته: هل سُحبت فقط؟ هل وصلت المعمل؟ هل هي قيد الفحص أم المراجعة؟ — غياب كامل للشفافية في الرحلة.",
  },
  {
    icon: MessagesSquare,
    title: "لا تسويق منظّم عبر واتساب",
    text: "لا توجد قناة تواصل مباشرة ومنظّمة لتذكير المرضى بالفحص الدوري أو إبلاغهم بعروض وخدمات جديدة، رغم أن واتساب هو القناة الأكثر استخدامًا لديهم.",
  },
  {
    icon: KeyboardIcon,
    title: "إدخال النتائج يدويًا بطريقة تحتاج تبسيطًا",
    text: "الموظف يكتب القيمة والوحدة والمعدل المرجعي يدويًا في كل مرة، مما يزيد فرصة الخطأ البشري ويُبطئ اعتماد النتائج في أوقات الذروة.",
  },
];

export function Challenges() {
  return (
    <SectionShell
      id="challenges"
      tone="sunken"
      kicker="نقطة البداية"
      title="التحديات الحالية"
      subtitle="هذه هي المشكلات التي لاحظناها في طريقة العمل الحالية، وهي الأساس الذي بُني عليه كل حل مقترح في الأقسام التالية."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger/10 text-danger">
                <c.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold text-text">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <DecisionBlock sectionId="challenges" />
    </SectionShell>
  );
}
