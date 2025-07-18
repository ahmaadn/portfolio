import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tags: z.array(z.string()),
			url: z.string().url().optional(),
			preview: z.string().url().optional(),
			description: z.string(),
			date: z.string().transform((str) => new Date(str)),
			thumbnail: image(),
			image: z.string().optional(),
			latest: z.boolean().default(false),
		}),
});

export const collections = { projects };
