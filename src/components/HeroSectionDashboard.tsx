import * as React from "react";
import { Text, StyleSheet, Image, View, ImageBackground, Dimensions, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Margin,
  Padding,
  FontSize,
  Color,
  Border,
  FontFamily,
} from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const HeroSectionDashboard = ({item}:any) => {
    const navigation:any = useNavigation()

    return (
        <Pressable style={styles.herosection} onPress={() => navigation.navigate('GetStarted')}>
            <ImageBackground
                style={styles.sliderIcon}
                resizeMode="cover"
                source={require("../assets/frame481.png")}
            >
              <View style={styles.getchapgroupWrapper}>
                <View
                    style={[
                    styles.getchapgroup,
                    styles.getchapgroupSpaceBlock,
                    styles.getchapgroupFlexBox,
                    ]}
                >
                    <Text style={styles.getStarted}>Get Started</Text>
                    <View style={[styles.chaptergroup, styles.getchapgroupFlexBox]}>
                    <Text style={styles.chapter1}>{item?.Name}</Text>
                    <Image
                        style={[styles.vuesaxlineararrowCircleRigIcon, styles.ml6]}
                        resizeMode="cover"
                        source={require("../assets/vuesaxlineararrowcircleright.png")}
                    />
                    </View>
                </View>
              </View>
              <LinearGradient
                style={[styles.progressgroupParent, styles.getchapgroupSpaceBlock]}
                locations={[0, 1]}
                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.83)"]}
                useAngle={true}
                angle={180}
              >
                <View style={[styles.progressgroup, styles.getchapgroupFlexBox]}>
                    <Text style={[styles.yourProgress, styles.textTypo]}>
                      Your Progress
                    </Text>
                    <Text style={[styles.text, styles.textTypo]}>{item?.progress || 40}%</Text>
                </View>
                <View style={[styles.rectangleParent]}>
                  <View style={[styles.groupItem, styles.groupPosition, {backgroundColor: '#ffffff30', width: Dimensions.get('window').width - 107}]} />
                  <View style={[styles.groupItem, styles.groupPosition, {width: item?.progress ? (((Dimensions.get('window').width - 107) * 0.01) * item?.progress) : 40 }]} />
                </View>
              </LinearGradient>
            </ImageBackground> 
            <View
                style={[styles.chaptergroup, styles.mt10, styles.getchapgroupFlexBox]}
            >
                <View style={[styles.indicator1, styles.indicator1Layout]} />
                <View style={[styles.indicator1, styles.ml5, styles.indicator1Layout]}/>
                <View style={[styles.indicatoractive, styles.ml5, styles.indicator1Layout]}/>
                <View style={[styles.indicator1, styles.ml5, styles.indicator1Layout]} />
                <View style={[styles.indicator1, styles.ml5, styles.indicator1Layout]}/>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 4,
  },
  mt10: {
    marginTop: Margin.m_2xs,
  },
  ml5: {
    marginLeft: Margin.m_7xs,
  },
  getchapgroupSpaceBlock: {
    // paddingTop: Padding.p_5xs,
    // overflow: "hidden",
    // alignSelf: "stretch",
  },
  getchapgroupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    fontWeight: "700",
    fontSize: 14,
    color: Color.white1,
  },
  groupPosition: {
    borderRadius: 20,
    left: 0,
    top: 0,
    position: "absolute",
    height: 6,
  },
  indicator1Layout: {
    height: 8,
    width: 8,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  getStarted: {
    fontSize: 16,
    fontWeight: "900",
    // fontFamily: FontFamily.sourceSerifProBlack,
    textAlign: "left",
    color: Color.white1,
  },
  chapter1: {
    fontSize: 12,
    fontWeight: "500",
    // fontFamily: FontFamily.outfitMedium,
    textAlign: "right",
    color: Color.white1,
  },
  vuesaxlineararrowCircleRigIcon: {
    width: 14,
    height: 14,
  },
  chaptergroup: {
    justifyContent: "center",
    alignItems: 'center'
  },
  getchapgroup: {
    borderRadius: Border.br_md,
    backgroundColor: '#FFFFFF40',
    paddingLeft: Padding.p_md,
    paddingRight: Padding.p_md,
    marginHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: 'center'
  },
  getchapgroupWrapper: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
  },
  yourProgress: {
    // fontFamily: FontFamily.sourceSerifProBold,
    textAlign: "left",
  },
  text: {
    // fontFamily: FontFamily.outfitBold,
    textAlign: "right",
  },
  progressgroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  groupChild: {
    backgroundColor: Color.gray_700,
    width: 314,
  },
  groupItem: {
    backgroundColor: Color.white1,
    // width: 174,
  },
  rectangleParent: {
    height: 6,
    alignSelf: "stretch",
    marginTop: 8
  },
  progressgroupParent: {
    // height: 200,
    paddingHorizontal: Padding.p_md,
    paddingBottom: Padding.p_md,
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingTop: 0,
    width: '100%'
  },
  sliderIcon: {
    height: 220,
    minHeight: 220,
    width: Dimensions.get('window').width - 64,
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  indicator1: {
    backgroundColor: Color.goldenrod_200,
  },
  indicatoractive: {
    backgroundColor: Color.goldenrod_100,
  },
  herosection: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default HeroSectionDashboard;
