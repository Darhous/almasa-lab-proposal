import {
  SearchCheck,
  SprayCan,
  CopyX,
  PhoneCall,
  DatabaseBackup,
  ClipboardCheck,
  HardDriveDownload,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Timeline } from "../components/ui/Timeline";
import { Reveal } from "../components/ui/Reveal";

const STEPS = [
  { icon: <HardDriveDownload className="h-4 w-4" />, title: "نسخة احتياطية كاملة من Access", description: "أول خطوة قبل أي لمسة للبيانات: نسخة كاملة محفوظة بأمان، لا يبدأ أي تعديل قبل التأكد من وجودها." },
  { icon: <SearchCheck className="h-4 w-4" />, title: "فحص البيانات الحالية", description: "مراجعة شاملة لهيكل الجداول والحقول الفعلية الموجودة في ملف Access، لفهم واقع البيانات كما هي." },
  { icon: <SprayCan className="h-4 w-4" />, title: "تنظيف البيانات", description: "تصحيح التنسيقات غير المتّسقة (تواريخ، أسماء، أرقام) دون حذف أي سجل حقيقي." },
  { icon: <CopyX className="h-4 w-4" />, title: "إزالة التكرارات", description: "دمج السجلات المكرّرة لنفس المريض التي نتجت عن إدخال يدوي متكرر عبر السنوات." },
  { icon: <PhoneCall className="h-4 w-4" />, title: "توحيد صيغة أرقام الهواتف", description: "صيغة واحدة موحّدة لكل الأرقام حتى تعمل إشعارات واتساب وتفعيل الحسابات بشكل صحيح." },
  { icon: <DatabaseBackup className="h-4 w-4" />, title: "النقل إلى PostgreSQL", description: "نقل البيانات النظيفة والمنظّمة إلى القاعدة الجديدة ضمن بيئة اختبار منفصلة أولًا." },
  { icon: <ClipboardCheck className="h-4 w-4" />, title: "اختبار ومقارنة", description: "مطابقة عدد السجلات والقيم بين Access والقاعدة الجديدة قبل اعتماد النقل نهائيًا." },
];

const QA = [
  {
    q: "ما الذي سيتم نقله؟",
    a: "كل بيانات المرضى والزيارات والنتائج التاريخية الموجودة فعليًا في Access — دون أي حذف انتقائي أو استبعاد غير مبرر.",
  },
  {
    q: "كيف لن نفقد البيانات؟",
    a: "العمل دائمًا على نسخة، وليس على الملف الأصلي مباشرة، مع الاحتفاظ بملف Access الأصلي كما هو حتى بعد اكتمال النقل بنجاح.",
  },
  {
    q: "كيف نتحقق من نجاح النقل؟",
    a: "مطابقة عدد السجلات، وعينات عشوائية من كل جدول، ومقارنة يدوية لحالات حقيقية معروفة قبل اعتماد القاعدة الجديدة كمصدر رسمي.",
  },
  {
    q: "متى تؤخذ النسخة الاحتياطية؟",
    a: "قبل أي خطوة فحص أو تنظيف، وتُحفظ في أكثر من مكان آمن — وهذا شرط أساسي وليس تفصيلًا اختياريًا.",
  },
];

export function DataMigration() {
  return (
    <SectionShell
      id="data-migration"
      tone="sunken"
      kicker="أهم مرحلة تقنية في المشروع بأكمله"
      title="نقل قاعدة البيانات"
      subtitle="من Microsoft Access إلى PostgreSQL — بخطوات متدرّجة وقابلة للتحقق، وليس نقلًا دفعة واحدة بلا رجعة."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Timeline steps={STEPS} />

        <div className="space-y-4">
          {QA.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06}>
              <div className="rounded-2xl border border-border-soft bg-surface p-5">
                <p className="text-sm font-bold text-text">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <DecisionBlock sectionId="data-migration" />
    </SectionShell>
  );
}
