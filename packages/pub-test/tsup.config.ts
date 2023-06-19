import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: {
    "pub-test": "src/main.ts",
  },
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  dts: true,
  minify: false,
});
