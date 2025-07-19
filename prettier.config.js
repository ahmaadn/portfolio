/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 3,
	printWidth: 100,
	semi: true,
	trailingComma: "es5",
	bracketSameLine: true,
	singleAttributePerLine: false,
	tailwindFunctions: ["cn"],
	plugins: [
		"prettier-plugin-astro",
		"prettier-plugin-tailwindcss",
		"prettier-plugin-astro-organize-imports",
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: ["*.json", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
};
