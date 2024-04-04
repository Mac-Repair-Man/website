import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  site: 'https://macrepairman.ca',
  integrations: [react(), sitemap(), pageInsight()]
});