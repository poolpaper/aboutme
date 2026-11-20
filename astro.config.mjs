import { defineConfig } from 'astro/config';

// Repo: poolpaper/aboutme -> https://poolpaper.github.io/aboutme/
// Bei eigener Domain: site auf die Domain setzen und base entfernen.
export default defineConfig({
  site: 'https://poolpaper.github.io',
  base: '/aboutme/',
});
