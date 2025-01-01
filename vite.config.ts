import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [react(), Pages()],
  base: "/", // Keep base as "/" for custom domains
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173, // Default port for local development
    open: true, // Automatically opens the browser
  },
  build: {
    outDir: "dist", // Ensure the output matches your GitHub Pages settings
  },
});