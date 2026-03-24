import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import injectPreload from 'vite-plugin-inject-preload' // 1. Import the plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    injectPreload({
      files: [
        {
          // Matches your main CSS bundle (e.g., assets/index-HASH.css)
          match: /index-[A-z0-9]+\.css$/, 
          attributes: { as: 'style' }
        },
        {
          // Matches your main JS bundle (e.g., assets/index-HASH.js)
          match: /index-[A-z0-9]+\.js$/, 
          attributes: { as: 'script' }
        }
      ],
      // Optional: Place the tags at the bottom of the <head> 
      // so they don't block other high-priority font preloads
      injectTo: 'head' 
    }),
  ],
})
