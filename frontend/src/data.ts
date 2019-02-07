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
	type: 'external' | 'internal'
}

export const socialLinks: ISocialLink[] = [
	{
		icon: 'fas fa-envelope',
		name: 'Email',
		to: '/contact',
		type: 'internal',
	},
	{
		icon: 'fab fa-github',
		name: 'GitHub',
		to: 'https://github.com/FlorianWendelborn',
		type: 'external',
	},
	{
		icon: 'fab fa-medium',
		name: 'Medium',
		to: 'https://medium.com/@FlorianWendelborn',
		type: 'external',
	},
	{
		icon: 'fab fa-twitter',
		name: 'Twitter',
		to: 'https://twitter.com/@FloWendelborn',
		type: 'external',
	},
	{
		icon: 'fab fa-youtube',
		name: 'YouTube',
		to: 'https://youtube.com',
		type: 'external',
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
		tags: ['Django', 'Docker', 'Microservices', 'TypeScript', 'Vue.js'],
		type: 'contract',
	},
	{
		date: '?-2019',
		demo: 'https://npm.runkit.com/bitwise',
		description: 'NPM Package for advanced bitwise manipulation.',
		name: 'Bitwise',
		source: 'https://github.com/FlorianWendelborn/bitwise',
		tags: ['TypeScript', 'Continuous Integration', 'Test-Driven Development'],
		type: 'personal',
	},
]
