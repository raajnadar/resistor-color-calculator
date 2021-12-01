import React from 'react'

import makeStyles from '@mui/styles/makeStyles'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material'

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

export default function App() {
	const classes = useStyles()

	const [color, setColor] = React.useState({
		first: 'Brown',
		second: 'Brown',
		third: 'Brown',
		fourth: 'Brown'
	})

	const [dialog, setDialog] = React.useState(false)
	const [content, setDialogContent] = React.useState(ColorsList)
	const [activeDialog, setActiveDialog] = React.useState('')

	const [resistor, setResistor] = React.useState(0)
	const [tolerance, setTolerance] = React.useState(0)

	React.useEffect(() => {
		if (!dialog) {
			setResistor(Calculator(color))
			setTolerance(Calculator(color, 'tolerance'))
		}
	}, [color, dialog])

	const buttonClick = (name: string) => {
		if (name === 'fourth') {
			setDialogContent(ToleranceList)
		} else {
			setDialogContent(ColorsList)
		}
		setDialog(true)
		setActiveDialog(name)
	}

	const handleChange = (
		_e: React.ChangeEvent<HTMLInputElement>,
		value: string
	) => {
		let newColor: any = color

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
			<Grid container spacing={2}>
				<Grid xs={12} item>
					<Typography variant="h3" component="h1" align="center" gutterBottom>
						Resistor Color Calculator
					</Typography>
				</Grid>
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

const useStyles = makeStyles((theme: Theme) => ({
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
}))
