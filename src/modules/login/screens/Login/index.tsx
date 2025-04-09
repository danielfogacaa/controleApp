import { Button, CustomIcon, CustomText } from "@/components";
import Input from "@/components/Input";
import { RootStackParamList } from "@/routes/routes";
import { ThemeContext } from "@/theme/context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AxiosError } from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { moderateScale } from "react-native-size-matters";
import { useToast } from "react-native-toast-notifications";
import { useTheme } from "styled-components/native";
import { logIn } from "../../services";
import * as S from "./styles";

interface LoginFormData extends FieldValues {
  user: string;
  password: string;
}

export const LoginScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toast = useToast();
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onChange",
    defaultValues: { user: "clientefinanca", password: "AB*c2025p@30256" },
  });
  const passwordFieldRef = useRef<TextInput>(null);

  const handleNextStep = async (data: LoginFormData) => {
    console.log("handleNextStep", data);
    try {
      setIsLoading(true);
      const response = await logIn(data.user, data.password);

      console.log("response", response);
      setTimeout(() => {
        navigate("ExpenseOnboarding");
      }, 3000);
    } catch (error: AxiosError | any) {
      console.log("errorL", error?.message);
      toast.show("Erro ao efetuar login!\nVerifique suas credenciais.", {
        type: "error",
      });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  console.log("error", errors);

  return (
    <S.Container>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
        extraHeight={moderateScale(16)}
        extraScrollHeight={moderateScale(16)}
        enableOnAndroid={true}
        // scrollEnabled={true}
        // enableAutomaticScroll={true}
      >
        <S.Header>
          <TouchableOpacity onPress={toggleTheme}>
            <CustomIcon
              name={theme === "light" ? "Sun" : "Moon"}
              color={colors.textContrast}
              size={24}
            />
          </TouchableOpacity>
        </S.Header>
        <S.Body>
          <S.TitleContainer>
            <CustomText
              size="title"
              variantWeight="extraBold"
              color={colors.primary}
            >
              Bem vindo{"\n"}de volta!
            </CustomText>
            <CustomText size={"text"} variantWeight="semiBold">
              Entre com suas credenciais para acessar nosso app
            </CustomText>
          </S.TitleContainer>
          <S.InputsContainer>
            <Input
              icon="User"
              formProps={{
                control,
                name: "user",
                rules: {
                  required: "Campo obrigatório",
                  // pattern: {
                  //   value: /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i,
                  //   message: "E-mail inválido",
                  // },
                },
              }}
              inputProps={{
                placeholder: "Nome de usúario...",
                onSubmitEditing: () => passwordFieldRef.current?.focus(),
                returnKeyType: "next",
                inputMode: "email",
              }}
              error={errors.user?.message}
            />
            <Input
              ref={passwordFieldRef}
              icon="KeyRound"
              formProps={{
                control,
                name: "password",
                rules: {
                  required: "Campo obrigatório",
                },
              }}
              inputProps={{
                placeholder: "Senha...",
                returnKeyType: "done",
                onSubmitEditing: handleSubmit(handleNextStep),
              }}
              isPassword
              error={errors.password?.message}
            />
          </S.InputsContainer>
        </S.Body>
        <S.Footer>
          <Button
            text="Entrar"
            onPress={handleSubmit(handleNextStep)}
            isLoading={isLoading}
          />
        </S.Footer>
      </KeyboardAwareScrollView>

      <StatusBar
        style={theme === "light" ? "dark" : "light"}
        backgroundColor={colors.background}
      />
    </S.Container>
  );
};
