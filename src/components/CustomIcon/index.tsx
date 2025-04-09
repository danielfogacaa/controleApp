import { icons } from "lucide-react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { DefaultTheme, useTheme } from "styled-components/native";

interface ICustomIcon {
  name: keyof typeof icons;
  color?: DefaultTheme["colors"][keyof DefaultTheme["colors"]];
  size?: number;
}

export const CustomIcon = ({ color, name, size = 24 }: ICustomIcon) => {
  const theme = useTheme();
  const LucideIcon = icons[name];
  return (
    <LucideIcon
      color={color || theme.colors.primary}
      size={moderateScale(size)}
    />
  );
};
