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
    chunkSizeWarningLimit: 600, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 1. Core Framework (React essentials)
            if (id.includes('react/') || id.includes('react-dom/') || id.includes('react-router/')) {
              return 'vendor-core';
            }
            
            // 2. Isolate heavy Node-polyfilled libs (gray-matter, buffer)
            if (id.includes('gray-matter') || id.includes('buffer')) {
              return 'vendor-utils';
            }

            // 3. Heavy Page-Specific Libs
            if (id.includes('react-big-calendar')) return 'vendor-calendar';
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('react-slick') || id.includes('slick-carousel')) return 'vendor-carousel';
            if (id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('react-markdown') || id.includes('remark-gfm')) return 'vendor-content';

            // 4. Default: Let Vite group smaller libraries into the chunks that use them
          }
        },
      },
    },
  },
})
