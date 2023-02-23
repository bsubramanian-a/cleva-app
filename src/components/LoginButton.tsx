import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import {useNavigation} from '@react-navigation/native';

type LoginButtonType = {
  acceptToContinue?: string;

  /** Style props */
  loginButtonMarginTop?: number | string;
  acceptToContinueLineHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const LoginButton = ({
  loginButtonMarginTop,
  acceptToContinue,
  acceptToContinueLineHeight,
}: LoginButtonType) => {
  const loginButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", loginButtonMarginTop),
    };
  }, [loginButtonMarginTop]);

  const acceptToContinueStyle = useMemo(() => {
    return {
      ...getStyleValue("lineHeight", acceptToContinueLineHeight),
    };
  }, [acceptToContinueLineHeight]);

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('EmailLogin')} style={[styles.loginButton, styles.mt24, loginButtonStyle]}>
      <Text style={[styles.acceptToContinue, acceptToContinueStyle]}>
        {acceptToContinue}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  acceptToContinue: {
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    textAlign: "center",
    color: Color.dark1,
  },
  loginButton: {
    alignSelf: "stretch",
    borderRadius: Border.br_md,
    backgroundColor: Color.goldenrod,
    height: 70,
    overflow: "hidden",
    padding: Padding.p_2xs,
    alignItems: "center",
    justifyContent: "center",
    color: Color.dark1,
    marginBottom: 20
  },
});

export default LoginButton;
