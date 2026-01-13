import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { swatchFill, swatchFor } from '../list/Swatches'

type Props = {
	label: string
	hint: string
	options: string[]
	value: string
	onSelect: (color: string) => void
}

export default function BandPicker(props: Props) {
	const { label, hint, options, value, onSelect } = props

	return (
		<Box>
			<Typography
				variant="subtitle2"
				sx={{ fontWeight: 700, letterSpacing: '0.02em' }}>
				{label}
			</Typography>
			<Typography
				variant="caption"
				sx={{ color: 'text.secondary', display: 'block', mb: 1.25 }}>
				{hint}
			</Typography>

			<Box
				role="radiogroup"
				aria-label={label}
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 1
				}}>
				{options.map((option) => {
					const selected = option === value
					const { hex, contrast } = swatchFor(option)

					return (
						<Tooltip key={option} title={option} arrow disableInteractive>
							<Box
								component="button"
								type="button"
								role="radio"
								aria-checked={selected}
								aria-label={option}
								onClick={() => onSelect(option)}
								sx={{
									width: 38,
									height: 38,
									p: 0,
									cursor: 'pointer',
									borderRadius: '12px',
									background: swatchFill(option),
									// A dashed outline reads as "no band" for the transparent option
									border:
										hex === 'transparent'
											? '2px dashed'
											: '1px solid rgba(0,0,0,0.25)',
									borderColor: hex === 'transparent' ? 'divider' : undefined,
									color: contrast,
									display: 'grid',
									placeItems: 'center',
									outline: 'none',
									transition:
										'transform 140ms ease, box-shadow 140ms ease, opacity 140ms ease',
									opacity: selected ? 1 : 0.72,
									transform: selected ? 'scale(1.06)' : 'none',
									boxShadow: selected
										? (theme) =>
												`0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${theme.palette.primary.main}`
										: 'none',
									'&:hover': { opacity: 1, transform: 'scale(1.06)' },
									'&:focus-visible': {
										boxShadow: (theme) =>
											`0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${theme.palette.primary.main}`
									}
								}}>
								{selected && (
									<Box
										component="span"
										aria-hidden
										sx={{
											width: 8,
											height: 8,
											borderRadius: '50%',
											backgroundColor: 'currentColor',
											opacity: 0.9
										}}
									/>
								)}
							</Box>
						</Tooltip>
					)
				})}
			</Box>
		</Box>
	)
}
