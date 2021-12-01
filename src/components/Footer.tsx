import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Footer() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Box mt={4}>
					<Typography align="center" variant="body1" component="h6">
						Developed &amp; maintained by
						<Link
							href="https://raajnadar.in"
							target="_blank"
							rel="noopener noreferrer">
							&nbsp; Rajendran Nadar
						</Link>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	)
}
