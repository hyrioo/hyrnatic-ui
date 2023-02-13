import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',
            '@hyrioo/hyrnatic-ui-core': resolve(__dirname, '../hyrnatic-ui-core/src/index.ts'),
            '@hyrioo/hyrnatic-ui-elementic': resolve(__dirname, '../hyrnatic-ui-elementic/src/index.ts')
        },
    },
    server: {
        port: 8080,
        hmr: {
            protocol: 'ws',
            clientPort: 33100,
            host: 'localhost',
        },
    },
    plugins: [vue(), vueJsx()]
});
