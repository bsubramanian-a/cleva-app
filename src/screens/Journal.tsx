import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopHeader from "../components/TopHeader";
import JournalSlider from "../components/JournalSlider";
import JournalSlider1 from "../components/JournalSlider1";
import { Margin, Padding, Border, FontFamily, Color } from "../GlobalStyles";

const Journal = () => {
  return (
    <ScrollView
      style={styles.journal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.journalScrollViewContent}
    >
      <LinearGradient
        style={styles.mainvector1Parent}
        locations={[0, 1]}
        colors={["rgba(239, 159, 39, 0.08)", "rgba(255, 255, 255, 0)"]}
        useAngle={true}
        angle={180}
      >
        <Image
          style={styles.mainvector1Icon}
          resizeMode="cover"
          source={require("../assets/mainvector-1.png")}
        />
        <TopHeader logo={require("../assets/logo1.png")} />
      </LinearGradient>
      <ScrollView
        style={styles.frameParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <View style={styles.yourJourneyToEmbraceYourWWrapper}>
            <Text style={styles.yourJourneyTo}>
              Your journey to embrace your weird, own your story and find your
              mojo.
            </Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.slider2Parent}>
            <JournalSlider />
            <JournalSlider1 />
          </View>
          <View style={[styles.sliderindicator, styles.mt13]}>
            <View style={[styles.indicator1, styles.indicator1Layout]} />
            <View
              style={[styles.indicator1, styles.ml5, styles.indicator1Layout]}
            />
            <View
              style={[
                styles.indicatoractive,
                styles.ml5,
                styles.indicator1Layout,
              ]}
            />
            <View
              style={[styles.indicator1, styles.ml5, styles.indicator1Layout]}
            />
            <View
              style={[styles.indicator1, styles.ml5, styles.indicator1Layout]}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_12: {
    marginTop: Margin.m_10xs,
  },
  ml5: {
    marginLeft: Margin.m_7xs,
  },
  mt13: {
    marginTop: Margin.m_xs,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  journalScrollViewContent: {
    flexDirection: "column",
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  indicator1Layout: {
    height: 8,
    width: 8,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  mainvector1Icon: {
    width: 164,
    height: 63,
    overflow: "hidden",
  },
  mainvector1Parent: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  yourJourneyTo: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifProSemibold,
    color: Color.gray_500,
    textAlign: "left",
    alignSelf: "stretch",
  },
  yourJourneyToEmbraceYourWWrapper: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.floralwhite,
    borderStyle: "solid",
    borderColor: "#ffeccf",
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 13,
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_6xs,
  },
  slider2Parent: {
    height: 486,
    alignSelf: "stretch",
  },
  indicator1: {
    backgroundColor: Color.goldenrod_200,
  },
  indicatoractive: {
    backgroundColor: Color.goldenrod_100,
  },
  sliderindicator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    paddingBottom: Padding.p_lg,
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  journal: {
    backgroundColor: Color.white1,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default Journal;
