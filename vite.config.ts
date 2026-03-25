import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // 1. Splits CSS into smaller files based on JS chunks
    cssCodeSplit: true, 
    rollupOptions: {
      output: {
        // 2. Manual Chunking: Moves React & Tailwind internals 
        // into a separate 'vendor' file to keep your 'index.js' small.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
