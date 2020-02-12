import React from 'react'

import { Hero } from '../components/Hero'

const ContactForm = () => (
	<section className="section">
		<div className="container">
			<div className="field">
				<label className="label">Name</label>
				<div className="control">
					<input className="input" type="text" placeholder="Elon Musk" />
				</div>
			</div>
			<div className="field">
				<label className="label">Subject</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="Let’s fly to Mars together!"
					/>
				</div>
			</div>
			<div className="field">
				<label className="label">Company (optional)</label>
				<div className="control">
					<input className="input" type="text" placeholder="SpaceX" />
				</div>
			</div>
			<div className="field">
				<label className="label">Email</label>
				<div className="control has-icons-left has-icons-right">
					<input
						className="input is-danger"
						type="email"
						placeholder="elon.musk@spacex.com"
					/>
					<span className="icon is-small is-left">
						<i className="fas fa-envelope" />
					</span>
					<span className="icon is-small is-right">
						<i className="fas fa-exclamation-triangle" />
					</span>
				</div>
				<p className="help is-danger">This email is invalid</p>
			</div>
			<div className="field">
				<div className="control">
					<button className="button is-link">Submit</button>
				</div>
			</div>
		</div>
	</section>
)

export class ContactView extends React.Component {
	public render() {
		return (
			<>
				<Hero
					title="Contact Me"
					description="Feel free to get in touch. Doesn’t matter what it’s about."
				/>
				<section className="section">
					<div className="container">
						<article className="message is-warning">
							<div className="message-header">
								<p>Warning</p>
							</div>
							<div className="message-body">
								This form doesn’t work yet. Please get in touch via{' '}
								<a href="https://www.linkedin.com/in/florian-wendelborn">
									LinkedIn
								</a>{' '}
								instead.
							</div>
						</article>
					</div>
				</section>
				<ContactForm />
			</>
		)
	}
}
