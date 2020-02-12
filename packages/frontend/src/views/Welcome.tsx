import * as React from 'react'
import { Link } from 'react-router-dom'

export class WelcomeView extends React.Component {
	public render() {
		return (
			<>
				<section className="hero is-dark is-fullheight-with-navbar">
					<div className="hero-body">
						<div className="container">
							<p className="title">
								<h1 className="title is-1">Hello, Human.</h1>
								<br />
								My name is Florian Wendelborn.
								<br />
								I’m a{' '}
								<Link style={{ color: '#209cee' }} to="/contact">
									freelance software developer
								</Link>
								.
							</p>
						</div>
					</div>
				</section>
			</>
		)
	}
}
