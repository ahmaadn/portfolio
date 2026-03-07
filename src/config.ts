export const SITE: Site = {
	title: "Ahmaadn",
	author: "Ahmad nur sahid",
	email: "ahmadnur415@gmail.com",
	position: "Fullstack",
	shortDescription:
		"Seorang software engineer dengan pengalaman dalam mengembangkan aplikasi web menggunakan berbagai teknologi seperti Vue.js, FastApi, dan PostgreSQL.",
	description: [
		"Hai, saya Ahmad Nur Sahid. Saya seorang software engineer yang berbasis di Indonesia. Saya memiliki pengalaman dalam membangun aplikasi web menggunakan teknologi modern seperti Vue.js, FastApi, dan PostgreSQL.",
		"Saat ini saya sedang menempuh pendidikan di Institut Teknologi Garut. Saya selalu mencari kesempatan baru untuk belajar dan berkembang sebagai mahasiswa. Saya juga terbuka untuk pekerjaan freelance, jadi jangan ragu untuk menghubungi saya jika Anda memiliki proyek yang ingin Anda kerjakan.",
	],
};

export const LINKS: Link[] = [
	{ label: "Github", url: "https://github.com/ahmaadn", icon: "ri:github-fill" },
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/ahmaadn",
		icon: "ri:linkedin-box-fill",
	},
];

export const EDUCATION: Education[] = [
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

export const SKILL_CATEGORIES: SkillCategory[] = [
	{
		category: "Languages",
		icon: "ri:terminal-box-line",
		items: [
			{ name: "Python", icon: "devicon:python" },
			{ name: "JavaScript", icon: "devicon:javascript" },
			{ name: "TypeScript", icon: "devicon:typescript" },
			{ name: "PHP", icon: "devicon:php" },
			{ name: "Dart", icon: "devicon:dart" },
			{ name: "HTML5", icon: "devicon:html5" },
			{ name: "CSS", icon: "devicon:css3" },
		],
	},
	{
		category: "Frameworks",
		icon: "ri:stack-line",
		items: [
			{ name: "Vue", icon: "devicon:vuejs" },
			{ name: "Astro", icon: "devicon:astro" },
			{ name: "Laravel", icon: "devicon:laravel" },
			{ name: "FastApi", icon: "devicon:fastapi" },
			{ name: "Flutter", icon: "devicon:flutter" },
			{ name: "TailwindCSS", icon: "devicon:tailwindcss" },
			{ name: "Bootstrap", icon: "devicon:bootstrap" },
		],
	},
	{
		category: "Data & ML",
		icon: "ri:brain-line",
		items: [
			{ name: "pyTorch", icon: "devicon:pytorch" },
			{ name: "TensorFlow", icon: "devicon:tensorflow" },
			{ name: "Pandas", icon: "devicon:pandas" },
			{ name: "Jupyter", icon: "devicon:jupyter" },
		],
	},
	{
		category: "Databases",
		icon: "ri:database-2-line",
		items: [
			{ name: "PostgreSQL", icon: "devicon:postgresql" },
			{ name: "MySQL", icon: "devicon:mysql" },
		],
	},
];
