import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const HeaderMenu = () => {
  return (
    <View style={[styles.topMenu, styles.mt_12, styles.topMenuFlexBox]}>
      <View style={styles.menu}>
        <Image
          style={styles.vuesaxlineararrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowleft.png")}
        />
      </View>
      <View style={[styles.pageHeading, styles.topMenuFlexBox]}>
        <Text style={styles.earlyHappyMemory}>Early Happy Memory</Text>
      </View>
      <View style={styles.menu}>
        <Image
          style={styles.vuesaxlineararrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearmore.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topMenuFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  vuesaxlineararrowLeftIcon: {
    width: 22,
    height: 22,
  },
  menu: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.snow,
    overflow: "hidden",
    padding: Padding.p_6xs,
    justifyContent: "center",
    alignItems: "center",
  },
  earlyHappyMemory: {
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.black,
    textAlign: "center",
  },
  pageHeading: {
    alignItems: "center",
  },
  topMenu: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_lg,
    paddingBottom: Padding.p_5xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HeaderMenu;
