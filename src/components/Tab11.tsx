import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type Tab11Type = {
  style?: StyleProp<ViewStyle>;
};

const Tab11 = ({ style }: Tab11Type) => {
  return (
    <View style={[styles.tab1, style]}>
      <Text style={styles.labelledMoney}>Labelled Money</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelledMoney: {
    fontSize: FontSize.textMediumBoldText1_size,
    fontWeight: "500",
    fontFamily: FontFamily.outfitMedium,
    color: Color.orange_100,
    textAlign: "left",
  },
  tab1: {
    flex: 1,
    borderRadius: Border.br_md,
    backgroundColor: Color.orange_200,
    overflow: "hidden",
    padding: Padding.p_xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tab11;
