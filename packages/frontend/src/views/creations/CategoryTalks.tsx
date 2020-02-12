// data

// external
import * as moment from 'moment'
import * as React from 'react'

import { ITalkEvent, talks } from '../../data'

const TalkEvent = (props: ITalkEvent) => {
	const mapsLink = `https://www.openstreetmap.org/?mlat=${
		props.location.latitude
	}&mlon=${props.location.longitude}#map=17/${props.location.latitude}/${
		props.location.longitude
	}`

	const mapsPreviewImage = `https://maps.wikimedia.org/img/osm-intl,13,${
		props.location.latitude
	},${props.location.longitude},256x256.png`

	const humanReadableDate = moment(props.date).format('YYYY-MM-DD HH:mm Z')

	return (
		<article className="media">
			<figure className="media-left">
				<a href={mapsLink} target="_blank">
					<p className="image is-128x128 is-hidden-mobile">
						<img src={mapsPreviewImage} />
					</p>
					<p className="image is-64x64 is-hidden-desktop">
						<img src={mapsPreviewImage} />
					</p>
				</a>
			</figure>
			<div className="media-content">
				<div className="content">
					<h3>
						{props.name} at {props.location.name}
					</h3>
					{humanReadableDate}
					<br />
					<br />
					<a className="button" href={props.link} target="_blank">
						Event Website
					</a>
				</div>
			</div>
		</article>
	)
}

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
									{talk.events.map((event, eventIndex) => (
										<TalkEvent key={eventIndex} {...event} />
									))}
								</div>
							</article>
						))}
					</div>
				</section>
			</>
		)
	}
}
