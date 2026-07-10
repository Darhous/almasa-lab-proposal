import { UserRoundPlus, Link, ShieldQuestion, KeyRound, Baby, UsersRound } from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Timeline } from "../components/ui/Timeline";
import { Reveal } from "../components/ui/Reveal";

const STEPS = [
  { icon: <UserRoundPlus className="h-4 w-4" />, title: "إنشاء حساب غير مفعّل لكل مريض حالي", description: "عند نقل البيانات، يحصل كل مريض قديم على حساب جاهز في الخلفية — لكنه غير نشط حتى يفعّله بنفسه." },
  { icon: <Link className="h-4 w-4" />, title: "ربط كل النتائج القديمة بالحساب", description: "بمجرد التفعيل، يجد المريض تاريخه الكامل من قبل إطلاق النظام الجديد جاهزًا في حسابه." },
  { icon: <ShieldQuestion className="h-4 w-4" />, title: "إرسال رابط تفعيل عبر واتساب", description: "رسالة تفعيل تصل لرقم الهاتف المسجّل، تبدأ عملية التفعيل بخطوة واحدة." },
  { icon: <KeyRound className="h-4 w-4" />, title: "تحقق برمز OTP", description: "رمز تحقق مؤقت يؤكد أن من يفعّل الحساب هو صاحب الرقم فعلًا، قبل الوصول لأي بيانات طبية." },
  { icon: <KeyRound className="h-4 w-4" />, title: "المريض يختار كلمة مروره بنفسه", description: "لا كلمات مرور افتراضية أو مشتركة — المريض هو من يحدد كلمة مروره النهائية." },
];

const SPECIAL_CASES = [
  {
    icon: Baby,
    title: "دعم ولي الأمر والأطفال",
    text: "حساب الطفل يُدار من حساب ولي الأمر حتى سن معينة، فيرى نتائج أبنائه في مكان واحد دون الحاجة لرقم هاتف مستقل لكل طفل.",
  },
  {
    icon: UsersRound,
    title: "معالجة الأرقام المشتركة",
    text: "في حالة رقم هاتف واحد مسجَّل لأكثر من فرد بالعائلة، يتيح النظام تمييز كل مريض بمعرّف مستقل مع رابط تفعيل منفصل لكل فرد، بدل خلط النتائج في حساب واحد.",
  },
];

export function PatientAccounts() {
  return (
    <SectionShell
      id="patient-accounts"
      kicker="آلاف المرضى الحاليين لا يبدؤون من صفر"
      title="حسابات المرضى الحاليين"
      subtitle="تفعيل حساب بوابة المريض لكل من زار المعمل سابقًا، بأمان وبدون إجبار أحد على التسجيل قسرًا."
    >
      <Timeline steps={STEPS} />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {SPECIAL_CASES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                <c.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-3 text-sm font-bold text-text">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <DecisionBlock sectionId="patient-accounts" />
    </SectionShell>
  );
}
