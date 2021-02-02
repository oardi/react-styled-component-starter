import React from 'react';
import styled from 'styled-components';

export const Wrapper = ({ wrapper, children }) =>
	wrapper ? wrapper(children) : <div>{children}</div>;


const TypographyBase = ({ children, as }) => {
	return (
		<Wrapper wrapper={as}>
			{children}
		</Wrapper>
	)
}

export const Typography = styled(TypographyBase)`
`;
