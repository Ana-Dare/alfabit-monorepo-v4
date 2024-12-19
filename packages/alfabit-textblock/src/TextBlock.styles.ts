import styled from 'styled-components';
import { background, gray } from '@cicatrizdev/alfabit-tokens';

export const Wrapper = styled.div`
	padding: 32px 24px 32px 48px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 8px;
	background: ${background.dark};
`;

export const Title = styled.h1`
	font-size: 24px;
	font-style: normal;
	font-weight: 800;
	line-height: 30px;
	color: ${gray.primary};
`;

export const Description = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	color: ${gray.primary};
	margin-top: 8px;
`;
