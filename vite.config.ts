import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/countup.vue'),
      name: 'VueCountupV3',
      fileName: (format) => `${pkg.name}.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'countup.js'],
      output: {
        globals: {
          vue: 'Vue',
          'countup.js': 'CountUp'
        }
      }
    }
  }
})
