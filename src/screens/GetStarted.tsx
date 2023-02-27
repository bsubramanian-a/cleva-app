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
  Padding,
  Border,
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const GetStarted = () => {
  return (
    <ScrollView
      style={styles.getStarted}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.getStartedScrollViewContent}
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
          getStarted="Get Started"
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
            style={[styles.videoSectionInner, styles.bottomFlexBox]}
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
          <Text style={styles.summary} />
          <View style={[styles.summary, styles.ml40]} />
          <Text style={[styles.summary, styles.ml40]} />
        </View>
        <View style={styles.excercisesParent}>
          <View style={styles.excercises}>
            <View style={styles.excercise1}>
              <View style={styles.frameParent}>
                <View style={[styles.wrapper, styles.wrapperLayout]}>
                  <Text style={[styles.text, styles.textClr]}>
                    <Text style={styles.text1}>#</Text>
                    <Text style={styles.text2Typo}>1</Text>
                  </Text>
                </View>
                <Text
                  style={[
                    styles.earlyHappyMemory,
                    styles.ml10,
                    styles.text2Typo,
                    styles.textClr,
                  ]}
                >
                  Early Happy Memory
                </Text>
              </View>
              <LinearGradient
                style={styles.vectorWrapper}
                locations={[0, 1]}
                colors={["#fbb142", "#f6a326"]}
                useAngle={true}
                angle={180}
              >
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </LinearGradient>
            </View>
            <View style={[styles.excercise1, styles.mt15]}>
              <View style={styles.frameParent}>
                <View style={[styles.wrapper, styles.wrapperLayout]}>
                  <Text style={[styles.text, styles.textClr]}>
                    <Text style={styles.text1}>#</Text>
                    <Text style={styles.text2Typo}>2</Text>
                  </Text>
                </View>
                <Text
                  style={[
                    styles.earlyHappyMemory,
                    styles.ml10,
                    styles.text2Typo,
                    styles.textClr,
                  ]}
                >
                  Early Happy Memory
                </Text>
              </View>
              <LinearGradient
                style={styles.vectorWrapper}
                locations={[0, 1]}
                colors={["#fbb142", "#f6a326"]}
                useAngle={true}
                angle={180}
              >
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </LinearGradient>
            </View>
            <View style={[styles.excercise1, styles.mt15]}>
              <View style={styles.frameParent}>
                <View style={[styles.wrapper, styles.wrapperLayout]}>
                  <Text style={[styles.text, styles.textClr]}>
                    <Text style={styles.text1}>#</Text>
                    <Text style={styles.text2Typo}>3</Text>
                  </Text>
                </View>
                <Text
                  style={[
                    styles.earlyHappyMemory,
                    styles.ml10,
                    styles.text2Typo,
                    styles.textClr,
                  ]}
                >
                  Making Sense of My Life Story
                </Text>
              </View>
              <LinearGradient
                style={styles.vectorWrapper}
                locations={[0, 1]}
                colors={["#fbb142", "#f6a326"]}
                useAngle={true}
                angle={180}
              >
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </LinearGradient>
            </View>
            <View style={[styles.excercise1, styles.mt15]}>
              <View style={styles.frameParent}>
                <View style={[styles.wrapper, styles.wrapperLayout]}>
                  <Text style={[styles.text, styles.textClr]}>
                    <Text style={styles.text1}>#</Text>
                    <Text style={styles.text2Typo}>4</Text>
                  </Text>
                </View>
                <Text
                  style={[
                    styles.earlyHappyMemory,
                    styles.ml10,
                    styles.text2Typo,
                    styles.textClr,
                  ]}
                >
                  Identifying my not enoughness
                </Text>
              </View>
              <LinearGradient
                style={styles.vectorWrapper}
                locations={[0, 1]}
                colors={["rgba(251, 177, 66, 0.1)", "rgba(246, 163, 38, 0.1)"]}
                useAngle={true}
                angle={180}
              >
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </LinearGradient>
            </View>
            <View style={[styles.excercise5, styles.mt15]}>
              <View style={styles.frameParent}>
                <View style={[styles.wrapper2, styles.wrapperLayout]}>
                  <Text style={[styles.text, styles.textClr]}>
                    <Text style={styles.text1}>#</Text>
                    <Text style={styles.text2Typo}>5</Text>
                  </Text>
                </View>
                <Text
                  style={[
                    styles.earlyHappyMemory,
                    styles.ml10,
                    styles.text2Typo,
                    styles.textClr,
                  ]}
                >
                  Creating My Mojo Mantras
                </Text>
              </View>
              <LinearGradient
                style={styles.vectorWrapper}
                locations={[0, 1]}
                colors={["rgba(251, 177, 66, 0.1)", "rgba(246, 163, 38, 0.1)"]}
                useAngle={true}
                angle={180}
              >
                <Image
                  style={styles.vuesaxboldlockIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxboldlock.png")}
                />
              </LinearGradient>
            </View>
            <View style={[styles.excercise5, styles.mt15]}>
              <View style={styles.frameParent}>
                <View style={[styles.wrapper2, styles.wrapperLayout]}>
                  <Text style={[styles.text, styles.textClr]}>
                    <Text style={styles.text1}>#</Text>
                    <Text style={styles.text2Typo}>6</Text>
                  </Text>
                </View>
                <Text
                  style={[
                    styles.earlyHappyMemory,
                    styles.ml10,
                    styles.text2Typo,
                    styles.textClr,
                  ]}
                >
                  My Mojo Mantra
                </Text>
              </View>
              <LinearGradient
                style={styles.vectorWrapper}
                locations={[0, 1]}
                colors={["rgba(251, 177, 66, 0.1)", "rgba(246, 163, 38, 0.1)"]}
                useAngle={true}
                angle={180}
              >
                <Image
                  style={styles.vuesaxboldlockIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxboldlock.png")}
                />
              </LinearGradient>
            </View>
          </View>
          <LinearGradient
            style={[styles.bottom, styles.mt_70, styles.bottomFlexBox]}
            locations={[0, 1]}
            colors={["rgba(255, 255, 255, 0)", "rgba(239, 159, 39, 0.09)"]}
            useAngle={true}
            angle={180}
          >
            <EditBtn
              pressablePaddingHorizontal={57}
              pressablePaddingVertical={12}
              edit="Continue"
              editFontSize={16}
            />
          </LinearGradient>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_12: {
    marginTop: Margin.m_10xs,
  },
  ml40: {
    marginLeft: Margin.m_5xl,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt15: {
    marginTop: Margin.m_md,
  },
  mt_70: {
    marginTop: -70,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  getStartedScrollViewContent: {
    flexDirection: "column",
  },
  bottomFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  wrapperLayout: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_4xs,
    height: 40,
    width: 40,
    borderRadius: Border.br_2xs,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  textClr: {
    color: Color.black,
    fontSize: FontSize.textMediumBoldText_size,
  },
  text2Typo: {
    fontFamily: FontFamily.sourceSerifProSemibold,
    fontWeight: "600",
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
    height: 15,
    width: 14,
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
    flexDirection: "row",
    borderRadius: Border.br_sm,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  videoSection: {
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_6xs,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  summary: {
    display: "none",
  },
  startedTab: {
    paddingHorizontal: Padding.p_md,
    paddingTop: Padding.p_6xs,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text1: {
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.sourceSerifProLightItalic,
  },
  text: {
    textAlign: "center",
  },
  wrapper: {
    backgroundColor: Color.floralwhite,
    borderColor: "#ffeccf",
  },
  earlyHappyMemory: {
    lineHeight: 24,
    textAlign: "left",
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    height: 10,
    width: 15,
  },
  vectorWrapper: {
    width: 26,
    height: 26,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_sm,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  excercise1: {
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    justifyContent: "space-between",
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_sm,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  groupIcon: {
    height: 16,
    width: 15,
  },
  wrapper2: {
    borderColor: "#fff",
    backgroundColor: Color.white1,
  },
  vuesaxboldlockIcon: {
    height: 14,
    width: 14,
  },
  excercise5: {
    backgroundColor: Color.whitesmoke_200,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "space-between",
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_sm,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  excercises: {
    paddingVertical: Padding.p_sm,
    width: 390,
    paddingHorizontal: Padding.p_lg,
  },
  bottom: {
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_lg,
    width: 390,
    backgroundColor: "transparent",
  },
  excercisesParent: {
    alignSelf: "stretch",
  },
  videoSectionParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  getStarted: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
});

export default GetStarted;
