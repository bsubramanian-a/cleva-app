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
import SignupButton from "../components/SignupButton";
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
}: LoginButtonGroupContainerType) => {
  const appleLoginStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.buttonGroup, styles.mt72, styles.appleLoginFlexBox]}>
      <View style={styles.socialLogin}>
        <GoogleLogin />
        <Pressable
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
    // fontFamily: FontFamily.textMediumBoldText1,
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
    // fontFamily: FontFamily.openSansRegular,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.textMediumBoldText1_size,
  },
  buttonGroup: {
    justifyContent: "center",
  },
});

export default LoginButtonGroupContainer;
