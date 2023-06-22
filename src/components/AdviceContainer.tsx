import * as React from "react";
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

type AdviceContainerType = {
  style?: StyleProp<ViewStyle>;
};

const AdviceContainer = ({ style }: AdviceContainerType) => {
  return (
    <ScrollView
      style={[styles.advicecontainer, style]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.adviceContainerScrollViewContent}
    >
      <LinearGradient
        style={[styles.setYourGoalsToSaveForSomParent, styles.parentFlexBox]}
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
          style={[styles.save5000ForItalyHolidayParent, styles.parentFlexBox]}
        >
          <Text style={styles.save5000For}>Save $5000 for Italy Holiday</Text>
          <View style={styles.status}>
            <Text style={[styles.doing, styles.doingTypo]}>Doing</Text>
          </View>
        </View>
        <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
        <View style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}>
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
          style={[styles.save5000ForItalyHolidayParent, styles.parentFlexBox]}
        >
          <Text style={styles.save5000For}>Save $5000 for Italy Holiday</Text>
          <View style={styles.status}>
            <Text style={[styles.doing, styles.doingTypo]}>Paused</Text>
          </View>
        </View>
        <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
        <View style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}>
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
          style={[styles.save5000ForItalyHolidayParent, styles.parentFlexBox]}
        >
          <Text style={styles.save5000For}>Save $5000 for Italy Holiday</Text>
          <View style={styles.status}>
            <Text style={[styles.doing, styles.doingTypo]}>To Do</Text>
          </View>
        </View>
        <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
        <View style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}>
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
          style={[styles.save5000ForItalyHolidayParent, styles.parentFlexBox]}
        >
          <Text style={styles.save5000For}>Save $5000 for Italy Holiday</Text>
          <View style={styles.status}>
            <Text style={[styles.doing, styles.doingTypo]}>Doing</Text>
          </View>
        </View>
        <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
        <View style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}>
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
          style={[styles.save5000ForItalyHolidayParent, styles.parentFlexBox]}
        >
          <Text style={styles.save5000For}>Save $5000 for Italy Holiday</Text>
          <View style={styles.status}>
            <Text style={[styles.doing, styles.doingTypo]}>Paused</Text>
          </View>
        </View>
        <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
        <View style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}>
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
          style={[styles.save5000ForItalyHolidayParent, styles.parentFlexBox]}
        >
          <Text style={styles.save5000For}>Save $5000 for Italy Holiday</Text>
          <View style={styles.status}>
            <Text style={[styles.doing, styles.doingTypo]}>To Do</Text>
          </View>
        </View>
        <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
        <View style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}>
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
  );
};

const styles = StyleSheet.create({
  adviceContainerScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingBottom: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  setYourGoalsContainer: {
    fontSize: FontSize.textMediumBoldText_size,
    color: Color.white,
    textAlign: "left",
  },
  frameChild: {
    width: 58,
    height: 58,
  },
  setYourGoalsToSaveForSomParent: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(251, 177, 66, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_xs,
    backgroundColor: "transparent",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
    alignSelf: "stretch",
  },
  save5000For: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifProSemibold,
    color: Color.black,
    textAlign: "left",
  },
  doing: {
    color: Color.orange_100,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  status: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.orange_200,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
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
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
  },
  advicecontainer: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default AdviceContainer;
