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

const JournalSlider1 = () => {
  return (
    <ImageBackground
      style={[styles.slider1Icon, styles.slider1IconLayout]}
      resizeMode="cover"
      source={require("../assets/frame4812.png")}
    >
      <View style={[styles.getchapgroup, styles.wrapperFlexBox]}>
        <Text style={[styles.whoAmI, styles.whoAmITypo]}>Who Am I?</Text>
        <View style={[styles.chaptergroup, styles.wrapperFlexBox]}>
          <Text style={styles.chapter1}>Chapter 1</Text>
          <Image
            style={[styles.vuesaxlineararrowCircleRigIcon, styles.ml6]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowcircleright2.png")}
          />
        </View>
      </View>
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/5141092-2.png")}
        />
      </View>
      <View style={[styles.progressgroupParent, styles.slider1IconLayout]}>
        <View style={[styles.progressgroup, styles.wrapperFlexBox]}>
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
  slider1IconLayout: {
    borderRadius: Border.br_sm,
    overflow: "hidden",
  },
  wrapperFlexBox: {
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
    top: 0,
    height: 6,
    left: 0,
    position: "absolute",
  },
  whoAmI: {
    fontSize: FontSize.textMediumBoldText1_size,
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
    width: 15,
    height: 15,
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
  icon: {
    width: 252,
    height: 346,
  },
  wrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    justifyContent: "flex-end",
    alignSelf: "stretch",
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
  slider1Icon: {
    top: 17,
    width: 316,
    height: 470,
    padding: Padding.p_5xs,
    alignItems: "flex-end",
    transform: [
      {
        rotate: "-2.75deg",
      },
    ],
    minHeight: 204,
    justifyContent: "space-between",
    overflow: "hidden",
    left: 0,
    position: "absolute",
    borderRadius: Border.br_sm,
  },
});

export default JournalSlider1;
