import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderBack from "../components/HeaderBack";
import EditBtn from "../components/EditBtn";
import {
  Margin,
  Color,
  Border,
  FontFamily,
  Padding,
  FontSize,
} from "../GlobalStyles";

const Advice = () => {
  return (
    <ScrollView
      style={[styles.advice, styles.adviceBg]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.adviceScrollViewContent}
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
          vuesaxlineararrowLeft={require("../assets/vuesaxlineararrowleft.png")}
          pageHeadingMarginLeft={98}
          getStarted="Advice"
        />
      </LinearGradient>
      <ScrollView
        style={styles.videoSectionParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.videoSection}>
          <ImageBackground
            style={[
              styles.videoSectionInner,
              styles.bottomFlexBox,
              styles.advice2Layout,
            ]}
            resizeMode="cover"
            source={require("../assets/frame526.png")}
          >
            <View style={styles.polygonWrapper}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/polygon-2.png")}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.startedTab}>
          <Text style={[styles.summary, styles.summaryTypo]}>Summary</Text>
          <Text style={[styles.summary, styles.ml40, styles.summaryTypo]}>
            Exercises
          </Text>
          <View style={[styles.adviceParent, styles.ml40]}>
            <Text style={styles.advice1}>Advice</Text>
            <View style={[styles.frameItem, styles.mt5]} />
          </View>
        </View>
        <View style={styles.advicetab}>
          <View style={styles.advicecontainer}>
            <View
              style={[styles.advice2, styles.advice2Layout, styles.adviceBg]}
            >
              <Text style={[styles.adviceAssignedBy, styles.summaryTypo]}>
                Advice Assigned by Coach
              </Text>
              <View style={[styles.advice1Parent, styles.mt10]}>
                <View style={styles.advice11}>
                  <View style={styles.dot1Wrapper}>
                    <View style={styles.dot1} />
                  </View>
                  <Text style={[styles.loremIpsumIs, styles.ml5]}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </View>
                <View style={[styles.advice11, styles.mt14]}>
                  <View style={styles.dot1Wrapper}>
                    <View style={styles.dot1} />
                  </View>
                  <Text style={[styles.loremIpsumIs, styles.ml5]}>
                    Lorem Ipsum is simply dummy industry.
                  </Text>
                </View>
                <View style={[styles.advice11, styles.mt14]}>
                  <View style={styles.dot1Wrapper}>
                    <View style={styles.dot1} />
                  </View>
                  <Text style={[styles.loremIpsumIs, styles.ml5]}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </View>
                <View style={[styles.advice11, styles.mt14]}>
                  <View style={styles.dot1Wrapper}>
                    <View style={styles.dot1} />
                  </View>
                  <Text style={[styles.loremIpsumIs, styles.ml5]}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </View>
                <View style={[styles.advice11, styles.mt14]}>
                  <View style={styles.dot1Wrapper}>
                    <View style={styles.dot1} />
                  </View>
                  <Text style={[styles.loremIpsumIs, styles.ml5]}>
                    Lorem Ipsum is simply dummy industry.
                  </Text>
                </View>
                <View style={[styles.advice11, styles.mt14]}>
                  <View style={styles.dot1Wrapper}>
                    <View style={styles.dot1} />
                  </View>
                  <Text style={[styles.loremIpsumIs, styles.ml5]}>
                    Lorem Ipsum is simply dummy industry.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.bottom, styles.bottomFlexBox]}>
          <EditBtn
            edit="Continue"
            editFontSize={16}
            editBtnHeight={44}
            editBtnPaddingHorizontal={57}
            editBtnPaddingVertical={12}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_12: {
    marginTop: Margin.m_10xs,
  },
  mt5: {
    marginTop: Margin.m_7xs,
  },
  ml40: {
    marginLeft: Margin.m_5xl,
  },
  ml5: {
    marginLeft: Margin.m_7xs,
  },
  mt14: {
    marginTop: Margin.m_sm,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  adviceScrollViewContent: {
    flexDirection: "column",
  },
  adviceBg: {
    backgroundColor: Color.white1,
    overflow: "hidden",
  },
  bottomFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  advice2Layout: {
    borderRadius: Border.br_sm,
    alignSelf: "stretch",
  },
  summaryTypo: {
    color: Color.black,
    textAlign: "left",
    // // fontFamily: FontFamily.outfitRegular,
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
  frameChild: {
    borderRadius: Border.br_4xs,
    width: 14,
    height: 15,
  },
  polygonWrapper: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_600,
    padding: Padding.p_3xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  videoSectionInner: {
    height: 200,
    padding: Padding.p_lg,
    justifyContent: "center",
    flexDirection: "row",
  },
  videoSection: {
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_6xs,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  summary: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  advice1: {
    color: Color.orange_100,
    textAlign: "left",
    // fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_base,
  },
  frameItem: {
    borderRadius: Border.br_2xl,
    width: 20,
    height: 3,
    backgroundColor: Color.orange_100,
  },
  adviceParent: {
    justifyContent: "center",
  },
  startedTab: {
    paddingHorizontal: Padding.p_md,
    paddingTop: Padding.p_6xs,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  adviceAssignedBy: {
    fontSize: FontSize.textMediumBoldText_size,
    textAlign: "left",
  },
  dot1: {
    borderRadius: Border.br_3xs,
    height: 8,
    justifyContent: "space-between",
    backgroundColor: Color.orange_100,
    overflow: "hidden",
  },
  dot1Wrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
  },
  loremIpsumIs: {
    lineHeight: 22,
    fontWeight: "300",
    // fontFamily: FontFamily.outfitLight,
    color: Color.darkslategray_100,
    textAlign: "left",
    fontSize: FontSize.size_base,
    flex: 1,
  },
  advice11: {
    width: 324,
    flexDirection: "row",
  },
  advice1Parent: {
    paddingBottom: Padding.p_2xl,
  },
  advice2: {
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  advicecontainer: {
    paddingVertical: Padding.p_sm,
    width: 390,
    paddingHorizontal: Padding.p_lg,
  },
  advicetab: {
    alignSelf: "stretch",
  },
  bottom: {
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_lg,
    width: 390,
    justifyContent: "center",
  },
  videoSectionParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  advice: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default Advice;
