import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: {
    "pub-test-kaku": "src/index.ts",
  },
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  dts: true,
  minify: false,
});
