import {
  ForgotPasswordScreen,
  IntroScreen,
  LoginScreen,
} from "@/modules/login/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import {
  ExpenseDateScreen,
  ExpenseOnboardingScreen,
  ExpenseTypeListScreen,
  ExpenseValueScreen,
} from "../modules";
import { HomeScreen, SettingsScreen } from "../modules/commons/screens";
import { RootDrawer } from "./drawer.routes";

export type RootStackParamList = {
  Intro: undefined;
  Login: undefined;
  Home: undefined;
  Settings: undefined;
  ForgotPassword: undefined;
  ExpenseOnboarding: undefined;
  ExpenseValue: undefined;
  ExpenseTypeList: undefined;
  Drawer: undefined;
  ExpenseDate: undefined;
  //   Tabs: {
  //     screen: string;
  //   };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: "fade",
        animationDuration: 10,
        headerStyle: {
          // paddingTop: 80,
        },
        // header: (props) => (
        //   <View
        //     style={{
        //       height: Constants.statusBarHeight,
        //       backgroundColor: colors.background,
        //     }}
        //   />
        // ),

        // headerTransparent: true,
        navigationBarTranslucent: true,
      }}
    >
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen
        name="ExpenseOnboarding"
        component={ExpenseOnboardingScreen}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen
        name="Tabs"
        component={RootTabs}
        initialParams={{ screen: "Home" }}
      /> */}
      <Stack.Screen name="Drawer" component={RootDrawer} />
      <Stack.Screen name="ExpenseTypeList" component={ExpenseTypeListScreen} />
      <Stack.Screen name="ExpenseValue" component={ExpenseValueScreen} />
      <Stack.Screen name="ExpenseDate" component={ExpenseDateScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
