import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
// https://astro.build/config
export default defineConfig({
	site: "https://www.ahmaadn.my.id",
	integrations: [
		sitemap(),
		expressiveCode({
			themes: ["github-dark", "light-plus"],
			themeCssSelector: (theme) =>
				`[data-theme="${theme.name === "github-dark" ? "dark" : "light"}"]`,
			styleOverrides: {
				codeFontFamily: "var(--font-mono)",
				borderRadius: "0.5rem",
			},
		}),
		mdx(),
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
