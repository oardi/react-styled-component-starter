import styled, { css } from "styled-components";

export const Card = styled.div.attrs(() => ({ className: "card" }))`
	background-color: #fff;

	${({ theme }) => css`
		border-radius: ${theme.shape.borderRadius}px;
		box-shadow: ${theme.shadows[1]};
	`}
`;

export const CardBody = styled.div.attrs(() => ({ className: "card-body" }))`
	padding: ${({ theme }) => theme.space[3]};
`;
