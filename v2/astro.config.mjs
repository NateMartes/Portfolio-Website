// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://nathanielmartes.com",
    markdown: {
      shikiConfig: {
        themes: {
          light: 'min-light',
          dark: 'tokyo-night',
        },
      },
    },
});