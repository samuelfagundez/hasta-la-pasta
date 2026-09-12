import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://<usuario>.github.io/hasta-la-pasta/
const BASE = process.env.VITE_BASE ?? '/hasta-la-pasta/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
