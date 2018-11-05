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
									backgroundColor: props.color.first,
									color:
										props.color.first === 'White' ||
										props.color.first === 'First color'
											? '#000'
											: '#fff'
								}}
								className={props.classes.button}
								variant="contained"
								onClick={() => props.buttonClick('first')}>
								{props.color.first}
							</Button>
						</Grid>
						<Grid item lg={3} sm={6} xs={12}>
							<Button
								style={{
									backgroundColor: props.color.second,
									color:
										props.color.second === 'White' ||
										props.color.second === 'Second color'
											? '#000'
											: '#fff'
								}}
								className={props.classes.button}
								variant="contained"
								onClick={() => props.buttonClick('second')}>
								{props.color.second}
							</Button>
						</Grid>
						<Grid item lg={3} sm={6} xs={12}>
							<Button
								style={{
									backgroundColor: props.color.third,
									color:
										props.color.third === 'White' ||
										props.color.third === 'Third color'
											? '#000'
											: '#fff'
								}}
								className={props.classes.button}
								variant="contained"
								onClick={() => props.buttonClick('third')}>
								{props.color.third}
							</Button>
						</Grid>
						<Grid item lg={3} sm={6} xs={12}>
							<Button
								style={{
									backgroundColor: props.color.fourth,
									color: '#000'
								}}
								className={props.classes.button}
								variant="contained"
								onClick={() => props.buttonClick('fourth')}>
								{props.color.fourth}
							</Button>
						</Grid>
					</Grid>
					<Typography align="center" id="result">
						<span id="value">{props.resistor}</span> Ohms -{' '}
						<span id="tolerance">{props.toleranceValue} %</span>
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default withStyles(styles)(FourBandResistor)
