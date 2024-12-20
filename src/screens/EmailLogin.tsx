import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import EmailInput from "../components/EmailInput";
import { Margin, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
import actions from "../../actions";
import Loader from "../components/Loader";
import CKeyboard from "../components/CKeyboard";

const EmailLogin = ({ navigation,route }: any) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [user_type, setUserType] = useState(route.params.user_type);
  console.log("user_type", user_type)
  // useEffect(() => {
  //   setEmail("testawebon1@gmial.com")
  //   console.log("setting email")
  // })

  // const getJournals = async() => {
  //   const res = await actions.getUserData();
  //   console.log("res", res)
  // }

  const onVerifyEmail = async () => {
    setLoading(true);
    setError("");
    try {
      const res: any = await actions.verifyEmail({
        email, user_type: user_type
      });
      console.log('res1==>>>>>', res);
      if (res?.isUserExist === true) {
        // navigation.navigate('OTPScreen', { user_type: route.params.user_type })
        navigation.navigate('PasswordLogin', { user_type: user_type })
        
      } else {
        setError("User doesn't exist, please register first");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error raised', error);
    }
  };

  return (
    <View style={[styles.emailLogin, styles.emailLoginSpaceBlock]}>
      <Loader visible={loading} />
      <CKeyboard>
        <View style={styles.heading}>
          {user_type == "user" ?
          <Text style={styles.loginWithEmailContainer}>
            <Text style={styles.login}>Login</Text>  {'\n'}
            <Text style={styles.withEmail}>with email</Text>
          </Text>
          :
          <Text style={styles.loginWithEmailContainer}>
            <Text style={styles.login}>Coach Login</Text>  {'\n'}
            <Text style={styles.withEmail}>with email</Text>
          </Text>
          }
          {/* <CKeyboard></CKeyboard> */}
          <EmailInput
            emailInputPlaceholder="Email"
            emailInputPaddingTop="unset"
            emailInputPaddingRight="unset"
            emailInputPaddingBottom="unset"
            emailInputJustifyContent="flex-start"
            emailInputPaddingHorizontal={0}
            emailInputPaddingVertical={18}
            emailInputMarginTop={48}
            setText={setEmail}
          />
          {error != "" &&
            <Text style={{ color: 'red' }}>{error}</Text>
          }
        </View>
        <View
          style={[styles.nextprevious, styles.emailLoginSpaceBlock]}
        >
          <Pressable onPress={() => navigation.navigate("LoginSignup", { user_type: user_type })} style={styles.next}>
            <Image
              style={styles.iconleftarrow}
              resizeMode="cover"
              source={require("../assets/iconarrow.png")}
            />
          </Pressable>
          <Pressable onPress={email != "" ? onVerifyEmail : undefined} style={styles.next}>
            <Image
              style={styles.iconrightarrow}
              resizeMode="cover"
              source={email != "" ? require("../assets/iconarrow1.png") : require("../assets/iconrightarrow.png")}
            />
            <Text style={[styles.next1, email != "" && { color: '#000' }]}>NEXT</Text>
          </Pressable>
        </View>
      </CKeyboard>
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
    paddingBottom: 12,
    overflow: "hidden",
  },
  login: {
    marginStart: 0,
    marginBlockEnd: 0,
    fontFamily: FontFamily.sourceSerifPro,
  },
  withEmail: {
    margin: Margin.m_3xs,
    fontFamily: FontFamily.sourceSerifPro,
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
    // fontSize: FontSize.textMediumBoldText1_size,
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
    paddingTop: 24,
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
function useQuery(arg0: string, getJournalsQuery: any): { data: any; error: any; isLoading: any; } {
  throw new Error("Function not implemented.");
}

