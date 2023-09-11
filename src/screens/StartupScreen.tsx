import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import LoginBtn from "../components/LoginBtn";
import { Margin, FontFamily, Color, Padding } from "../GlobalStyles";

const StartupScreen = ({navigation}:any) => {
  const login = () => {
    navigation.navigate('UserType');
  }

  return (
    <ImageBackground
      style={styles.startupScreenIcon}
      resizeMode="cover"
      source={require("../assets/frame481.png")}
    >
      <View style={styles.logotextParent}>
        <Image
          style={styles.logotextIcon}
          resizeMode="cover"
          source={require("../assets/logotext.png")}
        />
        <Text style={[styles.wealthSorted, styles.mt22]}>Wealth. Sorted.</Text>
      </View>
      <LoginBtn onPress={login}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt22: {
    marginTop: 2,
  },
  mt72: {
    marginTop: Margin.m_xl,
  },
  logotextIcon: {
    width: 213,
    height: 72,
  },
  wealthSorted: {
    fontSize: 24,
    fontFamily: FontFamily.openSansRegular,
    color: Color.dark1,
    textAlign: "left",
    alignSelf: "stretch",
    marginBottom: 50
  },
  logotextParent: {
    alignSelf: "stretch",
  },
  startupScreenIcon: {
    flex: 1,
    overflow: "hidden",
    padding: Padding.p_lg,
    justifyContent: "flex-end",
    minHeight: 204,
  },
});

export default StartupScreen;
