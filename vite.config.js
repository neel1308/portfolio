import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: repo name as base when using https://username.github.io/repo/
  base: "/portfolio/",
});
