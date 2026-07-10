import {
  Globe,
  Smartphone,
  Monitor,
  LayoutDashboard,
  Database,
  MessagesSquare,
  BrainCircuit,
  Server,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

const OUTER_TOP = [
  { icon: Globe, title: "موقع المعمل", text: "واجهة تعريفية عامة: الخدمات، الأسعار، الفروع، وطرق التواصل." },
  { icon: Smartphone, title: "بوابة المريض", text: "حساب شخصي لكل مريض يجمع كل نتائجه ومتابعة حالته أونلاين." },
  { icon: MessagesSquare, title: "واتساب", text: "إشعارات وتذكيرات منظّمة، منفصلة تمامًا عن الرسائل التسويقية." },
  { icon: BrainCircuit, title: "شرح النتائج بالذكاء الاصطناعي", text: "شرح مبسّط وتثقيفي للنتيجة، دون تشخيص أو وصف علاج." },
];

const OUTER_BOTTOM = [
  { icon: Monitor, title: "برنامج Windows للموظفين", text: "تسجيل الزيارات، إدخال النتائج، والاعتماد — من نفس بيانات النظام." },
  { icon: LayoutDashboard, title: "لوحة الإدارة", text: "نظرة شاملة على المرضى والزيارات والفروع والتقارير في مكان واحد." },
];

export function Solution() {
  return (
    <SectionShell
      id="solution"
      kicker="التصور العام"
      title="الحل المقترح"
      subtitle="كل الأنظمة التالية ليست منفصلة عن بعضها — بل واجهات مختلفة تتحدث كلها مع نفس القاعدة الموحّدة في المنتصف، فما يُدخله الموظف في برنامج Windows يظهر فورًا في بوابة المريض."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OUTER_TOP.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-sm font-bold text-text">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="relative my-4 flex justify-center py-4">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />
        <div className="flex items-center gap-3 rounded-full border border-brand-500/40 bg-gradient-to-l from-brand-600/20 to-accent-500/20 px-6 py-3 shadow-glow">
          <Server className="h-5 w-5 text-accent-300" aria-hidden />
          <span className="text-sm font-extrabold text-text">Backend موحّد</span>
          <span className="h-1 w-1 rounded-full bg-faint" />
          <Database className="h-5 w-5 text-brand-300" aria-hidden />
          <span className="text-sm font-extrabold text-text">قاعدة بيانات PostgreSQL واحدة</span>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {OUTER_BOTTOM.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-sm font-bold text-text">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <DecisionBlock sectionId="solution" />
    </SectionShell>
  );
}
