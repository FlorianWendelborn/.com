// components
import { CreationsProject } from './Project'

// data
import { projects } from 'src/data'

// external
import * as React from 'react'

export class CreationsCategoryPrograms extends React.Component {
	public render() {
		return projects.map((project, index) => (
			<CreationsProject key={index} {...project} />
		))
	}
}
