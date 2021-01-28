import React from "react";
import styled, { css } from "styled-components";

export const ButtonBase = (props) => {
	const { children, ...rest } = props;
	return <button {...rest}>{children}</button>;
};

export const Button = styled(ButtonBase)`
	border: 0;
	border-radius: var(--borderRadius);
	padding: 6px 16px;
	min-width: var(--buttonMinWidth);
	line-height: 1.75;
	outline: none;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
	border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	color: var(--primary-text);
	background-color: var(--primary);

	${({ variant }) => variant &&
		css`
			color: var(--${variant}-text);
			background-color: var(--${variant});
		`
	}

	// using theme
	/* ${({ variant }) => variant &&
		css`
			color: ${({ theme }) => theme.colors[variant]}; // var(--${variant}-text)
			background-color: ${({ theme }) => theme.colors[variant]};
		`
	} */

	${({ shadow }) => shadow && `box-shadow: var(--shadow);`}

	&:hover {
		cursor: pointer;
		background: var(--primary-darker);
		background: var(${({ variant }) => variant && `--${variant}-darker`});
	}

	@media ${({ theme }) => theme.mediaQueries.sm} {
		/* color: red; */
	}
`;
