import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const GoalsEditGoalsPopup = () => {
  return (
    <View style={styles.goalsEditGoalsPopup}>
      <View style={[styles.groupParent, styles.groupParentShadowBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-1171275096.png")}
        />
        <View style={styles.save20000ForNewCarParent}>
          <Text style={styles.save20000For}>Save $20000 for New Car</Text>
          <Text style={[styles.save200Per, styles.save200PerTypo]}>
            Save $200 per fortnight untill sept 2028. Make it easier to hit your
            goal by automatically deducting an amount from your income using
            direct debit.
          </Text>
        </View>
        <View style={styles.nSeeveeLaneBParent}>
          <Text style={styles.nSeeveeLane}>Status</Text>
          <View style={[styles.frameParent, styles.frameSpaceBlock]}>
            <View style={[styles.toDoWrapper, styles.wrapperShadowBox1]}>
              <Text style={[styles.toDo, styles.toDoTypo]}>To Do</Text>
            </View>
            <View style={[styles.doingWrapper, styles.wrapperBorder]}>
              <Text style={[styles.doing, styles.toDoTypo]}>Doing</Text>
            </View>
            <View style={[styles.pausedWrapper, styles.wrapperShadowBox1]}>
              <Text style={[styles.toDo, styles.toDoTypo]}>Paused</Text>
            </View>
          </View>
        </View>
        <View style={styles.nSeeveeLaneBParent}>
          <Text style={styles.nSeeveeLane}>Goal Owner</Text>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={[styles.drWrapper, styles.wrapperBorder]}>
                <Text style={[styles.doing, styles.toDoTypo]}>DR</Text>
              </View>
              <View style={[styles.frWrapper, styles.wrapperShadowBox1]}>
                <Text style={[styles.toDo, styles.toDoTypo]}>FR</Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={[styles.jointWrapper, styles.wrapperShadowBox1]}>
                <Text style={[styles.toDo, styles.toDoTypo]}>Joint</Text>
              </View>
              <View style={[styles.clevaWrapper, styles.wrapperShadowBox1]}>
                <Text style={[styles.toDo, styles.toDoTypo]}>Cleva</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.nSeeveeLaneBContainer}>
          <Text style={styles.nSeeveeLane}>Due Date</Text>
          <View style={styles.frameParent1}>
            <View style={styles.vuesaxlinearcalendarParent}>
              <Image
                style={styles.vuesaxlinearcalendarIcon}
                resizeMode="cover"
                source={require("../assets/vuesaxlinearcalendar.png")}
              />
              <Text style={[styles.selectDate, styles.textTypo]}>
                Select Date
              </Text>
            </View>
            <View style={[styles.parent, styles.wrapperBorder]}>
              <Text style={[styles.text, styles.textTypo]}>7/6/2023</Text>
              <LinearGradient
                style={[
                  styles.vuesaxlinearcalendarWrapper,
                  styles.groupParentShadowBox,
                ]}
                locations={[0, 1]}
                colors={["#fbb142", "#f6a326"]}
                useAngle={true}
                angle={180}
              >
                <Image
                  style={styles.vuesaxlinearcalendarIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearcalendar1.png")}
                />
              </LinearGradient>
            </View>
          </View>
        </View>
        <Pressable style={styles.pressable}>
          <LinearGradient
            style={styles.editBtn}
            locations={[0, 1]}
            colors={["#fbb142", "#f6a326"]}
            useAngle={true}
            angle={180}
          >
            <Text style={styles.save}>Save</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
  },
  save200PerTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontWeight: "300",
  },
  frameSpaceBlock: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  wrapperShadowBox1: {
    paddingVertical: Padding.p_sm,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(36, 41, 41, 0.1)",
    borderRadius: Border.br_md,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white1,
    flexDirection: "row",
    overflow: "hidden",
  },
  toDoTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_md,
    backgroundColor: Color.white1,
    flexDirection: "row",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  frameChild: {
    width: 83,
    height: 92,
  },
  save20000For: {
    marginLeft: -117,
    top: 0,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    left: "50%",
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
  },
  save200Per: {
    marginLeft: -152,
    top: 37,
    width: 304,
    lineHeight: 20,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  save20000ForNewCarParent: {
    height: 97,
    marginTop: 30,
    alignSelf: "stretch",
  },
  nSeeveeLane: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.gray_800,
    textAlign: "left",
    fontWeight: "600",
  },
  toDo: {
    color: Color.black,
  },
  toDoWrapper: {
    paddingHorizontal: 29,
  },
  doing: {
    color: Color.orange_100,
  },
  doingWrapper: {
    paddingHorizontal: Padding.p_9xl,
    borderColor: "#ef9f27",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_sm,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(36, 41, 41, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  pausedWrapper: {
    paddingHorizontal: 24,
  },
  frameParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  nSeeveeLaneBParent: {
    marginTop: 30,
    alignSelf: "stretch",
  },
  drWrapper: {
    paddingHorizontal: 64,
    justifyContent: "center",
    borderColor: "#ef9f27",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_sm,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(36, 41, 41, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
  },
  frWrapper: {
    paddingHorizontal: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  jointWrapper: {
    paddingHorizontal: 58,
    justifyContent: "center",
    alignItems: "center",
  },
  clevaWrapper: {
    paddingHorizontal: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  frameView: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameGroup: {
    justifyContent: "center",
  },
  vuesaxlinearcalendarIcon: {
    width: 16,
    height: 16,
  },
  selectDate: {
    marginLeft: 4,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontWeight: "300",
  },
  vuesaxlinearcalendarParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: Color.black,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    lineHeight: 22,
  },
  vuesaxlinearcalendarWrapper: {
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(251, 177, 66, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    padding: Padding.p_6xs,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  parent: {
    borderColor: "#dedede",
    width: 310,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_6xs,
    paddingRight: Padding.p_6xs,
    paddingBottom: Padding.p_6xs,
    marginTop: 7,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent1: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  nSeeveeLaneBContainer: {
    marginTop: 30,
  },
  save: {
    fontSize: FontSize.textMediumBoldText1_size,
    fontFamily: FontFamily.outfitSemibold,
    color: Color.white1,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "center",
  },
  pressable: {
    borderRadius: Border.br_11xl,
    height: "100%",
    paddingHorizontal: Padding.p_53xl,
    paddingVertical: Padding.p_xs,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  editBtn: {
    height: 44,
    marginTop: 30,
  },
  groupParent: {
    borderRadius: Border.br_base,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowRadius: 40,
    elevation: 40,
    paddingVertical: Padding.p_9xl,
    alignItems: "flex-end",
    backgroundColor: Color.white1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    paddingHorizontal: Padding.p_xl,
  },
  goalsEditGoalsPopup: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    flex: 1,
    width: "100%",
    paddingVertical: 81,
    paddingHorizontal: Padding.p_xl,
    overflow: "hidden",
    flexDirection: "row",
  },
});

export default GoalsEditGoalsPopup;
