import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import {useNavigation} from '@react-navigation/native';

type LoginButtonType = {
  acceptToContinue?: String;
  user_type:string;
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
  user_type
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

  const navigation: any = useNavigation();

  return (
    <>
    {user_type == 'user' ?
    <Pressable onPress={() => navigation.navigate('EmailLogin', { user_type: 'user' })} style={[styles.loginButton,  loginButtonStyle]}>
      <Text style={[styles.acceptToContinue, acceptToContinueStyle]}>
        {acceptToContinue}
      </Text>
    </Pressable>
    :
    <Pressable onPress={() => navigation.navigate('EmailLogin', { user_type: 'advisor_coach' })} style={[styles.loginCoachButton]}>
      <Text style={[styles.acceptToContinue, styles.acceptToContinueCoach, acceptToContinueStyle]}>
        Coach Login
      </Text>
    </Pressable>
    }
    </>    
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
  acceptToContinueCoach: {
    color: Color.white1,
    fontWeight: "bold"
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
  loginCoachButton: {
    alignSelf: "stretch",
    borderRadius: Border.br_md,
    backgroundColor: Color.cadetblue,
    height: 70,
    overflow: "hidden",
    padding: Padding.p_2xs,
    alignItems: "center",
    justifyContent: "center",
    color: Color.white1,
    marginBottom: 20
  },
});

export default LoginButton;
