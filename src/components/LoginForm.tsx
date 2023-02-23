import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import EmailInput from "../components/EmailInput";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

const LoginForm = () => {
  return (
    <View style={styles.heading}>
      <Text style={styles.loginWithEmailContainer}>
        <Text style={styles.login}>Login</Text>  {'\n'}
        <Text style={styles.withEmail}>with email</Text>
      </Text>
      <View style={[styles.heading, styles.mt48]}>
        <EmailInput emailInputPlaceholder="Password" />
        <Text style={[styles.forgetPassword, styles.mt42]}>
          Forget password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt42: {
    marginTop: 42,
  },
  mt48: {
    marginTop: Margin.m_md,
  },
  login: {
    marginBlockStart: 0,
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
  forgetPassword: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    color: Color.cadetblue,
    textAlign: "left",
  },
  heading: {
    alignSelf: "stretch",
  },
});

export default LoginForm;
