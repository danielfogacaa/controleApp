import { Button, CustomText } from "@/components";
import { Skeleton } from "@/components/Skeleton";
import { RootStackParamList } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AxiosError } from "axios";
import { Circle, CircleCheckBig } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";
import { useToast } from "react-native-toast-notifications";
import { useTheme } from "styled-components/native";
import { getExpenseTypes, IExpenseType } from "../../services";
import * as S from "./styles";

export const ExpenseTypeListScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { colors } = useTheme();
  const toast = useToast();

  const [selectedExpenseType, setSelectedExpenseType] =
    useState<IExpenseType | null>(null);

  const [expenseTypeList, setExpenseTypeList] = useState<IExpenseType[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const ICON_SIZE = moderateScale(24);

  // const expenseTypes: ExpenseTypeProps[] = [
  //   { id: 1, name: "Alimentação", iconName: "Utensils" },
  //   { id: 2, name: "Lazer", iconName: "TreePalm" },
  //   { id: 3, name: "Saúde", iconName: "Cross" },
  //   { id: 4, name: "Educação", iconName: "LibraryBig" },
  //   { id: 5, name: "Carro", iconName: "Car" },
  // ];

  const getExpenseTypesList = async () => {
    try {
      setIsLoading(true);
      const response = await getExpenseTypes();

      console.log("response", response);

      const activeTypes = response?.filter?.((item) => item.ativo === true);

      setExpenseTypeList(activeTypes as IExpenseType[]);
    } catch (error: AxiosError | any) {
      console.log("errorL", error?.message);
      toast.show(error?.message || "Erro ao buscar tipos de despesa.", {
        type: "error",
      });
    } finally {
      // setTimeout(() => {
      setIsLoading(false);
      // }, 3000);
    }
  };

  useEffect(() => {
    getExpenseTypesList();
  }, []);

  return (
    <S.Container>
      <CustomText size="title">Selecione o tipo da despesa</CustomText>
      {isLoading ? (
        <S.ContainerSkeleton>
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} height={moderateScale(80)} width={"100%"} />
          ))}
        </S.ContainerSkeleton>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: moderateScale(80),
          }}
          style={{ marginTop: moderateScale(16) }}
          data={expenseTypeList}
          renderItem={({ item }) => (
            <S.ContainerItem onPress={() => setSelectedExpenseType(item)}>
              <S.ContainerItemInfo>
                {/* <CustomIcon size={ICON_SIZE} name={item.iconName} /> */}
                <S.ContainerItemText>
                  <CustomText size="text" variantWeight="semiBold">
                    {item.nome}
                  </CustomText>
                  <CustomText size="smallText">{item.descricao}</CustomText>
                </S.ContainerItemText>
              </S.ContainerItemInfo>
              {selectedExpenseType?.id === item.id ? (
                <Animated.View entering={ZoomIn.duration(300)}>
                  <CircleCheckBig color={colors.primary} size={ICON_SIZE} />
                </Animated.View>
              ) : (
                <Circle color={colors.primary} size={ICON_SIZE} />
              )}
            </S.ContainerItem>
          )}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => (
            <S.EmptyContainer>
              <CustomText size="text">
                Nenhum tipo de despesa encontrado.
              </CustomText>
            </S.EmptyContainer>
          )}
        />
      )}
      <S.Footer>
        <Button
          text="Continuar"
          // variant="outlined"
          disabled={!selectedExpenseType}
          // color={colors.secondary}
          onPress={() => {
            navigate("ExpenseValue");
          }}
          // icon={"ArrowRight"}
          // isLoading
          // iconPosition="right"
          // width="80%"
          // noShadow
        />
      </S.Footer>
    </S.Container>
  );
};
