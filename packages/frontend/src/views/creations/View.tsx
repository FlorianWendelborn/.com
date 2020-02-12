import React from 'react'
import { Route } from 'react-router'

import { Hero } from '../../components/Hero'

import { CreationsCategoryPhotography } from './CategoryPhotography'
import { CreationsCategoryPrograms } from './CategoryPrograms'
import { CreationsCategoryTalks } from './CategoryTalks'
import { CreationsNavigation } from './Navigation'

export class CreationsView extends React.Component {
	public render() {
		return (
			<>
				<Hero
					title="My Creations"
					description="Projects that have accumulated over the years."
				/>
				<CreationsNavigation />
				<Route
					exact={true}
					path="/creations/programs"
					component={CreationsCategoryPrograms}
				/>
				<Route
					exact={true}
					path="/creations/photography"
					component={CreationsCategoryPhotography}
				/>
				<Route
					exact={true}
					path="/creations/talks"
					component={CreationsCategoryTalks}
				/>
			</>
		)
	}
}
