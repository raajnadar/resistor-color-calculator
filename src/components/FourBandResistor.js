import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	buttonContainer: {
		margin: '10px -12px',
		textAlign: 'center'
	},
	button: {
		minWidth: '200px'
	}
})

function FourBandResistor(props) {
	const { buttonClick, classes, color, resistor, tolerance } = props
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" gutterBottom>
						4 band resistor color
					</Typography>
					<Grid
						className={props.classes.buttonContainer}
						justify="center"
						container
						spacing={24}>
						<Grid item lg={3} sm={6} xs={12}>
							<Button
								style={{
									backgroundColor: color.first,
									color:
										color.first === 'White'
											? '#000'
											: '#fff'
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
									color:
										color.second === 'White'
											? '#000'
											: '#fff'
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
									color:
										color.third === 'White'
											? '#000'
											: '#fff'
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
									color:
										color.fourth === 'White'
											? '#000'
											: '#fff'
								}}
								className={classes.button}
								variant="contained"
								onClick={() => buttonClick('fourth')}>
								{color.fourth}
							</Button>
						</Grid>
					</Grid>
					<Typography align="center" id="result">
						<span id="value">{resistor}</span> Ohms -{' '}
						<span id="tolerance">{tolerance} %</span>
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default withStyles(styles)(FourBandResistor)
