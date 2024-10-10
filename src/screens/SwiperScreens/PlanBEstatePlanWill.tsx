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

const PlanBEstatePlanWill = () => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const data = route.params?.item;
  console.log("data", data)
  const [loading, setLoading] = useState(false);
  // const exercises = useSelector((state: any) => state.data.exercises);
  // const summary = useSelector((state: any) => state.data.summary);
  // const advices = useSelector((state: any) => state.data.advices);
  const planBEstatePlanWill = useSelector((state: any) => state.data.planBEstatePlanWill);
  // const supersorted = useSelector((state: any) => state.data.supersorted);
  // const rollingAccountBalance: any = useSelector((state: any) => state.data.rollingAccountBalance);
  const notes = useSelector((state: any) => state.data.notes);
  const coachnotes = useSelector((state: any) => state.data.coachnotes);
  const profile = useSelector((state: any) => state.data.profile);
  // const assets = useSelector((state: any) => state.data.assets);
  // const liabilities = useSelector((state: any) => state.data.liabilities);
  // const [totalNetWorth, setTotalNetWorth] = useState<number>(0);

  console.log("profile", profile);
  // // console.log("advices", advices);
  // console.log("supersorted", supersorted);
  // console.log("rollingAccountBalance", rollingAccountBalance);
  console.log("notes", notes);
  console.log("coachnotes", coachnotes);
  console.log("planBEstatePlanWill", planBEstatePlanWill);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [activeUserTab, setActiveUserTab] = useState(0);

  const [totalCurrentBalance, setTotalCurrentBalance] = useState<number>(0);
  const [balanceByOwner, setBalanceByOwner] = useState<any>(null);
  const [charData, setChartData] = useState<any>(null);
  const [performanceData, setPerformanceData] = useState<any>(null);
  const [assetData, setAssetData] = useState<any>(null);
  const users = ["User 1 : Daniel", "User 2: Fleur"];
  const [user1Image, setUser1Image] = useState<any>("");

  useEffect(() => {
    if (profile[0]?.Record_Image) {
      setUser1Image("https://www.zohoapis.com/crm/v2/Contacts/"+profile[0]?.Record_Image+"/photo")
    }
  }, [profile]);

  // useEffect(() => {
  //   if (rollingAccountBalance && Object.keys(rollingAccountBalance).length > 0) {
  //     // Perform calculations here
  //     console.log('rollingAccountBalance loaded:', rollingAccountBalance);
  //     setData(rollingAccountBalance)
  //   }
  // }, [rollingAccountBalance]);

  // useEffect(() => {
  //   if (supersorted && supersorted.length > 0) {
  //     // Perform calculations here
  //     console.log('supersorted loaded:', supersorted);
  //     setPData(supersorted)
  //     setAData(supersorted)
  //   }
  // }, [supersorted]);

  // const setPData = (supersorted: any) => {
  //   const performanceData = [
  //     ['', '6M', '1Y', '3Y', '5Y'],
  //     ['Actual', supersorted[0].Month_Actual + "%", supersorted[0].Year_Actual1 + "%",supersorted[0].Year_Actual2 + "%",supersorted[0].Year_Actual + "%"],
  //     ['Benchmark', supersorted[0].Month_Benchmark + "%", supersorted[0].Year_Benchmark2 + "%",supersorted[0].Year_Benchmark + "%",supersorted[0].Year_Benchmark1 + "%"],
  //     ['Outperformance', supersorted[0].Month_Outperformance + "%", supersorted[0].Year_Outperformance + "%",supersorted[0].Year_Outperformance2 + "%",supersorted[0].Year_Outperformance1 + "%"],
  //   ];
  //   setPerformanceData(performanceData);
  // }

  // const setAData = (supersorted: any) => {
  //   const assetData = [
  //     ['Actual Asset Allocation Total', supersorted[0].Formula_2 ?? 0, 'Target Asset Allocation Total', supersorted[0].Formula_1 ?? 0],
  //     ['International Equities', (supersorted[0].International_Equities_Actual ?? 0) + "%", (supersorted[0].International_Equities ?? 0) + "%", 'Australian Equities', (supersorted[0].Australian_Equities_Actual ?? 0) + "%", (supersorted[0].Australian_Equities ?? 0) + "%"],
  //     ['Property', (supersorted[0].Property_Actual ?? 0) + "%", (supersorted[0].Property ?? 0) + "%", 'Infrastructure', (supersorted[0].Infrastructure_Actual ?? 0) + "%", (supersorted[0].Infrastructure ?? 0) + "%"],
  //     ['International Fixed Income', (supersorted[0].Intnl_Fixed_Income_Actual ?? 0) + "%", (supersorted[0].Intnl_Fixed_Income ?? 0) + "%", 'Australian Fixed Income', (supersorted[0].Aust_Fixed_Income_Actual ?? 0) + "%", (supersorted[0].Aust_Fixed_Income ?? 0) + "%"],
  //   ];

  //   setAssetData(assetData);
  // }

  // const setData = (rollingAccountBalance: any) => {
  //   // 1) Find the total of all Current_Balance
  //   const totalCurrentBalance = rollingAccountBalance.reduce((acc: any, item: { Current_Balance: any; }) => acc + item.Current_Balance, 0);
  //   console.log("Total Current Balance:", totalCurrentBalance);

  //   setTotalCurrentBalance(totalCurrentBalance);

  //   // 2) Find the total Current_Balance grouped by owner name
  //   const balanceByOwner = rollingAccountBalance.reduce((acc: { [x: string]: any; }, item: { Owner: { name: any; }; Current_Balance: any; }) => {
  //     const ownerName = item.Owner.name;
  //     acc[ownerName] = (acc[ownerName] || 0) + item.Current_Balance;
  //     return acc;
  //   }, {});
  //   console.log("Balance by Owner:", balanceByOwner);

  //   setBalanceByOwner(balanceByOwner);

  //   // 3) Create an array of unique As_At_Date for the current year and month
  //   const currentYear = new Date().getFullYear();
  //   const uniqueAsAtDates = rollingAccountBalance
  //     .filter((item: { As_At_Date: string | number | Date; }) => {
  //       const asAtDate = new Date(item.As_At_Date);
  //       return asAtDate.getFullYear() === currentYear;
  //     })
  //     .map((item: { As_At_Date: string | number | Date; }) => {
  //       const date = new Date(item.As_At_Date);
  //       return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
  //     })
  //     .filter((value: any, index: any, self: string | any[]) => self.indexOf(value) === index);
  //   console.log("Unique As_At_Dates:", uniqueAsAtDates);

  //   const currentBalanceByOwnerAndDate = rollingAccountBalance.reduce((acc: { [x: string]: { [x: string]: any; }; }, item: { Owner: { name: any; }; As_At_Date: string | number | Date; Current_Balance: any; }) => {
  //     const ownerName = item.Owner.name;
  //     const asAtDate = new Date(item.As_At_Date);
  //     const dateKey = `${asAtDate.toLocaleString('en-US', { month: 'short' })} ${asAtDate.getDate()}`;

  //     if (!acc[dateKey]) {
  //       acc[dateKey] = {};
  //     }

  //     if (!acc[dateKey][ownerName]) {
  //       acc[dateKey][ownerName] = 0;
  //     }

  //     acc[dateKey][ownerName] += item.Current_Balance;
  //     return acc;
  //   }, {});

  //   // Convert the object to an array of objects
  //   const currentBalanceArray = Object.entries(currentBalanceByOwnerAndDate).map(([date, balances]) => ({
  //     date,
  //     balances
  //   }));

  //   console.log("Current Balance by Owner and Date:", currentBalanceArray);

  //   const colors = ['rgba(151, 85, 182, 1)', 'rgba(239, 159, 39, 1)'];

  //   // Create the desired JSON structure
  //   const data = {
  //     labels: uniqueAsAtDates,
  //     datasets: Object.entries(currentBalanceByOwnerAndDate).map(([date, balances] : any, index) => ({ // Assuming only one owner per date
  //       data: Object.values(balances),
  //       color: (opacity = 1) => colors[index % colors.length], // Adjust color as needed
  //       strokeWidth: 2 // Adjust strokeWidth as needed
  //     })),
  //     legend: Object.keys(balanceByOwner)
  //   };

  //   console.log(data);

  //   setChartData(data);
  // }

  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const handleSubTabPress = (tabNumber: number) => {
    setActiveSubTab(tabNumber);
  };

  const handleUserTabPress = (tabNumber: number) => {
    setActiveUserTab(tabNumber);
  };

  // useEffect(() => {
  //   let totalAssets = 0;
  //   let totalLiabilities = 0;

  //   if (assets?.length > 0) {
  //     totalAssets = parseFloat(assets.reduce((sum: number, item: any) => sum + item.Current_Value, 0)?.toFixed(2));
  //   }

  //   if (liabilities?.length > 0) {
  //     totalLiabilities = parseFloat(liabilities.reduce((sum: number, item: any) => sum + item.Current_Value, 0)?.toFixed(2));
  //   }

  //   setTotalNetWorth(parseFloat((totalAssets - totalLiabilities)?.toFixed(1)));
  // }, [assets, liabilities])

  useEffect(() => {

    // Trigger the fetch when the navigation state changes
    navigation.addListener('focus', getDatas);

    // Cleanup the listener when the component unmounts
    return () => {
      navigation.removeListener('focus', getDatas);
    };

  }, [navigation])


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

  const chartConfig = {
    color: (opacity = 1) => `rgba(0,0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
  };

  // const lineGraphData = {
  //   labels: ["Jun 18", "Jun 19"],
  //   datasets: [
  //     {
  //       data: [275032],
  //       color: (opacity = 1) => `rgba(239, 159, 39, ${opacity})`, // optional
  //       strokeWidth: 2 // optional
  //     },
  //     {
  //       data: [550081, 275046],
  //       color: (opacity = 1) => `rgba(151, 85, 182, ${opacity})`, // optional
  //       strokeWidth: 2 // optional
  //     }
  //   ],
  //   legend: ["Dan Rake", "Daniel Rake"] // optional
  // };



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
                  tabs={users}
                  activeTab={activeUserTab}
                  onTabPress={handleUserTabPress}
                  type="tab"
                />
                {activeUserTab == 0 &&
                  <>
                    <View style={[styles.advicecontainer]}>
                      <Text style={[styles.adviceAssignedBy, styles.summaryTypo]}>
                      User 1 
                      </Text>
                      <View
                        style={[styles.advice2, styles.advice2Layout, styles.adviceBg]}
                      >
                        <View style={[styles.advice1Parent, styles.mt10]}>

                          {profile[0]?.Record_Image && 
                            <>
                            <Text>{profile[0]?.Record_Image}:{user1Image}</Text>
                            <Image source={{ uri: user1Image }} style={{ width: 500, height: 500,borderWidth: 1 }} />
                            </>                            
                          }
                        
                        </View>
                      </View>
                    </View>
                  </>
                }
                {activeUserTab == 1 &&
                  <>
                    <View style={[styles.advicecontainer]}>
                      <Text style={[styles.adviceAssignedBy, styles.summaryTypo]}>
                        User 2
                      </Text>
                      <View
                        style={[styles.advice2, styles.advice2Layout, styles.adviceBg]}
                      >
                        <View style={[styles.advice1Parent, styles.mt10]}>
                          <Text>User 2</Text>
                        </View>
                      </View>
                    </View>
                  </>
                }
                {/*           
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
                </View>*/}
                {/* <View style={[styles.balance]}>
                  <Text style={[styles.balanceText]}>${totalCurrentBalance?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                  <Text>{Object.keys(balanceByOwner)[0]} : ${balanceByOwner[Object.keys(balanceByOwner)[0]]?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                  {Object.keys(balanceByOwner)[1] && <Text>{Object.keys(balanceByOwner)[1]} : ${balanceByOwner[Object.keys(balanceByOwner)[1]]?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>}
                  

                  <Text style={[styles.balanceNextLine]}>Balance</Text>
                </View> */}
                {/* <View>
                  {charData && <LineChart
                    data={charData}
                    width={screenWidth - 10}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    yAxisLabel="$"
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      borderRadius: 16
                    }}
                  />}
                </View> */}
                {/* <View>
                  <Text style={styles.performance}>Performance</Text>
                  <PerformanceTable performanceData={performanceData} />
                </View>
                <View>
                  <Text style={styles.performance}>Asset Allocation</Text>
                  <AssetAllocation assetData={assetData} />
                </View> */}
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
        : <View style={styles.planBEstatePlanWill}>
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
