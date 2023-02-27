import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import EmailInput from "../components/EmailInput";
import { Margin, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const EmailLogin = ({navigation}:any) => {
  return (
    <View style={[styles.emailLogin, styles.emailLoginSpaceBlock]}>
      <View style={styles.heading}>
        <Text style={styles.loginWithEmailContainer}>
          <Text style={styles.login}>Login</Text>  {'\n'}
          <Text style={styles.withEmail}>with email</Text>
        </Text>
        <EmailInput
          emailInputPlaceholder="Email"
          emailInputPaddingTop="unset"
          emailInputPaddingRight="unset"
          emailInputPaddingBottom="unset"
          emailInputJustifyContent="flex-start"
          emailInputPaddingHorizontal={0}
          emailInputPaddingVertical={18}
          emailInputMarginTop={48}
        />
      </View>
      <View
        style={[styles.nextprevious, styles.mt120, styles.emailLoginSpaceBlock]}
      >
        <Image
          style={styles.iconleftarrow}
          resizeMode="cover"
          source={require("../assets/iconarrow.png")}
        />
        <Pressable onPress={() => navigation.navigate('PasswordLogin')} style={styles.next}>
          <Image
            style={styles.iconrightarrow}
            resizeMode="cover"
            source={require("../assets/iconrightarrow.png")}
          />
          <Text style={styles.next1}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt48: {
    marginTop: Margin.m_md,
  },
  mt120: {
    marginTop: Margin.m_2xl,
  },
  emailLoginSpaceBlock: {
    paddingBottom: Padding.p_lg,
    overflow: "hidden",
  },
  login: {
    marginStart: 0,
    marginBlockEnd: 0,
  },
  withEmail: {
    margin: Margin.m_3xs,
  },
  loginWithEmailContainer: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.dark1,
    textAlign: "left",
  },
  heading: {
    alignSelf: "stretch",
  },
  iconleftarrow: {
    width: 20,
    height: 20,
    resizeMode: 'cover'
  },
  iconrightarrow: {
    width: "28.17%",
    right: "0%",
    bottom: 1,
    left: "71.83%",
    maxWidth: "100%",
    position: "absolute",
    height: 20,
    overflow: "hidden",
  },
  next1: {
    top: 0,
    left: 0,
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    color: "#aaa9a8",
    textAlign: "right",
    position: "absolute",
  },
  next: {
    width: 71,
    height: 22,
  },
  nextprevious: {
    flexDirection: "row",
    paddingTop: Padding.p_2xs,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  emailLogin: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_xl,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
});

export default EmailLogin;
