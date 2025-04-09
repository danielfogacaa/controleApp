import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  /* justify-content: center; */
  /* align-items: center; */
`;
export const Header = styled.View`
  width: 100%;
  /* background-color: ${({ theme }: DefaultTheme) =>
    theme.colors.background}; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${moderateScale(16)}px;
`;
export const Body = styled.View`
  flex: 1;
  align-items: center;
  padding: ${moderateScale(16)}px;
`;

export const HeaderButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${moderateScale(16)}px;
`;
export const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export const Card = styled.View`
  width: 100%;
  height: ${moderateScale(200)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  border-radius: ${moderateScale(16)}px;
`;
export const ContainerMiniCards = styled.View`
  width: 100%;
  flex-direction: row;
  margin-vertical: ${moderateScale(16)}px;
  gap: ${moderateScale(8)}px;
`;

export const MiniCard = styled.View`
  flex: 1;
  height: ${moderateScale(80)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  border-radius: ${moderateScale(16)}px;
`;
