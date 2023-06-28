import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";
import actions from "../../actions";

const AddANewGoalGoalType = () => {
  return (
    <ScrollView
      style={[styles.addANewGoalGoalType, styles.goalBg]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.addANewGoalGoalTypeContent}
    >
      <CustomHeader name="Property Goal" type={2} />

      <ScrollView
        style={styles.advicecontainerWrapper}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.advicecontainer, styles.topMenuSpaceBlock]}>
          <View style={styles.advice}>
            <View style={styles.selectGoalTypeParent}>
              <Text style={[styles.selectGoalType, styles.frameChildTypo]}>
                Select Goal Type
              </Text>
              <View style={styles.frameParent}>
                <View style={styles.frameGroup}>
                  <View style={styles.goalType1Wrapper}>
                    <Text style={[styles.goalType1, styles.goalTypo]}>
                      Goal Type 1
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.goalType2Wrapper,
                      styles.goalWrapperShadowBox,
                    ]}
                  >
                    <Text style={[styles.goalType1, styles.goalTypo]}>
                      Goal Type 2
                    </Text>
                  </View>
                  <View
                    style={[styles.goalType3Wrapper, styles.frameChildFlexBox]}
                  >
                    <Text style={[styles.goalType3, styles.goalTypo]}>
                      Goal Type 3
                    </Text>
                  </View>
                </View>
                <View style={styles.frameContainer}>
                  <View style={styles.gpsParent}>
                    <Image
                      style={styles.gpsIcon}
                      resizeMode="cover"
                      source={require("../assets/gps.png")}
                    />
                    <Text style={styles.giveYourGoal}>
                      Give your goal a name
                    </Text>
                  </View>
                  <TextInput
                    style={[styles.frameChild, styles.frameChildFlexBox]}
                    placeholder="Beach Pad"
                    placeholderTextColor="#bfbfbf"
                    onChangeText={(value) => actions.updateAddGoals({ title: value })}
                  />
                </View>
              </View>
            </View>
            <Pressable style={[styles.pressable, styles.menuFlexBox]}>
              <LinearGradient
                style={styles.editBtn}
                locations={[0, 1]}
                colors={["#fbb142", "#f6a326"]}
                useAngle={true}
                angle={180}
              >
                <Text style={styles.next}>Next</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addANewGoalGoalTypeContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  goalBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  topMenuSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  menuFlexBox: {
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChildTypo: {
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
  },
  goalTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "600",
  },
  goalWrapperShadowBox: {
    marginTop: 15,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mini,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.08)",
    borderRadius: Border.br_base,
    justifyContent: "center",
  },
  frameChildFlexBox: {
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  mainvector1Icon: {
    width: 164,
    height: 63,
    overflow: "hidden",
  },
  vuesaxlineararrowLeftIcon: {
    width: 22,
    height: 22,
  },
  menu: {
    backgroundColor: Color.snow,
    padding: Padding.p_4xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  propertyGoal: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "600",
  },
  pageHeading: {
    marginLeft: 66,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  topMenu: {
    paddingBottom: Padding.p_17xl,
    marginTop: -12,
    alignItems: "center",
    flexDirection: "row",
  },
  header: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  selectGoalType: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.black,
  },
  goalType1: {
    color: Color.black,
  },
  goalType1Wrapper: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mini,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.08)",
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  goalType2Wrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  goalType3: {
    color: Color.goldenrod_100,
  },
  goalType3Wrapper: {
    borderColor: "#fbb142",
    marginTop: 15,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mini,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.08)",
    borderRadius: Border.br_base,
    justifyContent: "center",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  gpsIcon: {
    width: 16,
    height: 16,
  },
  giveYourGoal: {
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: FontFamily.outfitLight,
    color: Color.darkslategray_100,
    textAlign: "left",
    marginLeft: 3,
    fontSize: FontSize.size_sm,
  },
  gpsParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: Border.br_xs,
    borderColor: "#dedede",
    paddingVertical: Padding.p_smi,
    marginTop: 4,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    paddingHorizontal: Padding.p_2xl,
  },
  frameContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 60,
    alignItems: "center",
    alignSelf: "stretch",
  },
  selectGoalTypeParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  next: {
    fontSize: FontSize.textMediumBoldText_size,
    lineHeight: 20,
    fontFamily: FontFamily.outfitSemibold,
    color: Color.white,
    textAlign: "center",
    fontWeight: "600",
  },
  pressable: {
    height: "100%",
    paddingHorizontal: Padding.p_53xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  editBtn: {
    height: 44,
    marginTop: 210,
  },
  advice: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_2xl,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.08)",
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  advicecontainer: {
    paddingBottom: Padding.p_base,
  },
  advicecontainerWrapper: {
    alignSelf: "stretch",
    flex: 1,
  },
  addANewGoalGoalType: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default AddANewGoalGoalType;
