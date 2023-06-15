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
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import config from "../../config/config";
import { useEffect } from "react";
import actions from "../../actions";

const GoogleLogin = ({onVerifyEmail}:any) => {
  // console.log("config", config.googleWebClientId);
  GoogleSignin.configure({
    webClientId: config.googleWebClientId,
    offlineAccess: true, // if you need to access user data while offline
    iosClientId: "443739967199-aqt4tluhchtf41d9vue0djdcs956i03b.apps.googleusercontent.com",
  });
  
  useEffect(() => {
    // Check if the user is already signed in on component mount
    GoogleSignin.isSignedIn().then((isSignedIn) => {
      if (isSignedIn) {
        // User is signed in, handle your logic here
        actions.logout();
      } else {
        // User is not signed in, handle your logic here
      }
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // User signed in successfully, handle your logic here
      // console.log("userInfo", userInfo?.user?.email);
      const email = userInfo?.user?.email;
      onVerifyEmail(email);
    } catch (error:any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // User cancelled the sign-in flow
          console.log('Sign in canceled');
        }else if (error.code === statusCodes.IN_PROGRESS) {
        // Sign-in is already in progress
        console.log('Sign-in is already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services are not available
        console.log('Play services are not available');
      } else {
        // Other error occurred
        console.log('Sign in error: ', error.message);
      }
    };
  }
  
  return (
    <Pressable style={styles.googleLogin} onPress={signIn}>
      <Image
        style={styles.google2Icon}
        resizeMode="cover"
        source={require("../assets/google-2.png")}
      />
      <Text style={[styles.loginWithGoogle, styles.ml66]}>
        Login with Google
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml66: {
    marginLeft: Margin.m_lg,
  },
  google2Icon: {
    width: 26,
    height: 26,
  },
  loginWithGoogle: {
    flex: 1,
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    textAlign: "left",
    color: Color.dark1,
  },
  googleLogin: {
    alignSelf: "stretch",
    borderRadius: Border.br_md,
    backgroundColor: Color.white1,
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

export default GoogleLogin;
