import * as React from "react";
import { Pressable, Image, StyleSheet, Text } from "react-native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const GoogleLogin = () => {
  return (
    <Pressable style={styles.googleLogin}>
      <Image
        style={styles.google2Icon}
        resizeMode="cover"
        source={require("../assets/google-2.png")}
      />
      <Text style={[styles.loginWithGoogle, styles.ml66]}>
        Login with Google
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml66: {
    marginLeft: Margin.m_lg,
  },
  google2Icon: {
    width: 26,
    height: 26,
  },
  loginWithGoogle: {
    flex: 1,
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    // fontFamily: FontFamily.textMediumBoldText1,
    textAlign: "left",
    color: Color.dark1,
  },
  googleLogin: {
    alignSelf: "stretch",
    borderRadius: Border.br_md,
    backgroundColor: Color.white1,
    shadowColor: "#e1a698",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 70,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    color: Color.dark1,
  },
});

export default GoogleLogin;
