import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // 1. Import the Tailwind plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Add it to the plugins list
  ],
})
