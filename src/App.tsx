import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

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
	const [color, setColor] = React.useState({
		first: 'Brown',
		second: 'Brown',
		third: 'Brown',
		fourth: 'Brown'
	})

	const [dialog, setDialog] = React.useState(false)
	const [content, setDialogContent] = React.useState(ColorsList)
	const [activeDialog, setActiveDialog] = React.useState('')

	// Derived directly from the selected colors — no effect needed
	const resistor = Calculator(color)
	const tolerance = Calculator(color, 'tolerance')

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
		setColor((current) => ({ ...current, [activeDialog]: value }))
		setDialog(false)
	}

	return (
		<Box
			sx={{
				flexGrow: 1,
				padding: { xs: '24px', md: '30px' }
			}}>
			<Grid container spacing={2}>
				<Grid size={12}>
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
		</Box>
	)
}
