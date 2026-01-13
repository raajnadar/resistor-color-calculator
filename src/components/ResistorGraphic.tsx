import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

import { swatchFor } from '../list/Swatches'

type Props = {
	color: {
		first: string
		second: string
		third: string
		fourth: string
	}
	onBandClick: (name: string) => void
}

// Geometry of the drawn resistor, in viewBox units.
const VIEW_W = 420
const VIEW_H = 140
const BODY_X = 90
const BODY_W = 240
const BODY_Y = 34
const BODY_H = 72
const BAND_W = 22

// Left-to-right band placement, mirroring a real 4-band resistor: the three value
// bands cluster toward the left lead, then a wide gap sets the tolerance band apart.
const BANDS = [
	{ name: 'first', x: BODY_X + 22 },
	{ name: 'second', x: BODY_X + 56 },
	{ name: 'third', x: BODY_X + 90 },
	{ name: 'fourth', x: BODY_X + BODY_W - 40 }
] as const

export default function ResistorGraphic(props: Props) {
	const { color, onBandClick } = props
	const theme = useTheme()
	const dark = theme.palette.mode === 'dark'

	const leadColor = dark ? '#9fa6b2' : '#8a919e'
	const bodyLight = dark ? '#d9c9a8' : '#e8dcc0'
	const bodyDark = dark ? '#b09a72' : '#cbbb93'

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				// Let the artwork breathe on wide screens without becoming huge
				'& svg': { width: '100%', maxWidth: 520, height: 'auto' }
			}}>
			<svg
				viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
				role="img"
				aria-label={`Four band resistor with bands ${color.first}, ${color.second}, ${color.third} and tolerance ${color.fourth}`}>
				<defs>
					<linearGradient id="bodyFill" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor={bodyLight} />
						<stop offset="45%" stopColor={bodyLight} />
						<stop offset="100%" stopColor={bodyDark} />
					</linearGradient>
					<linearGradient id="leadFill" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor={leadColor} stopOpacity="0.55" />
						<stop offset="50%" stopColor={leadColor} />
						<stop offset="100%" stopColor={leadColor} stopOpacity="0.55" />
					</linearGradient>
					{/* Shading that makes the body and its bands read as a cylinder */}
					<linearGradient id="bandShade" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#000" stopOpacity="0.22" />
						<stop offset="40%" stopColor="#fff" stopOpacity="0.16" />
						<stop offset="100%" stopColor="#000" stopOpacity="0.3" />
					</linearGradient>
					{/* Clip every band to the body so they follow its rounded ends */}
					<clipPath id="bodyClip">
						<rect
							x={BODY_X}
							y={BODY_Y}
							width={BODY_W}
							height={BODY_H}
							rx={26}
						/>
					</clipPath>
				</defs>

				{/* Leads */}
				<rect
					x={0}
					y={VIEW_H / 2 - 4}
					width={BODY_X + 6}
					height={8}
					rx={4}
					fill="url(#leadFill)"
				/>
				<rect
					x={BODY_X + BODY_W - 6}
					y={VIEW_H / 2 - 4}
					width={VIEW_W - (BODY_X + BODY_W) + 6}
					height={8}
					rx={4}
					fill="url(#leadFill)"
				/>

				{/* Body */}
				<rect
					x={BODY_X}
					y={BODY_Y}
					width={BODY_W}
					height={BODY_H}
					rx={26}
					fill="url(#bodyFill)"
				/>

				<g clipPath="url(#bodyClip)">
					{BANDS.map((band) => {
						const value = color[band.name]
						const { hex, sheen } = swatchFor(value)
						const isTransparent = hex === 'transparent'

						return (
							<g
								key={band.name}
								onClick={() => onBandClick(band.name)}
								style={{ cursor: 'pointer' }}>
								{/* Transparent tolerance means "no band" — show nothing but stay clickable */}
								{!isTransparent && (
									<>
										<rect
											x={band.x}
											y={BODY_Y}
											width={BAND_W}
											height={BODY_H}
											fill={hex}
										/>
										{sheen && (
											<rect
												x={band.x}
												y={BODY_Y}
												width={BAND_W}
												height={BODY_H}
												fill={sheen}
												opacity={0.45}
											/>
										)}
									</>
								)}
								<rect
									x={band.x}
									y={BODY_Y}
									width={BAND_W}
									height={BODY_H}
									fill="transparent"
								/>
							</g>
						)
					})}
				</g>

				{/* Cylinder shading laid over the whole body, bands included */}
				<rect
					x={BODY_X}
					y={BODY_Y}
					width={BODY_W}
					height={BODY_H}
					rx={26}
					fill="url(#bandShade)"
					pointerEvents="none"
				/>
			</svg>
		</Box>
	)
}
