import { useState, type ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export function Tabs({
  items,
  defaultId,
  children,
}: {
  items: TabItem[];
  defaultId?: string;
  children: (activeId: string) => ReactNode;
}) {
  const [active, setActive] = useState(defaultId ?? items[0]?.id);

  return (
    <div>
      <div
        role="tablist"
        className="flex flex-wrap gap-2 rounded-2xl border border-border-soft bg-surface p-1.5"
      >
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            type="button"
            aria-selected={active === item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
              active === item.id
                ? "bg-gradient-to-l from-brand-600 to-accent-600 text-white shadow-glow"
                : "text-muted hover:text-text"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-6">{children(active)}</div>
    </div>
  );
}
