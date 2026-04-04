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
        // Use a function instead of an object for manualChunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react'
            }
            if (id.includes('@headlessui') || id.includes('@heroicons')) {
              return 'ui'
            }
            return 'vendor'
          }
        },
      },
    },
    assetsInlineLimit: 10000,
  },
})
