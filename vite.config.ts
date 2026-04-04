import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Keep CSS splitting enabled so critical styles can be inlined separately
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Manual chunking: separate vendor libraries and app code
        manualChunks: {
          react: ['react', 'react-dom'],
          ui: ['@headlessui/react', '@heroicons/react'],
        },
      },
    },
    // Inline small assets as base64 to reduce requests
    assetsInlineLimit: 10000,
  },
})
