import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'tertiary';
	size?: 'xs' | 'sm' | 'md' | 'lg';
	children: string;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = ({
	variant = 'primary',
	size = 'md',
	children,
	disabled,
	onClick,
}: ButtonProps) => {
	return (
		<StyledButton size={size} variant={variant} disabled={disabled} onClick={onClick}>
			{children}
		</StyledButton>
	);
};
