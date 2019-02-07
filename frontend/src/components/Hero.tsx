import * as React from 'react'

interface IHeroProps {
	title: string
	description: string
}

export class Hero extends React.Component<IHeroProps> {
	public render() {
		return (
			<section className="hero is-light">
				<div className="container">
					<div className="hero-body">
						<h1 className="title">{this.props.title}</h1>
						<h2 className="subtitle">{this.props.description}</h2>
					</div>
				</div>
			</section>
		)
	}
}
