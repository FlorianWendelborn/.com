// assets
import Logo from '../assets/icon.svg'

// external
import * as React from 'react'
import { Link } from 'react-router-dom'

// data
import { headerLinks, IHeaderLink, ISocialLink, socialLinks } from '../data'

const SocialLink = (props: ISocialLink) => {
	switch (props.type) {
		case 'external':
			return (
				<a
					data-tip={props.name}
					className="navbar-item"
					target="_blank"
					href={props.to}
				>
					<span className="icon">
						<i className={`fa-lg ${props.icon}`} />
					</span>
				</a>
			)
		case 'internal':
			return (
				<Link data-tip={props.name} className="navbar-item" to={props.to}>
					<span className="icon">
						<i className={`fa-lg ${props.icon}`} />
					</span>
				</Link>
			)
	}
}

const NavbarBrand = () => (
	<div className="navbar-brand">
		<Link className="navbar-item" to="/">
			<img src={Logo} height="28" width="28" />
			<span style={{ marginLeft: '1em' }}>Welcome</span>
		</Link>
		<a
			role="button"
			className="navbar-burger burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>
)

const HeaderLink = (props: IHeaderLink) => {
	return (
		<Link data-tip={props.tooltip} className="navbar-item" to={props.to}>
			<span>{props.label}</span>
		</Link>
	)
}

const NavbarEnd = () => (
	<div className="navbar-end">
		{socialLinks.map((socialLink) => (
			<SocialLink {...socialLink} />
		))}
		{/* <div className="navbar-item has-dropdown is-hoverable">
			<a className="navbar-link">More</a>
			<div className="navbar-dropdown">
				<a className="navbar-item">About</a>
				<a className="navbar-item">Jobs</a>
				<a className="navbar-item">Contact</a>
				<hr className="navbar-divider" />
				<a className="navbar-item">Report an issue</a>
			</div>
		</div> */}
	</div>
)

export class Header extends React.Component {
	public render() {
		return (
			<header>
				<nav
					className="navbar is-dark"
					role="navigation"
					aria-label="main navigation"
				>
					<div className="container">
						<NavbarBrand />
						<div className="navbar-menu">
							<div className="navbar-start">
								{headerLinks.map((headerLink) => (
									<HeaderLink {...headerLink} />
								))}
							</div>
							<NavbarEnd />
						</div>
					</div>
				</nav>
			</header>
		)
	}
}
