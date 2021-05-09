import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
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
