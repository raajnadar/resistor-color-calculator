import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

// Import component
import AboutProject from './components/AboutProject'
import FourBandResistor from './components/FourBandResistor'
import BugReport from './components/BugReport'
import Footer from './components/Footer'

// Helper function
import Calculator from './functions/Calculator'

type Color = {
	first: string
	second: string
	third: string
	fourth: string
}

type Props = {
	mode: 'light' | 'dark'
	onToggleMode: () => void
}

export default function App(props: Props) {
	const { mode, onToggleMode } = props

	const [color, setColor] = React.useState<Color>({
		first: 'Brown',
		second: 'Black',
		third: 'Red',
		fourth: 'Gold'
	})

	// Derived directly from the selected colors — no effect needed
	const resistor = Calculator(color)
	const tolerance = Calculator(color, 'tolerance')

	const handleSelect = (band: keyof Color, value: string) => {
		setColor((current) => ({ ...current, [band]: value }))
	}

	return (
		<Box
			sx={{
				minHeight: '100vh',
				// A soft wash behind the cards so the page isn't a flat slab
				backgroundImage: (theme) =>
					theme.palette.mode === 'dark'
						? 'radial-gradient(1000px 500px at 50% -10%, rgba(139,139,255,0.16), transparent 70%)'
						: 'radial-gradient(1000px 500px at 50% -10%, rgba(75,75,214,0.1), transparent 70%)'
			}}>
			<Container maxWidth="md" sx={{ py: { xs: 4, md: 7 } }}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'space-between',
						gap: 2,
						mb: { xs: 3, md: 5 }
					}}>
					<Box>
						<Typography
							variant="h1"
							sx={{
								fontSize: { xs: '2rem', sm: '2.75rem' },
								mb: 0.5
							}}>
							Resistor Color Calculator
						</Typography>
						<Typography variant="body1" sx={{ color: 'text.secondary' }}>
							Pick the bands, read the value.
						</Typography>
					</Box>

					<Tooltip
						title={mode === 'dark' ? 'Switch to light' : 'Switch to dark'}
						arrow>
						<IconButton
							onClick={onToggleMode}
							aria-label={
								mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
							}
							sx={{
								border: '1px solid',
								borderColor: 'divider',
								borderRadius: '12px',
								flexShrink: 0
							}}>
							{/* Inline glyphs keep the app dependency-free */}
							<Box
								component="span"
								aria-hidden
								sx={{ fontSize: '1.1rem', lineHeight: 1 }}>
								{mode === 'dark' ? '☀' : '☾'}
							</Box>
						</IconButton>
					</Tooltip>
				</Box>

				<Grid container spacing={{ xs: 2, md: 3 }}>
					<FourBandResistor
						resistor={resistor}
						color={color}
						tolerance={tolerance}
						onSelect={handleSelect}
					/>

					<AboutProject />

					<BugReport />

					<Footer />
				</Grid>
			</Container>
		</Box>
	)
}
