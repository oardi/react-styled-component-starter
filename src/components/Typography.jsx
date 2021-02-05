import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = ({ as, children, className, ...rest }) =>
	as ? React.createElement(as, { ...rest, className: `${className} gutter-bottom` }, children) : <span>{children}</span>;


const TypographyBase = ({ children, as = 'span', ...rest }) => {
	return (
		<Wrapper as={as} {...rest}>
			{children}
		</Wrapper>
	)
}

export const Typography = styled(TypographyBase).attrs(() => ({ className: "gutterBottom" }))``;
