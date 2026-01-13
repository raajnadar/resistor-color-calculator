// Splits a raw ohm value into a display number and an SI prefix, so callers can
// render "1" + "kΩ" without a space creeping in between the prefix and the unit.
export function ConverterParts(value: number): {
	value: string
	prefix: string
} {
	if (value >= 1000 && value <= 999999) {
		return { value: `${value / 1000}`, prefix: 'k' }
	}

	if (value >= 1000000 && value <= 999999999) {
		return { value: `${value / 1000000}`, prefix: 'M' }
	}

	if (value >= 1000000000 && value <= 99999999999) {
		return { value: `${value / 1000000000}`, prefix: 'G' }
	}

	return { value: value.toString(), prefix: '' }
}

export default function Converter(value: number): string {
	const { value: display, prefix } = ConverterParts(value)

	return prefix ? `${display} ${prefix}` : display
}
