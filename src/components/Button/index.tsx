import { CustomIcon, CustomText } from "@/components";
import { icons } from "lucide-react-native";
import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface IButton extends S.ButtonProps, TouchableOpacityProps {
  text: string;
  icon?: keyof typeof icons;
  isLoading?: boolean;
}

export const Button = ({
  text,
  color,
  icon,
  variant = "contained",
  noShadow = false,
  disabled = false,
  isLoading = false,
  ...rest
}: IButton) => {
  const { colors } = useTheme();

  const COLOR =
    color || (variant === "outlined" ? colors.primary : colors.white);

  return (
    <S.Button
      color={color}
      variant={variant}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
      noShadow={noShadow || disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={COLOR} size={moderateScale(24)} />
      ) : (
        <>
          {icon && <CustomIcon name={icon} color={COLOR} />}
          <CustomText
            size="text"
            variantWeight="bold"
            color={COLOR}
            align="center"
          >
            {text}
          </CustomText>
        </>
      )}
    </S.Button>
  );
};
