import * as React from "react";
import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import {
  Margin,
  Border,
  FontFamily,
  FontSize,
  Color,
  Padding,
} from "../GlobalStyles";

const JournalSlider = () => {
  return (
    <ImageBackground
      style={[styles.slider2Icon, styles.slider2IconLayout]}
      resizeMode="cover"
      source={require("../assets/frame4811.png")}
    >
      <View style={[styles.getchapgroup, styles.getchapgroupFlexBox]}>
        <Text style={[styles.whoAmI, styles.whoAmITypo]}>Who Am I?</Text>
        <View style={[styles.chaptergroup, styles.getchapgroupFlexBox]}>
          <Text style={styles.chapter1}>Chapter 1</Text>
          <Image
            style={[styles.vuesaxlineararrowCircleRigIcon, styles.ml6]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowcircleright.png")}
          />
        </View>
      </View>
      <View style={[styles.progressgroupParent, styles.slider2IconLayout]}>
        <View style={[styles.progressgroup, styles.getchapgroupFlexBox]}>
          <Text style={[styles.textTypo, styles.whoAmITypo]}>
            Your Progress
          </Text>
          <Text style={[styles.text, styles.textTypo]}>47%</Text>
        </View>
        <View style={[styles.rectangleParent, styles.mt10]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: Margin.m_6xs,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  slider2IconLayout: {
    borderRadius: Border.br_sm,
    overflow: "hidden",
  },
  getchapgroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  whoAmITypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSerifProBold,
  },
  textTypo: {
    fontSize: FontSize.size_base,
    color: Color.white1,
    fontWeight: "700",
  },
  groupPosition: {
    borderRadius: Border.br_2xl,
    left: 0,
    top: 0,
    height: 6,
    position: "absolute",
  },
  whoAmI: {
    fontSize: FontSize.textMediumBoldText_size,
    color: Color.white1,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.sourceSerifProBold,
  },
  chapter1: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.outfitMedium,
    textAlign: "right",
    color: Color.white1,
  },
  vuesaxlineararrowCircleRigIcon: {
    width: 14,
    height: 14,
  },
  chaptergroup: {
    justifyContent: "center",
  },
  getchapgroup: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_600,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_md,
    paddingBottom: Padding.p_5xs,
    alignSelf: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.outfitBold,
    textAlign: "right",
  },
  progressgroup: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  groupChild: {
    backgroundColor: Color.gray_700,
    width: 280,
  },
  groupItem: {
    backgroundColor: Color.white1,
    width: 155,
  },
  rectangleParent: {
    height: 6,
    alignSelf: "stretch",
  },
  progressgroupParent: {
    paddingHorizontal: Padding.p_7xs,
    paddingBottom: Padding.p_10xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  slider2Icon: {
    top: 11,
    left: 22,
    width: 316,
    height: 470,
    padding: Padding.p_5xs,
    alignItems: "flex-end",
    minHeight: 204,
    justifyContent: "space-between",
    overflow: "hidden",
    position: "absolute",
    borderRadius: Border.br_sm,
  },
});

export default JournalSlider;
