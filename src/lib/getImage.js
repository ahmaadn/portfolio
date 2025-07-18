const imagePaths = import.meta.glob("/src/images/project/*.{jpeg,jpg,png,gif}");

const getImage = (path) => {
	const imagePath = imagePaths[path];
	if (!imagePath) {
		throw new Error(
			`"${path}" does not exist in glob: "/src/images/project/*.{jpeg,jpg,png,gif}"`
		);
	}
	return imagePath();
};

export default getImage;
