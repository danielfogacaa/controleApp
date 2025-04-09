import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

export type ButtonProps = {
  variant?: "contained" | "outlined";
  color?: DefaultTheme["colors"][keyof DefaultTheme["colors"]];
  width?: number | string;
  noShadow?: boolean;
  disabled?: boolean;
  iconPosition?: "left" | "right";
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({ noShadow }: ButtonProps) =>
    noShadow
      ? ""
      : `
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.3;
  shadow-radius: 3;
  elevation: 2;
`}
  width: ${({ width = "100%" }: ButtonProps) => width};
  flex-direction: ${({ iconPosition = "left" }: ButtonProps) =>
    iconPosition === "left" ? "row" : "row-reverse"};
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: ${moderateScale(8)}px;
  padding: ${moderateScale(10)}px;
  border-radius: ${moderateScale(12)}px;
  background-color: ${({
    background,
    variant = "contained",
    theme,
  }: ButtonProps & DefaultTheme) =>
    variant === "outlined"
      ? theme.colors.backgroundLight
      : background || theme.colors.primary};
  border-width: ${({ variant = "contained" }: ButtonProps) =>
    variant === "outlined" ? 1 : 0}px;
  border-color: ${({ color, theme }: ButtonProps & DefaultTheme) =>
    color || theme.colors.primary};
  opacity: ${({ disabled = false }: ButtonProps) => (disabled ? 0.6 : 1)};
`;
