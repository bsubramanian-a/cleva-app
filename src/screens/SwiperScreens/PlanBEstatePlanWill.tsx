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
import HeaderBack from "../../components/HeaderBack";
import EditBtn from "../../components/EditBtn";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontSize,
  FontFamily,
} from "../../GlobalStyles";
import CustomHeader from "../../components/CustomHeader";
import ChapterTab from "../../components/ChapterTab";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import actions from "../../../actions";
import Loader from "../../components/Loader";
import VideoPlayer from "../../components/VideoPlayer";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import PerformanceTable from "../../components/PerformanceTable";
import AssetAllocation from "../../components/AssetAllocation";
import AccordionSkeleton from "../../components/skeletons/AccordionSkeleton";
import AccordionHeading from "../../components/AccordionHeading";
import AccordionContainer from "../../components/AccordionContainer";

const PlanBEstatePlanWill = () => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const data = route.params?.item;
  console.log("data", data)
  const [loading, setLoading] = useState(false);
  const planBEstatePlanWill = useSelector((state: any) => state.data.planBEstatePlanWill);
  const notes = useSelector((state: any) => state.data.notes);
  const coachnotes = useSelector((state: any) => state.data.coachnotes);
  const profile = useSelector((state: any) => state.data.profile);
 
  console.log("profile", profile);
  console.log("notes", notes);
  console.log("coachnotes", coachnotes);
  console.log("planBEstatePlanWill", planBEstatePlanWill);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [activeDashboardUser, setActiveDashboardUser] = useState(0);
  const [dashboardUsers, setDashboardUsers] = useState<any>([]);
  const [accordionPlanBEstatePlanWill, setPlanBEstatePlanWillAccordion] = useState<any>([]);
 
  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const handleSubTabPress = (tabNumber: number) => {
    setActiveSubTab(tabNumber);
  };

  const handleUserTabPress = (tabNumber: number) => {
    setActiveDashboardUser(tabNumber);
  };


  useEffect(() => {

    // Trigger the fetch when the navigation state changes
    navigation.addListener('focus', getDatas);

    // Cleanup the listener when the component unmounts
    return () => {
      navigation.removeListener('focus', getDatas);
    };

  }, [navigation])

  useEffect(() => {
    let dUsers: any = [];
    if (planBEstatePlanWill && planBEstatePlanWill?.length > 0) {
      planBEstatePlanWill?.forEach((element:any) => {
        dUsers.push(element?.Account?.name)
      })
      setDashboardUsers(dUsers)
      setAccordions();
    }
  }, [planBEstatePlanWill])

  const pushAccordionData = (newObject: any) => {
    setPlanBEstatePlanWillAccordion((prevAccordionPBEPW: any) => {
      return [...prevAccordionPBEPW, newObject];
    });
  };

  const setAccordions = () => {
    setPlanBEstatePlanWillAccordion([]);
    planBEstatePlanWill?.map((will:any, index:number) => {
      console.log("Current Will ", will);
      console.log("Do_you_have_a_POA :", will?.Do_you_have_a_POA);
      const DYHAPOA = will?.Do_you_have_a_POA;
      const EOWILL = will?.Executor_of_your_Will;
      const LOWILL = will?.Location_of_the_Will;
      const IICURRENT = will?.Is_it_current;
      const DYHW = will?.Do_you_have_a_will;
      const BNAME = will?.Beneficiary_Name;
      const DYHBOSF = will?.Do_you_have_beneficiary_on_superfund;

      pushAccordionData([{
        title: "Plan B Estate Plan Will - " + will?.Name,
        icon: require("../../assets/shield-tick.png"),
        link: 'EditPlanBEstatePlanWill',
        element:will,
        items: [
          {
            subHeading: "Plan B Estate Plan Will",
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Do you have a benificiery for your super fund?',
                value: DYHBOSF ? DYHBOSF : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Beneficiary Name',
                value: BNAME ? BNAME : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Do you have a Will?',
                value: DYHW ? DYHW : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'is it current?',
                value: IICURRENT ? IICURRENT : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Location of Will',
                value: LOWILL ? LOWILL : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Executor of Will',
                value: EOWILL ? EOWILL : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Do you have a POA?',
                value: DYHAPOA ? DYHAPOA : "N/A"
              }
            ]
          }
        ].filter(obj => obj),
      }]);
    })
  }


  const getDatas = async () => {
    setLoading(true);
    try {
      await actions.getPlanBEstatePlanWill();
      await actions.getNotes();
      await actions.getCoachNotes();
    } catch (err) {
      console.log("err", err);
    }
    setLoading(false);
  }

  const imageMap: any = {
    'Yes': require('../../assets/yes.png'),
    'Maybe/Work to Do': require('../../assets/maybe.png'),
    'No/Not Sure': require('../../assets/no.png'),
    'No': require('../../assets/no.png'),
  };

  const screenWidth = Dimensions.get("window").width;

  

  return (
    <>
      {(planBEstatePlanWill.length > 0) ?
        <View
          style={styles.planBEstatePlanWill}
        >
          <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
          <CustomHeader name={planBEstatePlanWill[0].Name} type={2} />

          <ScrollView
            style={styles.videoSectionParent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.planBEstatePlanWillScrollViewContent}
          >
            <Text style={styles.goaltitle}>My Goal</Text>
            <Text style={styles.goaltext}>{planBEstatePlanWill[0].Plan_B_EPW_Goal_Statement}</Text>
            {/* <ImageBackground
            style={[styles.videoSectionInner, styles.bottomFlexBox]}
            resizeMode="cover"
            source={require("../../assets/frame526.png")}
          >
            <View style={styles.polygonWrapper}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../../assets/polygon-2.png")}
              />
            </View>
          </ImageBackground> */}
            {/* <View style={styles.videoSection}>
          <VideoPlayer sourceUri={'https://download.samplelib.com/mp4/sample-5s.mp4'} />
        </View> */}

            <ChapterTab
              tabs={['Summary', 'Dashboard', 'Journal', 'Resources']}
              activeTab={activeTab}
              onTabPress={handleTabPress}
              type="tab"
            />
            {activeTab == 0 &&
              <>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have a Will/Estate Plan?
                  </Text>
                  <Image
                    style={[styles.frameChild]}
                    resizeMode="cover"
                    source={imageMap[planBEstatePlanWill[0].Have_a_Will_Estate_Plan]}
                  />

                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Estate Plan Will Up To Date?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBEstatePlanWill[0].Estate_Plan_Will_Up_To_Date]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Key Life Changes Since Last Review?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBEstatePlanWill[0].Key_Life_Changes_Since_Last_Review]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Date last reviewed : {planBEstatePlanWill[0].Date_last_reviewed}
                  </Text>
                </View>
              </>
            }
            {activeTab == 1 &&
              <>
                <ChapterTab
                  tabs={dashboardUsers}
                  activeTab={activeDashboardUser}
                  onTabPress={handleUserTabPress}
                  type="tab"
                />
                {dashboardUsers && (dashboardUsers?.length > 0) &&
                      <>
                        {dashboardUsers.map((user: any, index: number) => {
                          if (activeDashboardUser == index) {
                            return (
                              <View key={index}>
                                {(!planBEstatePlanWill[index]) && (planBEstatePlanWill?.length != index) && <>
                                  <AccordionSkeleton title="Loading INA" />
                                </>}
                                {(planBEstatePlanWill?.length == 0) && <>
                                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 20 }}>
                                    <AccordionHeading title="No Data Available" value="No Household is assigned to the contact"></AccordionHeading>
                                  </View>
                                </>}
                                {(planBEstatePlanWill?.length > 0) && <>
                                  <AccordionContainer accordions={accordionPlanBEstatePlanWill[index]} />
                                </>}                                
                              </View>
                            );
                          }
                        })}
                      </>
                    }
              </>
            }
            {activeTab == 2 &&
              <View>
                <ChapterTab
                  tabs={['My Notes', 'Coach Notes', 'To do']}
                  activeTab={activeSubTab}
                  onTabPress={handleSubTabPress}
                  type="subtab"
                />
                {activeSubTab == 0 &&
                  <>
                    <View style={[styles.advicecontainer]}>
                      <Text style={[styles.adviceAssignedBy, styles.summaryTypo]}>
                        My Notes
                      </Text>
                      <View
                        style={[styles.advice2, styles.advice2Layout, styles.adviceBg]}
                      >
                        <View style={[styles.advice1Parent, styles.mt10]}>
                          {notes?.length > 0 && <>
                            {notes?.map((note: any) => {
                              if (note?.Current == "Yes" && note?.Module == "Estate Plan/Will") {
                                return (
                                  <>
                                    <View style={styles.advice11}>
                                      <View style={styles.dot1Wrapper}>
                                        <View style={styles.dot1} />
                                      </View>
                                      <Text style={[styles.loremIpsumIs, styles.ml5, { marginBottom: 14 }]}>
                                        {note?.My_Notes}
                                      </Text>
                                    </View>
                                  </>
                                )
                              }
                            })}
                          </>}
                        </View>
                      </View>
                    </View>
                  </>
                }
                {activeSubTab == 1 &&
                  <>
                    <View style={[styles.advicecontainer]}>
                      <Text style={[styles.adviceAssignedBy, styles.summaryTypo]}>
                        Coach Notes
                      </Text>
                      <View
                        style={[styles.advice2, styles.advice2Layout, styles.adviceBg]}
                      >
                        <View style={[styles.advice1Parent, styles.mt10]}>
                          {coachnotes?.length > 0 && <>
                            {coachnotes?.map((note: any) => {
                              if (note?.Current == "Yes" && note?.Module == "Estate Plan/Will") {
                                return (
                                  <>
                                    <View style={styles.advice11}>
                                      <View style={styles.dot1Wrapper}>
                                        <View style={styles.dot1} />
                                      </View>
                                      <Text style={[styles.loremIpsumIs, styles.ml5, { marginBottom: 14 }]}>
                                        {note?.Coaches_Notes}
                                      </Text>
                                    </View>
                                  </>
                                )
                              }
                            })}
                          </>}
                        </View>
                      </View>
                    </View>
                  </>
                }
                {activeSubTab == 2 &&
                  <><Text style={styles.notodos}>No Todo's</Text></>
                }
              </View>
            }
          </ScrollView>
        </View>
        : <View style={styles.planBEstatePlanWill}>
          <Loader visible={loading} />
        </View>}
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 5,
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vuesaxlinearprofileCircle: {
    width: 20,
    height: 20,
    marginRight: 9
  },
  name: {
    marginRight: 10,
    color: '#4B4B4B'
  },
  value: {
    fontWeight: 'bold',
    color: '#000'
  },
  vuesaxlinearedit: {
    width: 20,
    height: 20,
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  subHeading: {
    color: "#FBB142",
    fontSize: 14,
    fontWeight: "600"
  },
  performance: {
    color: Color.black,
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10
  },
  balanceNextLine: {
    fontSize: 12,
    color: Color.black
  },
  balanceText: {
    fontSize: 26,
    color: Color.black
  },
  balance: {
    backgroundColor: "#FFF9F1",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_sm,
    borderRadius: 8,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
  },
  adviceShadowBox: {
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.5)",
    borderRadius: 16,
    alignItems: "center",
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
    marginTop: 20
  },
  advice: {
    borderWidth: 0,
    borderColor: "#eaeaea",
    paddingTop: 28,
    paddingBottom: Padding.p_lg,
    alignItems: "center",
  },
  mt26: {
    marginTop: 26,
  },
  mTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "500",
    color: '#FBB142',
  },
  danFleurClr: {
    color: Color.black,
    textAlign: "left",
  },
  dr: {
    fontSize: FontSize.size_sm,
    color: Color.white1,
    textAlign: "center",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "600",
    lineHeight: 22,
  },
  danFleur: {
    fontSize: 18,
    fontFamily: FontFamily.sourceSerifPro
  },
  drWrapper: {
    backgroundColor: '#EF9F27',
  },
  frWrapper: {
    backgroundColor: "#9755b6",
  },
  loginuser: {
    flexDirection: "row",
  },
  users: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  notodos: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  frameChild: {
    right: 0,
    height: 20,
    width: 20,
  },
  myExercisesTypo: {
    // fontSize: FontSize.size_sm
  },
  loremIpsumIs: {
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    color: '#4B4B4B'
  },
  summary1: {
    borderTopWidth: 1,
    borderColor: "#dedede",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.white1,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    justifyContent: "space-between"
  },

  goaltitle: {
    padding: 30,
    paddingBottom: 10,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.outfitMedium,
    color: Color.black
  },
  goaltext: {
    padding: 30,
    paddingTop: 0,
    fontSize: 14,
    fontFamily: FontFamily.outfitRegular,
    color: Color.grey_text
  },
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
    marginLeft: 24
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
    marginLeft: 20
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
  planBEstatePlanWillScrollViewContent: {
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
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 100,
    height: 100
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
  planBEstatePlanWill: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
  dataNotAvailable: {
    alignItems: "center",
    textAlign: "center",
    color: Color.warning_red,
    marginTop: 50,
    fontSize: 20,
  }
});

export default PlanBEstatePlanWill;
