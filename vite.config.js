import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
// https://vitejs.dev/config/

const path = require('path')
export default defineConfig({
  plugins: [
    vue(),

    vuetify({
      autoImport: true,
    }),
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    }
  },
  base:"/{website_cv}/"

})
