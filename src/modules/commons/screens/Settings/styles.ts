import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;
export const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export const HeaderButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${moderateScale(16)}px;
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
