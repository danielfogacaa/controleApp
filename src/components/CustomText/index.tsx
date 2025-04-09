import React from "react";
import { DefaultTheme, useTheme } from "styled-components/native";
import * as S from "./styles";

interface ICustomText {
  children: React.ReactNode;
  size?: "title" | "subTitle" | "text" | "smallText" | number;
  variantWeight?: "regular" | "semiBold" | "bold" | "extraBold";
  color?: DefaultTheme["colors"][keyof DefaultTheme["colors"]];
  align?: "center" | "left" | "right";
  lineHeight?: number;
  fullWidth?: boolean;
}

export const CustomText = ({
  children,
  size,
  variantWeight,
  color,
  align = "left",
  fullWidth = false,
  lineHeight,
}: ICustomText) => {
  const { sizes } = useTheme();
  return (
    <S.CustomText
      fontSize={typeof size === "number" ? size : sizes[size ?? "text"]}
      variantWeight={variantWeight}
      color={color}
      align={align}
      fullWidth={fullWidth}
      lineHeight={lineHeight}
    >
      {children}
    </S.CustomText>
  );
};
