import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ChevronDown, ShieldCheck, Database, Smartphone } from "lucide-react";
import { Container } from "../components/ui/Container";
import { DiamondMark } from "../components/ui/DiamondMark";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const STATS = [
  { label: "قسمًا تفصيليًا للمراجعة", value: "20" },
  { label: "أنظمة تعمل على قاعدة بيانات واحدة", value: "4" },
  { label: "اقتراحًا إضافيًا جاهزًا للمناقشة", value: "+20" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-32 start-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 end-0 h-[360px] w-[360px] rounded-full bg-accent-500/20 blur-[110px]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/80 px-4 py-1.5 text-xs font-semibold text-muted backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-300" aria-hidden />
            عرض تفاعلي لاعتماد مشروع التحول الرقمي — وليس الموقع النهائي
          </span>

          <div className="mt-8 flex items-center gap-3">
            <DiamondMark className="h-12 w-12 sm:h-14 sm:w-14" />
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] text-text text-balance sm:text-6xl">
            معمل الماسة
            <span className="block bg-gradient-to-l from-brand-300 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              للتحاليل الطبية
            </span>
          </h1>

          <p className="mt-6 text-xl font-bold text-text text-balance sm:text-2xl">
            من معمل تقليدي إلى تجربة رقمية متكاملة
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            صفحة واحدة تشرح تصور المشروع بالكامل: الموقع، بوابة المريض، برنامج الموظفين، لوحة
            الإدارة، ونظام موحّد خلف الكواليس. راجع كل قسم، واعتمده كما هو أو عدّله أو أجّله أو
            استبعده — وقراراتك تُحفظ محليًا فور اتخاذها.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollTo("executive-summary")}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-brand-600 to-accent-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              ابدأ المراجعة من الملخص التنفيذي
              <ArrowLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("master-decision-log")}
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface-2 px-7 py-3.5 text-sm font-bold text-text hover:border-brand-500/50"
            >
              اذهب مباشرة لسجل القرار
            </button>
          </div>

          <div className="mt-14 grid w-full grid-cols-3 gap-3 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border-soft bg-surface/60 px-3 py-5 text-center"
              >
                <div className="text-2xl font-extrabold text-text sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[11px] leading-tight text-faint sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-faint">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-500" aria-hidden /> بدون Backend فعلي في هذا العرض
            </span>
            <span className="flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-accent-500" aria-hidden /> بدون أسرار أو مفاتيح API
            </span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="h-3.5 w-3.5 text-accent-500" aria-hidden /> متجاوب بالكامل مع الموبايل
            </span>
          </div>
        </motion.div>
      </Container>

      <button
        type="button"
        onClick={() => scrollTo("executive-summary")}
        aria-label="انتقل إلى القسم التالي"
        className="print-hidden absolute inset-x-0 bottom-4 mx-auto flex h-10 w-10 animate-float items-center justify-center rounded-full border border-border bg-surface-2 text-muted"
      >
        <ChevronDown className="h-4 w-4" aria-hidden />
      </button>
    </section>
  );
}
