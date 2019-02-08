export interface IHeaderLink {
	icon: string
	label: string
	to: string
	tooltip?: string
}

export const headerLinks: IHeaderLink[] = [
	{
		icon: 'fas fa-project-diagram',
		label: 'Creations',
		to: '/creations',
	},
	{
		icon: 'fas fa-id-card-alt',
		label: 'About Me',
		to: '/about',
		tooltip: 'Hobbies, Skills, and Résumé',
	},
	{
		icon: 'fas fa-handshake',
		label: 'Contact',
		to: '/contact',
	},
]

export interface ISocialLink {
	name: string
	to: string
	icon: string
	isImportant: boolean
}

export const socialLinks: ISocialLink[] = [
	{
		icon: 'fab fa-linkedin',
		isImportant: true,
		name: 'LinkedIn',
		to: 'https://www.linkedin.com/in/florian-wendelborn',
	},
	{
		icon: 'fab fa-github',
		isImportant: true,
		name: 'GitHub',
		to: 'https://github.com/FlorianWendelborn',
	},
	{
		icon: 'fab fa-medium',
		isImportant: false,
		name: 'Medium',
		to: 'https://medium.com/@FlorianWendelborn',
	},
	{
		icon: 'fab fa-twitter',
		isImportant: false,
		name: 'Twitter',
		to: 'https://twitter.com/@FloWendelborn',
	},
	{
		icon: 'fab fa-youtube',
		isImportant: false,
		name: 'YouTube',
		to: 'https://youtube.com/channel/UCLaD0U_1AfpcdUy0lOfcfDw',
	},
	{
		icon: 'fab fa-keybase',
		isImportant: false,
		name: 'Keybase',
		to: 'https://keybase.io/dodekeract',
	},
]

export interface IProject {
	date: string
	demo?: string
	description: string
	name: string
	source?: string
	tags: string[]
	type: 'business' | 'contract' | 'personal'
}

export const projects: IProject[] = [
	{
		date: '2019',
		demo: 'https://florianwendelborn.com',
		description: 'Just another website.',
		name: 'florianwendelborn.com',
		source: 'https://github.com/FlorianWendelborn/florianwendelborn.com',
		tags: ['Django', 'Docker', 'React', 'TypeScript'],
		type: 'business',
	},
	{
		date: '2018-2019',
		demo: 'https://3yourmind.com/ampi',
		description:
			'Enterprise application that helps big companies find suitable parts for 3D printing.',
		name: 'AM Part Identifier',
		tags: ['Django', 'Docker', 'Microservices', 'TypeScript', 'Vue'],
		type: 'contract',
	},
	{
		date: '?-2019',
		demo: 'https://npm.runkit.com/bitwise',
		description: 'NPM Package for advanced bitwise manipulation.',
		name: 'Bitwise',
		source: 'https://github.com/FlorianWendelborn/bitwise',
		tags: ['Continuous Integration', 'Test-Driven Development', 'TypeScript'],
		type: 'personal',
	},
]

export interface ISkill {
	name: string
	image: any
}

export const skills: ISkill[] = [
	{
		image: require('devicon/icons/docker/docker-original.svg'),
		name: 'Docker',
	},
	{
		image: require('devicon/icons/javascript/javascript-original.svg'),
		name: 'JavaScript',
	},
	{
		image: require('devicon/icons/git/git-original.svg'),
		name: 'Git',
	},
	{
		image: require('devicon/icons/react/react-original.svg'),
		name: 'React',
	},
	{
		image: require('devicon/icons/vuejs/vuejs-original.svg'),
		name: 'Vue',
	},
	{
		image: require('devicon/icons/typescript/typescript-original.svg'),
		name: 'TypeScript',
	},
	{
		image: require('devicon/icons/linux/linux-original.svg'),
		name: 'Linux',
	},
	{
		image: require('devicon/icons/babel/babel-original.svg'),
		name: 'Babel',
	},
	{
		image: require('devicon/icons/webpack/webpack-original.svg'),
		name: 'Webpack',
	},
	{
		image: require('devicon/icons/django/django-original.svg'),
		name: 'Django',
	},
	{
		image: require('devicon/icons/mongodb/mongodb-original.svg'),
		name: 'MongoDB',
	},
	{
		image: require('devicon/icons/nodejs/nodejs-original.svg'),
		name: 'Node.js',
	},
	{
		image: require('devicon/icons/postgresql/postgresql-original.svg'),
		name: 'PostgreSQL',
	},
	{
		image: require('devicon/icons/python/python-original.svg'),
		name: 'Python',
	},
	{
		image: require('devicon/icons/css3/css3-original.svg'),
		name: 'CSS3',
	},
	{
		image: require('devicon/icons/html5/html5-original.svg'),
		name: 'HTML5',
	},
	{
		image: require('devicon/icons/sass/sass-original.svg'),
		name: 'SASS',
	},
]
