import React from "react";
import styled from "styled-components";

const LayoutBase = (props) => {
	const { children, ...rest } = props;
	return <div {...rest}>{children}</div>;
};

export const Layout = styled(LayoutBase)`
	:root {
	}

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
