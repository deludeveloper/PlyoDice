import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps asset paths relative so it works on GitHub Pages
// (including project pages served from /<repo>/).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
