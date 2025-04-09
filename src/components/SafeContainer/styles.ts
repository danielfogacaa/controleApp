import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.background};
`;
export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
`;
