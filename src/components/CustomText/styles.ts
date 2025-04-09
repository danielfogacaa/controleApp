import { Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import styled, { DefaultTheme } from "styled-components/native";

type CustomTextProps = {
  fontSize: number;
  variantWeight?: "regular" | "semiBold" | "bold" | "extraBold";
  color?: DefaultTheme["colors"];
  align?: "center" | "left" | "right";
  fullWidth?: boolean;
  lineHeight?: number;
};

export const CustomText = styled(Text).attrs({
  allowFontScaling: false,
})<CustomTextProps>`
  width: ${({ fullWidth }: CustomTextProps) => (fullWidth ? "100%" : "auto")};
  font-size: ${({ fontSize }: CustomTextProps) => moderateScale(fontSize)}px;
  font-family: ${({ variantWeight }: CustomTextProps) => {
    switch (variantWeight) {
      case "regular":
        return "NunitoSans_400Regular";
      case "semiBold":
        return "NunitoSans_600SemiBold";
      case "bold":
        return "NunitoSans_700Bold";
      case "extraBold":
        return "NunitoSans_800ExtraBold";
      default:
        return "NunitoSans_400Regular";
    }
  }};
  color: ${({ color, theme }: CustomTextProps & DefaultTheme) =>
    color || theme.colors.textContrast};
  text-align: ${({ align }: CustomTextProps) => align};
  line-height: ${({ fontSize, lineHeight }: CustomTextProps) =>
    lineHeight || Math.min(moderateScale(fontSize) * 1.6, 48)}px;
`;
