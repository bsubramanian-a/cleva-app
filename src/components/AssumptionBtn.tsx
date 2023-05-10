import * as React from "react";
import { Pressable, Text, StyleSheet, Image } from "react-native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const AssumptionBtn = () => {
  return (
    <Pressable style={styles.assumptionBtn}>
      <Text style={styles.seeAssumptions}>See Assumptions</Text>
      <Image
        style={[styles.vuesaxlineararrowRightIcon, styles.ml6]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: Margin.m_6xs,
  },
  seeAssumptions: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.openSansRegular,
    color: Color.goldenrod,
    textAlign: "center",
  },
  vuesaxlineararrowRightIcon: {
    width: 18,
    height: 18,
  },
  assumptionBtn: {
    borderRadius: Border.br_md,
    borderStyle: "solid",
    borderColor: "#f9aa35",
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_md,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AssumptionBtn;
