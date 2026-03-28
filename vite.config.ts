export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Setting this to false can often reduce the chain length 
    // by serving one CSS file instead of many tiny ones.
    cssCodeSplit: false, 
    rollupOptions: {
      output: {
        // Remove manualChunks unless your vendor file is massive (>500kb)
        // manualChunks: undefined 
      },
    },
  },
})
