import babel from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import sourcemaps from 'rollup-plugin-sourcemaps';
const autoprefixer = require('autoprefixer');

const input = 'src/index.js'

let MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
]

let config = []

MODE.map((m) => {
  let conf = {
    input: input,
    output: {
      name: "react-awesome-buttons",
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: "auto"
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      sourcemaps(),
      styles({
        postcss: {
          plugins: [
            autoprefixer()
          ]
        }
      })
    ]
  }
  config.push(conf)
})

export default [
  ...config,
]
