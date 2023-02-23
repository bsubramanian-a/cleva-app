import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.logosymbolIcon}
        resizeMode="cover"
        source={require("../assets/logosymbol.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logosymbolIcon: {
    width: 230,
    height: 230,
  },
  splash: {
    backgroundColor: Color.white1,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    padding: Padding.p_2xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
