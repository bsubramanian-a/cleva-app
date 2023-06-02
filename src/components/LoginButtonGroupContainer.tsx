import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import GoogleLogin from "../components/GoogleLogin";
import LoginButton from "../components/LoginButton";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import {
  Margin,
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

type LoginButtonGroupContainerType = {
  socialLoginImageUrl?: ImageSourcePropType;
  socialLoginText?: string;
  acceptToContinue?: string;
  navigation:any;
  onVerifyEmail:Function;
  /** Style props */
  propBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const LoginButtonGroupContainer = ({
  socialLoginImageUrl,
  socialLoginText,
  propBackgroundColor,
  acceptToContinue,
  navigation,
  onVerifyEmail
}: LoginButtonGroupContainerType) => {

  const appleLoginStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const handleFacebookLogin = async () => {
    try {
      // Log in with Facebook
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        // Get the access token
        const accessToken = await AccessToken.getCurrentAccessToken();

        if (accessToken) {
          console.log('Access token:', accessToken.accessToken);
        } else {
          console.log('Failed to get access token');
        }
      }
    } catch (error) {
      console.log('Login failed:', error);
    }
  };

  return (
    <View style={[styles.buttonGroup, styles.mt72, styles.appleLoginFlexBox]}>
      <View style={styles.socialLogin}>
        <GoogleLogin onVerifyEmail={onVerifyEmail} />
        <Pressable
         onPress={handleFacebookLogin}
          style={[
            styles.appleLogin,
            styles.mt32,
            styles.appleLoginFlexBox,
            appleLoginStyle,
          ]}
        >
          <Image
            style={styles.iconsocialNetworkfacebook}
            resizeMode="cover"
            source={socialLoginImageUrl}
          />
          <Text style={[styles.loginWithFacebook, styles.ml66]}>
            {socialLoginText}
          </Text>
        </Pressable>
      </View>
      <Text style={[styles.or, styles.mt40]}>Or</Text>
      <View style={[styles.socialLogin, styles.mt40]}>
        <LoginButton
          loginButtonMarginTop="unset"
          acceptToContinue={acceptToContinue}
        />
        {/* <SignupButton /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml66: {
    marginLeft: Margin.m_lg,
  },
  mt32: {
    marginTop: 32,
  },
  mt40: {
    marginTop: Margin.m_sm,
  },
  appleLoginFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  iconsocialNetworkfacebook: {
    width: 28,
    height: 28,
  },
  loginWithFacebook: {
    flex: 1,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    textAlign: "left",
    fontSize: FontSize.textMediumBoldText1_size,
    color: Color.white1,
  },
  appleLogin: {
    borderRadius: Border.br_md,
    backgroundColor: Color.royalblue,
    // shadowColor: "#e3a99d",
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
    color: Color.white1,
  },
  socialLogin: {
    alignSelf: "stretch",
  },
  or: {
    fontFamily: FontFamily.openSansRegular,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.textMediumBoldText1_size,
  },
  buttonGroup: {
    justifyContent: "center",
  },
});

export default LoginButtonGroupContainer;
