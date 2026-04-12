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
            // 1. Framework: The absolute bare minimum
            if (id.includes('react/') || id.includes('react-dom/') || id.includes('react-router/')) {
              return 'vendor-framework';
            }
            
            // 2. Blog Logic: Heavy Node polyfills
            if (id.includes('gray-matter') || id.includes('buffer')) {
              return 'vendor-blog-logic';
            }

            // 3. Specific Heavy Components
            if (id.includes('react-big-calendar')) return 'vendor-calendar';
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('react-slick') || id.includes('slick-carousel')) return 'vendor-carousel';
            if (id.includes('react-markdown') || id.includes('remark-gfm')) return 'vendor-content';

            // 4. Catch-all for other libraries (icons, utilities, etc.)
            return 'vendor-libs';
          }
        },
      },
    },
  },
})
