import { Stethoscope, Waves, Gem, CheckCircle2 } from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

interface Direction {
  id: string;
  icon: typeof Stethoscope;
  name: string;
  tagline: string;
  bg: string;
  surface: string;
  primary: string;
  primaryText: string;
  text: string;
  muted: string;
  heroTitle: string;
  heroSubtitle: string;
  palette: { label: string; color: string }[];
  reasons: string[];
}

const DIRECTIONS: Direction[] = [
  {
    id: "medical",
    icon: Stethoscope,
    name: "طبي عصري",
    tagline: "نظافة، وضوح، وثقة سريرية مباشرة",
    bg: "#f4f7fb",
    surface: "#ffffff",
    primary: "#2563eb",
    primaryText: "#ffffff",
    text: "#0f172a",
    muted: "#64748b",
    heroTitle: "نتائجك الطبية بدقة واحترافية",
    heroSubtitle: "منظومة رقمية متكاملة لمعمل الماسة للتحاليل الطبية",
    palette: [
      { label: "أزرق طبي", color: "#2563eb" },
      { label: "سماوي", color: "#0ea5e9" },
      { label: "رمادي داكن", color: "#0f172a" },
      { label: "خلفية فاتحة", color: "#f4f7fb" },
    ],
    reasons: [
      "الأزرق هو اللون الأكثر ارتباطًا بالثقة والمصداقية الطبية عالميًا",
      "خلفية فاتحة توحي بالنظافة والوضوح دون جهد بصري",
      "مألوف لأي مريض تعامل مع مواقع طبية من قبل، فلا يحتاج تعلّم واجهة جديدة",
    ],
  },
  {
    id: "turquoise",
    icon: Waves,
    name: "تركواز هادئ",
    tagline: "دفء بصري يقلل قلق الزيارة الطبية",
    bg: "#f2fbfa",
    surface: "#ffffff",
    primary: "#0d9488",
    primaryText: "#ffffff",
    text: "#0f2e2b",
    muted: "#4b7d76",
    heroTitle: "رعاية تشعرك بالاطمئنان من أول خطوة",
    heroSubtitle: "تجربة رقمية هادئة لمعمل الماسة للتحاليل الطبية",
    palette: [
      { label: "تركواز عميق", color: "#0d9488" },
      { label: "نعناعي فاتح", color: "#5eead4" },
      { label: "أخضر داكن", color: "#0f2e2b" },
      { label: "خلفية فاتحة", color: "#f2fbfa" },
    ],
    reasons: [
      "التركواز يقلل الإحساس بالتوتر المرتبط بالفحوصات الطبية أكثر من الأزرق البارد",
      "يميّز المعمل بصريًا عن الهوية الزرقاء التقليدية لمعظم المعامل والمستشفيات",
      "درجات هادئة تناسب فئة العملاء الباحثين عن تجربة صحية وقائية دورية، لا علاجية فقط",
    ],
  },
  {
    id: "diamond",
    icon: Gem,
    name: "الماسة الفاخرة",
    tagline: "الهوية المستخدمة فعليًا في هذا العرض",
    bg: "#0b0712",
    surface: "#160c28",
    primary: "#7e14ff",
    primaryText: "#ffffff",
    text: "#f6f3fc",
    muted: "#a495c4",
    heroTitle: "من معمل تقليدي إلى تجربة رقمية متكاملة",
    heroSubtitle: "معمل الماسة للتحاليل الطبية — تجربة رقمية بمستوى عالمي",
    palette: [
      { label: "بنفسجي الماسة", color: "#7e14ff" },
      { label: "سماوي كهربائي", color: "#47bfff" },
      { label: "أسود بنفسجي", color: "#0b0712" },
      { label: "أبيض دافئ", color: "#f6f3fc" },
    ],
    reasons: [
      "يترجم اسم 'الماسة' بصريًا بدل أن يبقى اسمًا فقط بلا هوية تعكسه",
      "يموضع المعمل في فئة 'خدمة طبية متميزة' بدل الفئة العامة التقليدية",
      "الأكثر تمايزًا أمام المنافسين الذين يستخدمون جميعًا تقريبًا هويات زرقاء/خضراء تقليدية",
    ],
  },
];

function DirectionMockup({ dir }: { dir: Direction }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{ backgroundColor: dir.bg, borderColor: `${dir.primary}33` }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ backgroundColor: dir.surface, borderBottom: `1px solid ${dir.primary}22` }}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dir.primary }} />
        <span className="text-[10px] font-semibold" style={{ color: dir.muted }}>
          معمل الماسة — {dir.name}
        </span>
      </div>
      <div className="px-6 py-10 text-center">
        <span
          className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: `${dir.primary}22`, color: dir.primary }}
        >
          <dir.icon className="h-5 w-5" aria-hidden />
        </span>
        <h4 className="text-lg font-extrabold" style={{ color: dir.text }}>
          {dir.heroTitle}
        </h4>
        <p className="mx-auto mt-2 max-w-xs text-xs" style={{ color: dir.muted }}>
          {dir.heroSubtitle}
        </p>
        <button
          type="button"
          className="mt-5 rounded-full px-5 py-2 text-xs font-bold"
          style={{ backgroundColor: dir.primary, color: dir.primaryText }}
        >
          احجز فحصك الآن
        </button>
      </div>
    </div>
  );
}

export function DesignDirections() {
  return (
    <SectionShell
      id="design-directions"
      kicker="الهوية البصرية"
      title="ثلاثة اتجاهات تصميمية"
      subtitle="ثلاث هويات بصرية كاملة مطروحة للمقارنة — هذا العرض نفسه مبني على الاتجاه الثالث، لكن القرار النهائي لصاحب المعمل."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {DIRECTIONS.map((dir, i) => (
          <Reveal key={dir.id} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-border-soft bg-surface p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-text">{dir.name}</h3>
                  <p className="text-xs text-faint">{dir.tagline}</p>
                </div>
                {dir.id === "diamond" && (
                  <span className="rounded-full border border-brand-500/40 bg-brand-500/10 px-2.5 py-1 text-[10px] font-bold text-brand-300">
                    المستخدم هنا
                  </span>
                )}
              </div>

              <DirectionMockup dir={dir} />

              <div className="mt-4 flex gap-2">
                {dir.palette.map((p) => (
                  <div key={p.label} className="flex-1 text-center">
                    <div
                      className="mx-auto h-7 w-7 rounded-full border border-border-soft"
                      style={{ backgroundColor: p.color }}
                      title={p.label}
                    />
                  </div>
                ))}
              </div>

              <ul className="mt-4 space-y-2">
                {dir.reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" aria-hidden />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <DecisionBlock sectionId="design-directions" />
    </SectionShell>
  );
}
