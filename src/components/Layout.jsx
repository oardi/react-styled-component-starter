import React from "react";
import { GlobalStyle } from './GlobalStyle';

export const Layout = ({ children, ...rest }) => {
	return (
		<div {...rest}>
			<GlobalStyle />
			<main>{children}</main>
		</div>
	)
};
