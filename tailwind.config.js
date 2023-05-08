/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0e4a4d',
				secondary: '#d9bd97',
				tertiary: '#f9ede3',
				accent: '#84715b',
				subtitle: '#c2a277',
			},
			maxWidth: {
				container: '1590px',
				'container-sm': '1230px',
			},
		},
	},
	plugins: [],
};
