// components
import { Hero } from 'src/components/Hero'

// data
import { IProject, projects } from 'src/data'

// external
import * as React from 'react'

const Project = (props: IProject) => (
	<section className="section">
		<article className="media">
			<figure className="media-left">
				<p className="image is-128x128">
					<img src="https://bulma.io/images/placeholders/256x256.png" />
				</p>
			</figure>
			<div className="media-content">
				<div className="content">
					<h1 className="title">
						{props.name}{' '}
						<span className="tag is-large is-black">{props.type} project</span>
					</h1>
					{props.description}
				</div>
				<nav className="level is-mobile">
					<div className="level-left">
						<div className="tags are-medium">
							{props.tags.map((tag) => (
								<span className="tag">{tag}</span>
							))}
						</div>
					</div>
					<div className="level-right">
						{Boolean(props.source) && (
							<a
								className="level-item"
								data-tip="View Source Code"
								href={props.source}
								target="_blank"
							>
								<span className="icon">
									<i className="fas fa-code-branch" />
								</span>
							</a>
						)}
						{Boolean(props.demo) && (
							<div className="level-item">
								<a href={props.demo} target="_blank" className="button">
									Check It Out
								</a>
							</div>
						)}
					</div>
				</nav>
			</div>
		</article>
	</section>
)

export class CreationsView extends React.Component {
	public render() {
		return (
			<>
				<Hero
					title="My Creations"
					description="Projects that have accumulated over the years."
				/>
				<div className="container">
					{projects.map((project) => (
						<Project {...project} />
					))}
				</div>
			</>
		)
	}
}
