import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar } from "react-native";
import { Margin, Padding, Border, FontFamily, Color } from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";
import SwipeCard from "../components/SwipeCard";
import { useSelector } from "react-redux";
import JournalSlider from "../components/JournalSlider";
import JournalSlider1 from "../components/JournalSlider1";

const Journal = () => {
  //const journals = useSelector((state:any) => state.data.journals);
  return (
    <ScrollView
      style={styles.journal}
    >
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <CustomHeader name="Journal" type={1} />
      <View
        style={styles.frameParent}
      >
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <View style={styles.yourJourneyToEmbraceYourWWrapper}>
            <Text style={styles.yourJourneyTo}>
              Your journey to embrace your weird, own your story and find your
              mojo.
            </Text>
          </View>
        </View>
        {/* <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
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
        </View> */}
        <SwipeCard />
      </View>
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
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.textMediumBoldText1,
    color: '#1D2431',
    textAlign: "left",
  },
  yourJourneyToEmbraceYourWWrapper: {
    borderRadius: 16,
    backgroundColor: '#FFF9F1',
    borderStyle: "solid",
    borderColor: "#ffeccf",
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 13,
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingTop: 0,
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
    flex: 1,
  },
});

export default Journal;
