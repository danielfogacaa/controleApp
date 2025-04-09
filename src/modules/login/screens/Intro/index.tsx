import { Button, CustomText } from "@/components";
import { RootStackParamList } from "@/routes/routes";
import { ThemeContext } from "@/theme/context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import React, { useCallback, useContext, useState } from "react";
import { Platform } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import { useToast } from "react-native-toast-notifications";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export const IntroScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = useTheme();
  const toast = useToast();
  const { top, bottom } = useSafeAreaInsets();

  const paddingTop = Platform.OS === "ios" ? top : Constants.statusBarHeight;
  const paddingBottom = Platform.OS === "ios" ? bottom : moderateScale(16);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("entrou");
  //     toast.show("Bem vindo de volta!");
  //     toast.show("Bem vindo de volta2!");
  //   }, 2000);
  // }, []);

  const textArray = [
    "Com o app Nome, você pode gerenciar suas contas de forma simples e prática.",
    "A interface intuitiva torna a organização das suas contas uma tarefa prazerosa.",
    "Mantendo tudo centralizado e organizado, com eficiência e praticidade.",
  ];

  const [currentText, setCurrentText] = useState(textArray[0]);
  const [index, setIndex] = useState(0);
  const textOpacity = useSharedValue(-500);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: textOpacity.value,
        },
      ],
    };
  });
  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: textOpacity.value,
  //   };
  // });

  let timeoutId: NodeJS.Timeout;

  useFocusEffect(
    useCallback(() => {
      // animateText();
      // setInterval(() => animateText(index), 5000);
      // if (firstTime) {
      //   setFirstTime(false);
      //   animateText(0);
      // } else {
      timeoutId = setTimeout(() => {
        animateText(index);
      }, 300);
      // }
      return () => {
        clearTimeout(timeoutId);
      };
    }, [index])
  );

  const animateText = (index: number) => {
    // const intervalId = setInterval(() => {
    console.log("index", index);
    // setTimeout(() => {
    textOpacity.value = withSpring(0, {
      duration: 1500,
      dampingRatio: 1.5,
    });
    setTimeout(() => {
      textOpacity.value = withSpring(500, {
        duration: 1500,
        dampingRatio: 1.5,
      });
      setTimeout(() => {
        textOpacity.value = -500;
        setCurrentText(textArray[index > 1 ? 0 : index + 1]);
        setIndex((oldState) => (oldState > 1 ? 0 : oldState + 1));
      }, 400);
    }, 6000);
    // }, 5000);
    // setTimeout(() => {
    //   textOpacity.value = withSpring(1, {
    //     duration: 600,
    //     dampingRatio: 0.7,
    //   });
    //   setIndex((oldState) =>
    //     oldState === textArray.length - 1 ? 0 : oldState + 1
    //   );
    // }, 3000);
    // }, 3000);
    // return () => clearInterval(intervalId);
  };
  const insets = useSafeAreaInsets();
  return (
    <>
      <S.Background
        source={require("@/assets/images/backgrounds/background2.jpg")}
        resizeMode="cover"
        blurRadius={2}
      >
        <S.Gradient
          colors={[
            `${colors.background}FF`,
            `${colors.background}33`,
            `${colors.background}00`,
            `${colors.background}55`,
          ]}
          locations={[0.1, 0.3, 0.6, 0.9]}
        />
      </S.Background>
      <S.Container topPadding={paddingTop} bottomPadding={paddingBottom}>
        {/* <S.Header>
        <TouchableOpacity onPress={toggleTheme}>
          <CustomIcon
            name={theme === "light" ? "Sun" : "Moon"}
            color={colors.textContrast}
            size={24}
          />
        </TouchableOpacity>
      </S.Header> */}
        <S.Body style={animatedStyle}>
          {/* <CustomText
          size="title"
          variantWeight="extraBold"
          color={colors.primary}
        >
          Nome do app
        </CustomText> */}
          {/* <Animated.View style={animatedStyle}> */}
          <CustomText
            size={"subTitle"}
            variantWeight="bold"
            color={colors.textContrast}
          >
            {/* Com o app Nome, você pode gerenciar suas finanças de forma simples e
          prática.{"\n"}A interface intuitiva torna a organização das suas
          finanças uma tarefa prazerosa. */}
            {currentText}
          </CustomText>
          {/* </Animated.View> */}
        </S.Body>
        <S.Footer>
          <Button
            text="Entrar"
            onPress={() => {
              navigate("Login");
            }}
          />
          <Button
            text="Criar conta"
            variant="outlined"
            onPress={() => {
              // navigate("Login");
              toast.show("Bem vindo de volta2!", {
                type: "success",
              });
              setTimeout(() => {
                toast.show(
                  "Bem vindo de volta2!Bem vindo de volta2! Bem vindo de volta2! Bem vindo de volta2!Bem vindo de volta2! Bem vindo de volta2! Bem vindo de volta2! Bem vindo de volta2! Bem vindo de volta2!",
                  {
                    type: "error",
                  }
                );
              }, 500);
              setTimeout(() => {
                toast.show("Bem vindo de volta2!", { type: "warning" });
              }, 1000);
              setTimeout(() => {
                toast.show("Bem vindo de volta2!");
              }, 1500);
            }}
          />
        </S.Footer>
      </S.Container>
    </>
  );
};
