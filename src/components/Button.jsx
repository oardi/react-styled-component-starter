import React from "react";
import styled, { css } from "styled-components";

const ButtonBase = (props) => {
	const { children, ...rest } = props;
	return <button {...rest}>{children}</button>;
};

export const Button = styled(ButtonBase)`
	border: 0;
	padding: 6px 16px;
	line-height: 1.75;
	outline: none;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
	border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	${({ theme, variant }) => css`
		color: ${theme.palette[variant].contrastText};
		background-color: ${theme.palette[variant].main};
		border-radius: ${theme.shape.borderRadius}px;
		min-width: ${theme.button.minWidth}px;

		&:hover {
			cursor: pointer;
			background-color: ${theme.palette[variant].dark};
		}
	`}
`;
