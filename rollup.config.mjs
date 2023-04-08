import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts", // entry point for this part of our library
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true, // NOT good practice, but trying to avoid warning spam on user end (still waiting for create-react-app to update this problem)
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true, // NOT good practice, but trying to avoid warning spam on user end (still waiting for create-react-app to update this problem)
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }), // have to specify where location of your tsconfig.json file is
      postcss(),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts", // input for our type files.
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/], // any css file isn't part of our type exports, so it can be safely ignored
  },
];
