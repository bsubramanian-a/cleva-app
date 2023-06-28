import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderMenu from "../components/HeaderMenu";
import {
  Margin,
  Border,
  FontSize,
  Color,
  FontFamily,
  Padding,
} from "../GlobalStyles";

const ExerciseEarlyHappyMemory = () => {
  return (
    <ScrollView
      style={[styles.exerciseEarlyHappyMemory, styles.pressableLayout]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.exerciseEarlyHappyMemoryContent}
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
        <HeaderMenu />
      </LinearGradient>
      <ScrollView
        style={styles.videoSectionParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.videoSection}>
          <ImageBackground
            style={[styles.videoSectionInner, styles.excerciseFlexBox]}
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
          <View style={styles.myExercisesParent}>
            <Text style={[styles.myExercises, styles.myExercisesTypo]}>
              My Exercises
            </Text>
            <View style={[styles.frameItem, styles.mt5]} />
          </View>
          <Text style={[styles.summary, styles.ml40, styles.summaryTypo]}>
            Summary
          </Text>
          <Text style={[styles.summary, styles.ml40, styles.summaryTypo]}>
            Inspiration
          </Text>
        </View>
        <View style={styles.myExcercisesWrapper}>
          <View style={styles.myExcercises}>
            <View style={[styles.excercise, styles.excerciseFlexBox]}>
              <View style={styles.heading}>
                <Text style={[styles.myMemory, styles.summaryTypo]}>
                  My Memory
                </Text>
                <Pressable style={[styles.pressable, styles.pressableLayout]}>
                  <LinearGradient
                    style={styles.edit}
                    locations={[0, 1]}
                    colors={["#fbb142", "#f6a326"]}
                    useAngle={true}
                    angle={180}
                  >
                    <Image
                      style={styles.vuesaxlinearedit2Icon}
                      resizeMode="cover"
                      source={require("../assets/vuesaxlinearedit21.png")}
                    />
                  </LinearGradient>
                </Pressable>
              </View>
              <Text
                style={[
                  styles.loremIpsumIs,
                  styles.mt10,
                  styles.myExercisesTypo,
                ]}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Text>
            </View>
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
  mt5: {
    marginTop: Margin.m_7xs,
  },
  ml40: {
    marginLeft: Margin.m_5xl,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  exerciseEarlyHappyMemoryContent: {
    flexDirection: "column",
  },
  pressableLayout: {
    width: "100%",
    overflow: "hidden",
  },
  excerciseFlexBox: {
    borderRadius: Border.br_sm,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  myExercisesTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  summaryTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.outfitRegular,
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
    alignItems: "center",
    flexDirection: "row",
  },
  videoSection: {
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_6xs,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  myExercises: {
    color: Color.orange_100,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
  },
  frameItem: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.orange_100,
    width: 20,
    height: 3,
  },
  myExercisesParent: {
    justifyContent: "center",
  },
  summary: {
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  startedTab: {
    paddingHorizontal: Padding.p_md,
    paddingTop: Padding.p_6xs,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  myMemory: {
    fontSize: FontSize.textMediumBoldText_size,
  },
  vuesaxlinearedit2Icon: {
    width: 16,
    height: 16,
  },
  pressable: {
    borderRadius: 6,
    height: "100%",
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  edit: {
    width: 26,
    height: 26,
  },
  heading: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  loremIpsumIs: {
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: FontFamily.outfitLight,
    color: Color.darkslategray_100,
    width: 318,
  },
  excercise: {
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
    backgroundColor: Color.white1,
  },
  myExcercises: {
    width: 390,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_lg,
  },
  myExcercisesWrapper: {
    alignSelf: "stretch",
  },
  videoSectionParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  exerciseEarlyHappyMemory: {
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
});

export default ExerciseEarlyHappyMemory;
