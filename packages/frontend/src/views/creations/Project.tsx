import * as React from 'react'
import { IProject } from 'src/data'

export class CreationsProject extends React.Component<IProject> {
	public render() {
		const { demo, description, image, name, tags, type, source } = this.props

		const icon = {
			business: 'fas fa-briefcase',
			contract: 'fas fa-file-contract',
			personal: 'fas fa-user-alt',
		}[type]

		return (
			<div className="card">
				<header className="card-header">
					<p className="card-header-title">{name}</p>
					<div
						className="card-header-icon"
						data-tip={`${type} project`}
						style={{ cursor: 'auto' }}
					>
						<span className="icon">
							<i className={icon} />
						</span>
					</div>
				</header>
				{Boolean(image) && (
					<div className="card-image">
						<figure className="image is-16by9">
							<img src={image} />
						</figure>
					</div>
				)}
				<div className="card-content">
					<div className="content">
						{description}
						<br />
						<br />
						<div className="tags">
							{tags.map((tag, index) => (
								<span className="tag" key={index}>
									{tag}
								</span>
							))}
						</div>
						{/* <time dateTime={from}>{from}</time>–<time dateTime={to}>{to}</time> */}
					</div>
				</div>
				<footer className="card-footer">
					{Boolean(source) && (
						<a className="card-footer-item" href={source} target="_blank">
							View Source
						</a>
					)}
					{Boolean(demo) && (
						<a className="card-footer-item" href={demo} target="_blank">
							Check It Out
						</a>
					)}
				</footer>
			</div>
		)
	}
}
