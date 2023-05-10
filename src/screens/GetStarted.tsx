import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  StatusBar,
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
import CustomHeader from "../components/CustomHeader";
import Tabs from "../components/Tab";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import actions from "../../actions";

const GetStarted = () => {
  const exercises = useSelector((state:any) => state.data.exercises);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tabNumber:number) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    getExercises();
  }, [])

  const getExercises = async() => {
    await actions.getExercises();
  }
  
  return (
    <View
      style={styles.getStarted}
    >
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Get Started" type={2}/>
      <ScrollView
        style={styles.videoSectionParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.getStartedScrollViewContent}
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

        <Tabs
          tabs={['Summary', 'Exercise', 'Advice']}
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />
   
        {activeTab == 1 && 
          <>
            {
              exercises?.length > 0 ?
                <View style={styles.excercisesParent}>
                  <View style={styles.excercises}>
                    {
                      exercises?.map((exercise:any, index:any) => {
                        return(
                          <View style={styles.excercise1}>
                            <View style={styles.frameParent}>
                              <View style={[styles.wrapper, styles.wrapperLayout]}>
                                <Text style={[styles.text, styles.textClr]}>
                                  <Text style={styles.text1}>#{index + 1}</Text>
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
                                {exercise?.Name}
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
                        )
                      })
                    }
                  </View>
                  <LinearGradient
                    style={[styles.bottom, styles.bottomFlexBox]}
                    locations={[0, 1]}
                    colors={["#fbb142", "#f6a326"]}
                    useAngle={true}
                    angle={180}
                  >
                    <Pressable>
                      <Text style={{color: "#fff"}}>Continue</Text>
                    </Pressable>
                  </LinearGradient>
                </View> :
              <Text>No exercise found</Text>
            }
          </>
        }
        {activeTab == 0 &&
          <></>
        } 
        {activeTab == 2 &&
          <></>
        } 
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_12: {
    marginTop: Margin.m_2xs,
  },
  ml40: {
    marginLeft: Margin.m_sm,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt15: {
    marginTop: Margin.m_md,
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
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_2xs,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  textClr: {
    color: Color.black,
    fontSize: FontSize.textMediumBoldText1_size,
  },
  text2Typo: {
    fontFamily: FontFamily.openSansRegular,
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
    borderRadius: 12,
    height: 15,
    width: 14,
  },
  polygonWrapper: {
    borderRadius: 12,
    backgroundColor: Color.gray_200,
    padding: Padding.p_2xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  videoSectionInner: {
    height: 200,
    padding: Padding.p_lg,
    flexDirection: "row",
    borderRadius: 12,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  videoSection: {
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_2xs,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  summary: {
    display: "none",
  },
  startedTab: {
    paddingHorizontal: Padding.p_md,
    paddingTop: Padding.p_md,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text1: {
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.openSansRegular,
  },
  text: {
    textAlign: "center",
  },
  wrapper: {
    backgroundColor: '#FFECCF',
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
    padding: Padding.p_2xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
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
    padding: 0,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 12,
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
    backgroundColor: Color.whitesmoke,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "space-between",
    padding: Padding.p_2xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 12,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  excercises: {
    paddingVertical: Padding.p_sm,
    width: 390,
    paddingHorizontal: Padding.p_lg,
    minHeight: 300
  },
  bottom: {
    paddingHorizontal: Padding.p_2xs,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_2xs,
    width: 180,
    borderRadius: 60,
    backgroundColor: "transparent",
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20
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
