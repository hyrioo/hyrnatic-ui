import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
  server: {
    port: 8080,
    hmr: {
      protocol: 'ws',
      port: 33100,
      host: 'localhost',
    },
  },
  plugins: [vue(), vueJsx()]
})
