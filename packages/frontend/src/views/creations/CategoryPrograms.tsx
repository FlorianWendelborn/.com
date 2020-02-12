import 'driveway/dist/driveway.min.css'
import React from 'react'

import { projects } from '../../data'

import { CreationsProject } from './Project'

export class CreationsCategoryPrograms extends React.Component {
	public render() {
		return (
			<div className="container">
				<div className="dw">
					{projects.map((project, index) => (
						<div className="dw-panel" key={index}>
							<div className="dw-panel__content">
								<CreationsProject {...project} />
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}
