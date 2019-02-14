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
		to: '/creations/programs',
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
	image?: string
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
	description?: string
}

export const skills: ISkill[] = [
	// languages
	{
		description:
			'Combines the best of both worlds. The power of JS, and the IDE support of Java.',
		image: require('devicon/icons/typescript/typescript-original.svg'),
		name: 'TypeScript',
	},
	{
		description: 'V8 Whisperer. Writing JavaScript since 2005...',
		image: require('devicon/icons/javascript/javascript-original.svg'),
		name: 'JavaScript',
	},
	{
		image: require('devicon/icons/python/python-original.svg'),
		name: 'Python',
	},

	// frameworks
	{
		description: 'React is just JavaScript. That’s why I like it.',
		image: require('devicon/icons/react/react-original.svg'),
		name: 'React',
	},
	{
		description: 'I like its simplicity. I dislike its magic.',
		image: require('devicon/icons/vuejs/vuejs-original.svg'),
		name: 'Vue',
	},
	{
		description: 'Using (and loving) Node since Version 0.5',
		image: require('devicon/icons/nodejs/nodejs-original.svg'),
		name: 'Node.js',
	},
	{
		image: require('devicon/icons/django/django-original.svg'),
		name: 'Django & Rest Framework',
	},

	// databases
	{
		image: require('devicon/icons/mongodb/mongodb-original.svg'),
		name: 'MongoDB',
	},
	{
		image: require('devicon/icons/postgresql/postgresql-original.svg'),
		name: 'PostgreSQL',
	},

	// devops
	{
		description:
			'The first thing I do with new software is writing a Dockerfile.',
		image: require('devicon/icons/docker/docker-original.svg'),
		name: 'Docker',
	},
	{
		description: 'Using Git(Hub) since 2011',
		image: require('devicon/icons/git/git-original.svg'),
		name: 'Git',
	},
	{
		description:
			'I maintain multiple dedicated root servers and used Linux for years',
		image: require('devicon/icons/linux/linux-original.svg'),
		name: 'Linux',
	},

	// "languages"
	{
		image: require('devicon/icons/css3/css3-original.svg'),
		name: 'CSS3',
	},
	{
		image: require('devicon/icons/sass/sass-original.svg'),
		name: 'SASS',
	},
	{
		description: '1 Year of Experience with WebRTC Video',
		image: require('devicon/icons/html5/html5-original.svg'),
		name: 'HTML5 & WebRTC',
	},

	// build tools
	{
		description: 'I used to set-up Babel manually before vue-cli was a Thing',
		image: require('devicon/icons/babel/babel-original.svg'),
		name: 'Babel',
	},
	{
		description: 'Can write Webpack Configurations from Scratch',
		image: require('devicon/icons/webpack/webpack-original.svg'),
		name: 'Webpack',
	},
]

export interface ITalkEvent {
	date: Date
	link?: string
	location: {
		name: string
		latitude: number
		longitude: number
	}
	name: string
}

export interface ITalk {
	events: ITalkEvent[]
	name: string
	description: string
	tags: string[]
}

export const talks: ITalk[] = [
	{
		description:
			'Why and how 3YOURMIND is using a user microservice in their Django application "AM Part Identifier".',
		events: [
			{
				date: new Date(1547577000000),
				link:
					'https://www.meetup.com/django-user-group-berlin/events/qntnlhyzcbtb/',
				location: {
					latitude: 52.512571,
					longitude: 13.316687,
					name: '3YOURMIND GmbH',
				},
				name: 'Django User Group Berlin',
			},
		],
		name: 'User Microservice in Django',
		tags: [
			'Lightning Talk',
			'Django',
			'Django Rest Framework',
			'Microservices',
		],
	},
]
