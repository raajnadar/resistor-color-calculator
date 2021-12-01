import { render } from '@testing-library/react'

import App from './App'

test('Application renders without crash', () => {
	render(<App />)
	return undefined
})
