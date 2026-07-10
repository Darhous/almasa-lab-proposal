import { WhatsappIcon } from "../ui/BrandIcons";
import { Check, CheckCheck } from "lucide-react";

export interface ChatMessage {
  from: "lab" | "patient";
  text: string;
  time: string;
  read?: boolean;
}

export function ChatMockup({
  title,
  messages,
}: {
  title: string;
  messages: ChatMessage[];
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-glow">
      <div className="flex items-center gap-3 bg-[#0f2f26] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f6b53]">
          <WhatsappIcon className="h-4 w-4 text-[#7ee3b5]" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">{title}</p>
          <p className="text-[11px] text-[#8fd6bc]">حساب واتساب أعمال موثّق</p>
        </div>
      </div>
      <div
        className="space-y-3 px-4 py-5"
        style={{
          background:
            "repeating-linear-gradient(135deg, #131022 0px, #131022 2px, #16112a 2px, #16112a 4px)",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "lab" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                m.from === "lab"
                  ? "rounded-tl-sm bg-surface-2 text-text"
                  : "rounded-tr-sm bg-[#1f6b53] text-white"
              }`}
            >
              <p className="text-balance">{m.text}</p>
              <span
                className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                  m.from === "lab" ? "text-faint" : "text-[#c8ecdf]"
                }`}
              >
                {m.time}
                {m.from === "patient" &&
                  (m.read ? (
                    <CheckCheck className="h-3 w-3 text-accent-300" aria-hidden />
                  ) : (
                    <Check className="h-3 w-3" aria-hidden />
                  ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
