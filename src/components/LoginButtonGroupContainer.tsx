import * as React from "react";
import { useMemo, useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Platform,
} from "react-native";
import GoogleLogin from "../components/GoogleLogin";
import LoginButton from "../components/LoginButton";
import { LoginManager, AccessToken, GraphRequestManager, GraphRequest } from 'react-native-fbsdk-next';
import {
  Margin,
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";
import AppleLogin from "./AppleLogin";
import { useSafeAreaFrame } from "react-native-safe-area-context";

type LoginButtonGroupContainerType = {
  socialLoginImageUrl?: ImageSourcePropType;
  socialLoginText?: string;
  acceptToContinue?: string;
  navigation:any;
  onVerifyEmail:Function;
  /** Style props */
  propBackgroundColor?: string;
  showRMessage?:Function
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
  onVerifyEmail,
  showRMessage
}: LoginButtonGroupContainerType) => {
  const [loginError, setLoginError] = useState("");
  const appleLoginStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const handleFacebookLogin = async () => {
    try {
      setLoginError("");
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      console.log("result", result);
      if (result.isCancelled) {
        throw new Error('User cancelled login');
      }

      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw new Error('Something went wrong obtaining the access token');
      }
      const accessToken = data.accessToken;
      console.log("accessToken", accessToken);

      // Request additional user data, such as email
      const graphRequest = new GraphRequest('/me', {
        accessToken,
        parameters: {
          fields: {
            string: 'id,name,email',
          },
        },
      }, (error, response) => {
        if (error) {
          console.log('Error retrieving user data: ', error);
        } else {
          const { id, name, email }:any = response;
          console.log('User data:', { id, name, email });
          // Perform further actions with the obtained user data
        }
      });

      // Execute the graph request
      new GraphRequestManager().addRequest(graphRequest).start();
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };

  return (
    <View style={[styles.buttonGroup, styles.mt72, styles.appleLoginFlexBox]}>
      <View style={styles.socialLogin}>
        {loginError && <Text style={{textAlign: 'center', color: 'red', marginBottom: 10}}>Login failed, please try different method</Text>}
        <GoogleLogin onVerifyEmail={onVerifyEmail} setLoginError={setLoginError} />
        {Platform.OS === 'android' && <Pressable
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
        </Pressable>}

        {Platform.OS === 'ios' && <AppleLogin onVerifyEmail={onVerifyEmail} showRMessage={showRMessage} setLoginError={setLoginError}/>}
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
