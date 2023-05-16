import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  StatusBar,
  Dimensions,
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
import ChapterTab from "../components/ChapterTab";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import actions from "../../actions";
import Loader from "../components/Loader";
import VideoPlayer from "../components/VideoPlayer";

const GetStarted = () => {
  const [loading, setLoading] = useState(false);
  const exercises = useSelector((state:any) => state.data.exercises);
  const summary = useSelector((state:any) => state.data.summary);
  const advices = useSelector((state:any) => state.data.advices);
  // console.log("summary", summary);
  // console.log("advices", advices);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tabNumber:number) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    try{
      getDatas();
    }catch(err){
      console.log("err", err);
      setLoading(false);
    }
  }, [])

  const getDatas = async() => {
    setLoading(true);
    await actions.getExercises();
    await actions.getSummary();
    await actions.getAdvices();
    setLoading(false);
  }
  
  return (
    <View
      style={styles.getStarted}
    >
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Get Started" type={2}/>
      <Loader visible={loading} />
  
      <ScrollView
        style={styles.videoSectionParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.getStartedScrollViewContent}
      >
          {/* <ImageBackground
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
          </ImageBackground> */}
        <View style={styles.videoSection}>
          <VideoPlayer sourceUri={'https://download.samplelib.com/mp4/sample-5s.mp4'} />
        </View>

        <ChapterTab
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
                </View> :
              <Text>No exercise found</Text>
            }
          </>
        }
        {activeTab == 0 &&
          <View style={[styles.summary1, {paddingHorizontal: 16, paddingVertical: 20}]}>
             <Text
                style={[
                  styles.loremIpsumIs,
                  styles.myExercisesTypo,
                ]}
            >
              {summary[0]?.Summary_Content}
            </Text>
          </View>
        } 
        {activeTab == 2 &&
          <View style={[styles.advicetab, styles.summary1]}>
            <View style={[styles.advicecontainer]}>
              <Text style={[styles.adviceAssignedBy, styles.summaryTypo]}>
                Advice Assigned by Coach
              </Text> 
              <View
                style={[styles.advice2, styles.advice2Layout, styles.adviceBg]}
              >
                <View style={[styles.advice1Parent, styles.mt10]}>
                  {
                    advices?.length > 0 ?
                      <>
                        {advices?.map((advice:any) => {
                          if(advice?.Recommendation_Description){
                            return(
                              <View style={styles.advice11}>
                                <View style={styles.dot1Wrapper}>
                                  <View style={styles.dot1} />
                                </View>
                                <Text style={[styles.loremIpsumIs, styles.ml5, {marginBottom: 14}]}>
                                  {advice?.Recommendation_Description}
                                </Text>
                              </View>
                            )
                          }
                        })}
                      </>
                      :
                      <Text>No advice found</Text>
                  }
                </View>
              </View>
            </View>
          </View>
        } 
      </ScrollView>
      {(activeTab == 1 || activeTab == 2) &&  
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
      }
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: 5,
  },
  mt14: {
    marginTop: Margin.m_sm,
  },
  dot1: {
    borderRadius: Border.br_md,
    height: 8,
    width: 8,
    justifyContent: "space-between",
    backgroundColor: Color.goldenrod,
    overflow: "hidden",
    marginTop: 6
  },
  dot1Wrapper: {
    paddingHorizontal: 0,
    paddingVertical: 1,
    flexDirection: "row",
  },
  mt10: {
    marginTop: 10,
  },
  summaryTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  adviceAssignedBy: {
    fontSize: FontSize.textMediumBoldText1_size,
    textAlign: "left",
  },
  adviceBg: {
    backgroundColor: Color.white1,
  },
  advice2Layout: {
    borderRadius: Border.br_md,
    alignSelf: "stretch",
  },
  advice11: {
    // width: 324,
    flexDirection: "row",
  },
  advice1Parent: {
    paddingBottom: Padding.p_2xs,
  },
  advice2: {
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingLeft: 4,
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: Padding.p_2xs,
    justifyContent: "center",
    // overflow: "hidden",
  },
  advicecontainer: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  advicetab: {
    alignSelf: "stretch",
  },
  myExercisesTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  loremIpsumIs: {
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: FontFamily.openSansRegular,
    fontSize: 14,
    color: '#4B4B4B',
  },
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
    fontSize: 14,
    fontWeight: '600'
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
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden'
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
    fontWeight: "500",
    fontSize: 14,
    fontFamily: FontFamily.textMediumBoldText1,
  },
  text: {
    textAlign: "center",
  },
  wrapper: {
    backgroundColor: '#FFF9F1',
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
    shadowColor: "rgba(32, 34, 36, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 12,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
    height: 60
  },
  summary1: {
    shadowColor: "rgba(32, 34, 36, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 20,
    shadowOpacity: 1,
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 12,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: Padding.p_lg,
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
