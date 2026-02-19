// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://jsalas404.github.io",
  base: "/miPortfolio",
  vite: {
    plugins: [tailwindcss()]
  }
});