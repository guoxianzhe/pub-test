/* eslint-env node */

/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html", "lcov", "json-summary"],
      exclude: ["src/utils.ts", "src/hooks/tools.ts", "test/**"],
    },
    exclude: ["**/node_modules/**"],
    setupFiles: ["./test/setup.tsx"],
  },
});
