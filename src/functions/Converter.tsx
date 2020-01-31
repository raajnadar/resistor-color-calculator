export default function Converter(value: number): string {
	let result: string = value.toString()

	if (value >= 1000 && value <= 999999) {
		result = `${value / 1000} k`
	} else if (value >= 1000000 && value <= 999999999) {
		result = `${value / 1000000} M`
	} else if (value >= 1000000000 && value <= 99999999999) {
		result = `${value / 1000000000} G`
	}

	return result
}
