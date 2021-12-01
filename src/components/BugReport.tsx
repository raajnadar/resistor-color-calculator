import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'

export default function BugReport() {
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" gutterBottom>
						Bug report
					</Typography>
					<Typography variant="body1" component="h2" gutterBottom>
						Nothing in this world is 100% bug free. Found any bug in this
						project? It will be great if you raise an issue on the{' '}
						<Link
							href="https://github.com/raajnadar/resistor-color-calculator/issues"
							target="_blank"
							title="Resistor color calculator github issues"
							rel="noopener noreferrer">
							GitHub issues here
						</Link>
					</Typography>
					<Typography variant="body1" component="h2" gutterBottom>
						If you are interested in improving this project fork this repository
						and make a pull request, and also read{' '}
						<Link
							href="https://github.com/raajnadar/resistor-color-calculator/blob/master/CONTRIBUTING.md"
							target="_blank"
							title="Resistor color calculator contributing guide"
							rel="noopener noreferrer">
							how to contribute?{' '}
						</Link>
						before sending a pull request. If you liked the project idea or this
						project helped you make sure you leave a star on the{' '}
						<Link
							href="https://github.com/raajnadar/resistor-color-calculator"
							target="_blank"
							title="Resistor color calculator"
							rel="noopener noreferrer">
							GitHub repository{' '}
						</Link>
						to show some support.
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}
