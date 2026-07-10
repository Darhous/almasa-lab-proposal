import { QrCode, UserCircle2, ShieldCheck, Lock, History, Download } from "lucide-react";
import { SectionShell } from "../components/layout/SectionShell";
import { DecisionBlock } from "../components/decision/DecisionBlock";
import { Tabs } from "../components/ui/Tabs";
import { Reveal } from "../components/ui/Reveal";
import { BarcodeMockup } from "../components/mockups/BarcodeMockup";
import { PhoneFrame } from "../components/mockups/PhoneFrame";

export function ResultsLookup() {
  return (
    <SectionShell
      id="results-lookup"
      tone="sunken"
      kicker="طريقتان، لكل مريض ما يناسبه"
      title="الاستعلام عن النتائج"
      subtitle="ليس كل مريض يريد إنشاء حساب لمجرد رؤية نتيجة اليوم — لذلك نوفّر طريقتين متكاملتين لا تُلغي إحداهما الأخرى."
    >
      <Tabs
        items={[
          { id: "barcode", label: "الاستعلام السريع بالباركود", icon: <QrCode className="h-4 w-4" /> },
          { id: "account", label: "حساب المريض الكامل", icon: <UserCircle2 className="h-4 w-4" /> },
        ]}
      >
        {(active) =>
          active === "barcode" ? (
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <Reveal>
                <h3 className="text-xl font-bold text-text">استعلام فوري بدون تسجيل دخول</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  المريض يدخل رقم الباركود المطبوع على إيصاله فقط، ثم يُطلب منه تحقق إضافي بسيط
                  (مثل آخر 4 أرقام من هاتفه أو تاريخ الميلاد) لمنع أي شخص آخر من الوصول لنتيجة ليست
                  له لمجرد معرفة الرقم.
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-muted">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    التحقق الإضافي يمنع الوصول العشوائي للنتائج حتى مع تسرب رقم الباركود
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    مناسب لكبار السن أو من لا يرغب بإنشاء حساب لمرة واحدة
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    يعرض نتيجة هذا الطلب فقط، دون الوصول للتاريخ الطبي الكامل
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mx-auto max-w-sm rounded-3xl border border-border-soft bg-surface p-6">
                  <BarcodeMockup />
                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-border-soft bg-surface-2 px-4 py-3 text-sm text-muted">
                      رقم الباركود: <span className="text-text">8210453997</span>
                    </div>
                    <div className="rounded-xl border border-border-soft bg-surface-2 px-4 py-3 text-sm text-muted">
                      آخر 4 أرقام من الهاتف: <span className="text-text">••••3391</span>
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl bg-gradient-to-l from-brand-600 to-accent-500 py-3 text-sm font-bold text-white"
                    >
                      عرض النتيجة
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          ) : (
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <Reveal>
                <h3 className="text-xl font-bold text-text">حساب دائم لكل تاريخ المريض</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  بعد تفعيل حسابه مرة واحدة، يدخل المريض بكلمة المرور فيرى كل نتائجه — القديمة
                  والجديدة — في مكان واحد، مع إمكانية المقارنة والتحميل والمشاركة مع طبيبه.
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-muted">
                    <Lock className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden />
                    حماية بكلمة مرور وجلسة آمنة، بدل الاعتماد على رقم الباركود فقط
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted">
                    <History className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden />
                    أرشيف كامل لكل زيارة سابقة دون الحاجة لحفظ الإيصالات الورقية
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted">
                    <Download className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden />
                    تحميل أي تقرير قديم في أي وقت — حتى بعد سنوات من التحليل
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <PhoneFrame>
                  <div className="p-4">
                    <p className="text-sm font-bold text-text">مرحبًا، أحمد 👋</p>
                    <p className="text-xs text-faint">كل نتائجك في مكان واحد</p>
                    <div className="mt-4 space-y-2.5">
                      {[
                        { name: "صورة دم كاملة CBC", date: "قبل يومين", tone: "success" },
                        { name: "وظائف كبد", date: "قبل شهر", tone: "warning" },
                        { name: "سكر صائم", date: "قبل 3 أشهر", tone: "success" },
                      ].map((r) => (
                        <div
                          key={r.name}
                          className="flex items-center justify-between rounded-xl border border-border-soft bg-surface-2 px-3 py-2.5"
                        >
                          <div>
                            <p className="text-xs font-bold text-text">{r.name}</p>
                            <p className="text-[11px] text-faint">{r.date}</p>
                          </div>
                          <span
                            className={`h-2 w-2 rounded-full ${
                              r.tone === "success" ? "bg-success" : "bg-warning"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </PhoneFrame>
              </Reveal>
            </div>
          )
        }
      </Tabs>

      <DecisionBlock sectionId="results-lookup" />
    </SectionShell>
  );
}
