import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "styled-components/native";
import { RootStack } from "./";

export type RootDrawerParamList = {
  DrawerHome: {
    screen: string;
  };
  Settings: {
    screen: string;
  };
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const RootDrawer = () => {
  const { colors, sizes } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="DrawerHome"
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontSize: sizes.text,
        },
        drawerStyle: {
          backgroundColor: colors.background,
        },
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.primary,
        drawerActiveBackgroundColor: colors.primary,
      }}
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="DrawerHome"
        component={RootStack}
        initialParams={{ screen: "Home" }}
        options={{
          //   drawerLabelStyle: {
          //     color: colors.primary,
          //     fontSize: sizes.text,
          //   },
          //   drawerActiveTintColor: colors.white,
          drawerLabel: "Início",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={RootStack}
        initialParams={{ screen: "Settings" }}
        options={{
          //   drawerLabelStyle: {
          //     color: colors.primary,
          //     fontSize: sizes.text,
          //   },
          drawerLabel: "Configurações",
        }}
      />
    </Drawer.Navigator>
  );
};
