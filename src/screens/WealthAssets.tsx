import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderBack from "../components/HeaderBack";
import AssetsWealth from "../components/AssetsWealth";
import IconEditBtn from "../components/IconEditBtn";
import {
  Margin,
  Padding,
  Border,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles";
import WealthTab from "../components/WealthTab";
import { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";

const WealthAssets = () => {
  const navigation: any = useNavigation();
  const assets = useSelector((state: any) => state.data.assets);
  const liabilities = useSelector((state: any) => state.data.liabilities);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <View
      style={styles.wealthAssets}
    >
      <Loader visible={loading} />
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <CustomHeader name="Your Wealth" type={2} />
      <ScrollView
        style={styles.wealthTabParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <WealthTab tabs={['Assets', 'Liabilities']}
          activeTab={activeTab}
          onTabPress={handleTabPress} />
        <View style={styles.advicecontainer}>
          {
            activeTab == 0 ?
              <AssetsWealth setLoading={setLoading} loading={loading} datas={assets} type="asset" />
              :
              <AssetsWealth setLoading={setLoading} loading={loading} datas={liabilities} type="liability" />
          }
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '48%' }} onPress={() => navigation.navigate('AddWealth', { type: activeTab == 0 ? 'asset' : 'liability' })}>
            <LinearGradient
              style={[styles.bottom, styles.bottomFlexBox]}
              locations={[0, 1]}
              colors={["#fbb142", "#f6a326"]}
              useAngle={true}
              angle={180}
            >
              <Image
                style={styles.vuesaxlinearedit2Icon}
                resizeMode="cover"
                source={require("../assets/add.png")}
              />
              <Text style={[styles.edit, styles.ml4]}>Add</Text>
            </LinearGradient>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '48%' }} onPress={() => navigation.navigate('EditWealth', { type: activeTab == 0 ? 'asset' : 'liability' })}>
            <LinearGradient
              style={[styles.bottom, styles.bottomFlexBox]}
              locations={[0, 1]}
              colors={["#fbb142", "#f6a326"]}
              useAngle={true}
              angle={180}
            >
              <Image
                style={styles.vuesaxlinearedit2Icon}
                resizeMode="cover"
                source={require("../assets/vuesaxlinearedit2.png")}
              />
              <Text style={[styles.edit, styles.ml4]}>Edit</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: 'center',
    gap: 7
  },
  ml4: {
    marginLeft: 4,
  },
  vuesaxlinearedit2Icon: {
    width: 18,
    height: 18,
  },
  edit: {
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.openSansRegular,
    color: Color.white1,
    textAlign: "center",
  },
  bottomFlexBox: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  mt_12: {
    marginTop: Margin.m_10xs,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  wealthAssetsContent: {
    flexDirection: "column",
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tabFlexBox1: {
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    flex: 1,
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
  assets: {
    fontWeight: "500",
    fontFamily: FontFamily.outfitMedium,
    color: Color.orange_100,
    textAlign: "left",
    fontSize: FontSize.textMediumBoldText_size,
  },
  tab1: {
    backgroundColor: Color.orange_200,
    paddingHorizontal: Padding.p_9xl,
  },
  liabilities: {
    fontFamily: FontFamily.outfitRegular,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.textMediumBoldText_size,
  },
  tab2: {
    backgroundColor: Color.gray_900,
    paddingHorizontal: Padding.p_7xl,
  },
  tabbar: {
    borderRadius: 16,
    shadowColor: "rgba(32, 34, 36, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    padding: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
  wealthTab: {
    paddingHorizontal: Padding.p_md,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  advicecontainer: {
    alignSelf: "stretch",
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
    borderStyle: "solid",
    backgroundColor: Color.white1,
    marginHorizontal: 24
  },
  bottom: {
    width: "98%",
    paddingHorizontal: 5,
    paddingVertical: 14,
    alignSelf: 'center',
    borderRadius: 60,
    marginTop: 28
  },
  wealthTabParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  wealthAssets: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
});

export default WealthAssets;
