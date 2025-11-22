import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // This makes it work on localhost (/) AND GitHub Pages (/techni-website/) automatically
  base: command === 'serve' ? '/' : '/techni-website/',
}))