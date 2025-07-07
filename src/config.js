export const SITE = {
	title: "Ahmaadn",
	author: "Ahmad nur sahid",
	email: "ahmadnur415@gmail.com",
	position: "Fullstack",
	shortDercription:
		"Seorang software engineer dengan pengalaman dalam mengembangkan aplikasi web menggunakan berbagai teknologi seperti Vue.js, FastApi, dan PostgreSQL.",
	description: [
		"Hai, saya Ahmad Nur Sahid. Saya seorang software engineer yang berbasis di Indonesia. Saya memiliki pengalaman dalam membangun aplikasi web menggunakan teknologi modern seperti Vue.js, FastApi, dan PostgreSQL.",
		"Saat ini saya sedang menempuh pendidikan di Institut Teknologi Garut. Saya selalu mencari kesempatan baru untuk belajar dan berkembang sebagai mahasiswa. Saya juga terbuka untuk pekerjaan freelance, jadi jangan ragu untuk menghubungi saya jika Anda memiliki proyek yang ingin Anda kerjakan.",
	],
};

export const SOSIAL_LINK = [
	{ label: "Github", url: "https://github.com/ahmaadn", icon: "simple-icons:github" },
	{
		label: "Resume",
		url: "./resume.pdf",
		icon: "simple-icons:googledocs",
		download: "./resume.pdf",
	},
];

export const EDUCATION = [
	{
		from: "2022",
		to: "Now",
		institute: "Institut Teknologi Garut",
		course: "Teknik Informatika",
		location: "Garut, Jawa Barat",
	},
	{
		from: "2019",
		to: "2022",
		institute: "SMKS AL-Farisi Leles",
		course: "Teknik Komputer Dan Jaringan",
		location: "Leles, Garut",
	},
];

export const PROJECTS = [
	{
		name: "E-commerce",
		tags: ["Astro", "FastApi"],
		url: "https://github.com/ahmaadn/ecommerce-astro-vue-fastapi",
		desc: {
			short: "E-commerce ini dibuat menggunakan Astro, FastApi, dan MySQL",
			long: "E-commerce ini dibuat menggunakan Astro, FastApi, dan MySQL. Aplikasi ini memiliki fitur kelola produk, kelola kategori, kelola transaksi, dan kelola pengguna. Aplikasi ini juga dilengkapi dengan autentikasi JWT dan middleware untuk mengatur hak akses pengguna.",
		},
		imageUrl: {
			thumbnail: "/src/images/project/ecommerce-01.png",
			collection: [
				"/src/images/project/ecommerce-01.png",
				"/src/images/project/ecommerce-02.jpeg",
				"/src/images/project/ecommerce-03.jpeg",
				"/src/images/project/ecommerce-04.jpeg",
			],
		},
	},
	{
		name: "Sistem Donasi",
		tags: ["PHP", "laravel", "bootstrap"],
		url: "https://github.com/ahmaadn/sistem-donasi-laravel",
		desc: {
			short: "Sistem donasi ini dibuat menggunakan Laravel, dan Bootstrap",
			long: "Sistem donasi ini dibuat menggunakan Laravel, dan Bootstrap. Aplikasi ini memiliki fitur kelola donasi, kelola pengguna, kelola kategori donasi, dan kelola pengguna. Aplikasi ini juga dilengkapi dengan autentikasi JWT dan middleware untuk mengatur hak akses pengguna.",
		},
		imageUrl: {
			thumbnail: "/src/images/project/sistem-donasi-01.png",
			collection: [
				"/src/images/project/sistem-donasi-01.png",
				"/src/images/project/sistem-donasi-02.png",
				"/src/images/project/sistem-donasi-03.png",
				"/src/images/project/sistem-donasi-04.png",
			],
		},
	},
	{
		name: "Frontend Kasir Apotek",
		tags: ["Vue", "tailwind"],
		url: "https://github.com/ahmaadn/frontend-kasir-apotek-vuejs",
		desc: {
			short: "Frontend kasir apotek ini dibuat menggunakan Vue.js dan Tailwind CSS",
			long: "Frontend kasir apotek ini dibuat menggunakan Vue.js dan Tailwind CSS. Aplikasi ini memiliki fitur keloka obat, kelola pegawai, kelola kategori, kelola batch obat, selain itu juga aplikasi ini juga dilengkapi transksi penjualan obat",
		},
		imageUrl: {
			thumbnail: "/src/images/project/kasir-apotek-01.png",
			collection: [
				"/src/images/project/kasir-apotek-01.png",
				"/src/images/project/kasir-apotek-02.png",
				"/src/images/project/kasir-apotek-03.png",
				"/src/images/project/kasir-apotek-04.png",
			],
		},
		latest: true,
	},
];
