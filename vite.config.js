import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/trail-quest-templates/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aentry: resolve(__dirname, 'adventure-entry.html'),
        alisting: resolve(__dirname, 'adventures-listing.html'),
        contact: resolve(__dirname, 'contact.html'),
        content: resolve(__dirname, 'content-page.html'),
      }
    }
  }
})
