import * as React from "react";
import { Pressable, Image, StyleSheet, Text } from "react-native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
import { showMessage } from "react-native-flash-message";

const AppleLogin = ({onVerifyEmail, showRMessage, setLoginError}:any) => {
  
  const handleAppleLogin = async () => {
    try {
      setLoginError("");
      // Start the Apple authentication request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
  
      // Get the user's credential details
      const { user, email, fullName } = appleAuthRequestResponse;
  
      // Use the received credential details for further processing
      onVerifyEmail(email, user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable style={[styles.appleLogin, {marginTop: 30}]} onPress={handleAppleLogin}>
      <Image
        style={styles.iconmarketsLogoappstore}
        resizeMode="cover"
        source={require("../assets/iconmarkets-logoappstore.png")}
      />
      <Text style={[styles.loginWithApple, styles.ml66]}>Login with Apple</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml66: {
    marginLeft: Margin.m_lg,
  },
  iconmarketsLogoappstore: {
    width: 28,
    height: 28,
  },
  loginWithApple: {
    flex: 1,
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    textAlign: "left",
    color: Color.white1,
  },
  appleLogin: {
    alignSelf: "stretch",
    borderRadius: Border.br_md,
    backgroundColor: Color.black,
    shadowColor: "#e1a698",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 70,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    color: Color.dark1,
  },
});

export default AppleLogin;
