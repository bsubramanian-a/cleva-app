import React, { useEffect, useState } from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Dimensions } from "react-native";
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
import CustomHeader from "../components/CustomHeader";
import Tabs from "../components/Tab";
import Slider from "../components/Slider";
import actions from "../../actions";
import { useSelector } from "react-redux";
import CircleProgressBar from "../components/CircleProgressBar";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";

const Home = () => {
  const navigation:any = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const journals = useSelector((state:any) => state.data.journals);
  const assets = useSelector((state:any) => state.data.assets);
  const liabilities = useSelector((state:any) => state.data.liabilities);
  const [totalAssets, setTotalAssets] = useState<number>(0);
  const [totalLiabilities, setTotalLiabilities] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  
  const handleTabPress = (tabNumber:number) => {
    if(tabNumber != 0){
      if(tabNumber == 1){
        navigation.navigate('Profile');
      }else{
        navigation.navigate('WealthAssets');
      }
    }
  };

  useEffect(() => {
    getDatas();
  }, [])

  const getDatas = async() => {
    await actions.getProfile();
    await actions.getJournals();
    await actions.getAssets();
    await actions.getLiabilities();
    setLoading(false);
  }

  useEffect(() => {
    if(assets?.length > 0){
      setTotalAssets(parseFloat(assets.reduce((sum:number, item:any) => sum + item.Current_Value, 0)?.toFixed(2)));
    }
  }, [assets])

  useEffect(() => {
    if(liabilities?.length > 0){
      setTotalLiabilities(parseFloat(liabilities.reduce((sum:number, item:any) => sum + item.Current_Value, 0)?.toFixed(2)));
    }
  }, [liabilities])


  // const cards = [
  //   { id: 1, text: 'Card 1', progress: 10 },
  //   { id: 2, text: 'Card 2', progress: 20 },
  //   { id: 3, text: 'Card 3', progress: 30 },
  //   { id: 4, text: 'Card 4', progress: 40 },
  //   { id: 5, text: 'Card 5', progress: 50 },
  //   { id: 6, text: 'Card 6', progress: 60 },
  //   { id: 7, text: 'Card 7', progress: 70 },
  //   { id: 8, text: 'Card 8', progress: 80 },
  //   { id: 9, text: 'Card 9', progress: 90 },
  //   { id: 10, text: 'Card 10', progress: 100 },
  // ];

  return (
    <View
      style={styles.home}
    >
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Cleva" type={1}/>
      <Loader visible={loading} />
      <ScrollView
        style={styles.herosectionParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        {/* <HeroSection /> */}
        {journals?.length > 0 && <Slider items={journals}/>}
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <Tabs
              tabs={['Wealth', 'Accounts', 'SOP']}
              activeTab={activeTab}
              onTabPress={handleTabPress}
            />
            {/* <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
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
            </View> */}
            {activeTab == 0 &&
              <View
                style={[styles.frameView, styles.mt30, styles.frameSpaceBlock]}
              >
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View style={[styles.frameItemLayout]}>
                    {/* <Text>Total Asset= {totalAssets / (totalAssets + totalLiabilities)}</Text>
                    <Text>Total Liabilities= {totalLiabilities / (totalAssets + totalLiabilities)}</Text> */}
                  <CircleProgressBar
                      progress1={ totalLiabilities / totalAssets }
                      total={totalAssets}
                      radius={(totalAssets - totalLiabilities) > 10000 ? (totalAssets - totalLiabilities)?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")?.length * 10 : 60}
                      strokeWidth={14}
                      color1={'#EF9F27'}
                      color2={'#944C9F'}
                      netWorth={(totalAssets - totalLiabilities)?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    />
                    {/* <View style={styles.netWorthParent}>
                      <Text style={[styles.netWorth, styles.netWorthClr]}>
                        Net Worth
                      </Text>
                      <Text style={[styles.text, styles.mt5, styles.textClr]}>
                        <Text style={styles.text1}>$</Text>
                        <Text style={styles.text2}>{(totalAssets - totalLiabilities)?.toFixed(1)}</Text>
                      </Text>
                    </View> */}
                  </View>
                  <View style={[styles.wealthParent, styles.totalWealth]}>
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
                          <Text style={styles.text2}>{totalAssets?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.rectangleParent]}>
                      <View
                        style={[styles.rectangleView, styles.frameInnerLayout]}
                      />
                      <View style={[styles.wealthParent, styles.ml8]}>
                        <Text style={styles.seeAllTypo}>Total Liabilities</Text>
                        <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                          <Text style={styles.text1}>$</Text>
                          <Text style={styles.text2}>{totalLiabilities?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* <View style={[styles.editBtnParent, styles.mt28]}>
                  <View style={{width: ((Dimensions.get('window').width - 75) / 100) * 35}}>
                    <EditBtn navigation={navigation} edit="Edit" />
                  </View>
                  <View style={{width: ((Dimensions.get('window').width - 75) / 100) * 60}}>
                    <AssumptionBtn navigation={navigation} />
                  </View>
                </View> */}
              </View>
            }
          </View>
          <View style={[styles.frameParent3, styles.mt20]}>
            <View style={styles.frameWrapper}>
              <View style={[styles.eventsParent, styles.eventsParentFlexBox]}>
                <Text style={styles.events}>Events</Text>
                <Text style={[styles.seeAll]}>See All</Text>
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
                vuesaxlinearclock={require("../assets/vuesaxlinearclock.png")}
              />
            </ScrollView>
          </View>
          <View style={[styles.frameParent3, styles.mt20, {marginBottom: 20}]}>
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
                vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright.png")}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  totalWealth:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20
  },
  mt_12: {
    marginTop: 12,
  },
  mt5: {
    marginTop: 5,
  },
  ml51: {
    marginLeft: 5,
  },
  mt7: {
    marginTop: 7,
  },
  ml8: {
    marginLeft: 8,
  },
  mt26: {
    marginTop: 26,
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
    marginTop: 20,
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
    fontFamily: FontFamily.openSansRegular,
    color: '#4b4b4b',
    fontSize: 14,
  },
  frameItemLayout: {
    // height: 130,
    // width: 130,
  },
  netWorthClr: {
    color: '#4b4b4b',
    fontSize: 14,
    textAlign: "left",
  },
  textClr: {
    color: Color.gray_200,
    textAlign: "left",
  },
  frameInnerLayout: {
    height: 40,
    width: 3,
    borderRadius: Border.br_md,
  },
  eventsParentFlexBox: {
    width: 350,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 14
  },
  // mainvector1Icon: {
  //   width: 164,
  //   height: 63,
  //   overflow: "hidden",
  // },
  // mainvector1Parent: {
  //   backgroundColor: "transparent",
  //   alignSelf: "stretch",
  // },
  wealth: {
    fontWeight: "500",
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.goldenrod,
    fontSize: FontSize.size_sm,
  },
  frameChild: {
    backgroundColor: Color.goldenrod,
    width: 20,
    height: 3,
    borderRadius: Border.br_md,
  },
  wealthParent: {
    justifyContent: "center",
  },
  accounts: {
    color: Color.gray_200,
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
    fontFamily: FontFamily.openSansRegular,
  },
  text1: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "bold",
    color: '#262627',
    fontSize: 16
  },
  text2: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "bold",
    color: '#262627',
    fontSize: 16
  },
  text: {
    fontSize: 15,
  },
  netWorthParent: {
    top: 43,
    left: 31,
    position: "absolute",
    alignItems: "center",
  },
  frameInner: {
    backgroundColor: Color.goldenrod,
  },
  text3: {
    fontSize: FontSize.size_sm,
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
    flexDirection: "column",
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
    borderRadius: 16,
    shadowColor: "rgba(32, 34, 36, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 40,
    shadowOpacity: 0.04,
    borderColor: "#ffeccf",
    borderWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    borderStyle: "solid",
    alignSelf: "stretch",
    backgroundColor: Color.white1,
  },
  events: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.black,
    textAlign: "left",
  },
  seeAll: {
    textAlign: "right",
    color: '#EF9F27',
    fontFamily: FontFamily.openSansRegular,
    fontSize: 14,
  },
  eventsParent: {
    justifyContent: "space-between",
    marginBottom: 14
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
    padding: Padding.p_md,
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
