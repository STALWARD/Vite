import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from "vite-plugin-singlefile" // Add this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(), // This merges JS/CSS into your index.html
  ],
  build: {
    // Force CSS to stay together if not using the singlefile plugin
    cssCodeSplit: false,
    assetsInlineLimit: 100000, // Inline assets up to 100kb (like your JS)
  }
})
