// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// vite.config.ts
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
            // 1. Core Framework
            if (id.includes('react/') || id.includes('react-dom/') || id.includes('react-router/')) {
              return 'vendor-core';
            }
            
            // 2. The "Weight" (Pull these out of the main bundle)
            if (id.includes('react-big-calendar')) return 'vendor-calendar';
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('react-slick') || id.includes('slick-carousel')) return 'vendor-carousel';
            if (id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('react-markdown') || id.includes('remark-gfm')) return 'vendor-content';

            // 3. DO NOT return a 'vendor' catch-all.
            // This lets smaller things like date-fns and emailjs 
            // stay inside the lazy-loaded pages that use them.
          }
        },
      },
    },
  },
})

