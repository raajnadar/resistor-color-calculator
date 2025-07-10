import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { indigo, purple } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App'

const theme = createTheme({
	palette: {
		primary: {
			light: purple[400],
			main: purple[500],
			dark: purple[600]
		},
		secondary: {
			light: indigo[400],
			main: indigo[500],
			dark: indigo[600]
		}
	},
	typography: {
		fontFamily: "'Raleway', sans-serif"
	}
})

const container = document.getElementById('root')

if (!container) {
	throw new Error('Root container #root was not found in the document')
}

createRoot(container).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</StrictMode>
)
