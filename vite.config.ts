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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 1. Group React core separately (High cache priority)
            if (id.includes('react')) return 'react-core';
            
            // 2. Isolate heavy Calendar & Date logic
            if (id.includes('react-big-calendar') || id.includes('date-fns')) {
              return 'calendar-vendor';
            }

            // 3. Isolate Animations (GSAP)
            if (id.includes('gsap')) return 'animations';

            // 4. Isolate Markdown parsing (Remark/Markdown)
            if (id.includes('react-markdown') || id.includes('remark')) {
              return 'content-parser';
            }

            // 5. Keep UI icons/components separate
            if (id.includes('@headlessui') || id.includes('@heroicons') || id.includes('react-icons')) {
              return 'ui-vendor';
            }

            // Everything else goes to a general vendor chunk
            return 'vendor';
          }
        },
      },
    },
    // Reduced from 10000 to 4096 to prevent inlining large assets into JS
    assetsInlineLimit: 4096, 
  },
})
