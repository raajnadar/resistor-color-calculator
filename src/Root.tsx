import { useMemo, useState } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App'
import buildTheme from './theme'

const STORAGE_KEY = 'rcc-color-mode'

export default function Root() {
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark)', {
		// Default to dark before the media query resolves
		defaultMatches: true
	})

	const [stored, setStored] = useState<'light' | 'dark' | null>(() => {
		const saved = localStorage.getItem(STORAGE_KEY)

		return saved === 'light' || saved === 'dark' ? saved : null
	})

	// An explicit choice wins; otherwise follow the system preference
	const mode = stored ?? (prefersDark ? 'dark' : 'light')
	const theme = useMemo(() => buildTheme(mode), [mode])

	const toggleMode = () => {
		const next = mode === 'dark' ? 'light' : 'dark'

		localStorage.setItem(STORAGE_KEY, next)
		setStored(next)
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App mode={mode} onToggleMode={toggleMode} />
		</ThemeProvider>
	)
}
