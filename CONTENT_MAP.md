# خريطة المحتوى

| # | القسم | ملف المحتوى | مكوّن العرض | يحتوي DecisionBlock |
|---|-------|--------------|--------------|----------------------|
| 0 | Hero | `content/hero.ts` | `sections/Hero.tsx` | لا |
| 1 | ملخص تنفيذي | `content/executiveSummary.ts` | `sections/ExecutiveSummary.tsx` | نعم |
| 2 | التحديات الحالية | `content/challenges.ts` | `sections/Challenges.tsx` | نعم |
| 3 | الحل المقترح | `content/solution.ts` | `sections/Solution.tsx` | نعم |
| 4 | رحلة المريض | `content/patientJourney.ts` | `sections/PatientJourney.tsx` | نعم |
| 5 | الاستعلام عن النتائج | `content/resultsLookup.ts` | `sections/ResultsLookup.tsx` | نعم |
| 6 | بوابة المريض | `content/patientPortal.ts` | `sections/PatientPortal.tsx` | نعم |
| 7 | برنامج Windows | `content/windowsApp.ts` | `sections/WindowsApp.tsx` | نعم |
| 8 | إدخال النتائج يدويًا | `content/resultsEntry.ts` | `sections/ResultsEntry.tsx` | نعم |
| 9 | كتالوج التحاليل | `content/testCatalog.ts` | `sections/TestCatalog.tsx` | نعم |
| 10 | نقل قاعدة البيانات | `content/dataMigration.ts` | `sections/DataMigration.tsx` | نعم |
| 11 | حسابات المرضى الحاليين | `content/patientAccounts.ts` | `sections/PatientAccounts.tsx` | نعم |
| 12 | واتساب | `content/whatsapp.ts` | `sections/WhatsApp.tsx` | نعم |
| 13 | الذكاء الاصطناعي | `content/ai.ts` | `sections/AI.tsx` | نعم |
| 14 | لوحة الإدارة | `content/adminDashboard.ts` | `sections/AdminDashboard.tsx` | نعم |
| 15 | الصلاحيات | `content/permissions.ts` | `sections/Permissions.tsx` | نعم |
| 16 | الأمان | `content/security.ts` | `sections/Security.tsx` | نعم |
| 17 | التقارير | `content/reports.ts` | `sections/Reports.tsx` | نعم |
| 18 | الاتجاهات التصميمية | `content/designDirections.ts` | `sections/DesignDirections.tsx` | نعم |
| 19 | قبل / بعد | `content/beforeAfter.ts` | `sections/BeforeAfter.tsx` | نعم |
| 20 | مراحل التنفيذ | `content/roadmap.ts` | `sections/Roadmap.tsx` | نعم |
| 21 | الأسئلة الشائعة | `content/faq.ts` | `sections/FAQ.tsx` | لا |
| 22 | CTA ختامية | — | `sections/FinalCTA.tsx` | لا |
| 23 | سجل القرار الرئيسي | مُشتق من الحالة | `sections/MasterDecisionLog.tsx` | لا (يعرض/يصدّر) |

## اقتراحات إضافية
`content/suggestions.ts` — قائمة موحّدة، كل عنصر مرتبط بـ `sectionId`، تُعرض داخل `SuggestionsBlock`
أسفل كل `DecisionBlock`.

## نظام القرار
- `types/decision.ts` — الأنواع.
- `store/decisionsStore.ts` — hook `useDecisionsStore` (localStorage key: `almasa-lab-proposal:decisions:v1`).
- `components/decision/DecisionBlock.tsx`
- `components/decision/SuggestionsBlock.tsx`

## هيكل عام
- `components/layout/Header.tsx` (sticky nav + scroll progress)
- `components/layout/Footer.tsx` (روابط + Ahmed Darhous mailto)
- `components/layout/SectionShell.tsx` (غلاف موحّد لكل قسم: عنوان، رقم، محتوى، DecisionBlock)
