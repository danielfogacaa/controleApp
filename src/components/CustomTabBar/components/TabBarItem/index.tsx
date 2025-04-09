import { CustomIcon } from "@/components/CustomIcon";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import {
  NavigationRoute,
  ParamListBase,
  useLinkBuilder,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface ITabItemProps {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  route: NavigationRoute<ParamListBase, string>;
  label: string;
  options: BottomTabNavigationOptions;
}

export const TabBarItem = ({
  onPress,
  onLongPress,
  isFocused,
  route,
  label,
  options,
}: ITabItemProps) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      {
        duration: 350,
        restSpeedThreshold: 0.01,
      }
    );
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return { opacity };
  });

  const animatedIconScale = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 0.8], [1, 1.2]);
    const topValue = interpolate(scale.value, [0, 1], [0, 10]);

    return {
      // transform: [{ scale: scale.value }],
      transform: [{ scale: scaleValue }],
      top: topValue,
    };
  });

  const icons: { [key: string]: (props: any) => React.JSX.Element } = {
    Home: (props: any) => <CustomIcon name="House" {...props} />,
    ExpenseValue: (props: any) => <CustomIcon name="Plus" {...props} />,
    Profile: (props: any) => <CustomIcon name="User" {...props} />,
  };

  return (
    <S.TabItem
      href={buildHref(route.name, route.params)}
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <S.AnimatedContainer style={animatedIconScale}>
        {icons[route.name]({
          color: isFocused ? colors.background : colors.primary,
        })}
        <Animated.Text
          style={[
            {
              color: isFocused ? colors.primary : colors.primary,
            },
            animatedTextStyle,
          ]}
        >
          {label}
        </Animated.Text>
      </S.AnimatedContainer>
    </S.TabItem>
  );
};
