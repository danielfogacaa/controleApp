import { ToastProvider } from "react-native-toast-notifications";
import { useTheme } from "styled-components/native";
import { CustomIcon } from "../CustomIcon";

import Constants from "expo-constants";
import { icons } from "lucide-react-native";
import { DefaultTheme } from "styled-components/native";
import { CustomText } from "../CustomText";
import * as S from "./styles";

interface ICustomToast {
  children: React.ReactNode;
}
interface ICustomToastInfo {
  color: DefaultTheme["colors"][keyof DefaultTheme["colors"]];
  icon: keyof typeof icons;
}

export const CustomToast: React.FC<ICustomToast> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <ToastProvider
      placement="top"
      duration={3000}
      animationType="slide-in"
      animationDuration={250}
      swipeEnabled={true}
      offsetTop={Constants.statusBarHeight}
      renderToast={(toastOptions) => {
        let toastInfo: ICustomToastInfo;
        switch (toastOptions.type) {
          case "success":
            toastInfo = {
              color: colors.primary,
              icon: "CircleCheckBig",
            };
            break;
          case "error":
            toastInfo = {
              color: colors.error,
              icon: "CircleX",
            };
            break;
          case "warning":
            toastInfo = {
              color: colors.quaternary,
              icon: "MessageCircleWarning",
            };
            break;
          default:
            toastInfo = {
              color: colors.secondary,
              icon: "Info",
            };
            break;
        }
        return (
          <S.Container color={toastInfo.color}>
            <CustomIcon name={toastInfo.icon} color={colors.white} />
            <S.ContainerMessage>
              <CustomText
                size="smallText"
                color={colors.white}
                variantWeight="semiBold"
              >
                {toastOptions.message}
              </CustomText>
            </S.ContainerMessage>
          </S.Container>
        );
      }}
    >
      {children}
    </ToastProvider>
  );
};
