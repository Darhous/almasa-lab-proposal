import { ArrowLeft, Gem } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FinalCTA() {
  return (
    <section id="final-cta" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-brand-500/30 bg-gradient-to-br from-surface-2 via-surface to-surface-2 px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/25 blur-[100px]" aria-hidden />
          <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
            <Gem className="h-6 w-6" aria-hidden />
          </span>
          <h2 className="relative mt-6 text-3xl font-extrabold text-text text-balance sm:text-4xl">
            اعتماد المشروع وبدء مرحلة التحليل
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            راجعت كل قسم؟ الخطوة التالية بسيطة: انزل إلى سجل القرار الرئيسي، تأكد أن كل قرار وملاحظة
            سُجّلا كما تريد، ثم صدّر النطاق المعتمد — وهذا هو المرجع الرسمي الذي نبدأ منه مرحلة تحليل
            نظامكم الحالي فعليًا.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("master-decision-log")}
            className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-brand-600 to-accent-500 px-8 py-4 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.02]"
          >
            الذهاب إلى سجل القرار الرئيسي
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
        </Reveal>
      </Container>
    </section>
  );
}
