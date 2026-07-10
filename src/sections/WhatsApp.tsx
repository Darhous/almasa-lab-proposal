import { Wrench, KeyRound, BellRing, Megaphone, ShieldCheck, Ban, Lock, SplitSquareHorizontal } from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";
import { ChatMockup } from "../components/mockups/ChatMockup";

const CATEGORIES = [
  { icon: Wrench, title: "رسائل الخدمة", text: "تأكيد استلام العينة أو تحديث حالة الطلب — لا تحتاج موافقة تسويقية لأنها ليست إعلانية.", tone: "brand" as const },
  { icon: KeyRound, title: "رسائل التفعيل", text: "رابط تفعيل الحساب ورموز OTP — رسائل أمنية بحتة، منفصلة عن أي محتوى آخر.", tone: "accent" as const },
  { icon: BellRing, title: "إشعار جاهزية النتائج", text: "تنبيه أن النتيجة جاهزة مع رابط للعرض داخل بوابة المريض الآمنة — دون كتابة أي قيمة طبية في الرسالة نفسها.", tone: "success" as const },
  { icon: Megaphone, title: "الرسائل التسويقية", text: "تذكير بفحص دوري أو عرض خدمة جديدة — تُرسل فقط لمن وافق عليها صراحة، ويمكنه إلغاء الاشتراك في أي وقت.", tone: "warning" as const },
];

const RULES = [
  { icon: ShieldCheck, text: "موافقة منفصلة ومستقلة قبل إرسال أي رسالة تسويقية" },
  { icon: Ban, text: "إمكانية إلغاء الاشتراك من الرسائل التسويقية في أي وقت وبخطوة واحدة" },
  { icon: Lock, text: "لا تُرسل أي تفاصيل طبية أو قيم نتائج داخل واتساب مطلقًا" },
  { icon: SplitSquareHorizontal, text: "رسالة جاهزية النتيجة لا تُخلط أبدًا بإعلان أو عرض تسويقي في نفس الرسالة" },
];

export function WhatsApp() {
  return (
    <SectionShell
      id="whatsapp"
      kicker="القناة المفضّلة لدى المريض المصري"
      title="واتساب"
      subtitle="أربعة أنواع رسائل منفصلة تمامًا عن بعضها — لأن خلطها هو أسرع طريقة لتحويل قناة تواصل مفيدة إلى إزعاج يدفع المريض لحظر الرقم."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-3 text-sm font-bold text-text">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <ChatMockup
            title="معمل الماسة"
            messages={[
              { from: "lab", text: "تم استلام عيّنتك بنجاح، وسنبدأ التحليل الآن. رقم متابعتك: PT-00842", time: "9:14 ص" },
              { from: "lab", text: "نتيجتك جاهزة الآن ✅ يمكنك عرضها وتحميلها من بوابة المريض عبر الرابط الآمن أدناه.", time: "2:47 م" },
              { from: "patient", text: "تمام شكرًا، هوصل أشوفها دلوقتي", time: "2:50 م", read: true },
            ]}
          />
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-8 grid gap-3 sm:grid-cols-2">
        {RULES.map((rule) => (
          <div key={rule.text} className="flex items-start gap-2.5 rounded-2xl border border-border-soft bg-surface-2/60 p-4 text-sm text-muted">
            <rule.icon className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
            {rule.text}
          </div>
        ))}
      </Reveal>

      <DecisionBlock sectionId="whatsapp" />
    </SectionShell>
  );
}
