import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Footer() {
	return (
		<Grid size={12}>
			<Box sx={{ mt: 3, mb: 1 }}>
				<Typography
					align="center"
					variant="body2"
					component="p"
					sx={{ color: 'text.secondary' }}>
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
	)
}
