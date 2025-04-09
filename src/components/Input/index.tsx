import { CustomIcon, CustomText } from "@/components";
import { icons } from "lucide-react-native";
import React, { forwardRef, useState } from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import {
  ActivityIndicator,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface IInput {
  icon?: keyof typeof icons;
  isLoading?: boolean;
  error?: string;
  disabled?: boolean;
  width?: number | string;
  isPassword?: boolean;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
}

const Input = forwardRef<TextInput, IInput>(
  (
    {
      icon,
      isLoading = false,
      disabled = false,
      error = "",
      width,
      isPassword = false,
      formProps,
      inputProps,
    },
    ref
  ) => {
    const { colors } = useTheme();
    const [isSecure, setIsSecure] = useState(true);

    console.log("error", error);

    return (
      <Controller
        render={({ field: { value, onChange } }) => (
          <S.Container width={width}>
            <S.InputContainer
              disabled={disabled || isLoading}
              hasError={!!error}
            >
              {icon &&
                (isLoading ? (
                  <ActivityIndicator color={colors.primary} />
                ) : (
                  <CustomIcon
                    name={icon}
                    color={error ? colors.error : colors.primary}
                  />
                ))}
              <S.Input
                ref={ref}
                placeholderTextColor={`${colors.textContrast}77`}
                maxLength={inputProps?.maxLength || 40}
                secureTextEntry={isSecure}
                autoCapitalize={inputProps?.autoCapitalize || "none"}
                value={value}
                onChangeText={onChange}
                {...inputProps}
              />
              {isPassword && (
                <TouchableOpacity
                  onPress={() => setIsSecure((oldState) => !oldState)}
                >
                  <CustomIcon name={isSecure ? "Eye" : "EyeOff"} />
                </TouchableOpacity>
              )}
            </S.InputContainer>
            <S.ErrorContainer>
              <CustomText color={colors.error} size="smallText">
                {error}
              </CustomText>
            </S.ErrorContainer>
          </S.Container>
        )}
        {...formProps}
      />
    );
  }
);

export default Input;
