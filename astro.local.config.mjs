import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			configFile: './tailwind.jetour.js'
		}),
		alpinejs(),
		mdx()
	],
	// site: 'https://alexsab-ru.github.io',
	// base: 'astro-website'
});