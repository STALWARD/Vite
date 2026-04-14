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
            // 1. Target the flagged "Esprima" library specifically
            if (id.includes('esprima')) {
              return 'vendor-esprima';
            }

            // 2. Framework Core
            if (id.includes('react/') || id.includes('react-dom/') || id.includes('react-router/')) {
              return 'vendor-framework';
            }

            // 3. Blog Logic
            if (id.includes('gray-matter') || id.includes('buffer')) {
              return 'vendor-blog-logic';
            }

            // 4. Other Heavy Components (as per your existing config)
            if (id.includes('react-big-calendar')) return 'vendor-calendar';
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('react-slick') || id.includes('slick-carousel')) return 'vendor-carousel';
            if (id.includes('react-markdown') || id.includes('remark-gfm')) return 'vendor-content';

            // 5. Catch-all for remaining node_modules to avoid one massive "vendor" chunk
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      },
    },
  },
})
