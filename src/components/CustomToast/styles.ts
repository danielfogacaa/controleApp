import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

type ContainerProps = {
  color?: DefaultTheme["colors"];
};

export const Container = styled.View<ContainerProps>`
  width: 94%;
  min-height: ${moderateScale(50)}px;
  flex-direction: row;
  align-items: center;
  gap: ${moderateScale(16)}px;
  padding: ${moderateScale(8)}px;
  margin-top: ${moderateScale(16)}px;
  background-color: ${({ theme, color }: DefaultTheme & ContainerProps) =>
    color || theme.colors.background};
  border-radius: ${moderateScale(8)}px;
`;

export const ContainerMessage = styled.View`
  flex: 1;
  align-items: center;
`;
