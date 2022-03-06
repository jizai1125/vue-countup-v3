import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/countup.vue'),
      name: 'vue-countup-v3',
      fileName: (format) => `vue-countup-v3.${format}.js`
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
