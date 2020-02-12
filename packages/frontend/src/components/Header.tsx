// assets

// external
import * as React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/icon.svg'

// data
import { headerLinks, ISocialLink, socialLinks } from '../data'

const VisibleSocialLink = (props: ISocialLink) => (
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

const HiddenSocialLink = (props: ISocialLink) => (
	<a className="navbar-item" target="_blank" href={props.to}>
		<span className="icon" style={{ marginRight: '1rem' }}>
			<i className={`fa-lg ${props.icon}`} />
		</span>
		<span>{props.name}</span>
	</a>
)

export class Header extends React.Component {
	public state = {
		isOpen: false,
	}

	public render() {
		return (
			<header>
				<nav
					className="navbar is-dark"
					role="navigation"
					aria-label="main navigation"
				>
					<div className="container">
						{this.renderBrand()}
						<div
							className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}
						>
							{this.renderLeft()}
							{this.renderRightDesktop()}
							{this.renderRightMobile()}
						</div>
					</div>
				</nav>
			</header>
		)
	}

	private renderBrand() {
		return (
			<div className="navbar-brand">
				<Link className="navbar-item" to="/">
					<img src={Logo} height="28" width="28" />
					<span style={{ marginLeft: '1em' }}>Florian Wendelborn</span>
				</Link>
				<a
					role="button"
					className={`navbar-burger burger ${
						this.state.isOpen ? 'is-active' : ''
					}`}
					aria-label="menu"
					aria-expanded="false"
					onClick={this.toggleClick}
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>
		)
	}

	private renderRightDesktop() {
		const visible = socialLinks.filter((link) => link.isImportant)
		const hidden = socialLinks.filter((link) => !link.isImportant)

		return (
			<div className="navbar-end is-hidden-touch">
				<Link data-tip="Email" className="navbar-item" to="/contact">
					<span className="icon">
						<i className="fa-lg fas fa-envelope" />
					</span>
				</Link>
				{visible.map((socialLink, index) => (
					<VisibleSocialLink {...socialLink} key={index} />
				))}
				<div className="navbar-item has-dropdown is-hoverable">
					<a className="navbar-link is-arrowless">
						<span className="icon">
							<i className="fa-lg fas fa-caret-square-down" />
						</span>
					</a>
					<div className="navbar-dropdown is-right">
						{hidden.map((socialLink, index) => (
							<HiddenSocialLink {...socialLink} key={index} />
						))}
					</div>
				</div>
			</div>
		)
	}

	private renderRightMobile() {
		return (
			<div className="navbar-end is-hidden-desktop">
				<Link className="navbar-item" target="_blank" to="/contact">
					<span className="icon" style={{ marginRight: '1rem' }}>
						<i className="fa-lg fas fa-envelope" />
					</span>
					<span>Email</span>
				</Link>
				{socialLinks.map((socialLink, index) => (
					<HiddenSocialLink {...socialLink} key={index} />
				))}
			</div>
		)
	}

	private renderLeft() {
		return (
			<div className="navbar-start">
				{headerLinks.map((link, index) => (
					<Link
						data-tip={link.tooltip}
						className="navbar-item"
						to={link.to}
						key={index}
					>
						<span>{link.label}</span>
					</Link>
				))}
			</div>
		)
	}

	private toggleClick = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}
}
