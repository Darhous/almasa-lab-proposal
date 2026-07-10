export function MiniChart({
  values,
  labels,
  unit,
  refLabel = "المعدل الطبيعي",
}: {
  values: number[];
  labels: string[];
  unit: string;
  refLabel?: string;
}) {
  const width = 280;
  const height = 120;
  const max = Math.max(...values) * 1.15;
  const min = Math.min(...values) * 0.85;
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * width;
    const y = height - ((v - min) / (max - min || 1)) * height;
    return [x, y] as const;
  });
  const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");

  return (
    <div className="rounded-2xl border border-border-soft bg-surface p-4">
      <div className="flex items-center justify-between text-xs text-faint">
        <span>{refLabel}</span>
        <span>الوحدة: {unit}</span>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="mt-2 w-full" role="img" aria-label="رسم بياني لتغير قيمة التحليل عبر الزمن">
        <line x1="0" y1={height * 0.5} x2={width} y2={height * 0.5} stroke="var(--color-border-soft)" strokeDasharray="4 4" />
        <path d={path} fill="none" stroke="url(#chart-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="chart-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7e14ff" />
            <stop offset="1" stopColor="#47bfff" />
          </linearGradient>
        </defs>
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="#0b0712" stroke="#c084fc" strokeWidth="2" />
        ))}
      </svg>
      <div className="mt-1 flex justify-between text-[10px] text-faint">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}
