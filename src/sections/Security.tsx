import {
  Lock,
  ShieldCheck,
  History,
  TimerReset,
  MonitorSmartphone,
  DatabaseBackup,
  SplitSquareHorizontal,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

const ITEMS = [
  { icon: Lock, title: "تشفير كلمات المرور", text: "لا تُحفظ أي كلمة مرور كنص عادي في أي مكان — تشفير معتمد في كل قاعدة البيانات." },
  { icon: ShieldCheck, title: "صلاحيات دقيقة", text: "نظام الصلاحيات المذكور بالقسم السابق مطبَّق فعليًا على مستوى كل شاشة وكل عملية." },
  { icon: History, title: "سجل تعديلات كامل", text: "كل تعديل حساس (نتيجة، بيانات مريض، صلاحية) يُسجَّل باسم من نفّذه ومتى بالضبط." },
  { icon: TimerReset, title: "روابط مؤقتة", text: "روابط تفعيل الحساب أو استرجاع كلمة المرور تنتهي صلاحيتها تلقائيًا بعد وقت محدد." },
  { icon: MonitorSmartphone, title: "جلسات آمنة", text: "تسجيل الخروج التلقائي بعد فترة خمول، وإمكانية إنهاء أي جلسة مفتوحة عن بعد." },
  { icon: DatabaseBackup, title: "نسخ احتياطي دوري", text: "نسخ احتياطية منتظمة ومختبرة لقاعدة البيانات، لا نسخة واحدة مهملة على جهاز واحد." },
  { icon: SplitSquareHorizontal, title: "فصل التسويق عن البيانات الطبية", text: "قوائم الحملات التسويقية لا تصل مطلقًا لتفاصيل النتائج أو الملفات الطبية للمريض." },
];

export function Security() {
  return (
    <SectionShell
      id="security"
      kicker="ثقة المريض تُبنى هنا"
      title="الأمان"
      subtitle="بيانات طبية حساسة تستحق معايير حماية واضحة ومطبَّقة من أول يوم، لا كإضافة لاحقة."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-3 text-sm font-bold text-text">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <DecisionBlock sectionId="security" />
    </SectionShell>
  );
}
