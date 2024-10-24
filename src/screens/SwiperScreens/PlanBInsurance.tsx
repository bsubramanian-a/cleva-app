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
import PlanBInsuranceSpeedoMeter from "./PlanBInsuranceSpeedoMeter";
import AccordionSkeleton from "../../components/skeletons/AccordionSkeleton";
import AccordionHeading from "../../components/AccordionHeading";
import AccordionContainer from "../../components/AccordionContainer";

const PlanBInsurance = () => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const data = route.params?.item;
  console.log("data", data)
  const [loading, setLoading] = useState(false);
  const planBInsurance = useSelector((state: any) => state.data.planBInsurance);
  const notes = useSelector((state: any) => state.data.notes);
  const coachnotes = useSelector((state: any) => state.data.coachnotes);
  const profile = useSelector((state: any) => state.data.profile);
  const ina = useSelector((state: any) => state.data.ina);
  const financialAccounts = useSelector((state: any) => state.data.financialAccounts);

  console.log("profile", profile);
  // console.log("notes", notes);
  // console.log("coachnotes", coachnotes);
  // console.log("planBInsurance", planBInsurance);
  console.log("ina", ina);
  console.log("financialAccounts", financialAccounts)
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [activeDashboardUser, setActiveDashboardUser] = useState(0);
  const [accordionINA, setINAAccordion] = useState<any>([]);
  const [accordionInsurance, setInsurance] = useState<any>([]);
  const [finAccounts, setFinAccounts] = useState<any>([]);
  const [dashboardUsers, setDashboardUsers] = useState<any>([]);

  const [lifeInsuranceAccounts, setLifeInsuranceAccounts] = useState<any>([]);
  const [tPDAccounts, setTPDAccounts] = useState<any>([]);
  const [incomeProtectionAccounts, setIncomeProtectionAccounts] = useState<any>([]);


  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const handleSubTabPress = (tabNumber: number) => {
    setActiveSubTab(tabNumber);
  };

  const handleDashboardUserTabPress = (tabNumber: number) => {
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
    if (ina && ina?.length > 0) {
      ina?.forEach((element: any) => {
        dUsers.push(element?.Household?.name)
      });
      //console.log("dashboard users : ", dUsers);
      setAccordions();
      setDashboardUsers(dUsers);
    }
  }, [ina])

  useEffect(() => {
    if (financialAccounts?.length > 0) {
      const insFAccounts = financialAccounts.filter((account: any) => account?.Is_Insurance_Financial_Account === true);
      let lifeInsuranceItems: any = [];
      let tpdArray: any = [];
      let iparray: any = [];
      if (insFAccounts.length > 0) {
        insFAccounts.forEach((element: any) => {

          lifeInsuranceItems.push({
            icon: <Image
              style={styles.vuesaxlinearprofileCircle}
              resizeMode="contain"
              source={require("../../assets/dollar-square.png")}
            />,
            name: element?.Plan_Name,
            value: element?.Life_Cover ? "$" + (element?.Life_Cover).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A",
            element:element
          });

          tpdArray.push({
            icon: <Image
              style={styles.vuesaxlinearprofileCircle}
              resizeMode="contain"
              source={require("../../assets/dollar-square.png")}
            />,
            name: element?.Plan_Name,
            value: element?.TPD_Cover ? "$" + (element?.TPD_Cover).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A",
            element:element
          });

          iparray.push({
            icon: <Image
              style={styles.vuesaxlinearprofileCircle}
              resizeMode="contain"
              source={require("../../assets/dollar-square.png")}
            />,
            name: element?.Plan_Name,
            value: element?.Salary_Continuance ? "$" + (element?.Salary_Continuance).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A",
            element:element
          });

        });
      }
      console.log("lifeInsuranceItems", lifeInsuranceItems)
      setLifeInsuranceAccounts(lifeInsuranceItems)
      setTPDAccounts(tpdArray)
      setIncomeProtectionAccounts(iparray);
    }
  }, [financialAccounts])

  useEffect(() => {
    console.log("lifeInsuranceAccounts inside useEffect", lifeInsuranceAccounts);
    if (lifeInsuranceAccounts.length > 0) {
      setFinAccordions();
    }
  }, [lifeInsuranceAccounts, tPDAccounts, incomeProtectionAccounts]);



  const getDatas = async () => {
    setLoading(true);
    try {
      await actions.getPlanBInsurance();
      await actions.getNotes();
      await actions.getCoachNotes();
      await actions.getINA();
      await actions.getFinancialAccounts();
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

  const setFinAccordions = () => {
    console.log("lifeInsuranceAccounts", lifeInsuranceAccounts)
    setInsurance(
      [{
        title: "Life Insurance",
        icon: require("../../assets/shield-tick.png"),
        link: 'EditProfile',
        editable: true,
        finAccount:true,
        value: <View>
          <Text>Need : {(profile && profile[0] && profile[0].Life_Insurance_Need) ? "$" + (profile[0].Life_Insurance_Need).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</Text>
          <Text>Have : {(profile && profile[0] && profile[0].Life_Insurance_Have) ? "$" + (profile[0].Life_Insurance_Have).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</Text>
        </View>,
        items: [
          {
            subHeading: "Life Insurance",
            item: lifeInsuranceAccounts
          }
        ].filter(obj => obj),
      }, {
        title: "Total and Permanent Disability (TPD)",
        icon: require("../../assets/shield-tick.png"),
        link: 'EditProfile',
        editable: true,
        finAccount:true,
        value: <View>
          <Text>Need : {(profile && profile[0] && profile[0].TPD_Insurance_Need) ? "$" + (profile[0].TPD_Insurance_Need).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</Text>
          <Text>Have : {(profile && profile[0] && profile[0].TPD_Insurance_Have) ? "$" + (profile[0].TPD_Insurance_Have).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</Text>
        </View>,
        items: [
          {
            subHeading: "Total and Permanent Disability (TPD)",
            item: tPDAccounts
          }
        ].filter(obj => obj),
      }, {
        title: "Income Protection",
        icon: require("../../assets/shield-tick.png"),
        link: 'EditProfile',
        editable: true,
        finAccount:true,
        value: <View>
          <Text>Need : {(profile && profile[0] && profile[0].Income_Protection_Need) ? "$" + (profile[0].Income_Protection_Need).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</Text>
          <Text>Have : {(profile && profile[0] && profile[0].Income_Protection_Have) ? "$" + (profile[0].Income_Protection_Have).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</Text>
        </View>,
        items: [
          {
            subHeading: "Insurance Need Analysis",
            item: incomeProtectionAccounts
          }
        ].filter(obj => obj),
      }
      // , {
      //   title: "Trauma/Critical Illness",
      //   icon: require("../../assets/shield-tick.png"),
      //   link: 'EditProfile',
      //   editable: true,
      //   finAccount:true,
      //   value: <View>
      //     <Text>Need : N/A</Text>
      //     <Text>Have : N/A</Text>
      //   </View>,
      //   items: [
      //     {
      //       subHeading: "Insurance Need Analysis",
      //       item: []
      //     }
      //   ].filter(obj => obj),
      // }
    ]);
  }



  const setAccordions = () => {
    setINAAccordion([]);
    ina?.map((inaObject: any, index: number) => {
      pushAccordionData([{
        title: "Insurance Need Analysis - " + inaObject?.Name,
        icon: require("../../assets/shield-tick.png"),
        link: 'EditProfile',
        items: [
          {
            subHeading: "Insurance Need Analysis",
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Total Liabilities',
                value: inaObject?.Total_Liabilities ? "$" + (inaObject?.Total_Liabilities).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " p.a." : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Allowance for Children/Education',
                value: inaObject?.Child_Edu_Allowance ? "$" + (inaObject?.Child_Edu_Allowance).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " p.a." : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Replace Income p.a.',
                value: inaObject?.Replace_Income_p_a ? "$" + (inaObject?.Replace_Income_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " p.a." : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Number of years',
                value: inaObject?.Number_of_Income_Yrs ? inaObject?.Number_of_Income_Yrs : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Allowance for Medical',
                value: inaObject?.Allowance_Home_Mods ? "$" + (inaObject?.Allowance_Home_Mods).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " p.a." : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Allowance for funeral',
                value: inaObject?.Allowance_Funeral ? "$" + (inaObject?.Allowance_Funeral).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " p.a." : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Allowance for Emergency',
                value: inaObject?.Allowance_Emergency ? "$" + (inaObject?.Allowance_Emergency).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " p.a." : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Allowance for House Modifications',
                value: inaObject?.Allowance_Home_Mods ? "$" + (inaObject?.Allowance_Home_Mods).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " p.a." : "N/A"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../../assets/dollar-square.png")}
                />,
                name: 'Other Income',
                value: inaObject?.Other_Allowances_Consideration ? "$" + (inaObject?.Other_Allowances_Consideration).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " p.a." : "N/A"
              },

            ]
          }
        ].filter(obj => obj),
      }]);
    });
  }

  const pushAccordionData = (newObject: any) => {
    setINAAccordion((prevAccordionINA: any) => {
      return [...prevAccordionINA, newObject];
    });
  };


  return (
    <>
      {(planBInsurance?.length > 0) ?
        <View
          style={styles.planBInsurance}
        >
          <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
          <CustomHeader name={planBInsurance[0].Name} type={2} />

          <ScrollView
            style={styles.videoSectionParent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.planBInsuranceScrollViewContent}
          >
            <Text style={styles.goaltitle}>My Goal</Text>
            <Text style={styles.goaltext}>{planBInsurance[0].Plan_B_Insurance_Goal_Statement}</Text>
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
                    Have an INA?
                  </Text>
                  <Image
                    style={[styles.frameChild]}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Have_an_INA]}
                  />

                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Paying for the right amount?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Paying_for_the_right_amount]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have Life Cover?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Have_Life_Cover]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have IP Cover?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Have_IP_Cover]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have TPD Cover?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Have_TPD_Cover]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have Trauma Cover?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Have_Trauma_Cover]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have Child Trauma Cover?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Have_Child_Trauma_Cover]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have Health Cover?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Have_Health_Cover]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Premiums are Competitive?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[planBInsurance[0].Premiums_are_Competitive]}
                  />
                </View>

              </>
            }
            {activeTab == 1 &&
              <>
                {(ina) && (!ina?.length) && <>
                  <AccordionSkeleton title="Loading INA" />
                </>}
                {ina && (ina?.length > 0) &&
                  <>
                    <ChapterTab
                      tabs={dashboardUsers}
                      activeTab={activeDashboardUser}
                      onTabPress={handleDashboardUserTabPress}
                      type="tab"
                    />
                    {dashboardUsers && (dashboardUsers?.length > 0) &&
                      <>
                        {dashboardUsers.map((user: any, index: number) => {
                          if (activeDashboardUser == index) {
                            return (
                              <View key={user.id}>

                                {(!ina[index]) && (ina?.length != index) && <>
                                  <AccordionSkeleton title="Loading INA" />
                                </>}
                                {(ina?.length == 0) && <>
                                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 20 }}>
                                    <AccordionHeading title="No Data Available" value="No Household is assigned to the contact"></AccordionHeading>
                                  </View>
                                </>}
                                {(ina?.length > 0) && <>
                                  <AccordionContainer accordions={accordionINA[index]} />
                                </>}
                              </View>
                            );
                          }
                        })}
                      </>
                    }
                    {(ina?.length > 0) && <>
                      <AccordionContainer accordions={accordionInsurance} />
                    </>}
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
                              if (note?.Current == "Yes" && note?.Module == "Insurance") {
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
                              if (note?.Current == "Yes" && note?.Module == "Insurance") {
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
          {/* {(activeTab == 1 || activeTab == 2) &&
            <LinearGradient
              style={[styles.bottom, styles.bottomFlexBox]}
              locations={[0, 1]}
              colors={["#fbb142", "#f6a326"]}
              useAngle={true}
              angle={180}
            >
              <Pressable>
                <Text style={{ color: "#fff" }}>Continue</Text>
              </Pressable>
            </LinearGradient>
          } */}
        </View>
        : <View style={styles.planBInsurance}>
          {/* <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
          <CustomHeader name={"Super Sorted"} type={2} />
          <Text style={styles.dataNotAvailable}>Data not available</Text> */}
          <Loader visible={loading} />
        </View>}
    </>
  );
};

const styles = StyleSheet.create({
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
  planBInsuranceScrollViewContent: {
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
  planBInsurance: {
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
  },
  vuesaxlinearprofileCircle: {
    width: 20,
    height: 20,
    marginRight: 9
  },
});

export default PlanBInsurance;
