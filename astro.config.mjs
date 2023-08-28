import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/talk': 'https://forms.gle/HSnLBGF57nh1jDsK6'
  }
});
