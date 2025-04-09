import React from "react";
import { ActivityIndicator } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

// interface IButton extends S.ButtonProps, TouchableOpacityProps {
//   text: string;
//   icon?: keyof typeof icons;
//   isLoading?: boolean;
// }

export const Loading = () => {
  const { colors } = useTheme();

  return (
    <S.Container>
      <ActivityIndicator color={colors.primary} size={moderateScale(24)} />
    </S.Container>
  );
};
