// vite.config.ts
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
    chunkSizeWarningLimit: 500, // Optional: alerts you if a chunk gets too big
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 1. Separate core framework (rarely changes, highly cacheable)
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/') || 
              id.includes('node_modules/react-router/')) {
            return 'vendor-core';
          }
          
          // 2. Separate heavy UI/Icon libraries if they are large
          if (id.includes('node_modules/@headlessui') || id.includes('node_modules/@heroicons')) {
            return 'vendor-ui';
          }

          // 3. Let Vite handle smaller libraries automatically 
          // (Removing the 'vendor' catch-all allows Vite to split them per-route)
        },
      },
    },
  },
})
