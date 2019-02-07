import * as React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/icon.svg'

import { HeaderLinks } from './HeaderLinks'

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
						<div className="navbar-brand">
							<Link className="navbar-item" to="/">
								<img src={Logo} height="28" width="28" />
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

						<div id="navbarBasicExample" className="navbar-menu">
							<div className="navbar-start">
								<a className="navbar-item">Home</a>

								<Link className="navbar-item" to="/projects">
									Projects
								</Link>

								<Link className="navbar-item" to="/links">
									Links
								</Link>

								<Link className="navbar-item" to="/contact">
									Contact
								</Link>
							</div>

							<div className="navbar-end">
								<HeaderLinks />
								<div className="navbar-item has-dropdown is-hoverable">
									<a className="navbar-link">More</a>

									<div className="navbar-dropdown">
										<a className="navbar-item">About</a>
										<a className="navbar-item">Jobs</a>
										<a className="navbar-item">Contact</a>
										<hr className="navbar-divider" />
										<a className="navbar-item">Report an issue</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}
