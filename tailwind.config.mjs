/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pora: {
					bg: '#243435',
					surface: '#1f2d2e',
					'surface-dim': '#1a2627',
					'surface-container': '#2c3f41',
					primary: '#729494',
					'primary-dim': '#4D7B82',
					'on-surface': '#d4e7d4',
					'on-surface-variant': '#e0e0e0',
					outline: '#757575',
					'outline-variant': '#384e50',
					grid: '#314749',
					label: '#7ac3cf',
					tertiary: '#ada16d',
					secondary: '#728c62',
				},
			},
			fontFamily: {
				serif: ["'Source Serif 4'", 'Georgia', 'serif'],
				sans: ["'Source Sans 3'", 'system-ui', 'sans-serif'],
				mono: ["'Fira Code'", "'Fira Mono'", 'monospace'],
			},
			borderRadius: {
				terminal: '0.125rem',
			},
		},
	},
	plugins: [],
};
