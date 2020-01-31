export default function ColorIndex(color: string, type?: string): number {
	let value: number = 0

	if (type === 'tolerance') {
		switch (color) {
			case 'Brown':
				value = 1
				break
			case 'Red':
				value = 2
				break
			case 'Orange':
				value = 3
				break
			case 'Yellow':
				value = 4
				break
			case 'Green':
				value = 0.5
				break
			case 'Blue':
				value = 0.25
				break
			case 'Violet':
				value = 0.1
				break
			case 'Gray':
				value = 0.05
				break
			case 'Gold':
				value = 5
				break
			case 'Silver':
				value = 10
				break
			case 'Transparent':
				value = 20
				break
			default:
				break
		}
	} else {
		switch (color) {
			case 'Black':
				value = 0
				break
			case 'Brown':
				value = 1
				break
			case 'Red':
				value = 2
				break
			case 'Orange':
				value = 3
				break
			case 'Yellow':
				value = 4
				break
			case 'Green':
				value = 5
				break
			case 'Blue':
				value = 6
				break
			case 'Violet':
				value = 7
				break
			case 'Grey':
				value = 8
				break
			case 'White':
				value = 9
				break
			default:
				break
		}
	}

	return value
}
