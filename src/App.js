import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'

// Import component
import ColorSelector from './components/ColorSelector'
import AboutProject from './components/AboutProject'
import FourBandResistor from './components/FourBandResistor'
import BugReport from './components/BugReport'
import Footer from './components/Footer'

// Colors list
import Colors from './list/Colors'
import Tolerance from './list/Tolerance'

// Helper functions
import ColorIndex from './functions/ColorIndex'

const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: '48px',
		[theme.breakpoints.down('sm')]: {
			padding: '24px'
		}
	}
})

function App(props) {
	const { classes } = props

	const [color, setColor] = useState({
		first: 'First color',
		second: 'Second color',
		third: 'Third color',
		fourth: 'Fourth color'
	})

	const [dialog, setDialog] = useState(false)
	const [content, setDialogContent] = useState(Colors)
	const [activeDialog, setActiveDialog] = useState('')
	const buttonClick = name => {
		if (name === 'fourth') {
			setDialogContent(Tolerance)
		} else {
			setDialogContent(Colors)
		}
		setDialog(true)
		setActiveDialog(name)
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
				(ColorIndex(color.first) + '' + ColorIndex(color.second)) *
				10 ** ColorIndex(color.third)
			setResistor(final)
		}

		if (color.fourth !== 'Fourth color') {
			setTolerance(ColorIndex(color.fourth, 'tolerance'))
		}
	})

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

	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<AboutProject />

				<FourBandResistor
					resistor={resistor}
					color={color}
					buttonClick={buttonClick}
					toleranceValue={toleranceValue}
				/>

				<BugReport />

				<Footer />
			</Grid>

			<ColorSelector
				dialog={dialog}
				color={color}
				activeDialog={activeDialog}
				content={content}
				handleChange={handleChange}
			/>
		</div>
	)
}

export default withStyles(styles)(App)
