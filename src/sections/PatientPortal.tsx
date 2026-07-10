import {
  FileDown,
  Share2,
  LineChart,
  Activity,
  BrainCircuit,
  BellRing,
  Route,
  ListChecks,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";
import { PhoneFrame } from "../components/mockups/PhoneFrame";
import { MiniChart } from "../components/mockups/MiniChart";

const FEATURES = [
  { icon: ListChecks, title: "كل النتائج", text: "أرشيف كامل لكل تحليل تم إجراؤه في المعمل منذ أول زيارة." },
  { icon: FileDown, title: "تحميل PDF", text: "تنزيل أي تقرير رسمي منسّق وجاهز للطباعة أو الأرشفة." },
  { icon: Share2, title: "مشاركة مع الطبيب", text: "إرسال التقرير مباشرة لطبيب المريض برابط آمن أو ملف." },
  { icon: LineChart, title: "مقارنة النتائج عبر الزمن", text: "رؤية تطور نفس المؤشر من زيارة لأخرى بدل أرقام متفرقة." },
  { icon: Activity, title: "رسم بياني للمؤشرات", text: "تمثيل بصري يوضح المسار الطبيعي أو الخارج عن النطاق المرجعي." },
  { icon: BrainCircuit, title: "شرح النتيجة", text: "شرح مبسّط بالذكاء الاصطناعي لمعنى كل قيمة — للتثقيف فقط." },
  { icon: BellRing, title: "إدارة إشعارات واتساب", text: "تحكّم المريض بنفسه في تفعيل أو إيقاف كل نوع إشعار." },
  { icon: Route, title: "متابعة الحالة", text: "معرفة أين وصل طلب التحليل الحالي في رحلته لحظة بلحظة." },
];

export function PatientPortal() {
  return (
    <SectionShell
      id="patient-portal"
      kicker="المساحة الشخصية للمريض"
      title="بوابة المريض"
      subtitle="بعد تفعيل الحساب، يصبح لدى كل مريض مكان واحد يجمع كل تعاملاته مع المعمل — يعمل من الموبايل والكمبيوتر على حد سواء."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04}>
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
          <PhoneFrame>
            <div className="p-4">
              <p className="text-sm font-bold text-text">الهيموجلوبين — آخر 4 تحاليل</p>
              <div className="mt-3">
                <MiniChart
                  values={[11.8, 12.1, 12.6, 13.1]}
                  labels={["يناير", "أبريل", "يوليو", "أكتوبر"]}
                  unit="g/dL"
                />
              </div>
              <div className="mt-4 rounded-xl border border-accent-500/30 bg-accent-500/5 p-3">
                <p className="flex items-center gap-1.5 text-xs font-bold text-accent-300">
                  <BrainCircuit className="h-3.5 w-3.5" aria-hidden />
                  شرح مبسّط
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                  قيمة الهيموجلوبين لديك تتحسّن تدريجيًا وأصبحت داخل النطاق الطبيعي. هذا شرح
                  تثقيفي فقط ولا يغني عن استشارة الطبيب المعالج.
                </p>
              </div>
            </div>
          </PhoneFrame>
        </Reveal>
      </div>

      <DecisionBlock sectionId="patient-portal" />
    </SectionShell>
  );
}
