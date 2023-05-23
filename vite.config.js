import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true,
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/{website_cv}/" : "./",

})
