import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: '48px',
		[theme.breakpoints.down('sm')]: {
			padding: '24px'
		}
	},
	buttonContainer: {
		margin: '10px -12px',
		textAlign: 'center'
	},
	button: {
		minWidth: '200px'
	}
})

const colors = [
	'black',
	'brown',
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'violet',
	'grey',
	'white'
]

const toleranceArr = ['Gold', 'Silver', 'Transparent']

function App(props) {
	const { classes } = props

	const [color, setColor] = useState({
		first: 'First color',
		second: 'Second color',
		third: 'Third color',
		fourth: 'Fourth color'
	})

	const [dialog, setDialog] = useState(false)
	const [content, setDialogContent] = useState(colors)
	const [activeDialog, setActiveDialog] = useState('')
	const buttonClick = name => {
		if (name === 'fourth') {
			setDialogContent(toleranceArr)
		} else {
			setDialogContent(colors)
		}
		setDialog(true)
		setActiveDialog(name)
	}

	const handleChange = (e, value) => {
		let newColor = color

		newColor[activeDialog] = value
		if (activeDialog === 'first') {
			setColor(newColor)
		} else if (activeDialog === 'second') {
			setColor(newColor)
		} else if (activeDialog === 'third') {
			setColor(newColor)
		} else {
			setColor(newColor)
		}
		setDialog(false)
	}

	const calculator = color => {
		switch (color) {
			case 'black':
				return 0
			case 'brown':
				return 1
			case 'red':
				return 2
			case 'orange':
				return 3
			case 'yellow':
				return 4
			case 'green':
				return 5
			case 'blue':
				return 6
			case 'violet':
				return 7
			case 'grey':
				return 8
			case 'white':
				return 9
			default:
				break
		}
	}

	const tolerance = color => {
		switch (color) {
			case 'Gold':
				return 5
			case 'Silver':
				return 10
			case 'Transparent':
				return 20
			default:
				break
		}
	}

	const [resistor, setResistor] = useState(0)
	const [toleranceValue, setTolerance] = useState(0)
	useEffect(() => {
		if (
			color.first !== 'First color' &&
			color.second !== 'Second color' &&
			color.third !== 'Third color'
		) {
			let final =
				(calculator(color.first) + '' + calculator(color.second)) *
				10 ** calculator(color.third)
			setResistor(final)
		}

		if (color.fourth !== 'Fourth color') {
			setTolerance(tolerance(color.fourth))
		}
	})

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
										variant="contained"
										onClick={() => buttonClick('first')}>
										{color.first}
									</Button>
								</Grid>
								<Grid item lg={3} sm={6} xs={12}>
									<Button
										className={classes.button}
										variant="contained"
										onClick={() => buttonClick('second')}>
										{color.second}
									</Button>
								</Grid>
								<Grid item lg={3} sm={6} xs={12}>
									<Button
										className={classes.button}
										variant="contained"
										onClick={() => buttonClick('third')}>
										{color.third}
									</Button>
								</Grid>
								<Grid item lg={3} sm={6} xs={12}>
									<Button
										className={classes.button}
										variant="contained"
										onClick={() => buttonClick('fourth')}>
										{color.fourth}
									</Button>
								</Grid>
							</Grid>
							<Typography align="center" id="result">
								<span id="value">{resistor}</span> Ohms -{' '}
								<span id="tolerance">{toleranceValue} %</span>
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

			<Dialog
				open={dialog}
				disableBackdropClick
				disableEscapeKeyDown
				fullWidth={true}
				maxWidth="md"
				aria-labelledby="confirmation-dialog-title">
				<DialogTitle id="confirmation-dialog-title">
					Phone Ringtone
				</DialogTitle>
				<DialogContent>
					<RadioGroup
						aria-label="Ringtone"
						name="ringtone"
						value={color[activeDialog]}
						onChange={handleChange}>
						{content.map(color => (
							<FormControlLabel
								value={color}
								key={color}
								control={<Radio />}
								label={color}
							/>
						))}
					</RadioGroup>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default withStyles(styles)(App)
