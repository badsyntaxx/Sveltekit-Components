const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		screens: {
			'2xl': { max: '1024px' },
			xl: { max: '1024px' },
			lg: { max: '820px' },
			md: { max: '768px' },
			sm: { max: '667px' }
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '0px',
				xs: '3px',
				sm: '5px',
				lg: '10px',
				xl: '0px',
				'2xl': '0px'
			},
			screens: {
				'2xl': { max: '1024px' },
				xl: '1024px',
				lg: '820px',
				md: '768px',
				sm: '667px'
			}
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto']
			}
		}
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.box': {
					display: 'block',
					position: 'relative',
					float: 'left',
					width: '100%'
				},
				'.flexbox': {
					position: 'relative',
					display: 'flex',
					flexDirection: 'row',
					width: '100%'
				}
			});
		})
	]
};
