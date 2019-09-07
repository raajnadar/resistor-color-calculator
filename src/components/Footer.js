import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function footer() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<footer>
					<Typography align="center" variant="body1" component="h6">
						Developed &amp; maintained by
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
