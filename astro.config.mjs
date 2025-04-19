// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()], // Интеграция Preact должна быть здесь
  vite: {
    plugins: [tailwindcss()],

    assetsInclude: ["**/*.svg"],
  },
});
