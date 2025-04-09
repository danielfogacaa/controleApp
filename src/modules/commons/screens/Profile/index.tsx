import { RootStackParamList } from "@/routes/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

export const ProfileScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <S.Container>
      <TouchableOpacity
        onPress={() => {
          // navigate("Login");
        }}
      >
        <S.Text>Profile</S.Text>
      </TouchableOpacity>
    </S.Container>
  );
};
