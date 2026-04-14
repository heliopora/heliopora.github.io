/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pora: {
					bg: '#061617',
					surface: '#081613',
					'surface-dim': '#04110e',
					'surface-container': '#14221f',
					primary: '#b3ccc1',
					'primary-dim': '#91a99f',
					'on-surface': '#d6e6e1',
					'on-surface-variant': '#c1c8c4',
					outline: '#8b928f',
					'outline-variant': '#414845',
					grid: '#293834',
					label: '#4D7B82',
					tertiary: '#cfc4c3',
					secondary: '#527280',
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
