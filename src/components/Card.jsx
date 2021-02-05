import styled, { css } from "styled-components/macro";

export const Card = styled.div`
	background-color: #fff;

	${({ theme }) => css`
		border-radius: ${theme.shape.borderRadius}px;
		box-shadow: ${theme.shadows[1]};
	`}
`;

export const CardBody = styled.div`
	padding: ${({ theme }) => theme.space[3]};
`;
