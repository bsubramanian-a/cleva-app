import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderBack from "../components/HeaderBack";
import WealthLiability from "../components/WealthLiability";
import IconEditBtn from "../components/IconEditBtn";
import {
  Margin,
  Padding,
  Border,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles";

const WealthLiabilities = () => {
  return (
    <ScrollView
      style={styles.wealthLiabilities}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.wealthLiabilitiesContent}
    >
      <LinearGradient
        style={styles.header}
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
        <HeaderBack
          vuesaxlineararrowLeft={require("../assets/vuesaxlineararrowleft4.png")}
          pageHeadingMarginLeft={72}
          getStarted="Your Wealth"
        />
      </LinearGradient>
      <ScrollView
        style={styles.wealthTabParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.wealthTab}>
          <View style={styles.tabbar}>
            <View style={[styles.tab1, styles.tabFlexBox, styles.tabFlexBox1]}>
              <Text style={styles.assets}>Assets</Text>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox, styles.tabFlexBox1]}>
              <Text style={styles.liabilities}>Liabilities</Text>
            </View>
          </View>
        </View>
        <View style={styles.advicecontainer}>
          <WealthLiability />
        </View>
        <View style={[styles.bottom, styles.tabFlexBox]}>
          <IconEditBtn />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_12: {
    marginTop: Margin.m_10xs,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  wealthLiabilitiesContent: {
    flexDirection: "column",
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tabFlexBox1: {
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_md,
    justifyContent: "center",
    flex: 1,
  },
  mainvector1Icon: {
    width: 164,
    height: 63,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  assets: {
    fontWeight: "500",
    fontFamily: FontFamily.outfitMedium,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.textMediumBoldText1_size,
  },
  tab1: {
    backgroundColor: Color.gray_900,
    paddingHorizontal: Padding.p_9xl,
  },
  liabilities: {
    fontFamily: FontFamily.outfitRegular,
    color: Color.orange_100,
    textAlign: "center",
    fontSize: FontSize.textMediumBoldText1_size,
  },
  tab2: {
    backgroundColor: Color.orange_200,
    paddingHorizontal: Padding.p_7xl,
  },
  tabbar: {
    borderRadius: Border.br_sm,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    padding: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
  wealthTab: {
    paddingHorizontal: Padding.p_md,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  advicecontainer: {
    paddingHorizontal: Padding.p_lg,
    paddingBottom: Padding.p_sm,
    alignSelf: "stretch",
  },
  bottom: {
    width: 390,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_lg,
  },
  wealthTabParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  wealthLiabilities: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
});

export default WealthLiabilities;
