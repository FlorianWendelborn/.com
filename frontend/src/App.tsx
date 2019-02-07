import * as React from 'react'
import { Route } from 'react-router-dom'

// components
import { Footer } from './components/Footer'
import { Header } from './components/Header'

// views
import { WelcomeView } from './views/Welcome'

export class App extends React.Component {
	public render() {
		return (
			<div>
				<Header />
				<main>
					<Route exact={true} path="/" component={WelcomeView} />
				</main>
				<Footer />
			</div>
		)
	}
}
