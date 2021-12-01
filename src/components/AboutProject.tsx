import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function AboutProject() {
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" gutterBottom>
						About this project
					</Typography>
					<Typography variant="body1" component="h2" gutterBottom>
						If you are an electronics geek sometimes it is hard to remember the
						value of the resistor (Just like me). Instead of manually
						calculating let this web application do the hardwork for you.
						Currently it only supports 4 band resistor color 5 &amp; 6 band will
						be added in later updates.
					</Typography>
					<Typography variant="body1" component="h2" gutterBottom>
						Just select the color in the proper sequence &amp; get the correct
						value of the resistor that&apos;s it.
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}
