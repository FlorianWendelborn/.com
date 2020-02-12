import React from 'react'
import { Route } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import { Header } from './components/Header'
import { AboutView } from './views/About'
import { ContactView } from './views/Contact'
import { CreationsView } from './views/creations/View'
import { WelcomeView } from './views/Welcome'

export class App extends React.Component {
	public render() {
		return (
			<div>
				<Header />
				<main>
					<Route exact={true} path="/" component={WelcomeView} />
					<Route path="/about" component={AboutView} />
					<Route path="/contact" component={ContactView} />
					<Route path="/creations" component={CreationsView} />
				</main>
				{/* <Footer /> */}
				<ReactTooltip effect="solid" />
			</div>
		)
	}
}
