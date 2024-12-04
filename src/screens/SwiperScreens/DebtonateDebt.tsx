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

const DebtonateDebt = () => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const data = route.params?.item;
  console.log("data", data)
  const [loading, setLoading] = useState(false);

  const debtonateDebt = useSelector((state: any) => state.data.debtonateDebt);

  const notes = useSelector((state: any) => state.data.notes);
  const coachnotes = useSelector((state: any) => state.data.coachnotes);
  const profile = useSelector((state: any) => state.data.profile);
  //const allAccounts = useSelector((state:any) => state.data.allAccounts);
  const financialAccounts = useSelector((state: any) => state.data.financialAccounts);


  console.log("profile", profile);

  console.log("notes", notes);
  console.log("coachnotes", coachnotes);
  console.log("debtonateDebt", debtonateDebt);

  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [allAccounts, setallAccounts] = useState<any>();
  const [debtFAccounts, setDebtFAccounts] = useState<any>([]);

  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const handleSubTabPress = (tabNumber: number) => {
    setActiveSubTab(tabNumber);
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
    if (debtonateDebt && debtonateDebt.length > 0 && financialAccounts && financialAccounts?.length > 0) {
      getAllAccounts();
      const emerFAccounts = financialAccounts.filter((account: any) => account?.Asset_or_Liability === "Liability");
      setDebtFAccounts(emerFAccounts);
    }
  }, [debtonateDebt, financialAccounts])

  const getAllAccounts = async () => {
    const acts: any = await actions.getAccount(debtonateDebt[0].Account.id);
    setallAccounts(acts?.data[0]);
  }


  const getDatas = async () => {
    setLoading(true);
    try {
      await actions.getDebtonateDebt();
      await actions.getNotes();
      await actions.getCoachNotes();
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

  console.log("allAccounts", allAccounts)


  return (
    <>
      {(debtonateDebt.length > 0) ?
        <View
          style={styles.debtonateDebt}
        >
          <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
          <CustomHeader name={debtonateDebt[0].Name} type={2} />

          <ScrollView
            style={styles.videoSectionParent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.debtonateDebtScrollViewContent}
          >
            <Text style={styles.goaltitle}>My Goal</Text>
            <Text style={styles.goaltext}>{debtonateDebt[0].Debtonate_Debt_Goal_Statement}</Text>
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
                    Current Debt IR & Fees?
                  </Text>
                  <Image
                    style={[styles.frameChild]}
                    resizeMode="cover"
                    source={imageMap[debtonateDebt[0].Current_Debt_IR_Fees]}
                  />

                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have a Plan and Priority?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[debtonateDebt[0].Have_a_Plan_and_Priority]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    12 Month Goal?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[debtonateDebt[0].Month_Goal]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Control CC & PD?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[debtonateDebt[0].Control_CC_PD]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Avoid Buy Now Pay Later?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[debtonateDebt[0].Avoid_Buy_Now_Pay_Later]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Contribute Just a Bit More?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[debtonateDebt[0].Contribute_Just_a_Bit_More]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Align to Pay Cycle?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[debtonateDebt[0].Align_to_Pay_Cycle]}
                  />
                </View>
              </>
            }
            {activeTab == 1 &&
              <>
                <View style={[styles.advice]}>
                  <View style={styles.users}>
                    <View style={styles.loginuser}>
                      <View
                        style={[styles.frWrapper, styles.wrapperLayout, profile[0]?.accounts?.length > 0 && { marginRight: -5 }]}
                      >
                        <Text style={styles.dr}>
                          {profile?.length > 0 && (
                            (profile[0]?.First_Name && profile[0]?.Last_Name)
                              ? (profile[0]?.First_Name.charAt(0) + profile[0]?.Last_Name.charAt(0))
                              : ((profile[0]?.First_Name || profile[0]?.Last_Name) || '').slice(0, 2)
                          )}
                        </Text>
                      </View>
                      {
                        profile[0]?.accounts?.length > 0 &&
                        <View style={[styles.drWrapper, styles.wrapperLayout, profile[0]?.accounts?.length > 0 && { marginLeft: -5 }]}>
                          <Text style={styles.dr}>
                            {profile[0]?.accounts?.length > 0 && (
                              (profile[0]?.accounts[0]?.First_Name && profile[0]?.accounts[0]?.Last_Name)
                                ? (profile[0]?.accounts[0]?.First_Name.charAt(0) + profile[0]?.accounts[0]?.Last_Name.charAt(0))
                                : ((profile[0]?.accounts[0]?.First_Name || profile[0]?.accounts[0]?.Last_Name) || '').slice(0, 2)
                            )}
                          </Text>
                        </View>
                      }
                    </View>
                    <Text
                      style={[
                        styles.danFleur,
                        styles.mt26,
                        styles.mTypo,
                        styles.danFleurClr,
                      ]}
                    >{profile[0]?.Account_Name?.name}</Text>
                  </View>
                </View>
                <View style={[styles.balance]}>
                  <Text style={[styles.balanceText]}>${Number(allAccounts?.Total_Value_Current_Liabilities) ? Number(allAccounts?.Total_Value_Current_Liabilities).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</Text>
                  <Text style={[styles.balanceNextLine]}>Current Total HH Debt</Text>
                </View>
                <View>
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Total Debt
                    </Text>
                    <Text>
                      ${Number(allAccounts?.Total_Value_Current_Liabilities) ? Number(allAccounts?.Total_Value_Current_Liabilities).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Good Debt
                    </Text>
                    <Text>
                      ${Number(allAccounts?.HH_Good_Debt) ? Number(allAccounts?.HH_Good_Debt).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Bad Debt
                    </Text>
                    <Text>
                      ${Number(allAccounts?.HH_Bad_Debt) ? Number(allAccounts?.HH_Bad_Debt).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>   
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Deductable
                    </Text>
                    <Text>
                      ${Number(allAccounts?.HH_Deductible_Debt) ? Number(allAccounts?.HH_Deductible_Debt).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>        
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Non-Deductable
                    </Text>
                    <Text>
                      ${Number(allAccounts?.HH_Non_Deductible_Debt) ? Number(allAccounts?.HH_Non_Deductible_Debt).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>  
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      HH Income
                    </Text>
                    <Text>
                      ${Number(allAccounts?.HH_Total_Income_p_a) ? Number(allAccounts?.HH_Total_Income_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>     
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Debt to Income
                    </Text>
                    <Text>
                      ${Number(allAccounts?.Debt_to_Income) ? Number(allAccounts?.Debt_to_Income).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>   
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Total Value Current Assets
                    </Text>
                    <Text>
                      ${Number(allAccounts?.Total_Value_Current_Assets) ? Number(allAccounts?.Total_Value_Current_Assets).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View> 
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Total Value Fin Assets
                    </Text>
                    <Text>
                      ${Number(allAccounts?.Total_Value_Fin_Account_Assets) ? Number(allAccounts?.Total_Value_Fin_Account_Assets).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      LVR
                    </Text>
                    <Text>
                      ${Number(allAccounts?.Formula_4) ? Number(allAccounts?.Formula_4).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>
                  <View style={[styles.summary1]}>
                    <Text
                      style={[
                        styles.loremIpsumIs,
                        styles.myExercisesTypo,
                      ]}
                    >
                      Equity
                    </Text>
                    <Text>
                      ${Number(allAccounts?.Equity1) ? Number(allAccounts?.Equity1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.listOfAccounts]}>List of Accounts</Text>
                  {debtFAccounts?.length > 0 &&
                    debtFAccounts?.map((account: any) => {
                      if (account?.Plan_Name != null) {
                        return (
                          <View style={[styles.account]}>
                            <View style={[styles.accountContent]}>
                              <Text style={[styles.accountName]}>{account?.Plan_Name ? account?.Plan_Name : "N/A"}</Text>
                              <Text style={[styles.accountValue]}>
                                ${Number(account?.Life_Cover) ? Number(account?.Life_Cover).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                              </Text>
                            </View>
                            <Image
                              style={{ width: 80, height: 80, resizeMode: "cover" }}
                              source={require("../../assets/link.png")}
                            />
                          </View>
                        )
                      }
                    })}
                </View>
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
                              if (note?.Current == "Yes" && note?.Module == "Debtonate Debt") {
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
                              if (note?.Current == "Yes" && note?.Module == "r") {
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
        : <View style={styles.debtonateDebt}>
          {/* <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
          <CustomHeader name={"Super Sorted"} type={2} />
          <Text style={styles.dataNotAvailable}>Data not available</Text> */}
          <Loader visible={loading} />
        </View>}
    </>
  );
};

const styles = StyleSheet.create({
  listOfAccounts: {
    color: Color.black,
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  accountValue: {
    color: "#F6A326",
    marginTop: 4,
    fontWeight: "800",
    fontSize: 14,
  },
  accountName: {
    color: Color.black,
    fontSize: 16,
    fontWeight: "500",
  },
  account: {
    // borderColor: "#F6A326",
    // borderWidth: 1,
    backgroundColor: "#FFF9F1",
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    height: 80
  },
  accountContent: {
    // borderColor: "#F6A326",
    // borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center', // Align content to the end (right)
    paddingRight: 10, // Add right padding
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
  debtonateDebtScrollViewContent: {
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
  debtonateDebt: {
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

export default DebtonateDebt;
