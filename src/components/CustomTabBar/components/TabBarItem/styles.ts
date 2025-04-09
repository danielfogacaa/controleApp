import { Text } from "@react-navigation/elements";
import { TouchableWithoutFeedback } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const TabBar = styled.View`
  height: 60px;
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: space-between;
`;
export const TabItem = styled(TouchableWithoutFeedback)`
  flex: 1;
  align-items: center;
  justify-items: center;
`;
export const AnimatedContainer = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-items: center;
`;
export const TabItemLabel = styled(Text)`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
