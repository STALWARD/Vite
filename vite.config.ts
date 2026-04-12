import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Manual chunking function
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react'
            if (id.includes('@headlessui') || id.includes('@heroicons')) return 'ui'
            if (id.includes('tailwindcss')) return 'tailwind'
            if (id.includes('chart.js')) return 'charts'
            if (id.includes('lodash')) return 'lodash'
            return 'vendor'
          }
        },
      },
    },
    assetsInlineLimit: 10000,
  },
})
