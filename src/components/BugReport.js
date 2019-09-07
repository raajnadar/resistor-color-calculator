import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function BugReport() {
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" gutterBottom>
						Bug report
					</Typography>
					<Typography variant="body1" component="h2" gutterBottom>
						Nothing in this world is 100% bug free. Found any bug in
						this project? It will be great if you raise an issue on
						the
						<a
							href="https://github.com/raajnadar/resistor-color-calculator/issues"
							target="_blank"
							rel="noopener noreferrer">
							GitHub issues here
						</a>
						.
					</Typography>
					<Typography variant="body1" component="h2" gutterBottom>
						If you are interested in improving this project fork
						this repository and make a pull request, and also read
						<a
							href="https://github.com/raajnadar/resistor-color-calculator/blob/master/CONTRIBUTING.md"
							target="_blank"
							rel="noopener noreferrer">
							how to contribute?
						</a>
						before making a pull request. If you liked the project
						idea or this project helped you make sure you leave a
						star on the
						<a
							href="https://github.com/raajnadar/resistor-color-calculator"
							target="_blank"
							rel="noopener noreferrer">
							GitHub repository
						</a>
						to show some support.
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}
