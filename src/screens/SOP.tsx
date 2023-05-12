import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import LoginButton from "../components/LoginButton";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";

const SOP = () => {  
  return (
    <View>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="SOP" type={2}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mt24: {
    marginTop: Margin.m_2xs,
  },
  aQuickCheck: {
    marginStart: 0,
    marginBlockEnd: 0,
  },
  fromTheLawyers: {
    margin: Margin.m_3xs,
  },
  aQuickCheckContainer: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.dark1,
    textAlign: "left",
  },
  heading: {
    alignSelf: "stretch",
  },
  beforeYouGet: {
    fontFamily: FontFamily.openSansRegular,
  },
  whatToKnow: {
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
  },
  beforeYouGetContainer: {
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    color: Color.black,
    textAlign: "left",
    alignSelf: "stretch",
  },
  termsAndCondition: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_lg,
  },
});

export default SOP;
