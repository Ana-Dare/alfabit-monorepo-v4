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

	${({ variant, theme }: { variant?: ButtonProps['variant']; theme: ButtonProps['theme'] }) =>
		variant === 'primary' &&
		css`
			background: ${theme?.colors.primary};
			color: ${theme?.colors.white};
			border: none;

			&:hover {
				background: ${theme?.colors.primary};
			}

			&:active {
				background: ${theme?.colors.primary};
			}

			&:disabled {
				background: ${theme?.colors.disabled};
				cursor: not-allowed;
			}
		`}

	${({ variant, theme }: { variant?: ButtonProps['variant']; theme?: ButtonProps['theme'] }) =>
		variant === 'secondary' &&
		css`
			background: transparent;
			color: ${theme?.colors.primary};
			border: 2px solid ${theme?.colors.primary};

			&:active {
				background: ${theme?.colors.secondary};
			}

			&:disabled {
				color: ${theme?.colors.disabled};
				border-color: ${theme?.colors.disabled};
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
