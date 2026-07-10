import {
  MessageSquareText,
  Highlighter,
  Stethoscope,
  ShieldAlert,
  GitCompareArrows,
  XOctagon,
  Pill,
  Syringe,
  BrainCircuit,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

const FEATURES = [
  { icon: MessageSquareText, title: "شرح مبسّط", text: "ترجمة القيم والمصطلحات الطبية إلى لغة يفهمها أي شخص غير متخصص." },
  { icon: Highlighter, title: "إبراز القيم المهمة", text: "لفت انتباه المريض للقيم الخارجة عن النطاق الطبيعي بدل غرقه في جدول أرقام." },
  { icon: Stethoscope, title: "اقتراح التخصص الطبي المناسب", text: "توجيه عام لنوع الطبيب الأنسب لمتابعة هذه النتيجة (باطنة، غدد صماء...)." },
  { icon: ShieldAlert, title: "نصيحة مؤقتة آمنة", text: "إرشادات عامة غير طبية (مثل أهمية المتابعة قريبًا) دون أي توصية علاجية محددة." },
  { icon: GitCompareArrows, title: "مقارنة بنتائج سابقة", text: "توضيح ما إذا كان المؤشر يتحسّن أو يتراجع مقارنة بالتحاليل السابقة لنفس المريض." },
];

const BOUNDARIES = [
  { icon: XOctagon, text: "لا يشخّص أي حالة مرضية" },
  { icon: Pill, text: "لا يصف أي علاج أو دواء" },
  { icon: Syringe, text: "لا يوقف أو يعدّل أي دواء موصوف من طبيب" },
  { icon: BrainCircuit, text: "كل شرح يظهر هو للتثقيف فقط، ولا يغني عن استشارة الطبيب المعالج" },
];

export function AI() {
  return (
    <SectionShell
      id="ai"
      tone="sunken"
      kicker="مساعد تثقيفي، لا بديل عن الطبيب"
      title="الذكاء الاصطناعي"
      subtitle="طبقة شرح إضافية فوق النتيجة الخام، تساعد المريض على فهم ما يراه دون أن تتجاوز حدودها كأداة تثقيفية."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                  <f.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-3 text-sm font-bold text-text">{f.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-border-soft bg-surface p-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                <BrainCircuit className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-bold text-text">شرح نتيجة: وظائف الغدة الدرقية</p>
                <p className="text-[11px] text-faint">شرح تثقيفي تلقائي</p>
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p>
                قيمة <span className="font-semibold text-text">TSH</span> لديك ضمن النطاق الطبيعي،
                وهذا مؤشر جيد على أن الغدة الدرقية تعمل بانتظام حاليًا.
              </p>
              <p>
                مقارنة بتحليلك قبل 6 أشهر، القيمة تحسّنت واقتربت من منتصف النطاق الطبيعي.
              </p>
              <p className="rounded-xl bg-surface-2 px-3 py-2 text-xs">
                <span className="font-bold text-accent-300">التخصص المقترح للمتابعة: </span>
                طبيب الغدد الصماء، إذا رغبت في متابعة دورية.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-8 rounded-3xl border border-danger/30 bg-danger/5 p-6">
        <p className="mb-4 text-sm font-bold text-text">حدود صارمة لا يتجاوزها الذكاء الاصطناعي هنا</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {BOUNDARIES.map((b) => (
            <div key={b.text} className="flex items-start gap-2.5 text-sm text-muted">
              <b.icon className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden />
              {b.text}
            </div>
          ))}
        </div>
      </Reveal>

      <DecisionBlock sectionId="ai" />
    </SectionShell>
  );
}
