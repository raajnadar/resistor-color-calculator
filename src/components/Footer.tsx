import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import makeStyles from '@mui/styles/makeStyles'

export default function Footer() {
	const classes = useStyles()

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<footer className={classes.container}>
					<Typography align="center" variant="body1" component="h6">
						Developed &amp; maintained by{' '}
						<a
							href="https://raajnadar.in"
							target="_blank"
							rel="noopener noreferrer">
							Rajendran Nadar
						</a>
					</Typography>
				</footer>
			</Grid>
		</Grid>
	)
}

const useStyles = makeStyles({
	container: {
		marginTop: '20px'
	}
})
