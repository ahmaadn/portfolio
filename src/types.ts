type Site = {
	title: string;
	author: string;
	email: string;
	position: string;
	shortDescription: string;
	description: string[];
};

type Education = {
	from: string;
	to: string;
	institute: string;
	course: string;
	location: string;
};

type Link = {
	label: string;
	url: string;
	icon: string;
	download?: string;
};

type Skill = {
	name: string;
	icon: string;
};
