import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://www.ahmaadn.my.id",
	integrations: [
		sitemap(),
		mdx(),
		icon({
			include: {
				ri: ["*"],
				devicon: ["*"],
			},
		}),
	],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
