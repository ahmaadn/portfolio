export const languages = {
	id: "Endonesia",
	en: "English",
};

export const defaultLang = "en";

export const ui = {
	id: {
		"site.title": "Ahmaadn",
		"site.shortDescription":
			"Seorang backend developer dan data scientist yang bersemangat dengan pengalaman dalam mengembangkan aplikasi web dan menganalisis data untuk menciptakan solusi yang efisien dan inovatif.",
		"site.description": [
			"Halo! Nama saya Ahmad Nur Sahid, seorang backend developer dan data scientist yang bersemangat dengan pengalaman dalam mengembangkan aplikasi web dan menganalisis data untuk menciptakan solusi yang efisien dan inovatif.",
			"Saya memiliki pengalaman dalam merancang dan mengimplementasikan API yang kuat, serta mengelola database untuk memastikan kinerja yang optimal. Selain itu, saya juga memiliki keahlian dalam menganalisis data menggunakan berbagai alat dan teknik untuk membantu pengambilan keputusan yang lebih baik.",
			"Saya juga terbuka untuk pekerjaan, jadi jangan ragu untuk menghubungi saya jika Anda memiliki proyek yang ingin Anda kerjakan.",
		],

		"position.backend_develover": "Backend Developer",
		"position.data_scientist": "Data Scientist",

		"common.button.view_all": "Lihat semua proyek",
		"common.button.back_to_home": "Kembali ke Home",

		"common.footer.tagline": "Open for freelance and full-time opportunities",

		"404.title": "Halaman tidak ditemukan.",
		"404.description": "Tautan yang kamu buka mungkin sudah dipindah, dihapus, atau URL-nya tidak valid. Kamu bisa kembali ke beranda atau jelajahi daftar project terbaru.",

	},
	en: {
		"site.title": "Ahmaadn",
		"site.shortDescription":
			"A passionate backend developer and data scientist with experience in developing web applications and analyzing data to create efficient and innovative solutions.",
		"site.description": [
			"Hello! My name is Ahmad Nur Sahid, a passionate backend developer and data scientist with experience in developing web applications and analyzing data to create efficient and innovative solutions.",

			"I have experience designing and implementing robust APIs and managing databases to ensure optimal performance. Furthermore, I am skilled in analyzing data using various tools and techniques to aid better decision-making.",

			"I am also open to work, so feel free to contact me if you have a project you would like to work on.",
		],
		"position.backend_develover": "Backend Developer",
		"position.data_scientist": "Data Scientist",

		"common.button.view_all": "View all projects",
		"common.button.back_to_home": "back to home",

		"common.footer.tagline": "Open for freelance and full-time opportunities",

		"404.title": "Page not found.",
		"404.description": "The link you're trying to access may have been moved, deleted, or the URL may be invalid. You can return to the homepage or browse the list of recent projects..",
	},
} as const;


export type TranslationKey = keyof typeof ui[typeof defaultLang]
