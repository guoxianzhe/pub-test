import { defineConfig } from "tsup";

import pkg from "./package.json";

const banner = `
/**
 * @license ${pkg.name}
 * @version ${pkg.version}
 *
 * This source code is licensed under the MIT license.
 */
`;

export default defineConfig([
  {
    entry: {
      [pkg.name]: "src/index.ts",
    },
    banner: () => {
      return {
        js: banner,
      };
    },
    format: ["cjs", "esm"],
    splitting: false,
    sourcemap: false,
    clean: true,
    treeshake: true,
    dts: true,
    minify: false,
  },
  {
    entry: {
      [pkg.name]: "src/index.ts",
    },
    banner: () => {
      return {
        js: banner,
      };
    },
    outExtension: () => {
      return {
        js: `.iife.${pkg.version}.js`,
      };
    },
    format: ["iife"],
    sourcemap: false,
    splitting: false,
    clean: true,
    minify: true,
    external: Object.keys(pkg.peerDependencies),
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    platform: "browser",
  },
]);
