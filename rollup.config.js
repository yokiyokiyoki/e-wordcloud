import typescript from "rollup-plugin-typescript2";
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: "src/index.ts",
  output: [
    {
      name: "EWordcloud",
      file: "dist/ewordcloud.js",
      format: "umd"
    }
  ],
  plugins: [typescript(),commonjs(),resolve()]
};
