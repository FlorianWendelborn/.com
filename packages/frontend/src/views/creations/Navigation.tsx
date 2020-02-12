import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

class Navigation extends React.Component<RouteComponentProps> {
	public render() {
		const links = [
			{
				icon: 'fas fa-code',
				label: 'Programs',
				path: '/creations/programs',
			},
			{
				icon: 'fas fa-sitemap',
				label: 'Talks',
				path: '/creations/talks',
			},
			{
				icon: 'fas fa-images',
				label: 'Photography',
				path: '/creations/photography',
			},
		]

		return (
			<div className="tabs is-centered">
				<ul>
					{links.map((datum, index) =>
						this.renderLink(datum.path, datum.icon, datum.label, index),
					)}
				</ul>
			</div>
		)
	}

	private renderLink(path: string, icon: string, label: string, key: number) {
		const isActive = this.props.location.pathname === path

		return (
			<li className={isActive ? 'is-active' : undefined} key={key}>
				<Link to={path}>
					<span className="icon is-small">
						<i className={icon} aria-hidden="true" />
					</span>
					<span>{label}</span>
				</Link>
			</li>
		)
	}
}

export const CreationsNavigation = withRouter(Navigation)
