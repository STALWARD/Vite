// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split big libraries into their own files
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return '@framework'; 
            }
            // Let other libraries stay separate or grouped by package name
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
})
