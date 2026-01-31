/**
 * Menghapus prefix URL (https://, http://, www., https://www., http://www., ./) dan menggantinya dengan //
 * @param url - URL yang akan diproses
 * @returns URL tanpa prefix
 */
export function removeUrlPrefix(url: string): string {
	return url
		.replace(/^https:\/\/www\./, "//")
		.replace(/^http:\/\/www\./, "//")
		.replace(/^https:\/\//, "//")
		.replace(/^http:\/\//, "//")
		.replace(/^www\./, "//")
		.replace(/^\.\//, "//");
}
