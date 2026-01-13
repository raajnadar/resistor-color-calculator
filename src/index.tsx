import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Root from './Root'

const container = document.getElementById('root')

if (!container) {
	throw new Error('Root container #root was not found in the document')
}

createRoot(container).render(
	<StrictMode>
		<Root />
	</StrictMode>
)
