import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  resolve: {
    alias: {
      lib: resolve(__dirname, "src/lib"),
      routes: resolve(__dirname, "src/routes"),
      context: resolve(__dirname, "src/context"),
      components: resolve(__dirname, "src/components"),
      pages: resolve(__dirname, "src/pages"),
      styles: resolve(__dirname, "src/styles"),
    },
  },
});
