import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { LayoutChangeEvent } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { TabBarItem } from "./components/TabBarItem";
import * as S from "./styles";

export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const [tabItemBackgroundDimensions, setTabItemBackgroundDimensions] =
    useState({
      width: 320,
      height: 320,
    });

  const tabBarItemWidth =
    tabItemBackgroundDimensions.width / state.routes.length;

  const onTabBarLayoutChange = (event: LayoutChangeEvent) => {
    setTabItemBackgroundDimensions({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height,
    });
  };

  const selectedTabItemPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: selectedTabItemPositionX.value,
        },
      ],
    };
  });

  return (
    <S.TabBar onLayout={onTabBarLayoutChange}>
      <S.TabItemBackground
        style={animatedStyle}
        dimensions={{
          width: tabBarItemWidth,
          height: tabItemBackgroundDimensions.height,
        }}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          selectedTabItemPositionX.value = withSpring(tabBarItemWidth * index, {
            duration: 1500,
            dampingRatio: 0.7,
          });
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
            navigation.setOptions({ tabBarVisible: false });
            // navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarItem
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            route={route}
            label={label.toString()}
            options={options}
          />
        );
      })}
    </S.TabBar>
  );
};
