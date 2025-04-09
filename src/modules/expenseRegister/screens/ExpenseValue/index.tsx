import { Button, CustomIcon, CustomText } from "@/components";
import { RootStackParamList } from "@/routes";
import { formatCurrency } from "@/utils/utils";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { icons } from "lucide-react-native";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

type KeyProps = {
  value: number | null;
  iconName?: keyof typeof icons;
};

export const ExpenseValueScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  const [value, setValue] = useState<string>("0");

  const keys: KeyProps[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: null },
    { value: 0 },
    { value: null, iconName: "Delete" },
  ];

  const typeKey = (key: string) => {
    if (value.length >= 11) return;
    setValue((oldState) => (oldState === "0" ? key : oldState + key));
  };

  const deleteKey = () => {
    setValue((oldState) =>
      oldState.length === 1 ? "0" : oldState.slice(0, -1)
    );
  };

  console.log("value", Number(value) / 100);

  return (
    <S.Container>
      <CustomText size="title">Qual é o valor da despesa</CustomText>
      <S.ValueContainer>
        <CustomText
          size={Math.max(36, 60 - value.length * 3)}
          variantWeight="bold"
          align="center"
          lineHeight={Math.max(48, 80 - value.length * 3)}
        >
          {formatCurrency(Number(value) / 100)}
        </CustomText>
      </S.ValueContainer>
      <S.Body>
        <S.KeyboardContainer>
          {keys.map((item, index) => {
            return item?.value !== null || item?.iconName ? (
              <S.KeyboardItem
                key={index.toString()}
                onPress={() => {
                  item.value !== null
                    ? typeKey(item.value?.toString())
                    : deleteKey();
                }}
              >
                {item?.iconName ? (
                  <CustomIcon size={32} name={item.iconName} />
                ) : (
                  <CustomText
                    size="title"
                    color={colors.primary}
                    variantWeight="bold"
                    align="center"
                  >
                    {item?.value}
                  </CustomText>
                )}
              </S.KeyboardItem>
            ) : (
              <S.KeyboardItem disabled key={index.toString()} />
            );
          })}
        </S.KeyboardContainer>
      </S.Body>
      <S.Footer>
        <Button
          text="Continuar"
          onPress={() => {
            navigate("ExpenseDate");
          }}
          disabled={!Number(value)}
        />
      </S.Footer>
    </S.Container>
  );
};
