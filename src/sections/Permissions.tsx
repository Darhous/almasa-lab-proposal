import {
  Check,
  Minus,
  X,
  UserRound,
  CreditCard,
  FlaskConical,
  ClipboardCheck,
  Stethoscope,
  Building2,
  Crown,
  ShieldEllipsis,
} from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Reveal } from "../components/ui/Reveal";

type Level = "full" | "partial" | "none";

const LEVEL_ICON: Record<Level, { icon: typeof Check; className: string }> = {
  full: { icon: Check, className: "text-success" },
  partial: { icon: Minus, className: "text-warning" },
  none: { icon: X, className: "text-faint/50" },
};

const CAPABILITIES = ["تسجيل الزيارات", "إدخال النتائج", "اعتماد النتائج طبيًا", "التقارير المالية", "إدارة المستخدمين", "إعدادات النظام"];

const ROLES: { icon: typeof UserRound; name: string; levels: Level[] }[] = [
  { icon: UserRound, name: "استقبال", levels: ["full", "none", "none", "none", "none", "none"] },
  { icon: CreditCard, name: "كاشير", levels: ["full", "none", "none", "partial", "none", "none"] },
  { icon: FlaskConical, name: "فني", levels: ["none", "full", "none", "none", "none", "none"] },
  { icon: ClipboardCheck, name: "مراجع", levels: ["none", "partial", "partial", "none", "none", "none"] },
  { icon: Stethoscope, name: "طبيب اعتماد", levels: ["none", "partial", "full", "none", "none", "none"] },
  { icon: Building2, name: "مدير فرع", levels: ["full", "partial", "none", "partial", "partial", "none"] },
  { icon: Crown, name: "مدير عام", levels: ["full", "full", "full", "full", "full", "partial"] },
  { icon: ShieldEllipsis, name: "مدير نظام", levels: ["full", "full", "full", "full", "full", "full"] },
];

export function Permissions() {
  return (
    <SectionShell
      id="permissions"
      tone="sunken"
      kicker="لكل دور صلاحياته بدقة"
      title="الصلاحيات"
      subtitle="ثماني أدوار محدّدة بدقة، بحيث لا يرى أو يعدّل أي موظف إلا ما يخص عمله فعليًا."
    >
      <Reveal className="overflow-x-auto rounded-3xl border border-border-soft bg-surface p-2">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="p-3 text-right text-xs font-bold text-faint">الدور</th>
              {CAPABILITIES.map((c) => (
                <th key={c} className="p-3 text-center text-xs font-bold text-faint">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROLES.map((role) => (
              <tr key={role.name} className="border-t border-border-soft/60">
                <td className="p-3">
                  <span className="flex items-center gap-2 text-sm font-bold text-text">
                    <role.icon className="h-4 w-4 text-brand-300" aria-hidden />
                    {role.name}
                  </span>
                </td>
                {role.levels.map((level, i) => {
                  const { icon: Icon, className } = LEVEL_ICON[level];
                  return (
                    <td key={i} className="p-3 text-center">
                      <Icon className={`mx-auto h-4 w-4 ${className}`} aria-hidden />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal delay={0.1} className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted">
        <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" aria-hidden /> صلاحية كاملة</span>
        <span className="flex items-center gap-1.5"><Minus className="h-3.5 w-3.5 text-warning" aria-hidden /> صلاحية جزئية</span>
        <span className="flex items-center gap-1.5"><X className="h-3.5 w-3.5 text-faint/50" aria-hidden /> بدون صلاحية</span>
      </Reveal>

      <DecisionBlock sectionId="permissions" />
    </SectionShell>
  );
}
