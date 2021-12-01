import makeStyles from '@mui/styles/makeStyles'

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
	const classes = useStyles()

	const { buttonClick, color, resistor, tolerance } = props

	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" gutterBottom>
						4 band resistor color
					</Typography>
					<Grid className={classes.buttonContainer} container spacing={2}>
						<Grid item lg={3} sm={6} xs={12}>
							<Button
								style={{
									backgroundColor: color.first,
									color: color.first === 'White' ? '#000' : '#fff'
								}}
								className={classes.button}
								variant="contained"
								onClick={() => props.buttonClick('first')}>
								{color.first}
							</Button>
						</Grid>
						<Grid item lg={3} sm={6} xs={12}>
							<Button
								style={{
									backgroundColor: color.second,
									color: color.second === 'White' ? '#000' : '#fff'
								}}
								className={classes.button}
								variant="contained"
								onClick={() => buttonClick('second')}>
								{props.color.second}
							</Button>
						</Grid>
						<Grid item lg={3} sm={6} xs={12}>
							<Button
								style={{
									backgroundColor: color.third,
									color: color.third === 'White' ? '#000' : '#fff'
								}}
								className={classes.button}
								variant="contained"
								onClick={() => buttonClick('third')}>
								{color.third}
							</Button>
						</Grid>
						<Grid item lg={3} sm={6} xs={12}>
							<Button
								style={{
									backgroundColor: color.fourth,
									color: color.fourth === 'White' ? '#000' : '#fff'
								}}
								className={classes.button}
								variant="contained"
								onClick={() => buttonClick('fourth')}>
								{color.fourth}
							</Button>
						</Grid>
					</Grid>
					<Typography align="center" id="result">
						<span id="value">{Converter(resistor)}</span> Ohms -
						<span id="tolerance">{tolerance} %</span>
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}

const useStyles = makeStyles({
	buttonContainer: {
		margin: '10px -12px',
		textAlign: 'center'
	},
	button: {
		minWidth: '200px'
	}
})
