// data
import { ITalkEvent, talks } from '../../data'

// external
import * as moment from 'moment'
import * as React from 'react'

export class CreationsCategoryTalks extends React.Component {
	public render() {
		return (
			<>
				<section className="section">
					<div className="container">
						{talks.map((talk, index) => (
							<article className="media" key={index}>
								<figure className="media-left is-hidden-mobile">
									<p className="image is-128x128">
										<img src="https://bulma.io/images/placeholders/256x256.png" />
									</p>
								</figure>
								<div className="media-content">
									<div className="content">
										<h2>{talk.name}</h2>
										<div className="content">
											<p>{talk.description}</p>
											<div className="tags">
												{talk.tags.map((tag, tagIndex) => (
													<span className="tag" key={tagIndex}>
														{tag}
													</span>
												))}
											</div>
										</div>
									</div>
									<h3>Events</h3>
									{this.renderTalkEvents(talk.events)}
								</div>
							</article>
						))}
					</div>
				</section>
			</>
		)
	}

	private renderTalkEvents(events: ITalkEvent[]) {
		return events.map((event, index) => (
			<article className="media" key={index}>
				<figure className="media-left">
					<a
						href={`https://www.openstreetmap.org/?mlat=${
							event.location.latitude
						}&mlon=${event.location.longitude}#map=17/${
							event.location.latitude
						}/${event.location.longitude}`}
						target="_blank"
					>
						<p className="image is-128x128 is-hidden-mobile">
							<img
								src={`https://maps.wikimedia.org/img/osm-intl,13,${
									event.location.latitude
								},${event.location.longitude},256x256.png`}
							/>
						</p>
						<p className="image is-64x64 is-hidden-desktop">
							<img
								src={`https://maps.wikimedia.org/img/osm-intl,13,${
									event.location.latitude
								},${event.location.longitude},256x256.png`}
							/>
						</p>
					</a>
				</figure>
				<div className="media-content">
					<div className="content">
						<h3>
							{event.name} at {event.location.name}
						</h3>
						{moment(event.date).format('YYYY-MM-DD HH:mm Z')}
						<br />
						<br />
						<a className="button" href={event.link} target="_blank">
							Event Website
						</a>
					</div>
				</div>
			</article>
		))
	}
}
