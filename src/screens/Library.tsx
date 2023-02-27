import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopHeader from "../components/TopHeader";
import CardL1 from "../components/CardL1";
import CardLib from "../components/CardLib";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Library = () => {
  return (
    <ScrollView
      style={styles.library}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.libraryScrollViewContent}
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
        <TopHeader logo={require("../assets/logo.png")} />
      </LinearGradient>
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
          <View style={[styles.thank1Parent, styles.mt9]}>
            <CardL1 frame510={require("../assets/frame-510.png")} />
            <CardL1
              thank1MarginLeft={14}
              frame510={require("../assets/frame-5101.png")}
            />
          </View>
        </View>
        <View style={[styles.frameGroup, styles.mt20]}>
          <View style={styles.frameWrapper}>
            <View style={styles.thankGodYouAskedThatParent}>
              <Text style={styles.thankGodYou}>Mojospresso</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
          </View>
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
              calendar={require("../assets/calendar4.png")}
            />
          </View>
        </View>
        <View style={[styles.frameGroup, styles.mt20]}>
          <View style={styles.frameWrapper}>
            <View style={styles.thankGodYouAskedThatParent}>
              <Text style={styles.thankGodYou}>Masterclasses</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
          </View>
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
              calendar={require("../assets/calendar4.png")}
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
  ml14: {
    marginLeft: Margin.m_sm,
  },
  mt9: {
    marginTop: Margin.m_3xs,
  },
  mt20: {
    marginTop: Margin.m_lg,
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
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifProSemibold,
    color: Color.black,
    textAlign: "left",
  },
  seeAll: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontFamily: FontFamily.outfitRegular,
    color: Color.orange_100,
    textAlign: "right",
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
    padding: Padding.p_lg,
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
