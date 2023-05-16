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

const WealthLiability = () => {
  return (
    <View style={[styles.advice, styles.adviceFlexBox]}>
      <View style={styles.assetsview}>
        <View style={[styles.mortgageOnMyHomeParent, styles.totalviewFlexBox]}>
          <Text style={styles.mortgageOnMy}>Mortgage on My Home</Text>
          <Text style={[styles.m, styles.mTypo]}>$1.8M</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[
            styles.mortgageOnMyHomeParent,
            styles.mt15,
            styles.totalviewFlexBox,
          ]}
        >
          <Text style={styles.mortgageOnMy}>Mortgage on Brisbane Studio</Text>
          <Text style={[styles.m, styles.mTypo]}>$700k</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[
            styles.mortgageOnMyHomeParent,
            styles.mt15,
            styles.totalviewFlexBox,
          ]}
        >
          <Text style={styles.mortgageOnMy}>Credit card</Text>
          <Text style={[styles.m, styles.mTypo]}>$8,386</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[
            styles.mortgageOnMyHomeParent,
            styles.mt15,
            styles.totalviewFlexBox,
          ]}
        >
          <Text style={styles.mortgageOnMy}>HECS /HELP</Text>
          <Text style={[styles.m, styles.mTypo]}>$10,000</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
        <View
          style={[
            styles.mortgageOnMyHomeParent,
            styles.mt15,
            styles.totalviewFlexBox,
          ]}
        >
          <Text style={styles.mortgageOnMy}>Car loan</Text>
          <Text style={[styles.m, styles.mTypo]}>$16,000</Text>
        </View>
        <View style={[styles.assetsviewChild, styles.mt15]} />
      </View>
      <View
        style={[
          styles.totalview,
          styles.mt115,
          styles.totalviewFlexBox,
          styles.adviceFlexBox,
        ]}
      >
        <Text style={[styles.total, styles.mTypo]}>Total</Text>
        <Text style={styles.text3}>$2,568,884</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt15: {
    marginTop: Margin.m_md,
  },
  mt115: {
    marginTop: 115,
  },
  adviceFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  totalviewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  mTypo: {
    color: Color.black,
    // fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    lineHeight: 22,
  },
  mortgageOnMy: {
    fontWeight: "300",
    // fontFamily: FontFamily.outfitLight,
    color: Color.darkslategray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  m: {
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  mortgageOnMyHomeParent: {
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
  text3: {
    fontSize: FontSize.size_2xl,
    color: Color.orange_100,
    // fontFamily: FontFamily.outfitMedium,
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

export default WealthLiability;
