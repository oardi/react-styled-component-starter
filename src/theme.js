export const theme = {
	palette: {
		primary: {
			light: '#8898f5',
			main: '#3f51b5',
			dark: '#0b1f8c',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ebebeb',
			main: '#e0e0e0',
			dark: '#b6b6b6',
			contrastText: '#212529',
		},
		accent: {
			light: '#e7749a',
			main: '#ff4081',
			dark: '#d42963',
			contrastText: '#fff',
		},
		error: {
			light: '#e7749a',
			main: '#dc3545',
			dark: '#a91c29',
			contrastText: '#fff',
		},
		text: {
		},
		background: {
			default: '#f5f6fa'
		},
		action: {
		}
	},
	mediaQueries: {
		'xs': `only screen and (max-width: 576px)`,
		'sm': `only screen and (min-width: 576px)`,
		'md': `only screen and (min-width: 768px)`,
		'lg': `only screen and (min-width: 992px)`,
		'xl': `only screen and (min-width: 1200px)`,
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: `"Segoe UI", "Helvetica Neue", "Arial", "Noto Sans"`,
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			// fontFamily: `"Helvetica", "Arial", "sans-serif"`,
			fontWeight: 300,
			fontSize: "2.5rem",
			lineHeight: 1.167,
			letterSpacing: "-0.01562em"
		},
		h2: {
			fontWeight: 300,
			fontSize: "2.25em",
			lineHeight: 1.2,
			letterSpacing: "-0.00833em"
		},
		h3: {
			fontWeight: 400,
			fontSize: "2rem",
			lineHeight: 1.167,
			letterSpacing: "0em"
		},
		h4: {
			fontWeight: 400,
			fontSize: "1.75rem",
			lineHeight: 1.235,
			letterSpacing: "0.00735em"
		},
		h5: {
			fontWeight: 400,
			fontSize: "1.5rem",
			lineHeight: 1.334,
			letterSpacing: "0em"
		},
		h6: {
			fontWeight: 500,
			fontSize: "1.25rem",
			lineHeight: 1.6,
			letterSpacing: "0.0075em"
		},
		subtitle1: null,
		subtitle2: null,
		body1: null,
		body2: null,
		button: null,
		caption: null,
		overline: null,
		zIndex: {
			modal: 1300,
			snackbar: 1400
		}
	},
	shape: {
		borderRadius: 4
	},
	button: {
		minWidth: 64
	},
	shadows: [
		'none',
		'0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
	],
	space: [
		'0.25rem',
		'0.5rem',
		'0.75rem',
		'1rem',
		'1.5rem'
	]
};
