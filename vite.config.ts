import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import pkg from './package.json'

const resolvePath = (path: string) => resolve(__dirname, path)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolvePath('src')
    }
  },
  build: {
    lib: {
      entry: resolvePath('src/countup.vue'),
      name: 'VueCountUp',
      formats: ['es', 'iife'],
      fileName: (format) => `${pkg.name}.${format}.js`
    },
    rollupOptions: {
      external: [
        'vue'
        // 'countup.js'
      ],
      output: {
        globals: {
          vue: 'Vue'
          // 'countup.js': 'countUp'
        }
      }
    }
  }
})
