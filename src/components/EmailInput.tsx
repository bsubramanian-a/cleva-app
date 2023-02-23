import * as React from "react";
import { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Padding } from "../GlobalStyles";

type EmailInputType = {
  emailInputPlaceholder?: string;

  /** Style props */
  emailInputPaddingTop?: number | string;
  emailInputPaddingRight?: number | string;
  emailInputPaddingBottom?: number | string;
  emailInputJustifyContent?: string;
  emailInputPaddingHorizontal?: number | string;
  emailInputPaddingVertical?: number | string;
  emailInputMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const EmailInput = ({
  emailInputPlaceholder,
  emailInputPaddingTop,
  emailInputPaddingRight,
  emailInputPaddingBottom,
  emailInputJustifyContent,
  emailInputPaddingHorizontal,
  emailInputPaddingVertical,
  emailInputMarginTop,
}: EmailInputType) => {
  const emailInputStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingTop", emailInputPaddingTop),
      ...getStyleValue("paddingRight", emailInputPaddingRight),
      ...getStyleValue("paddingBottom", emailInputPaddingBottom),
      ...getStyleValue("justifyContent", emailInputJustifyContent),
      ...getStyleValue("paddingHorizontal", emailInputPaddingHorizontal),
      ...getStyleValue("paddingVertical", emailInputPaddingVertical),
      ...getStyleValue("marginTop", emailInputMarginTop),
    };
  }, [
    emailInputPaddingTop,
    emailInputPaddingRight,
    emailInputPaddingBottom,
    emailInputJustifyContent,
    emailInputPaddingHorizontal,
    emailInputPaddingVertical,
    emailInputMarginTop,
  ]);

  return (
    <TextInput
      style={[styles.emailInput, emailInputStyle]}
      placeholder={emailInputPlaceholder}
      keyboardType="default"
      placeholderTextColor="#aaa9a8"
    />
  );
};

const styles = StyleSheet.create({
  emailInput: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#eba947",
    borderBottomWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_sm,
    justifyContent: "space-between",
  },
});

export default EmailInput;
