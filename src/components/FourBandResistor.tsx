import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Converter from '../functions/Converter'

type Props = {
	buttonClick: any
	color: any
	resistor: number
	tolerance: number
}

export default function FourBandResistor(props: Props) {
	const { buttonClick, color, resistor, tolerance } = props

	return (
		<Grid size={12}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" gutterBottom>
						4 band resistor color
					</Typography>
					<Grid
						sx={{ m: '10px -12px', textAlign: 'center' }}
						container
						spacing={2}>
						<Grid
							size={{ xs: 12, sm: 6, lg: 3 }}
							sx={{ display: 'flex', justifyContent: 'center' }}>
							<Button
								style={{
									backgroundColor: color.first,
									color: color.first === 'White' ? '#000' : '#fff'
								}}
								variant="contained"
								onClick={() => buttonClick('first')}>
								{color.first}
							</Button>
						</Grid>
						<Grid
							size={{ xs: 12, sm: 6, lg: 3 }}
							sx={{ display: 'flex', justifyContent: 'center' }}>
							<Button
								style={{
									backgroundColor: color.second,
									color: color.second === 'White' ? '#000' : '#fff'
								}}
								variant="contained"
								onClick={() => buttonClick('second')}>
								{color.second}
							</Button>
						</Grid>
						<Grid
							size={{ xs: 12, sm: 6, lg: 3 }}
							sx={{ display: 'flex', justifyContent: 'center' }}>
							<Button
								style={{
									backgroundColor: color.third,
									color: color.third === 'White' ? '#000' : '#fff'
								}}
								variant="contained"
								onClick={() => buttonClick('third')}>
								{color.third}
							</Button>
						</Grid>
						<Grid
							size={{ xs: 12, sm: 6, lg: 3 }}
							sx={{ display: 'flex', justifyContent: 'center' }}>
							<Button
								style={{
									backgroundColor: color.fourth,
									color: color.fourth === 'White' ? '#000' : '#fff'
								}}
								variant="contained"
								onClick={() => buttonClick('fourth')}>
								{color.fourth}
							</Button>
						</Grid>
					</Grid>
					<Typography align="center" component="div" id="result">
						<Typography
							component="span"
							variant="h5"
							sx={{ display: 'inline' }}
							id="value">
							{Converter(resistor)}
						</Typography>
						<Typography
							component="span"
							variant="h5"
							sx={{ display: 'inline', mx: 1 }}>
							Ohms &amp;
						</Typography>
						<Typography
							component="span"
							variant="h5"
							sx={{ display: 'inline' }}
							id="tolerance">
							{tolerance}%
						</Typography>
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}
