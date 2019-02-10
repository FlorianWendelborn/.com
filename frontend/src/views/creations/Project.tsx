import * as React from 'react'
import { IProject } from 'src/data'

export class CreationsProject extends React.Component<IProject> {
	public render() {
		const { demo, description, name, tags, type, source } = this.props
		return (
			<section className="section">
				<div className="container">
					<article className="media">
						<figure className="media-left">
							<p className="image is-128x128">
								<img src="https://bulma.io/images/placeholders/256x256.png" />
							</p>
						</figure>
						<div className="media-content">
							<div className="content">
								<h1 className="title">
									{name}{' '}
									<span className="tag is-large is-black">{type} project</span>
								</h1>
								{description}
							</div>
							<nav className="level is-mobile">
								<div className="level-left">
									<div className="tags are-medium">
										{tags.map((tag) => (
											<span className="tag">{tag}</span>
										))}
									</div>
								</div>
								<div className="level-right">
									{Boolean(source) && (
										<a
											className="level-item"
											data-tip="View Source Code"
											href={source}
											target="_blank"
										>
											<span className="icon">
												<i className="fas fa-code-branch" />
											</span>
										</a>
									)}
									{Boolean(demo) && (
										<div className="level-item">
											<a href={demo} target="_blank" className="button">
												Check It Out
											</a>
										</div>
									)}
								</div>
							</nav>
						</div>
					</article>
				</div>
			</section>
		)
	}
}
