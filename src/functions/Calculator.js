// Helper functions
import ColorIndex from './ColorIndex'

export default function Calculator(color, type) {
	let value = 0
	if (type === 'tolerance') {
		value = ColorIndex(color.fourth, 'tolerance')
	} else {
		value = `${ColorIndex(color.first)}${ColorIndex(color.second)}`
		value = value * 10 ** ColorIndex(color.third)

		if (value >= 1000 && value <= 999999) {
			value = value / 1000
			value = value + ' K'
		} else if (value >= 1000000 && value <= 999999999) {
			value = value / 1000000
			value = value + ' M'
		} else if (value >= 1000000000 && value <= 99999999999) {
			value = value / 1000000000
			value = value + ' G'
		}
	}

	return value
}
