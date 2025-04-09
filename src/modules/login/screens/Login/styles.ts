import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${moderateScale(16)}px;
`;
export const Header = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const Body = styled.View`
  flex: 1;
  margin-top: ${moderateScale(32)}px;
  gap: ${moderateScale(48)}px;
`;
export const TitleContainer = styled.View`
  gap: ${moderateScale(16)}px;
`;
export const InputsContainer = styled.View`
  gap: ${moderateScale(16)}px;
`;
export const Title = styled.Text`
  font-size: 36px;
  color: ${({ theme }: DefaultTheme) => theme.colors.title};
  font-weight: 700;
`;
export const SubTitle = styled.Text`
  font-size: 24px;
  color: ${({ theme }: DefaultTheme) => theme.colors.subTitle};
  font-weight: 500;
`;
export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme }: DefaultTheme) => theme.colors.onBackground};
  font-weight: 400;
`;
export const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }: DefaultTheme) => theme.colors.textTheme};
  font-weight: 600;
`;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  margin-top: ${moderateScale(16)}px;
`;
