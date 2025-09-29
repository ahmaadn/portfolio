import type { ImageMetadata } from "astro";

const blobImages = import.meta.glob<{ default: ImageMetadata }>(
	"/src/images/**/*.{jpeg,jpg,png,gif}"
);

export const getImage = (
	path: string
): Promise<{
	default: ImageMetadata;
}> => {
	const imagePath = blobImages[path];

	if (!imagePath) {
		throw new Error(
			`"${path}" does not exist in glob: "/src/images/project/*.{jpeg,jpg,png,gif}"`
		);
	}
	return imagePath();
};
