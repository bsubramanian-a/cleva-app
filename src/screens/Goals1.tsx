import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AdviceContainer from "../components/AdviceContainer";
import Tab11 from "../components/Tab11";
import Tab2 from "../components/Tab2";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const Goals1 = () => {
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
              tabBar={({ state, descriptors, navigation, position }) => {
                const [activeItems] = React.useState([<Tab11 />]);
                const [normalItems] = React.useState([<Tab2 />]);
                const activeIndex = state.index;
                return (
                  <View style={styles.topTabBarStyle}>
                    {normalItems.map((item, index) => {
                      const isFocused = state.index === index;
                      return (
                        <TouchableOpacity
                          key={index}
                          style={{ flex: 1 }}
                          onPress={() => {
                            navigation.navigate({
                              name: state.routes[index].name,
                              merge: true,
                            });
                          }}
                        >
                          {activeIndex === index ? activeItems[index] : item}
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                );
              }}
            >
              <TopTab.Screen
                name="AdviceContainer"
                component={AdviceContainer}
              />
            </TopTab.Navigator>
          </View>
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
  topTabBarStyle: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    overflow: "hidden",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 54,
    zIndex: 1,
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
    fontFamily: FontFamily.sourceSerifProSemibold,
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
  goalsInner: {
    alignSelf: "stretch",
    flex: 1,
  },
  goals: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Goals1;
