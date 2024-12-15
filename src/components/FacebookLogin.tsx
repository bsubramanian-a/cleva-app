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

const FacebookLogin = () => {
  return (
    <Pressable style={[styles.appleLogin, styles.mt32]}>
      <Image
        style={styles.iconsocialNetworkfacebook}
        resizeMode="cover"
        source={require("../assets/iconsocial-networkfacebook.png")}
      />
      <Text style={[styles.loginWithFacebook, styles.ml66]}>
        Login with Facebook
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml66: {
    marginLeft: Margin.m_8xl,
  },
  iconsocialNetworkfacebook: {
    width: 28,
    height: 28,
  },
  loginWithFacebook: {
    flex: 1,
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText,
    textAlign: "left",
    color: Color.white1,
  },
  appleLogin: {
    alignSelf: "stretch",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.royalblue,
    shadowColor: "#e3a99d",
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
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    color: Color.white1,
  },
});

export default FacebookLogin;
