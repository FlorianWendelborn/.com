// components
import { Hero } from 'src/components/Hero'

// external
import axios from 'axios'
import * as React from 'react'

const my = {
	birthday: '1995-12-23',
	location: 'Berlin, Germany',
}

interface IAboutState {
	followers: null | number
	following: null | number
	publicRepos: null | number
}

const BasicInformation = () => (
	<section className="section">
		<div className="container" />
	</section>
)

const Tiles = () => (
	<div className="container">
		<div className="tile is-ancestor">
			<div className="tile is-vertical is-8">
				<div className="tile">
					<div className="tile is-parent is-vertical">
						<article className="tile is-child box">
							!-- Put any content you want --
						</article>
						<article className="tile is-child box">
							<strong>Birthday</strong>: {my.birthday}
							<br />
							<strong>Location</strong>: {my.location}
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							!-- Put any content you want --
						</article>
					</div>
				</div>
				<div className="tile is-parent">
					<article className="tile is-child box">
						!-- Put any content you want --
					</article>
				</div>
			</div>
			<div className="tile is-parent">
				<article className="tile is-child box">
					!-- Put any content you want --
				</article>
			</div>
		</div>
	</div>
)

export class AboutView extends React.Component {
	public state: IAboutState = {
		followers: null,
		following: null,
		publicRepos: null,
	}

	public async componentDidMount() {
		const response = await axios.get(
			`https://api.github.com/users/FlorianWendelborn`,
		)

		this.setState({
			followers: response.data.followers,
			following: response.data.following,
			publicRepos: response.data.public_repos,
		})
	}

	public render() {
		return (
			<>
				<Hero title="About Me" description="TBD" />
				<section className="section">
					<div className="container">
						<nav className="level is-mobile">
							<div className="level-item has-text-centered">
								<a
									href="https://github.com/FlorianWendelborn?tab=repositories"
									target="_blank"
								>
									<p className="heading">GitHub Repositories</p>
									<p className="title">{this.state.publicRepos}</p>
								</a>
							</div>
							<div className="level-item has-text-centered">
								<a
									href="https://github.com/FlorianWendelborn?tab=following"
									target="_blank"
								>
									<p className="heading">Following</p>
									<p className="title">{this.state.followers}</p>
								</a>
							</div>
							<div className="level-item has-text-centered">
								<a
									href="https://github.com/FlorianWendelborn?tab=followers"
									target="_blank"
								>
									<p className="heading">Followers</p>
									<p className="title">{this.state.following}</p>
								</a>
							</div>
						</nav>
					</div>
				</section>
				<BasicInformation />
				<Tiles />
			</>
		)
	}
}
