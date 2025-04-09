import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { moderateScale } from "react-native-size-matters";

interface IKeyboardView {
  children: React.ReactNode;
}

export const KeyboardView: React.FC<IKeyboardView> = ({ children }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      extraHeight={moderateScale(16)}
      extraScrollHeight={moderateScale(16)}
      enableOnAndroid={true}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};
