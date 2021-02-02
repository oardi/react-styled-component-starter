import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ as, children, ...rest }) =>
	as ? React.createElement(as, {...rest}, children) : <span>{children}</span>;


const TypographyBase = ({ children, as = 'span', ...rest }) => {
	return (
		<Wrapper as={as} {...rest}>
			{children}
		</Wrapper>
	)
}

export const Typography = styled(TypographyBase)`
`;
