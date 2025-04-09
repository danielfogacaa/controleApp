import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

type ContainerProps = { topPadding: number; bottomPadding: number };

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: "transparent";
  padding-horizontal: ${moderateScale(16)}px;
  padding-top: ${({ topPadding }: ContainerProps) => topPadding}px;
  padding-bottom: ${({ bottomPadding }: ContainerProps) => bottomPadding}px;
  justify-content: flex-end;
`;
export const Background = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Gradient = styled(LinearGradient)`
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const Body = styled(Animated.View)`
  flex: 1;
  /* justify-content: flex-end; */
  align-items: center;
  gap: ${moderateScale(48)}px;
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
  width: 100%;
  gap: ${moderateScale(16)}px;
  margin-top: ${moderateScale(32)}px;
`;
