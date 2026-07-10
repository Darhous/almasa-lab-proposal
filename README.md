# معمل الماسة للتحاليل الطبية — عرض تفاعلي لمشروع التحول الرقمي

صفحة واحدة (Single Page) بالعربية بالكامل (RTL) تشرح تصور مشروع التحول الرقمي لمعمل الماسة
للتحاليل الطبية: الموقع، بوابة المريض، برنامج الموظفين، لوحة الإدارة، ونظام موحّد خلف الكواليس.

هذه الصفحة **ليست** الموقع النهائي للمعمل، بل عرض اكتشاف وقرار (Discovery & Proposal Website)
يتيح لصاحب المعمل مراجعة كل قسم واعتماده كما هو، أو تعديله، أو تأجيله، أو استبعاده — مع تسجيل
ملاحظاته. النتيجة تتحول إلى **مرجع رسمي (Master Decision Log)** لبدء التنفيذ الفعلي لاحقًا.

## المكدس التقني

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion
- lucide-react (+ أيقونات علامات تجارية مخصصة)
- `localStorage` لحفظ قرارات وملاحظات الزائر — بدون Backend وبدون أي API مدفوعة

## التشغيل محليًا

```bash
npm install
npm run dev
```

## البناء

```bash
npm run build
npm run preview
```

## النشر

يُنشر الموقع تلقائيًا على GitHub Pages عبر GitHub Actions عند كل push إلى الفرع الرئيسي
(`.github/workflows/deploy.yml`).

## الوثائق المرافقة

- [`PLAN.md`](./PLAN.md) — خطة التنفيذ الكاملة.
- [`CONTENT_MAP.md`](./CONTENT_MAP.md) — خريطة محتوى كل قسم.
- [`DECISION_LOG.md`](./DECISION_LOG.md) — القرارات التقنية/التصميمية أثناء البناء.
- [`FEATURE_MATRIX.md`](./FEATURE_MATRIX.md) — مصفوفة الاقتراحات الإضافية.
- [`IMPLEMENTATION_LOG.md`](./IMPLEMENTATION_LOG.md) — سجل التنفيذ الزمني.
