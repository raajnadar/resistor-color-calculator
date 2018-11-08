export default function ColorIndex(color, type) {
	if (type === 'tolerance') {
		switch (color) {
			case 'Brown':
				return 1
			case 'Red':
				return 2
			case 'Orange':
				return 3
			case 'Yellow':
				return 4
			case 'Green':
				return 0.5
			case 'Blue':
				return 0.25
			case 'Violet':
				return 0.1
			case 'Gray':
				return 0.05
			case 'Gold':
				return 5
			case 'Silver':
				return 10
			case 'Transparent':
				return 20
			default:
				break
		}
	} else {
		switch (color) {
			case 'Black':
				return 0
			case 'Brown':
				return 1
			case 'Red':
				return 2
			case 'Orange':
				return 3
			case 'Yellow':
				return 4
			case 'Green':
				return 5
			case 'Blue':
				return 6
			case 'Violet':
				return 7
			case 'Grey':
				return 8
			case 'White':
				return 9
			default:
				break
		}
	}
}
