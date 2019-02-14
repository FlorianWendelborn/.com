// components
import { CreationsProject } from './Project'

// data
import { projects } from 'src/data'

// external
import 'driveway/dist/driveway.min.css'
import * as React from 'react'

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
