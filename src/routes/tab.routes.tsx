import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { moderateScale } from "react-native-size-matters";
import { useTheme } from "styled-components/native";
import { CustomIcon } from "../components";
import { CustomTabBar } from "../components/CustomTabBar";
import { HomeScreen } from "../modules/commons/screens";

export type RootTabParamList = {
  Home: undefined;
};

const Tabs = createBottomTabNavigator<RootTabParamList>();

export const RootTabs = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: "shift",
        // tabBarPosition: "left",
        headerBackgroundContainerStyle: { backgroundColor: colors.background },
        tabBarStyle: {
          backgroundColor: "transparent",
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
        sceneStyle: {
          backgroundColor: "transparent",
          marginBottom: moderateScale(16),
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size }) => <CustomIcon name="House" size={size} />,
          tabBarLabel: "Início",
        }}
      />
      {/* <Tabs.Screen
        name="ExpenseValue"
        component={RootStack}
        initialParams={{ screen: "ExpenseValue" }}
        options={{
          tabBarIcon: ({ size }) => <CustomIcon name="Plus" size={size} />,
          tabBarLabel: "Adicionar despesa",
        }}
      /> */}
      {/* <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size }) => <CustomIcon name="User" size={size} />,
          tabBarLabel: "Perfil",
        }}
      /> */}
    </Tabs.Navigator>
  );
};
