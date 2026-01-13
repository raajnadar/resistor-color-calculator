import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import BandPicker from './BandPicker'
import ResistorGraphic from './ResistorGraphic'

import { ConverterParts } from '../functions/Converter'
import ColorsList from '../list/Colors'
import ToleranceList from '../list/Tolerance'

type Color = {
	first: string
	second: string
	third: string
	fourth: string
}

type Props = {
	color: Color
	resistor: number
	tolerance: number
	onSelect: (band: keyof Color, value: string) => void
}

const BANDS: {
	name: keyof Color
	label: string
	hint: string
	options: string[]
}[] = [
	{ name: 'first', label: 'Band 1', hint: '1st digit', options: ColorsList },
	{ name: 'second', label: 'Band 2', hint: '2nd digit', options: ColorsList },
	{ name: 'third', label: 'Band 3', hint: 'Multiplier', options: ColorsList },
	{
		name: 'fourth',
		label: 'Band 4',
		hint: 'Tolerance',
		options: ToleranceList
	}
]

export default function FourBandResistor(props: Props) {
	const { color, resistor, tolerance, onSelect } = props

	const { value, prefix } = ConverterParts(resistor)

	return (
		<Grid size={12}>
			<Card>
				<CardContent>
					<ResistorGraphic
						color={color}
						onBandClick={(name) => {
							// Clicking a band scrolls its picker into view on small screens
							document
								.getElementById(`picker-${name}`)
								?.scrollIntoView({ behavior: 'smooth', block: 'center' })
						}}
					/>

					{/* Result readout */}
					<Box
						id="result"
						sx={{
							mt: 1,
							mb: 3.5,
							textAlign: 'center'
						}}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'baseline',
								justifyContent: 'center',
								gap: 1,
								flexWrap: 'wrap'
							}}>
							<Typography
								id="value"
								component="span"
								sx={{
									fontSize: { xs: '2.75rem', sm: '3.75rem' },
									fontWeight: 700,
									lineHeight: 1.05,
									letterSpacing: '-0.04em',
									fontVariantNumeric: 'tabular-nums'
								}}>
								{value}
							</Typography>
							{/* Prefix and unit stay glued together — "1 kΩ", never "1 k Ω" */}
							<Typography
								component="span"
								sx={{
									fontSize: { xs: '1.5rem', sm: '2rem' },
									fontWeight: 600,
									color: 'text.secondary'
								}}>
								{prefix}Ω
							</Typography>
							<Typography
								id="tolerance"
								component="span"
								sx={{
									ml: 1,
									px: 1.25,
									py: 0.5,
									borderRadius: 999,
									fontSize: { xs: '0.875rem', sm: '1rem' },
									fontWeight: 650,
									color: 'secondary.main',
									backgroundColor: (theme) =>
										theme.palette.mode === 'dark'
											? 'rgba(77,214,193,0.12)'
											: 'rgba(15,155,135,0.1)'
								}}>
								±{tolerance}%
							</Typography>
						</Box>
						<Typography
							variant="body2"
							sx={{ color: 'text.secondary', mt: 1 }}>
							{color.first} · {color.second} · {color.third} · {color.fourth}
						</Typography>
					</Box>

					<Divider sx={{ mb: 3 }} />

					<Grid container spacing={3}>
						{BANDS.map((band) => (
							<Grid
								key={band.name}
								id={`picker-${band.name}`}
								size={{ xs: 12, sm: 6, lg: 3 }}>
								<BandPicker
									label={band.label}
									hint={band.hint}
									options={band.options}
									value={color[band.name]}
									onSelect={(value) => onSelect(band.name, value)}
								/>
							</Grid>
						))}
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	)
}
