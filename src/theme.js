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
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif"`,
			fontWeight: 300,
			fontSize: "6rem",
			lineHeight: 1.167,
			letterSpacing: "-0.01562em"
		},
		h2: null,
		h3: null,
		h4: null,
		h5: null,
		h6: null,
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
	}
};
