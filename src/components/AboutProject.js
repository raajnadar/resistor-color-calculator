import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function AboutProject() {
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" gutterBottom>
						About this project
					</Typography>
					<Typography variant="subtitle1" component="h2" gutterBottom>
						If you are an electronics geek sometimes it is hard to
						remember the value of the resistor (Just like me).
						Instead of manually calculating let this web application
						do the hardwork for you.{' '}
						<strong>
							Currently it only supports 4 band resistor color 5
							&amp; 6 band will be added in later updates.
						</strong>
					</Typography>
					<Typography variant="subtitle1" component="h2" gutterBottom>
						Just select the color in the proper sequence &amp; get
						the correct value of the resistor that's it.
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}
