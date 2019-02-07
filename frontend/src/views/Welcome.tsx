import * as React from 'react'

export class WelcomeView extends React.Component {
	public render() {
		return (
			<div>
				<section className="hero is-dark is-fullheight-with-navbar">
					<div className="hero-body">
						<div className="container">
							<p className="title">
								Hello, Human.
								<br />
								My name is Florian Wendelborn.
								<br />
								I’m a freelance software developer.
							</p>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
