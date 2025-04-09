import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${moderateScale(16)}px;
`;
export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  padding: ${moderateScale(16)}px;
  gap: ${moderateScale(16)}px;
`;
