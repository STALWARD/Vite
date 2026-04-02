import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Allow Rollup to split vendor code for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Inline small assets to reduce requests
    assetsInlineLimit: 20000,
    // Minify and optimize output
    minify: 'esbuild',
    sourcemap: false,
  },
})
