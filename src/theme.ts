import { createTheme } from '@mui/material/styles'
import type { PaletteMode } from '@mui/material'

// Shared shape across both modes — only the palette changes with the mode.
const buildTheme = (mode: PaletteMode) => {
	const dark = mode === 'dark'

	return createTheme({
		palette: {
			mode,
			primary: {
				main: dark ? '#8b8bff' : '#4b4bd6'
			},
			secondary: {
				main: dark ? '#4dd6c1' : '#0f9b87'
			},
			background: {
				default: dark ? '#0c0d12' : '#f4f5f9',
				paper: dark ? '#15171f' : '#ffffff'
			},
			divider: dark ? 'rgba(255,255,255,0.09)' : 'rgba(16,18,28,0.09)'
		},
		shape: {
			borderRadius: 16
		},
		typography: {
			fontFamily: "'Inter', 'Raleway', system-ui, sans-serif",
			h1: { fontWeight: 700, letterSpacing: '-0.03em' },
			h5: { fontWeight: 650, letterSpacing: '-0.01em' },
			button: { fontWeight: 600, textTransform: 'none' }
		},
		components: {
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundImage: 'none',
						border: `1px solid ${
							dark ? 'rgba(255,255,255,0.09)' : 'rgba(16,18,28,0.08)'
						}`,
						boxShadow: dark
							? '0 1px 2px rgba(0,0,0,0.4)'
							: '0 1px 2px rgba(16,18,28,0.06), 0 8px 24px -12px rgba(16,18,28,0.12)'
					}
				}
			},
			MuiCardContent: {
				styleOverrides: {
					root: {
						padding: 28,
						'&:last-child': { paddingBottom: 28 }
					}
				}
			},
			MuiLink: {
				defaultProps: { underline: 'hover' },
				styleOverrides: {
					root: { fontWeight: 600 }
				}
			}
		}
	})
}

export default buildTheme
