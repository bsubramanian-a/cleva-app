import * as React from "react";
import { Pressable, Image, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const IconEditBtn = () => {
  return (
    <LinearGradient
      style={styles.editBtn}
      locations={[0, 1]}
      colors={["#fbb142", "#f6a326"]}
      useAngle={true}
      angle={180}
    >
      <Pressable style={styles.pressable}>
        <Image
          style={styles.vuesaxlinearedit2Icon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearedit2.png")}
        />
        <Text style={[styles.edit, styles.ml4]}>Edit</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: Margin.m_8xs,
  },
  vuesaxlinearedit2Icon: {
    width: 18,
    height: 18,
  },
  edit: {
    fontSize: FontSize.textMediumBoldText_size,
    lineHeight: 20,
    fontWeight: "600",
    // fontFamily: FontFamily.outfitSemibold,
    color: Color.white1,
    textAlign: "center",
  },
  pressable: {
    borderRadius: Border.br_lg,
    height: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  editBtn: {
    height: 44,
  },
});

export default IconEditBtn;
