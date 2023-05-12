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

const AssumptionBtn = ({navigation}:any) => {
  return (
    <Pressable style={styles.assumptionBtn} onPress={() => navigation.navigate('WealthAssets')}>
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
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    // fontFamily: FontFamily.openSansRegular,
    color: '#EF9F27',
    textAlign: "center",
    marginRight: 6
  },
  vuesaxlineararrowRightIcon: {
    width: 18,
    height: 18,
    marginTop: 2
  },
  assumptionBtn: {
    borderRadius: Border.br_md,
    borderStyle: "solid",
    borderColor: "#f9aa35",
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_md,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    width: '100%'
  },
});

export default AssumptionBtn;
