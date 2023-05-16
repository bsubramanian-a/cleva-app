import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopHeader from "../components/TopHeader";
import CardL1 from "../components/CardL1";
import CardLib from "../components/CardLib";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";

const Library = () => {
  return (
    <View
      style={styles.library}
    >
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Library" type={1}/>
      <ScrollView
        style={styles.frameParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameGroup}>
          <View style={styles.frameWrapper}>
            <View style={styles.thankGodYouAskedThatParent}>
              <Text style={styles.thankGodYou}>Thank God You Asked That</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
          </View>
          <ScrollView
            style={styles.frameParent}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <View style={[styles.thank1Parent, styles.mt9]}>
              <CardL1 frame510={require("../assets/frame-510.png")} />
              <CardL1
                thank1MarginLeft={14}
                frame510={require("../assets/frame-5101.png")}
              />
            </View>
          </ScrollView>
        </View>
        <View style={[styles.frameGroup, styles.mt20]}>
          <View style={styles.frameWrapper}>
            <View style={styles.thankGodYouAskedThatParent}>
              <Text style={styles.thankGodYou}>Mojospresso</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
          </View>
          <ScrollView
            style={styles.frameParent}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <View style={[styles.thank1Parent, styles.mt9]}>
              <CardLib
                frame510={require("../assets/frame-5102.png")}
                calendar={require("../assets/calendar.png")}
              />
              <CardLib
                mojo1MarginLeft={14}
                frame510={require("../assets/frame-5102.png")}
                calendar={require("../assets/calendar.png")}
              />
              <CardLib
                mojo1MarginLeft={14}
                frame510={require("../assets/frame-5104.png")}
                calendar={require("../assets/calendar.png")}
              />
            </View>
          </ScrollView>
        </View>
        <View style={[styles.frameGroup, styles.mt20]}>
          <View style={styles.frameWrapper}>
            <View style={styles.thankGodYouAskedThatParent}>
              <Text style={styles.thankGodYou}>Masterclasses</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
          </View>
          <ScrollView
            style={styles.frameParent}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <View style={[styles.thank1Parent, styles.mt9]}>
              <CardLib
                frame510={require("../assets/frame-5102.png")}
                calendar={require("../assets/calendar.png")}
              />
              <CardLib
                mojo1MarginLeft={14}
                frame510={require("../assets/frame-5102.png")}
                calendar={require("../assets/calendar.png")}
              />
              <CardLib
                mojo1MarginLeft={14}
                frame510={require("../assets/frame-5104.png")}
                calendar={require("../assets/calendar.png")}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_12: {
    marginTop: 12,
  },
  ml14: {
    marginLeft: Margin.m_sm,
  },
  mt9: {
    marginTop: 9,
  },
  mt20: {
    marginTop: 20,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  libraryScrollViewContent: {
    flexDirection: "column",
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
  thankGodYou: {
    fontSize: 18,
    fontWeight: "500",
    // fontFamily: FontFamily.textMediumBoldText1,
    color: Color.black,
    textAlign: "left",
  },
  seeAll: {
    fontSize: 14,
    textDecoration: "underline",
    // fontFamily: FontFamily.openSansRegular,
    color: '#EF9F27',
    textAlign: "right",
    fontWeight: '400'
  },
  thankGodYouAskedThatParent: {
    width: 350,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameWrapper: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  thank1Parent: {
    flexDirection: "row",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  frameParent: {
    padding: 25,
    paddingHorizontal: 16,
    paddingTop: 10,
    alignSelf: "stretch",
    flex: 1,
  },
  library: {
    backgroundColor: Color.white1,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default Library;
