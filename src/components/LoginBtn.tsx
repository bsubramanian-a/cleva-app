import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LoginBtn = ({onPress}:any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.loginButton, styles.mt72]}>
      <Text style={styles.login}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  login: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    textAlign: "center",
    color: Color.dark1,
  },
  loginButton: {
    alignSelf: "stretch",
    borderRadius: Border.br_md,
    backgroundColor: Color.goldenrod,
    // shadowColor: "#a73f33",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 70,
    overflow: "hidden",
    padding: Padding.p_2xs,
    alignItems: "center",
    justifyContent: "center",
    color: Color.dark1,
    zIndex: 100000
  },
});

export default LoginBtn;
