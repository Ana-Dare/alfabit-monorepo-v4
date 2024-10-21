import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	${({ variant }) =>
		variant === 'primary' &&
		css`
			background: #5033c3;
			color: #ffffff;
			border: none;

			&:hover {
				background: #3d1eb3;
			}

			&:active {
				background: #2e0f9e;
			}

			&:disabled {
				background: #c3c3c3;
				cursor: not-allowed;
			}
		`}

	${({ variant }) =>
		variant === 'secondary' &&
		css`
			background: transparent;
			color: #5033c3;
			border: 2px solid #5033c3;

			&:hover {
				background: #ede9ff;
			}

			&:active {
				background: #d5ccff;
			}

			&:disabled {
				color: #c3c3c3;
				border-color: #c3c3c3;
				cursor: not-allowed;
			}
		`}

  ${({ size }) =>
		size === 'sm' &&
		css`
			padding: 8px 16px;
			font-size: 14px;
		`}

  ${({ size }) =>
		size === 'md' &&
		css`
			padding: 12px 24px;
			font-size: 16px;
		`}

  ${({ size }) =>
		size === 'lg' &&
		css`
			padding: 16px 32px;
			font-size: 18px;
		`}
`;
