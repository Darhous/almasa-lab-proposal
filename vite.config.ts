import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// اسم الريبو يُستخدم كـ base path حتى يعمل الموقع على GitHub Pages تحت مسار فرعي
const REPO_NAME = 'almasa-lab-proposal'

export default defineConfig({
  base: `/${REPO_NAME}/`,
  plugins: [react(), tailwindcss()],
})
