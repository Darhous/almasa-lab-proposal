export interface SectionMeta {
  id: string;
  number: number | null;
  title: string;
  navLabel: string;
  group: string;
  hasDecision: boolean;
}

export const NAV_GROUPS = [
  "الفكرة والرؤية",
  "تجربة المريض",
  "الأنظمة الداخلية",
  "الإدارة والتقارير",
  "التصميم والخطة",
] as const;

export const SECTIONS: SectionMeta[] = [
  { id: "hero", number: null, title: "الرئيسية", navLabel: "الرئيسية", group: "الفكرة والرؤية", hasDecision: false },
  { id: "executive-summary", number: 1, title: "ملخص تنفيذي", navLabel: "الملخص التنفيذي", group: "الفكرة والرؤية", hasDecision: true },
  { id: "challenges", number: 2, title: "التحديات الحالية", navLabel: "التحديات الحالية", group: "الفكرة والرؤية", hasDecision: true },
  { id: "solution", number: 3, title: "الحل المقترح", navLabel: "الحل المقترح", group: "الفكرة والرؤية", hasDecision: true },
  { id: "patient-journey", number: 4, title: "رحلة المريض", navLabel: "رحلة المريض", group: "تجربة المريض", hasDecision: true },
  { id: "results-lookup", number: 5, title: "الاستعلام عن النتائج", navLabel: "الاستعلام عن النتائج", group: "تجربة المريض", hasDecision: true },
  { id: "patient-portal", number: 6, title: "بوابة المريض", navLabel: "بوابة المريض", group: "تجربة المريض", hasDecision: true },
  { id: "windows-app", number: 7, title: "برنامج الموظفين (Windows)", navLabel: "برنامج الموظفين", group: "الأنظمة الداخلية", hasDecision: true },
  { id: "results-entry", number: 8, title: "إدخال النتائج يدويًا", navLabel: "إدخال النتائج", group: "الأنظمة الداخلية", hasDecision: true },
  { id: "test-catalog", number: 9, title: "كتالوج التحاليل", navLabel: "كتالوج التحاليل", group: "الأنظمة الداخلية", hasDecision: true },
  { id: "data-migration", number: 10, title: "نقل قاعدة البيانات", navLabel: "نقل قاعدة البيانات", group: "الأنظمة الداخلية", hasDecision: true },
  { id: "patient-accounts", number: 11, title: "حسابات المرضى الحاليين", navLabel: "حسابات المرضى", group: "الأنظمة الداخلية", hasDecision: true },
  { id: "whatsapp", number: 12, title: "واتساب", navLabel: "واتساب", group: "الأنظمة الداخلية", hasDecision: true },
  { id: "ai", number: 13, title: "الذكاء الاصطناعي", navLabel: "الذكاء الاصطناعي", group: "الأنظمة الداخلية", hasDecision: true },
  { id: "admin-dashboard", number: 14, title: "لوحة الإدارة", navLabel: "لوحة الإدارة", group: "الإدارة والتقارير", hasDecision: true },
  { id: "permissions", number: 15, title: "الصلاحيات", navLabel: "الصلاحيات", group: "الإدارة والتقارير", hasDecision: true },
  { id: "security", number: 16, title: "الأمان", navLabel: "الأمان", group: "الإدارة والتقارير", hasDecision: true },
  { id: "reports", number: 17, title: "التقارير", navLabel: "التقارير", group: "الإدارة والتقارير", hasDecision: true },
  { id: "design-directions", number: 18, title: "الاتجاهات التصميمية", navLabel: "الاتجاهات التصميمية", group: "التصميم والخطة", hasDecision: true },
  { id: "before-after", number: 19, title: "قبل وبعد", navLabel: "قبل وبعد", group: "التصميم والخطة", hasDecision: true },
  { id: "roadmap", number: 20, title: "مراحل التنفيذ", navLabel: "مراحل التنفيذ", group: "التصميم والخطة", hasDecision: true },
  { id: "faq", number: 21, title: "الأسئلة الشائعة", navLabel: "الأسئلة الشائعة", group: "التصميم والخطة", hasDecision: false },
  { id: "final-cta", number: null, title: "اعتماد المشروع", navLabel: "اعتماد المشروع", group: "التصميم والخطة", hasDecision: false },
  { id: "master-decision-log", number: null, title: "سجل القرار الرئيسي", navLabel: "سجل القرار", group: "التصميم والخطة", hasDecision: false },
];

export const DECISION_SECTIONS = SECTIONS.filter((s) => s.hasDecision);

export function getSectionMeta(id: string): SectionMeta {
  const found = SECTIONS.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown section id: ${id}`);
  return found;
}
