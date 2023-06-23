import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";

const AddANewGoalGoalSummary = ({navigation}:any) => {
  return (
    <View
      style={[styles.addANewGoalGoalSummary, styles.goalLayout]}
    >
      <CustomHeader name="Property Goal" type={2}/>
      
      <ScrollView
        style={styles.advicecontainerWrapper}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.advicecontainer, styles.topMenuSpaceBlock]}>
          <View style={[styles.advice, styles.menuFlexBox]}>
            <View style={styles.selectGoalTypeParent}>
              <Text style={styles.selectGoalType}>
                Here's A Summary
              </Text>
              <View style={styles.frameParent}>
                <View style={styles.groupWrapper}>
                  <Image
                    style={[styles.frameChild, styles.goalLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-1171275104.png")}
                  />
                </View>
                <Text
                  style={[
                    styles.toAchieveYourContainer,
                    styles.addAnotherPropertyTypo,
                  ]}
                >
                  <Text style={styles.toAchieveYour}>
                    To achieve your goal of
                  </Text>
                  <Text style={styles.textTypo}> $2000</Text>
                  <Text style={styles.toAchieveYour}>{` by `}</Text>
                  <Text style={styles.textTypo}>12/20/2021</Text>
                  <Text
                    style={styles.toAchieveYour}
                  >{` you need to pay off per `}</Text>
                  <Text style={styles.textTypo}>week</Text>
                </Text>
              </View>
            </View>
            <LinearGradient
              style={[styles.bottom, styles.bottomFlexBox]}
              locations={[0, 1]}
              colors={["#fbb142", "#f6a326"]}
              useAngle={true}
              angle={180}
            >
              <Pressable style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate('Goals')}>
                <Text style={[styles.edit, styles.ml4]}>Add Another Property Goal</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    // width: 180,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignSelf: 'center',
    borderRadius: 60,
    marginVertical: 28
  },
  bottomFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  ml4: {
    marginLeft: 4,
  },
  edit: {
      fontSize: FontSize.textMediumBoldText1_size,
      lineHeight: 20,
      fontWeight: "600",
      fontFamily: FontFamily.openSansRegular,
      color: Color.white1,
      textAlign: "center",
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addANewGoalGoalSummaryContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  goalLayout: {
    maxWidth: "100%",
    width: "100%",
    overflow: "hidden",
  },
  topMenuSpaceBlock: {
    paddingHorizontal: 35,
    alignSelf: "center",
  },
  menuFlexBox: {
    // justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.outfitMedium,
    fontSize: 16,
    fontWeight: "500",
    color: Color.black,
  },
  addAnotherPropertyTypo: {
    fontSize: FontSize.textMediumBoldText_size,
    textAlign: "center",
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
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    overflow: "hidden",
  },
  propertyGoal: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.sourceSerifProSemibold,
    textAlign: "center",
    color: Color.black,
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
    fontSize: 16,
    fontWeight: "500",
    color: Color.black,
  },
  frameChild: {
    height: 290,
    alignSelf: "stretch",
  },
  groupWrapper: {
    alignSelf: "stretch",
  },
  toAchieveYour: {
    fontWeight: "300",
    fontSize: 16,
    fontFamily: FontFamily.outfitLight,
    color: Color.darkslategray_100,
  },
  toAchieveYourContainer: {
    lineHeight: 28,
    // width: 239,
    marginTop: 30,
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
  addAnotherProperty: {
    lineHeight: 20,
    fontFamily: FontFamily.outfitSemibold,
    color: Color.white,
    fontWeight: "600",
    fontSize: FontSize.textMediumBoldText_size,
  },
  pressable: {
    height: "100%",
    paddingHorizontal: 35,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  editBtn: {
    height: 44,
    marginTop: 116,
  },
  advice: {
    borderRadius: Border.br_base,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: 35,
    // alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: Dimensions.get('window').height - 165
  },
  advicecontainer: {
    paddingBottom: Padding.p_base,
  },
  advicecontainerWrapper: {
    alignSelf: "stretch",
    flex: 1,
  },
  addANewGoalGoalSummary: {
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default AddANewGoalGoalSummary;
