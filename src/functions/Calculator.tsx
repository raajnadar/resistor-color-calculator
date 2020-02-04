// Helper functions
import ColorIndex from './ColorIndex'

type Color = {
	first: string
	second: string
	third: string
	fourth: string
}

export default function Calculator(color: Color, type?: string) {
	let value: number = 0

	if (type === 'tolerance') {
		value = ColorIndex(color.fourth, 'tolerance')
	} else {
		value = parseInt(`${ColorIndex(color.first)}${ColorIndex(color.second)}`)
		value = value * 10 ** ColorIndex(color.third)
	}

	return value
}
