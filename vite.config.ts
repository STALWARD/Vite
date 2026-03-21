import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // 1. Increases the warning limit if you have large assets
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // 2. Automatically splits node_modules into a separate 'vendor' file
        // This allows the browser to cache libraries separately from your code
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
