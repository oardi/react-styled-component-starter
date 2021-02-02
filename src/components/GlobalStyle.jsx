import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	${({ theme }) => css`
		body {
			font-family: ${theme.typography.fontFamily};
			font-size: ${theme.typography.fontSize};
			background: ${theme.palette.background.default};
		}

		${theme.typography.h1 && css`
			h1 {
				font-family: ${theme.typography.h1.fontFamily};
				font-weight: ${theme.typography.h1.fontWeight};
				font-size: ${theme.typography.h1.fontSize};
				line-height: ${theme.typography.h1.lineHeight};
				letter-spacing: ${theme.typography.h1.letterSpacing};
			}
		`};

		${theme.typography.h2 && css`
			h2 {
				font-family: ${theme.typography.h2.fontFamily};
				font-weight: ${theme.typography.h2.fontWeight};
				font-size: ${theme.typography.h2.fontSize};
				line-height: ${theme.typography.h2.lineHeight};
				letter-spacing: ${theme.typography.h2.letterSpacing};
			}
		`};

		${theme.typography.h3 && css`
			h3 {
				font-family: ${theme.typography.h3.fontFamily};
				font-weight: ${theme.typography.h3.fontWeight};
				font-size: ${theme.typography.h3.fontSize};
				line-height: ${theme.typography.h3.lineHeight};
				letter-spacing: ${theme.typography.h3.letterSpacing};
			}
		`};

		${theme.typography.h4 && css`
			h4 {
				font-family: ${theme.typography.h4.fontFamily};
				font-weight: ${theme.typography.h4.fontWeight};
				font-size: ${theme.typography.h4.fontSize};
				line-height: ${theme.typography.h4.lineHeight};
				letter-spacing: ${theme.typography.h4.letterSpacing};
			}
		`};

		${theme.typography.h5 && css`
			h5 {
				font-family: ${theme.typography.h5.fontFamily};
				font-weight: ${theme.typography.h5.fontWeight};
				font-size: ${theme.typography.h5.fontSize};
				line-height: ${theme.typography.h5.lineHeight};
				letter-spacing: ${theme.typography.h5.letterSpacing};
			}
		`};

		${theme.typography.h6 && css`
			h6 {
				font-family: ${theme.typography.h6.fontFamily};
				font-weight: ${theme.typography.h6.fontWeight};
				font-size: ${theme.typography.h6.fontSize};
				line-height: ${theme.typography.h6.lineHeight};
				letter-spacing: ${theme.typography.h6.letterSpacing};
			}
		`};

		.gutterBottom {
			margin-bottom: 0.35em;
		}


		.p-0 {
			padding: 0px;
		}
		.p-1 {
			padding: ${theme.space[1]};
		}
		.p-2 {
			padding: ${theme.space[2]};
		}
		.p-3 {
			padding: ${theme.space[3]};
		}
		.p-4 {
			padding: ${theme.space[4]};
		}


		.mt-0 {
			margin-top: 0px;
		}
		.mt-1 {
			margin-top: ${theme.space[1]};
		}
		.mt-2 {
			margin-top: ${theme.space[2]};
		}
		.mt-3 {
			margin-top: ${theme.space[3]};
		}
		.mt-4 {
			margin-top: ${theme.space[4]};
		}
	`}

	@media ${({ theme }) => theme.mediaQueries.xs} {
		/* color: red; */
	}

	@media ${({ theme }) => theme.mediaQueries.sm} {
		/* color: blue; */
	}

	@media ${({ theme }) => theme.mediaQueries.md} {
		/* color: black; */
	}

	@media ${({ theme }) => theme.mediaQueries.lg} {
		/* color: yellow; */
	}

	@media ${({ theme }) => theme.mediaQueries.xl} {
		/* color: pink; */
	}
`;
