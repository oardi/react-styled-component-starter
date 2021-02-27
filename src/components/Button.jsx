import styled, { css } from "styled-components/macro";

export const Button = styled.button`
	border: 0;
	padding: 6px 16px;
	line-height: 1.75;
	outline: none;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
	border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	${({ theme, variant = 'primary', disabled }) => css`
		color: ${theme.palette[variant].contrastText};
		background-color: ${theme.palette[variant].main};
		border-radius: ${theme.shape.borderRadius}px;
		min-width: ${theme.button.minWidth}px;
		box-shadow: ${theme.shadows[1]};

		&:hover {
			cursor: pointer;
			background-color: ${theme.palette[variant].dark};
			box-shadow: ${theme.shadows[2]};
		}

		${disabled && css`
			color: rgba(0, 0, 0, 0.26);
			box-shadow: none;
			background-color: rgba(0, 0, 0, 0.12);

			&:hover {
				cursor: inherit;
				color: rgba(0, 0, 0, 0.26);
				box-shadow: none;
				background-color: rgba(0, 0, 0, 0.12);
			}
		`}
	`}
`;
