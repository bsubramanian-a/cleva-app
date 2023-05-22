import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import LoginBtn from "../components/LoginBtn";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const StartupScreenIcon = () => {
  return (
    <ImageBackground
      style={styles.startupScreenIcon}
      resizeMode="cover"
      source={require("../assets/frame4813.png")}
    >
      <View style={styles.logotextParent}>
        <Image
          style={styles.logotextIcon}
          resizeMode="cover"
          source={require("../assets/logotext.png")}
        />
        <Text style={[styles.wealthSorted, styles.mt22]}>Wealth. Sorted.</Text>
      </View>
      <LoginBtn />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt22: {
    marginTop: 22,
  },
  mt72: {
    marginTop: Margin.m_9xl,
  },
  logotextIcon: {
    width: 213,
    height: 72,
  },
  wealthSorted: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.openSansRegular,
    color: Color.dark,
    textAlign: "left",
    alignSelf: "stretch",
  },
  logotextParent: {
    alignSelf: "stretch",
  },
  startupScreenIcon: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    padding: Padding.p_3xl,
    justifyContent: "flex-end",
    minHeight: 204,
  },
});

export default StartupScreenIcon;
