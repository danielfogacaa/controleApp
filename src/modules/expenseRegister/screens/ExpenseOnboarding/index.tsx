import { Button, CustomText } from "@/components";
import { RootStackParamList } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export const ExpenseOnboardingScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.Body>
        <CustomText size="subTitle">
          Para podermos começar a te ajudar na organização de suas despesas,
          vamos adicionar sua primeira despesa?
        </CustomText>
      </S.Body>
      <S.Footer>
        <Button
          text="Adicionar"
          // variant="outlined"
          // disabled
          // color={colors.secondary}
          onPress={() => {
            navigate("ExpenseTypeList");
          }}
          // icon={"ArrowRight"}
          // isLoading
          // iconPosition="right"
          // width="80%"
          // noShadow
        />
        <Button
          text="Depois"
          variant="outlined"
          onPress={() => {
            navigate("Drawer");
          }}
        />
      </S.Footer>
    </S.Container>
  );
};
