import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: ".",
  base: "./", // electron에서 dist/index.html 로드 시 필요
  build: {
    outDir: "dist",
  },
})
