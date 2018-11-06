// Helper functions
import ColorIndex from './ColorIndex'

export default function Calculator(color, type) {
	let value = 0
	if (type === 'tolerance') {
		value = ColorIndex(color.fourth, 'tolerance')
	} else {
		value = `${ColorIndex(color.first)}${ColorIndex(color.second)}`
		value = value * 10 ** ColorIndex(color.third)
	}

	return value
}
