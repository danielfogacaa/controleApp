import { CustomIcon } from "@/components";
import { RootDrawerParamList } from "@/routes";
import { RootStackParamList } from "@/routes/routes";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

export const SettingsScreen: React.FC<{
  navigation: DrawerNavigationProp<RootStackParamList & RootDrawerParamList>;
}> = (props) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { navigation } = props;
  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <CustomIcon name="Menu" />
        </TouchableOpacity>
        <S.HeaderButtonsContainer>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon name="Bell" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon name="User" />
          </TouchableOpacity>
        </S.HeaderButtonsContainer>
      </S.Header>
      <TouchableOpacity
        onPress={() => {
          // navigate("Login");
        }}
      >
        <S.Text>Settings</S.Text>
      </TouchableOpacity>
    </S.Container>
  );
};
