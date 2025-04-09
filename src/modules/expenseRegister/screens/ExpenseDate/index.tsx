import { Button, CustomIcon, CustomText } from "@/components";
import { RootStackParamList } from "@/routes";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { format } from "date-fns/format";
import { icons } from "lucide-react-native";
import React, { useState } from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

type KeyProps = {
  value: number | null;
  iconName?: keyof typeof icons;
};

export const ExpenseDateScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

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

  console.log("date", date);

  return (
    <S.Container>
      <CustomText size="title">Qual a data de pagamento da despesa?</CustomText>
      <S.DateContainer onPress={() => setShowDatePicker(true)}>
        <CustomText size="subTitle" variantWeight="bold" align="center">
          {format(date, "dd/MM/yyyy")}
        </CustomText>
        <CustomIcon name="Calendar" size={24} />
      </S.DateContainer>
      <S.Body>
        {showDatePicker || Platform.OS === "ios" ? (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              selectedDate && setDate(selectedDate);
            }}
            locale="pt-BR"
            minimumDate={new Date()}
          />
        ) : null}
      </S.Body>
      <S.Footer>
        <Button
          text="Continuar"
          onPress={() => {
            navigate("Drawer");
          }}
        />
      </S.Footer>
    </S.Container>
  );
};
