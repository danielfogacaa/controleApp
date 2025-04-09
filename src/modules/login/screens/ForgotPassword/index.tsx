import { RootStackParamList } from "@/routes/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

export const ForgotPasswordScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <S.Container>
      <TouchableOpacity
        onPress={() => {
          // navigate("Home");
          navigate("ExpenseTypeList");
        }}
      >
        <S.Text>Password</S.Text>
      </TouchableOpacity>
    </S.Container>
  );
};
