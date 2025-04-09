import { useEffect } from "react";

import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";
import { useTheme } from "styled-components/native";

export interface ISkeleton {
  height: number;
  width: number | string;
  isCircle?: boolean;
}

export const Skeleton = ({ height, width, isCircle }: ISkeleton) => {
  const { colors } = useTheme();
  const opacity = useSharedValue(1);

  useEffect(() => {
    const animation = withRepeat(
      withSequence(
        withTiming(0.3, {
          duration: 1000,
        }),
        withTiming(1, {
          duration: 1000,
        })
      ),
      Infinity,
      true
    );
    opacity.value = animation;
    return () => {
      cancelAnimation(opacity);
    };
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        // @ts-ignore
        {
          height: height,
          width: width,
          borderRadius: isCircle ? moderateScale(height) : moderateScale(8),
          backgroundColor: colors.backgroundLight,
        },
        animatedStyle,
      ]}
    />
  );
};
