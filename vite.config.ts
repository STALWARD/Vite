import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // 1. Merge all CSS into one file to shorten the discovery chain
    cssCodeSplit: false, 
    rollupOptions: {
      output: {
        // 2. Remove manualChunks! 6KB is too small to justify a separate file.
        manualChunks: undefined, 
      },
    },
    // 3. Optional: Increase limit to inline small assets as base64
    assetsInlineLimit: 10000, 
  },
})
