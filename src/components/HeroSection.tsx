import * as React from "react";
import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Margin,
  Padding,
  FontSize,
  Color,
  Border,
  FontFamily,
} from "../GlobalStyles";

const HeroSection = () => {
  return (
    <View style={styles.herosection}>
      <ImageBackground
        style={styles.sliderIcon}
        resizeMode="cover"
        source={require("../assets/frame481.png")}
      >
        <View style={styles.getchapgroupWrapper}>
          <View
            style={[
              styles.getchapgroup,
              styles.getchapgroupSpaceBlock,
              styles.getchapgroupFlexBox,
            ]}
          >
            <Text style={styles.getStarted}>Get Started</Text>
            <View style={[styles.chaptergroup, styles.getchapgroupFlexBox]}>
              <Text style={styles.chapter1}>Chapter 1</Text>
              <Image
                style={[styles.vuesaxlineararrowCircleRigIcon, styles.ml6]}
                resizeMode="cover"
                source={require("../assets/vuesaxlineararrowcircleright.png")}
              />
            </View>
          </View>
        </View>
        <LinearGradient
          style={[styles.progressgroupParent, styles.getchapgroupSpaceBlock]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.83)"]}
          useAngle={true}
          angle={180}
        >
          <View style={[styles.progressgroup, styles.getchapgroupFlexBox]}>
            <Text style={[styles.yourProgress, styles.textTypo]}>
              Your Progress
            </Text>
            <Text style={[styles.text, styles.textTypo]}>47%</Text>
          </View>
          <View style={[styles.rectangleParent, styles.mt10]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <View style={[styles.groupItem, styles.groupPosition]} />
          </View>
        </LinearGradient>
      </ImageBackground>
      <View
        style={[styles.chaptergroup, styles.mt10, styles.getchapgroupFlexBox]}
      >
        <View style={[styles.indicator1, styles.indicator1Layout]} />
        <View
          style={[styles.indicator1, styles.ml5, styles.indicator1Layout]}
        />
        <View
          style={[styles.indicatoractive, styles.ml5, styles.indicator1Layout]}
        />
        <View
          style={[styles.indicator1, styles.ml5, styles.indicator1Layout]}
        />
        <View
          style={[styles.indicator1, styles.ml5, styles.indicator1Layout]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: Margin.m_6xs,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  ml5: {
    marginLeft: Margin.m_7xs,
  },
  getchapgroupSpaceBlock: {
    paddingTop: Padding.p_5xs,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  getchapgroupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.white1,
  },
  groupPosition: {
    borderRadius: Border.br_2xl,
    left: 0,
    top: 0,
    position: "absolute",
    height: 6,
  },
  indicator1Layout: {
    height: 8,
    width: 8,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  getStarted: {
    fontSize: FontSize.textMediumBoldText_size,
    fontWeight: "900",
    fontFamily: FontFamily.sourceSerifProBlack,
    textAlign: "left",
    color: Color.white1,
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
    paddingRight: Padding.p_md,
    paddingBottom: Padding.p_5xs,
    justifyContent: "space-between",
  },
  getchapgroupWrapper: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
  },
  yourProgress: {
    fontFamily: FontFamily.sourceSerifProBold,
    textAlign: "left",
  },
  text: {
    fontFamily: FontFamily.outfitBold,
    textAlign: "right",
  },
  progressgroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  groupChild: {
    backgroundColor: Color.gray_700,
    width: 314,
  },
  groupItem: {
    backgroundColor: Color.white1,
    width: 174,
  },
  rectangleParent: {
    height: 6,
    alignSelf: "stretch",
  },
  progressgroupParent: {
    height: 60,
    paddingHorizontal: Padding.p_md,
    paddingBottom: Padding.p_md,
    backgroundColor: "transparent",
    borderRadius: Border.br_sm,
    paddingTop: Padding.p_5xs,
  },
  sliderIcon: {
    height: 220,
    minHeight: 204,
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: Border.br_sm,
    alignItems: "center",
    alignSelf: "stretch",
  },
  indicator1: {
    backgroundColor: Color.goldenrod_200,
  },
  indicatoractive: {
    backgroundColor: Color.goldenrod_100,
  },
  herosection: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default HeroSection;
