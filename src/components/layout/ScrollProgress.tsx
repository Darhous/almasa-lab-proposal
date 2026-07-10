import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    function update() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="print-hidden pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-l from-accent-500 via-brand-500 to-brand-300 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
