import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AdviceContainer from "../components/AdviceContainer";
import Tab11 from "../components/Tab11";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const Goalsn = () => {
  return (
    <ScrollView
      style={styles.goals}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.goalsScrollViewContent}
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
        <View style={[styles.topMenu, styles.topMenuFlexBox]}>
          <View style={styles.menu}>
            <View style={styles.rectangleParent}>
              <View style={[styles.groupChild, styles.groupLayout]} />
              <View style={[styles.groupItem, styles.groupLayout]} />
              <View style={[styles.groupInner, styles.groupLayout]} />
            </View>
          </View>
          <View style={[styles.pageHeading, styles.topMenuFlexBox]}>
            <Text style={[styles.goals1, styles.goals1Typo]}>Goals</Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView
        style={styles.goalsInner}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <ScrollView
          style={styles.goalsInner}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.frameScrollView1Content}
        >
          <View style={styles.wealthTab}>
            <TopTab.Navigator
              style={styles.tabbarToptabs}
              screenOptions={{
                tabBarStyle: styles.tabbarTopTabstopTabBarContainer,
              }}
            >
              <TopTab.Screen
                name="AdviceContainer"
                component={AdviceContainer}
                options={{
                  tabBarIcon: () => <Tab11 />,
                }}
              />
            </TopTab.Navigator>
          </View>
          <ScrollView
            style={styles.goalsInner}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.adviceContainerScrollViewContent}
          >
            <LinearGradient
              style={[
                styles.setYourGoalsToSaveForSomParent,
                styles.parentFlexBox,
              ]}
              locations={[0, 1]}
              colors={["#fbb142", "#f6a326"]}
              useAngle={true}
              angle={180}
            >
              <Text style={[styles.setYourGoalsContainer, styles.doingTypo]}>
                Set your goals to save for somethingimportant and/or exciting
              </Text>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/frame-562.png")}
              />
            </LinearGradient>
            <View style={styles.frameParentShadowBox}>
              <View
                style={[
                  styles.save5000ForItalyHolidayParent,
                  styles.parentFlexBox,
                ]}
              >
                <Text style={[styles.save5000For, styles.goals1Typo]}>
                  Save $5000 for Italy Holiday
                </Text>
                <View style={styles.status}>
                  <Text style={[styles.doing, styles.doingTypo]}>Doing</Text>
                </View>
              </View>
              <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
              <View
                style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}
              >
                <Text style={styles.goalOwnerDrContainer}>
                  <Text style={styles.goalOwner}>
                    <Text style={styles.goalOwner1}>Goal Owner:</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.dr1}>DR</Text>
                  </Text>
                </Text>
                <View style={styles.dueDate762023Parent}>
                  <Text style={styles.goalOwnerDrContainer}>
                    <Text style={styles.goalOwner}>
                      <Text style={styles.goalOwner1}>Due Date:</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                    <Text style={styles.text}>
                      <Text style={styles.dr1}>7/6/2023</Text>
                    </Text>
                  </Text>
                  <Image
                    style={styles.vuesaxlinearactivityIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearactivity.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParentShadowBox}>
              <View
                style={[
                  styles.save5000ForItalyHolidayParent,
                  styles.parentFlexBox,
                ]}
              >
                <Text style={[styles.save5000For, styles.goals1Typo]}>
                  Save $5000 for Italy Holiday
                </Text>
                <View style={styles.status}>
                  <Text style={[styles.doing, styles.doingTypo]}>Paused</Text>
                </View>
              </View>
              <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
              <View
                style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}
              >
                <Text style={styles.goalOwnerDrContainer}>
                  <Text style={styles.goalOwner}>
                    <Text style={styles.goalOwner1}>Goal Owner:</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.dr1}>DR</Text>
                  </Text>
                </Text>
                <View style={styles.dueDate762023Parent}>
                  <Text style={styles.goalOwnerDrContainer}>
                    <Text style={styles.goalOwner}>
                      <Text style={styles.goalOwner1}>Due Date:</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                    <Text style={styles.text}>
                      <Text style={styles.dr1}>7/6/2023</Text>
                    </Text>
                  </Text>
                  <Image
                    style={styles.vuesaxlinearactivityIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearactivity.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParentShadowBox}>
              <View
                style={[
                  styles.save5000ForItalyHolidayParent,
                  styles.parentFlexBox,
                ]}
              >
                <Text style={[styles.save5000For, styles.goals1Typo]}>
                  Save $5000 for Italy Holiday
                </Text>
                <View style={styles.status}>
                  <Text style={[styles.doing, styles.doingTypo]}>To Do</Text>
                </View>
              </View>
              <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
              <View
                style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}
              >
                <Text style={styles.goalOwnerDrContainer}>
                  <Text style={styles.goalOwner}>
                    <Text style={styles.goalOwner1}>Goal Owner:</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.dr1}>DR</Text>
                  </Text>
                </Text>
                <View style={styles.dueDate762023Parent}>
                  <Text style={styles.goalOwnerDrContainer}>
                    <Text style={styles.goalOwner}>
                      <Text style={styles.goalOwner1}>Due Date:</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                    <Text style={styles.text}>
                      <Text style={styles.dr1}>7/6/2023</Text>
                    </Text>
                  </Text>
                  <Image
                    style={styles.vuesaxlinearactivityIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearactivity.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParentShadowBox}>
              <View
                style={[
                  styles.save5000ForItalyHolidayParent,
                  styles.parentFlexBox,
                ]}
              >
                <Text style={[styles.save5000For, styles.goals1Typo]}>
                  Save $5000 for Italy Holiday
                </Text>
                <View style={styles.status}>
                  <Text style={[styles.doing, styles.doingTypo]}>Doing</Text>
                </View>
              </View>
              <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
              <View
                style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}
              >
                <Text style={styles.goalOwnerDrContainer}>
                  <Text style={styles.goalOwner}>
                    <Text style={styles.goalOwner1}>Goal Owner:</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.dr1}>DR</Text>
                  </Text>
                </Text>
                <View style={styles.dueDate762023Parent}>
                  <Text style={styles.goalOwnerDrContainer}>
                    <Text style={styles.goalOwner}>
                      <Text style={styles.goalOwner1}>Due Date:</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                    <Text style={styles.text}>
                      <Text style={styles.dr1}>7/6/2023</Text>
                    </Text>
                  </Text>
                  <Image
                    style={styles.vuesaxlinearactivityIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearactivity.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParentShadowBox}>
              <View
                style={[
                  styles.save5000ForItalyHolidayParent,
                  styles.parentFlexBox,
                ]}
              >
                <Text style={[styles.save5000For, styles.goals1Typo]}>
                  Save $5000 for Italy Holiday
                </Text>
                <View style={styles.status}>
                  <Text style={[styles.doing, styles.doingTypo]}>Paused</Text>
                </View>
              </View>
              <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
              <View
                style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}
              >
                <Text style={styles.goalOwnerDrContainer}>
                  <Text style={styles.goalOwner}>
                    <Text style={styles.goalOwner1}>Goal Owner:</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.dr1}>DR</Text>
                  </Text>
                </Text>
                <View style={styles.dueDate762023Parent}>
                  <Text style={styles.goalOwnerDrContainer}>
                    <Text style={styles.goalOwner}>
                      <Text style={styles.goalOwner1}>Due Date:</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                    <Text style={styles.text}>
                      <Text style={styles.dr1}>7/6/2023</Text>
                    </Text>
                  </Text>
                  <Image
                    style={styles.vuesaxlinearactivityIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearactivity.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParentShadowBox}>
              <View
                style={[
                  styles.save5000ForItalyHolidayParent,
                  styles.parentFlexBox,
                ]}
              >
                <Text style={[styles.save5000For, styles.goals1Typo]}>
                  Save $5000 for Italy Holiday
                </Text>
                <View style={styles.status}>
                  <Text style={[styles.doing, styles.doingTypo]}>To Do</Text>
                </View>
              </View>
              <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
              <View
                style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}
              >
                <Text style={styles.goalOwnerDrContainer}>
                  <Text style={styles.goalOwner}>
                    <Text style={styles.goalOwner1}>Goal Owner:</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.dr1}>DR</Text>
                  </Text>
                </Text>
                <View style={styles.dueDate762023Parent}>
                  <Text style={styles.goalOwnerDrContainer}>
                    <Text style={styles.goalOwner}>
                      <Text style={styles.goalOwner1}>Due Date:</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                    <Text style={styles.text}>
                      <Text style={styles.dr1}>7/6/2023</Text>
                    </Text>
                  </Text>
                  <Image
                    style={styles.vuesaxlinearactivityIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearactivity.png")}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabbarToptabs: {
    width: "100%",
    height: 764,
  },
  tabbarTopTabstopTabBarContainer: {
    backgroundColor: "#fff",
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
  },
  adviceContainerScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingBottom: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView1Content: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  goalsScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topMenuFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_41xl,
    left: 0,
    position: "absolute",
  },
  goals1Typo: {
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "600",
    color: Color.black,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  doingTypo: {
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
  },
  frameItemSpaceBlock: {
    marginTop: 9,
    alignSelf: "stretch",
  },
  mainvector1Icon: {
    width: 164,
    height: 63,
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
    width: 18,
  },
  groupItem: {
    top: 5,
    width: 18,
  },
  groupInner: {
    top: 10,
    width: 12,
  },
  rectangleParent: {
    height: 12,
    width: 18,
  },
  menu: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.snow,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  goals1: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.black,
  },
  pageHeading: {
    marginLeft: 100,
    flex: 1,
  },
  topMenu: {
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_17xl,
    marginTop: -12,
    alignSelf: "stretch",
  },
  mainvector1Parent: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  wealthTab: {
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_mini,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  setYourGoalsContainer: {
    fontSize: FontSize.textMediumBoldText1_size,
    color: Color.white1,
    textAlign: "left",
  },
  frameChild: {
    width: 58,
    height: 58,
  },
  setYourGoalsToSaveForSomParent: {
    borderRadius: Border.br_md,
    shadowColor: "rgba(251, 177, 66, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    paddingLeft: Padding.p_2xs,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_2xs,
    paddingBottom: Padding.p_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: "space-between",
    backgroundColor: "transparent",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  save5000For: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
  },
  doing: {
    color: Color.orange_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  status: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.orange_200,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_2xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  save5000ForItalyHolidayParent: {
    alignSelf: "stretch",
  },
  frameItem: {
    borderStyle: "solid",
    borderColor: "#dedede",
    borderTopWidth: 1,
    height: 1,
  },
  goalOwner1: {
    fontWeight: "300",
    fontFamily: FontFamily.outfitLight,
  },
  text: {
    fontFamily: FontFamily.outfitRegular,
  },
  goalOwner: {
    color: Color.darkslategray_100,
  },
  dr1: {
    color: Color.black,
  },
  goalOwnerDrContainer: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  vuesaxlinearactivityIcon: {
    width: 20,
    height: 20,
    marginLeft: 19,
  },
  dueDate762023Parent: {
    flexDirection: "row",
  },
  goalOwnerDrParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParentShadowBox: {
    marginTop: 15,
    paddingVertical: Padding.p_2xs,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_2xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  goalsInner: {
    alignSelf: "stretch",
    flex: 1,
  },
  goals: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
});

export default Goalsn;
