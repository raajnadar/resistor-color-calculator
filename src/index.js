import React from 'react'
import { render } from 'react-dom'

import './index.css'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import indigo from '@material-ui/core/colors/indigo'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
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
		useNextVariants: true
	}
})

render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
