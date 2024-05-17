// rollup.config.js
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'

const pkname = 'vue-countup-v3'

export default {
  input: `dist/${pkname}.js`,
  plugins: [
    getBabelOutputPlugin({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: '>2%, not IE 11'
          }
        ]
      ],
      allowAllFormats: true
    }),
    terser()
  ],
  external: ['vue'],
  output: [
    { file: `dist/${pkname}.es.js`, format: 'es' },
    {
      file: `dist/${pkname}.umd.js`,
      format: 'umd',
      name: 'VueCountUp',
      globals: {
        vue: 'Vue'
      }
    }
  ]
}
