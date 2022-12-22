import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import sourcemaps from "rollup-plugin-sourcemaps";

const autoprefixer = require("autoprefixer");

const input = "src/index.js"

let MODE = [
  {
    format: "cjs"
  },
  {
    format: "esm"
  },
  {
    format: "umd"
  }
]

let config = []

MODE.map((m) => {
  let conf = {
    input: input,
    output: {
      name: "dark-mode-react",
      file: `dist/index.${m.format}.js`,
      format: m.format,
      exports: "auto",
      globals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "@babel/runtime/helpers/slicedToArray": "_slicedToArray"
      },
    },
    external: ["react", /@babel\/runtime/, /@babel\/runtime\/helpers\/slicedToArray/],
    plugins: [
      babel({
        exclude: "node_modules/**",
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime"
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
