import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.ts", // entry point for this part of our library
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: false,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }), // have to specify where location of your tsconfig.json file is
      postcss(),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts", // input for our type files.
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/], // any css file isn't part of our type exports, so it can be safely ignored
  },
];
