export function BarcodeMockup({ code = "8210453997" }: { code?: string }) {
  const bars = Array.from({ length: 46 }, (_, i) => {
    const seed = (code.charCodeAt(i % code.length) * (i + 3)) % 5;
    return seed + 1;
  });
  return (
    <div className="rounded-2xl bg-white p-4">
      <div className="flex h-16 items-end gap-[2px]">
        {bars.map((w, i) => (
          <span
            key={i}
            className="bg-ink"
            style={{ width: `${w}px`, height: `${28 + (w % 3) * 12}px` }}
          />
        ))}
      </div>
      <p className="mt-2 text-center text-xs font-mono tracking-[0.3em] text-ink">{code}</p>
    </div>
  );
}
