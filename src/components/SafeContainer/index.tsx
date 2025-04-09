import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Keyboard, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { getRootState } from "../../../RootNavigation";
import * as S from "./styles";

interface ISafeContainer {
  children: React.ReactNode;
}

export const SafeContainer: React.FC<ISafeContainer> = ({ children }) => {
  const { colors } = useTheme();

  const nav = getRootState();

  const isIntro =
    nav?.routes?.some((route) => route.name === "Intro") &&
    nav?.routes?.length > 1;

  const edges = isIntro && Platform.OS === "ios" ? ["top"] : ["top", "bottom"];

  return (
    <S.Container>
      <LinearGradient
        colors={[colors.background, colors.background, colors.backgroundLight]}
        locations={[0.3, 0.8, 0.9]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0.8 }}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      <S.SafeContainer edges={edges}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            Keyboard.dismiss();
          }}
          activeOpacity={1}
        >
          {children}
        </TouchableOpacity>
      </S.SafeContainer>
    </S.Container>
  );
};
