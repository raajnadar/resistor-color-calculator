// Visual appearance of each band color.
//
// The color names are the source of truth for the maths (see functions/ColorIndex),
// so this map only describes how a band is painted. `hex` is the band fill and
// `contrast` is a legible text color to lay over it.
type Swatch = {
	hex: string
	contrast: string
	// Optional second stop, used to give the metallic bands a sheen
	sheen?: string
}

const Swatches: Record<string, Swatch> = {
	Black: { hex: '#1a1a1a', contrast: '#ffffff' },
	Brown: { hex: '#8b5a2b', contrast: '#ffffff' },
	Red: { hex: '#e02b2b', contrast: '#ffffff' },
	Orange: { hex: '#f57c1f', contrast: '#1a1a1a' },
	Yellow: { hex: '#f5d213', contrast: '#1a1a1a' },
	Green: { hex: '#2fa84f', contrast: '#ffffff' },
	Blue: { hex: '#2c6fdb', contrast: '#ffffff' },
	Violet: { hex: '#8b46d4', contrast: '#ffffff' },
	// Both spellings appear across the two lists — keep them in sync here
	Grey: { hex: '#9aa0a6', contrast: '#1a1a1a' },
	Gray: { hex: '#9aa0a6', contrast: '#1a1a1a' },
	White: { hex: '#f5f5f5', contrast: '#1a1a1a' },
	Gold: { hex: '#c9a227', contrast: '#1a1a1a', sheen: '#f0d67a' },
	Silver: { hex: '#a8a9ad', contrast: '#1a1a1a', sheen: '#e2e3e6' },
	Transparent: { hex: 'transparent', contrast: 'currentColor' }
}

export const swatchFor = (color: string): Swatch =>
	Swatches[color] ?? { hex: '#9aa0a6', contrast: '#1a1a1a' }

// Paint value for a band or chip: metallics get a subtle gradient, the rest are flat.
export const swatchFill = (color: string): string => {
	const { hex, sheen } = swatchFor(color)

	if (sheen) {
		return `linear-gradient(135deg, ${hex} 0%, ${sheen} 50%, ${hex} 100%)`
	}

	return hex
}

export default Swatches
