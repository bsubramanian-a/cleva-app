import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import LoginButtonGroupContainer from "../components/LoginButtonGroupContainer";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

const LoginSignup1 = () => {
  return (
    <ScrollView
      style={styles.loginsignup}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.loginSignupScrollViewContent}
    >
      <View style={styles.loginOrSignupParent}>
        <Text style={styles.loginOrSignupContainer}>
          <Text style={styles.loginOr}>Login or</Text>
          <Text style={styles.signup}>signup</Text>
        </Text>
        <Text style={[styles.weRecommendUsingContainer, styles.mt33]}>
          <Text style={styles.loginOr}>We recommend using Google or</Text>
          <Text style={styles.loginOr}>
            Facebook - it’ll save you time filling in
          </Text>
          <Text style={styles.signup}>forms later.</Text>
        </Text>
      </View>
      <LoginButtonGroupContainer
        socialLoginImageUrl={require("../assets/iconmarkets-logoappstore.png")}
        socialLoginText="Login with Apple"
        propBackgroundColor="#000"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt33: {
    marginTop: Margin.m_xs,
  },
  mt72: {
    marginTop: Margin.m_xl,
  },
  loginSignupScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 32,
    paddingTop: 110,
    paddingBottom: 32,
  },
  loginOr: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  signup: {
    margin: Margin.m_3xs,
  },
  loginOrSignupContainer: {
    fontSize: FontSize.size_lg,
    // fontFamily: FontFamily.sourceSerifPro,
    color: Color.dark1,
    textAlign: "left",
  },
  weRecommendUsingContainer: {
    fontSize: FontSize.textMediumBoldText1_size,
    // fontFamily: FontFamily.openSansRegular,
    color: Color.black,
    textAlign: "left",
  },
  loginOrSignupParent: {
    alignSelf: "stretch",
  },
  loginsignup: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default LoginSignup1;
