import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: '20px'
	},
	buttonContainer: {
		margin: '10px 0px',
		textAlign: 'center'
	},
	button: {
		minWidth: '200px'
	}
})

function App(props) {
	const { classes } = props

	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Typography
								variant="h5"
								component="h2"
								gutterBottom>
								About this project
							</Typography>
							<Typography
								variant="subtitle1"
								component="h2"
								gutterBottom>
								If you are an electronics geek sometimes it is
								hard to remember the value of the resistor (Just
								like me). Instead of manually calculating let
								this web application do the hardwork for you.{' '}
								<strong>
									Currently it only supports 4 band resistor
									color 5 &amp; 6 band will be added in later
									updates.
								</strong>
							</Typography>
							<Typography
								variant="subtitle1"
								component="h2"
								gutterBottom>
								Just select the color in the proper sequence
								&amp; get the correct value of the resistor
								that's it.
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Typography
								variant="h5"
								component="h2"
								gutterBottom>
								4 band resistor color
							</Typography>
							<Grid
								className={classes.buttonContainer}
								justify="center"
								container
								spacing={24}>
								<Grid item lg={3} sm={6} xs={12}>
									<Button
										className={classes.button}
										variant="contained">
										First Color
									</Button>
								</Grid>
								<Grid item lg={3} sm={6} xs={12}>
									<Button
										className={classes.button}
										variant="contained">
										Second Color
									</Button>
								</Grid>
								<Grid item lg={3} sm={6} xs={12}>
									<Button
										className={classes.button}
										variant="contained">
										Third Color
									</Button>
								</Grid>
								<Grid item lg={3} sm={6} xs={12}>
									<Button
										className={classes.button}
										variant="contained">
										Fourth Color
									</Button>
								</Grid>
							</Grid>
							<Typography align="center" id="result">
								<span id="value">0</span> Ohms -{' '}
								<span id="tolerance">0%</span>
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Typography
								variant="h5"
								component="h2"
								gutterBottom>
								Bug report
							</Typography>
							<Typography
								variant="subtitle1"
								component="h2"
								gutterBottom>
								Nothing in this world is 100% bug free. Found
								any bug in this project? It will be great if you
								raise an issue on the{' '}
								<a
									href="https://github.com/raajnadar/resistor-color-calculator/issues"
									target="_blank"
									rel="noopener noreferrer">
									GitHub issues here
								</a>
								.
							</Typography>
							<Typography
								variant="subtitle1"
								component="h2"
								gutterBottom>
								If you are interested in improving this project
								fork this repository and make a pull request,
								and also read{' '}
								<a
									href="https://github.com/raajnadar/resistor-color-calculator/blob/master/CONTRIBUTING.md"
									target="_blank"
									rel="noopener noreferrer">
									how to contribute?
								</a>{' '}
								before making a pull request. If you liked the
								project idea or this project helped you make
								sure you leave a star on the{' '}
								<a
									href="https://github.com/raajnadar/resistor-color-calculator"
									target="_blank"
									rel="noopener noreferrer">
									GitHub repository
								</a>{' '}
								to show some support.
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid container spacing={24}>
					<Grid item xs={12}>
						<footer>
							<Typography
								align="center"
								variant="subtitle1"
								component="h6">
								Developed &amp; maintained by{' '}
								<a
									href="https://raajnadar.in"
									target="_blank"
									rel="noopener noreferrer">
									Rajendran Nadar
								</a>
							</Typography>
						</footer>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default withStyles(styles)(App)
