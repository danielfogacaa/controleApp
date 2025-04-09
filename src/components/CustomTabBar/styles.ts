import { PlatformPressable, Text } from "@react-navigation/elements";
import Animated from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

interface ITabItemBackground {
  dimensions: { height: number; width: number };
}

export const TabBar = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 3,
})`
  /* position: absolute; */
  bottom: ${moderateScale(16)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.background};
  border-radius: ${moderateScale(32)}px;
  margin-horizontal: ${moderateScale(16)}px;
  padding-vertical: ${moderateScale(8)}px;
`;
export const TabItemBackground = styled(Animated.View)<ITabItemBackground>`
  position: absolute;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  width: ${({ dimensions }: ITabItemBackground) =>
    dimensions.width - dimensions.width / 2}px;
  height: ${({ dimensions }: ITabItemBackground) =>
    dimensions.width - dimensions.width / 2}px;
  margin-horizontal: ${({ dimensions }: ITabItemBackground) =>
    dimensions.width / 4}px;
  /* border-radius: 40px 40px 0px 0px; */
  border-radius: 50%;
  /* top: -12px;
  left: -20px; */
  /* border-radius: ${({ dimensions }: ITabItemBackground) =>
    dimensions.width / 8}px; */
`;
export const TabItem = styled(PlatformPressable)`
  flex: 1;
  align-items: center;
`;
export const TabItemLabel = styled(Text)`
  font-size: ${moderateScale(18)}px;
  color: blue;
  font-weight: 500;
`;
