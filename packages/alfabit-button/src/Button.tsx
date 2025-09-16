import React from "react";
import { StyledButton } from "./Button.styles";
import { defaultTheme, ITheme } from "@cicatrizdev/alfabit-tokens";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg";
  children: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
  theme?: ITheme;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  disabled,
  onClick,
  theme = defaultTheme,
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      theme={theme}
    >
      {children}
    </StyledButton>
  );
};
