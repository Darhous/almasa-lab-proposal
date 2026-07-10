import { Ruler, Target, Save, FileEdit, Send, Info } from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { Tabs } from "../components/ui/Tabs";
import { WindowFrame } from "../components/mockups/WindowFrame";

type Status = "طبيعي" | "مرتفع" | "منخفض" | "حرج";

const STATUS_TONE: Record<Status, "success" | "warning" | "critical"> = {
  طبيعي: "success",
  مرتفع: "warning",
  منخفض: "warning",
  حرج: "critical",
};

interface Row {
  name: string;
  value: string;
  unit: string;
  range: string;
  status: Status;
}

const TEMPLATES: Record<string, Row[]> = {
  cbc: [
    { name: "الهيموجلوبين", value: "13.4", unit: "g/dL", range: "13.0 – 17.0", status: "طبيعي" },
    { name: "خلايا الدم البيضاء", value: "12.8", unit: "×10³/µL", range: "4.0 – 11.0", status: "مرتفع" },
    { name: "الصفائح الدموية", value: "410", unit: "×10³/µL", range: "150 – 450", status: "طبيعي" },
  ],
  liver: [
    { name: "ALT", value: "78", unit: "U/L", range: "7 – 56", status: "مرتفع" },
    { name: "AST", value: "34", unit: "U/L", range: "10 – 40", status: "طبيعي" },
    { name: "البيليروبين الكلي", value: "0.8", unit: "mg/dL", range: "0.2 – 1.2", status: "طبيعي" },
  ],
  kidney: [
    { name: "الكرياتينين", value: "1.5", unit: "mg/dL", range: "0.6 – 1.3", status: "مرتفع" },
    { name: "اليوريا", value: "38", unit: "mg/dL", range: "7 – 20", status: "حرج" },
  ],
  thyroid: [
    { name: "TSH", value: "2.1", unit: "µIU/mL", range: "0.4 – 4.0", status: "طبيعي" },
    { name: "T4 الحر", value: "0.9", unit: "ng/dL", range: "0.8 – 1.8", status: "طبيعي" },
  ],
};

const TEMPLATE_TABS = [
  { id: "cbc", label: "صورة دم كاملة CBC" },
  { id: "liver", label: "وظائف الكبد" },
  { id: "kidney", label: "وظائف الكلى" },
  { id: "thyroid", label: "الغدة الدرقية" },
];

const FEATURES = [
  { icon: Save, title: "حفظ تلقائي", text: "لا يفقد الفني عمله عند انقطاع الكهرباء أو الشبكة." },
  { icon: FileEdit, title: "حفظ كمسودة", text: "استكمال إدخال نتيجة معقّدة لاحقًا دون فقدان ما تم إدخاله." },
  { icon: Send, title: "إرسال للمراجعة", text: "تحويل النتيجة لطبيب الاعتماد بضغطة واحدة عند اكتمالها." },
];

export function ResultsEntry() {
  return (
    <SectionShell
      id="results-entry"
      tone="sunken"
      kicker="أسرع وأقل عرضة للخطأ"
      title="إدخال النتائج يدويًا"
      subtitle="الفني يكتب القيمة الرقمية فقط — الوحدة والمعدل المرجعي يظهران تلقائيًا من كتالوج التحاليل المعتمد، والنظام يحدّد الحالة (طبيعي / مرتفع / منخفض / حرج) فور الإدخال."
    >
      <Reveal className="mb-6 flex items-start gap-2.5 rounded-2xl border border-accent-500/30 bg-accent-500/5 p-4 text-sm text-muted">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden />
        الأرقام في المثال التالي توضيحية فقط لشرح آلية عمل الشاشة، وليست قيمًا طبية معتمدة — القوالب
        والقيم المرجعية الفعلية تُبنى من كتالوج التحاليل المعتمد من إدارة المعمل (انظر القسم التالي).
      </Reveal>

      <Tabs items={TEMPLATE_TABS} defaultId="cbc">
        {(active) => (
          <WindowFrame title={`قالب إدخال — ${TEMPLATE_TABS.find((t) => t.id === active)?.label}`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="border-b border-border-soft text-right text-xs text-faint">
                    <th className="py-2 font-semibold">المؤشر</th>
                    <th className="py-2 font-semibold">القيمة</th>
                    <th className="py-2 font-semibold">
                      <span className="inline-flex items-center gap-1"><Ruler className="h-3 w-3" aria-hidden /> الوحدة</span>
                    </th>
                    <th className="py-2 font-semibold">
                      <span className="inline-flex items-center gap-1"><Target className="h-3 w-3" aria-hidden /> المعدل المرجعي</span>
                    </th>
                    <th className="py-2 font-semibold">الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {TEMPLATES[active].map((row) => (
                    <tr key={row.name} className="border-b border-border-soft/60 last:border-0">
                      <td className="py-3 text-text">{row.name}</td>
                      <td className="py-3">
                        <span className="inline-block w-16 rounded-lg border border-brand-500/40 bg-surface-2 px-2 py-1 text-center font-mono text-text">
                          {row.value}
                        </span>
                      </td>
                      <td dir="ltr" className="py-3 text-end text-faint">{row.unit}</td>
                      <td dir="ltr" className="py-3 text-end text-faint">{row.range}</td>
                      <td className="py-3">
                        <Badge tone={STATUS_TONE[row.status]}>{row.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </WindowFrame>
        )}
      </Tabs>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
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

      <DecisionBlock sectionId="results-entry" />
    </SectionShell>
  );
}
