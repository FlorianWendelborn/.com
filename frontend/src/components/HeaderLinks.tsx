import * as React from 'react'

const Link = (props: { name: string; to: string; icon: string }) => (
	<a className="navbar-item" target="_blank" href={props.to}>
		<span className="icon">
			<i className={`fa-lg ${props.icon}`} />
		</span>
	</a>
)

export class HeaderLinks extends React.Component {
	public render() {
		const links = [
			{
				icon: 'fab fa-youtube',
				name: 'YouTube',
				to: 'https://youtube.com',
			},
			{
				icon: 'fab fa-github',
				name: 'GitHub',
				to: 'https://github.com/FlorianWendelborn',
			},
			{
				icon: 'fab fa-medium',
				name: 'Medium',
				to: 'https://medium.com/@FlorianWendelborn',
			},
			{
				icon: 'fab fa-twitter',
				name: 'Twitter',
				to: 'https://twitter.com/@FloWendelborn',
			},
		]

		return (
			<>
				{links.map((link) => (
					<Link {...link} />
				))}
			</>
		)
	}
}
