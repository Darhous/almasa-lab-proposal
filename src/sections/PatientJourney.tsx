import {
  ClipboardList,
  Droplet,
  PackageCheck,
  FlaskConical,
  ScanSearch,
  CheckCircle2,
  FileDown,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Timeline } from "../components/ui/Timeline";
import { Reveal } from "../components/ui/Reveal";

const STEPS = [
  { icon: <ClipboardList className="h-4 w-4" />, title: "تم تسجيل طلب التحليل", description: "الموظف أو المريض يسجّل طلب التحليل المطلوب، ويحصل المريض على رقم متابعة فريد." },
  { icon: <Droplet className="h-4 w-4" />, title: "تم سحب العينة", description: "يتم سحب العينة من المريض وربطها برقم الباركود الخاص بطلبه." },
  { icon: <PackageCheck className="h-4 w-4" />, title: "وصلت العينة إلى المعمل", description: "تأكيد استلام العينة داخل المعمل (مهم بشكل خاص عند وجود أكثر من فرع أو نقطة تجميع)." },
  { icon: <FlaskConical className="h-4 w-4" />, title: "جارٍ إجراء التحاليل", description: "الفني يبدأ إجراء التحليل فعليًا، وتتغير حالة الطلب لتعكس ذلك مباشرة." },
  { icon: <ScanSearch className="h-4 w-4" />, title: "النتائج قيد المراجعة", description: "النتائج الأولية جاهزة وتنتظر مراجعة واعتماد من طبيب أو مسؤول مختص قبل النشر." },
  { icon: <CheckCircle2 className="h-4 w-4" />, title: "تم اعتماد النتائج", description: "تم التأكد من صحة النتائج رسميًا، ولم يتبقَّ سوى إتاحتها للمريض." },
  { icon: <FileDown className="h-4 w-4" />, title: "النتيجة جاهزة للعرض والتحميل", description: "يصل إشعار للمريض عبر واتساب، ويمكنه عرض النتيجة أو تحميلها كملف PDF فورًا." },
];

export function PatientJourney() {
  return (
    <SectionShell
      id="patient-journey"
      kicker="من لحظة الطلب حتى استلام النتيجة"
      title="رحلة المريض"
      subtitle="سبع مراحل واضحة يمر بها طلب التحليل، يراها المريض لحظة بلحظة بدل الانتظار في مجهول."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Timeline steps={STEPS} />

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-border-soft bg-surface-2/60 p-6">
            <p className="text-sm font-bold text-text">لماذا هذا مهم؟</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              اليوم، السؤال الأكثر تكرارًا على الاستقبال هو "فين النتيجة بتاعتي؟". عرض هذه المراحل
              بوضوح للمريض — سواء عبر بوابة المريض أو رسالة واتساب — يحوّل هذا السؤال من مكالمة
              يومية متكررة إلى معلومة يراها المريض بنفسه في أي وقت.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "تقليل الاتصالات المتكررة للاستفسار عن حالة العينة",
                "شفافية كاملة تبني ثقة المريض بالمعمل",
                "تنبيه تلقائي بدل انتظار المريض السلبي",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <DecisionBlock sectionId="patient-journey" />
    </SectionShell>
  );
}
