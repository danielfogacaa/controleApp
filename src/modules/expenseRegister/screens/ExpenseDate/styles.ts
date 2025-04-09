import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${moderateScale(40)}px;
  padding-horizontal: ${moderateScale(24)}px;
  justify-content: space-between;
  /* border-width: 1px;  */
`;
export const Body = styled.View`
  /* flex: 1; */
  /* border-width: 1px; */
  justify-content: center;
  align-items: center;
`;
export const DateContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${moderateScale(16)}px;
`;
export const KeyboardContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${moderateScale(24)}px;
`;
export const KeyboardItem = styled.TouchableOpacity`
  width: 28%;
  /* padding: ${moderateScale(8)}px; */
  /* height: ${moderateScale(48)}px; */
  /* border-width: 1px; */
  justify-content: center;
  align-items: center;
`;
export const ContainerItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: ${moderateScale(40)}px;
  /* margin-horizontal: ${moderateScale(24)}px; */
  border-bottom-width: ${moderateScale(1)}px;
  border-bottom-color: ${({ theme }: DefaultTheme) => theme.colors.border};
`;
export const ContainerItemInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${moderateScale(16)}px;
`;
export const Button = styled.TouchableOpacity.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 3,
})`
  padding: ${moderateScale(10)}px;
  border-radius: ${moderateScale(10)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  font-size: ${moderateScale(16)}px;
  color: ${({ theme }: DefaultTheme) => theme.colors.textTheme};
  font-weight: 600;
`;

export const Footer = styled.View`
  padding-vertical: ${moderateScale(16)}px;
`;
