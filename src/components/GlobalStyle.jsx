import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		/* padding: 0;
		margin: 0; */
	}

	${({ theme }) => css`
		body {
			font-family: ${theme.typography.fontFamily};
			font-size: ${theme.typography.fontSize};
			background: ${theme.palette.background.default};
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
