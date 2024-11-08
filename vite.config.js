import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Apple_Clone/",
  plugins: [react(),({
    org: "no-organization-cw3",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})