import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type Tab2Type = {
  style?: StyleProp<ViewStyle>;
};

const Tab2 = ({ style }: Tab2Type) => {
  return (
    <View style={[styles.tab2, style]}>
      <Text style={styles.labelledMoney}>Labelled Money</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelledMoney: {
    fontSize: FontSize.textMediumBoldText_size,
    fontFamily: FontFamily.outfitRegular,
    color: Color.black,
    textAlign: "center",
  },
  tab2: {
    flex: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_700,
    overflow: "hidden",
    padding: Padding.p_xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tab2;
