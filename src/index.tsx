import { render } from 'react-dom'

import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import purple from '@mui/material/colors/purple'
import indigo from '@mui/material/colors/indigo'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App'
import * as serviceWorker from './serviceWorker'

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

render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	document.getElementById('root')
)

serviceWorker.register()
