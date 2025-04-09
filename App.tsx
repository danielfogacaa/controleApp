import { CustomToast, SafeContainer } from "@/components";
import { RootStack } from "@/routes/stack.routes";
import { ThemeProvider } from "@/theme/context";
import {
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import "./gesture-handler";
import { navigationRef } from "./RootNavigation";
enableScreens(false);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    // <ToastProvider>
    <ThemeProvider>
      <NavigationContainer theme={navTheme} ref={navigationRef}>
        <CustomToast>
          <SafeContainer>
            <RootStack />
          </SafeContainer>
        </CustomToast>
        <StatusBar style="inverted" backgroundColor="transparent" />
      </NavigationContainer>
    </ThemeProvider>
    // </ToastProvider>
  );
}
