import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopHeader from "../components/TopHeader";
import HeroSection from "../components/HeroSection";
import EditBtn from "../components/EditBtn";
import AssumptionBtn from "../components/AssumptionBtn";
import EventCard from "../components/EventCard";
import RecommededCard from "../components/RecommededCard";
import {
  Margin,
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const Home = () => {
  return (
    <ScrollView
      style={styles.home}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.homeScrollViewContent}
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
        <TopHeader logo={require("../assets/logo1.png")} />
      </LinearGradient>
      <ScrollView
        style={styles.herosectionParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <HeroSection />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View style={styles.wealthParent}>
                <Text style={styles.wealth}>Wealth</Text>
                <View style={[styles.frameChild, styles.mt5]} />
              </View>
              <Text style={[styles.accounts, styles.ml51, styles.seeAllTypo]}>
                Accounts
              </Text>
              <Text style={[styles.accounts, styles.ml51, styles.seeAllTypo]}>
                SOP
              </Text>
            </View>
            <View
              style={[styles.frameView, styles.mt30, styles.frameSpaceBlock]}
            >
              <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                <View style={styles.frameItemLayout}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-1000004305.png")}
                  />
                  <View style={styles.netWorthParent}>
                    <Text style={[styles.netWorth, styles.netWorthClr]}>
                      Net Worth
                    </Text>
                    <Text style={[styles.text, styles.mt5, styles.textClr]}>
                      <Text style={styles.text1}>$</Text>
                      <Text style={styles.text2}>64,058</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.wealthParent}>
                  <View style={styles.rectangleParent}>
                    <View
                      style={[styles.frameInner, styles.frameInnerLayout]}
                    />
                    <View style={[styles.wealthParent, styles.ml8]}>
                      <Text style={[styles.netWorthClr, styles.seeAllTypo]}>
                        Total assests
                      </Text>
                      <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                        <Text style={styles.text1}>$</Text>
                        <Text style={styles.text2}>90.058</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.rectangleParent, styles.mt26]}>
                    <View
                      style={[styles.rectangleView, styles.frameInnerLayout]}
                    />
                    <View style={[styles.wealthParent, styles.ml8]}>
                      <Text style={styles.seeAllTypo}>Total Liabilities</Text>
                      <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                        <Text style={styles.text1}>$</Text>
                        <Text style={styles.text2}>26,000</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.editBtnParent, styles.mt28]}>
                <EditBtn edit="Edit" />
                <AssumptionBtn />
              </View>
            </View>
          </View>
          <View style={[styles.frameParent3, styles.mt20]}>
            <View style={styles.frameWrapper}>
              <View style={[styles.eventsParent, styles.eventsParentFlexBox]}>
                <Text style={styles.events}>Events</Text>
                <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
              </View>
            </View>
            <ScrollView
              style={[styles.event1Parent, styles.mt9]}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.frameScrollView1Content}
            >
              <EventCard
                frame510={require("../assets/frame-5102.png")}
                prop="14"
                pM="7:30 PM"
                vuesaxlinearclock={require("../assets/vuesaxlinearclock.png")}
              />
              <EventCard
                event1MarginLeft={14}
                frame510={require("../assets/frame5101.png")}
                prop="15"
                pM="7:00 PM"
                vuesaxlinearclock={require("../assets/vuesaxlinearclock.png")}
              />
              <EventCard
                event1MarginLeft={14}
                frame510={require("../assets/frame-5104.png")}
                prop="15"
                pM="7:00 PM"
                vuesaxlinearclock={require("../assets/vuesaxlinearclock2.png")}
              />
            </ScrollView>
          </View>
          <View style={[styles.frameParent3, styles.mt20]}>
            <View style={styles.frameWrapper}>
              <View style={styles.eventsParentFlexBox}>
                <Text style={styles.events}>Recommended For You</Text>
              </View>
            </View>
            <ScrollView
              style={[styles.event1Parent, styles.mt9]}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.frameScrollView2Content}
            >
              <RecommededCard
                frame510={require("../assets/frame-5108.png")}
                vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright.png")}
              />
              <RecommededCard
                recommeded1MarginLeft={14}
                frame510={require("../assets/frame-5109.png")}
                vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright2.png")}
              />
            </ScrollView>
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
  ml51: {
    marginLeft: Margin.m_7xl,
  },
  mt7: {
    marginTop: Margin.m_5xs,
  },
  ml8: {
    marginLeft: Margin.m_4xs,
  },
  mt26: {
    marginTop: Margin.m_2xl,
  },
  mt28: {
    marginTop: 28,
  },
  mt30: {
    marginTop: 30,
  },
  ml14: {
    marginLeft: Margin.m_sm,
  },
  frameScrollView1Content: {
    flexDirection: "row",
  },
  mt9: {
    marginTop: Margin.m_3xs,
  },
  frameScrollView2Content: {
    flexDirection: "row",
  },
  mt20: {
    marginTop: Margin.m_lg,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  homeScrollViewContent: {
    flexDirection: "column",
  },
  frameSpaceBlock: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  seeAllTypo: {
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_base,
  },
  frameItemLayout: {
    height: 130,
    width: 130,
  },
  netWorthClr: {
    color: Color.darkslategray_100,
    textAlign: "left",
  },
  textClr: {
    color: Color.gray_500,
    textAlign: "left",
  },
  frameInnerLayout: {
    height: 40,
    width: 3,
    borderRadius: Border.br_2xl,
  },
  eventsParentFlexBox: {
    width: 350,
    alignItems: "center",
    flexDirection: "row",
  },
  mainvector1Icon: {
    width: 164,
    height: 63,
    overflow: "hidden",
  },
  mainvector1Parent: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  wealth: {
    fontWeight: "500",
    fontFamily: FontFamily.outfitMedium,
    textAlign: "left",
    color: Color.orange_100,
    fontSize: FontSize.size_base,
  },
  frameChild: {
    backgroundColor: Color.orange_100,
    width: 20,
    height: 3,
    borderRadius: Border.br_2xl,
  },
  wealthParent: {
    justifyContent: "center",
  },
  accounts: {
    color: Color.gray_100,
    textAlign: "left",
  },
  frameContainer: {
    borderColor: "#f3f1ee",
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_md,
    flexDirection: "row",
    borderStyle: "solid",
    overflow: "hidden",
  },
  frameItem: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  netWorth: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
  },
  text1: {
    fontStyle: "italic",
    fontFamily: FontFamily.sourceSerifProBoldItalic,
    fontWeight: "700",
  },
  text2: {
    fontFamily: FontFamily.sourceSerifProBold,
    fontWeight: "700",
  },
  text: {
    fontSize: 19,
  },
  netWorthParent: {
    top: 43,
    left: 31,
    position: "absolute",
    alignItems: "center",
  },
  frameInner: {
    backgroundColor: Color.goldenrod_100,
  },
  text3: {
    fontSize: FontSize.size_2xl,
  },
  rectangleParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleView: {
    backgroundColor: "#74447c",
  },
  frameParent1: {
    paddingHorizontal: 4,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  editBtnParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  frameView: {
    paddingHorizontal: Padding.p_sm,
  },
  frameGroup: {
    borderRadius: Border.br_sm,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    borderColor: "#ffeccf",
    borderWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    borderStyle: "solid",
    alignSelf: "stretch",
    backgroundColor: Color.white1,
  },
  events: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifProSemibold,
    color: Color.black,
    textAlign: "left",
  },
  seeAll: {
    textDecoration: "underline",
    textAlign: "right",
    color: Color.orange_100,
  },
  eventsParent: {
    justifyContent: "space-between",
  },
  frameWrapper: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  event1Parent: {
    width: "100%",
  },
  frameParent3: {
    alignSelf: "stretch",
  },
  frameParent: {
    padding: Padding.p_lg,
    alignSelf: "stretch",
  },
  herosectionParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  home: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white1,
  },
});

export default Home;
