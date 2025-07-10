import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	// Served from https://raajnadar.github.io/resistor-color-calculator/
	base: '/resistor-color-calculator/',
	plugins: [react()],
	server: {
		open: true
	}
})
