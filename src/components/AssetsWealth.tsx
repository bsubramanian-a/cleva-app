import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const AssetsWealth = () => {
  return (
    <View style={[styles.advice, styles.adviceFlexBox]}>
      <View style={styles.assetsview}>
        <View style={[styles.myHomeParent, styles.totalviewFlexBox]}>
          <Text style={styles.myHome}>My Home</Text>
          <Text style={[styles.text, styles.textTypo]}>$2,400,000</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[styles.myHomeParent, styles.mt15, styles.totalviewFlexBox]}
        >
          <Text style={styles.myHome}>Home Contents</Text>
          <Text style={[styles.text, styles.textTypo]}>$10,000</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[styles.myHomeParent, styles.mt15, styles.totalviewFlexBox]}
        >
          <Text style={styles.myHome}>Investment Properties</Text>
          <Text style={[styles.text, styles.textTypo]}>$800,000</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[styles.myHomeParent, styles.mt15, styles.totalviewFlexBox]}
        >
          <Text style={styles.myHome}>Superannuation</Text>
          <Text style={[styles.text, styles.textTypo]}>$800,000</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[styles.myHomeParent, styles.mt15, styles.totalviewFlexBox]}
        >
          <Text style={styles.myHome}>Savings</Text>
          <Text style={[styles.text, styles.textTypo]}>$56,628</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[styles.myHomeParent, styles.mt15, styles.totalviewFlexBox]}
        >
          <Text style={styles.myHome}>Car</Text>
          <Text style={[styles.text, styles.textTypo]}>$24,588</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[styles.myHomeParent, styles.mt15, styles.totalviewFlexBox]}
        >
          <Text style={styles.myHome}>Art</Text>
          <Text style={[styles.text, styles.textTypo]}>$8000</Text>
        </View>
      </View>
      <View
        style={[
          styles.totalview,
          styles.mt26,
          styles.totalviewFlexBox,
          styles.adviceFlexBox,
        ]}
      >
        <Text style={[styles.total, styles.textTypo]}>Total</Text>
        <Text style={styles.text7}>$4,248,108</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt15: {
    marginTop: Margin.m_md,
  },
  mt26: {
    marginTop: Margin.m_2xl,
  },
  adviceFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  totalviewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    lineHeight: 22,
  },
  myHome: {
    fontWeight: "300",
    fontFamily: FontFamily.outfitLight,
    color: Color.darkslategray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  text: {
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  myHomeParent: {
    width: 305,
  },
  assetsviewChild: {
    borderStyle: "solid",
    borderColor: "#f3f1ee",
    borderTopWidth: 1,
    width: 306,
    height: 1,
  },
  assetsview: {
    paddingLeft: Padding.p_9xs,
    alignSelf: "stretch",
  },
  total: {
    fontSize: FontSize.textMediumBoldText_size,
    textAlign: "left",
  },
  text7: {
    fontSize: FontSize.size_2xl,
    color: Color.orange_100,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 22,
  },
  totalview: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange_200,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
  },
  advice: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.white1,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    padding: Padding.p_lg,
    justifyContent: "center",
  },
});

export default AssetsWealth;
