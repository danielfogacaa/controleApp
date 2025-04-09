import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

export type InputContainerProps = {
  width?: number | string;
  disabled?: boolean;
  hasError?: boolean;
};

export type InputProps = {
  disabled?: boolean;
};

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;
export const InputContainer = styled.View<InputContainerProps>`
  width: ${({ width = "100%" }: InputContainerProps) => width};
  flex-direction: row;
  align-items: center;
  gap: ${moderateScale(8)}px;
  background-color: ${({ theme }: DefaultTheme) =>
    theme.colors.backgroundLight};
  border-radius: ${moderateScale(8)}px;
  padding-horizontal: ${moderateScale(8)}px;
  border-bottom-width: ${moderateScale(1)}px;
  border-bottom-color: ${({
    theme,
    hasError,
  }: DefaultTheme & InputContainerProps) =>
    hasError ? theme.colors.error : theme.colors.primary};
`;

export const Input = styled.TextInput<InputProps>`
  flex: 1;
  height: ${moderateScale(48)}px;
  font-size: ${({ theme }: DefaultTheme) => theme.sizes.text}px;
  color: ${({ theme }: DefaultTheme) => theme.colors.textContrast};
`;

export const ErrorContainer = styled.View`
  width: 100%;
  padding: ${moderateScale(8)}px 0 0 ${moderateScale(8)}px;
`;
