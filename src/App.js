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
import ColorsList from './list/Colors'
import ToleranceList from './list/Tolerance'

// Helper function
import Calculator from './functions/Calculator'

const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: '48px',
		[theme.breakpoints.down('sm')]: {
			padding: '24px'
		}
	},
	selectBand: {
		position: 'fixed',
		right: 40,
		bottom: 40
	}
})

function App(props) {
	const { classes } = props

	const [color, setColor] = useState({
		first: 'Brown',
		second: 'Brown',
		third: 'Brown',
		fourth: 'Brown'
	})

	const [dialog, setDialog] = useState(false)
	const [content, setDialogContent] = useState(ColorsList)
	const [activeDialog, setActiveDialog] = useState('')
	const buttonClick = name => {
		if (name === 'fourth') {
			setDialogContent(ToleranceList)
		} else {
			setDialogContent(ColorsList)
		}
		setDialog(true)
		setActiveDialog(name)
	}

	const [resistor, setResistor] = useState(0)
	const [tolerance, setTolerance] = useState(0)
	useEffect(() => {
		setResistor(Calculator(color))
		setTolerance(Calculator(color, 'tolerance'))
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
					tolerance={tolerance}
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
