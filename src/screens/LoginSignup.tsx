import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import LoginButtonGroupContainer from "../components/LoginButtonGroupContainer";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";
import { useState } from "react";
import actions from "../../actions";
import Loader from "../components/Loader";
import { showMessage } from "react-native-flash-message";
import { useCustomFlashMessage } from "../components/CustomFlashMessage";

const LoginSignup = ({navigation, route}:any) => {
  const { showFlashMessage } = useCustomFlashMessage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const showRMessage = (message:string, mtype:string) => {
    // console.log("showRMessage", message, mtype);
    // showMessage({
    //   message: mtype == 'success' ? 'Success' : 'Failed',
    //   description: message,
    //   type: mtype == 'success' ? 'success' : 'danger',
    // });

    if(mtype == 'success'){
      showFlashMessage(message, 'success');
    }else{
      showFlashMessage(message, 'failure');
    }
  }
  const onVerifyAppleEmail = async (email:string, apple_user_id:string) => {
    setLoading(true);
    setError("");
    try {
      const res:any = await actions.verifyAppleEmail({
        email, apple_user_id, user_type: route.params.type
      });
      console.log('res==>>>>>', res);
      if(res?.status){
        if(res?.status == "failed"){
          setError(res?.message);
        }
      }else{
        setError("User doesn't exist, please register first");
        actions.logout();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error raised', error);
    }
  };

  const onVerifyEmail = async (email:string) => {
    setLoading(true);
    setError("");
    try {
      const res:any = await actions.verifySocialEmail({
        email, user_type: route.params.type
      });
      console.log('res==>>>>>', res);
      if(res?.status){
        // navigation.navigate('PasswordLogin')
      }else{
        setError("User doesn't exist, please register first");
        actions.logout();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error raised', error);
    }
  };

  return (
    <ScrollView
      style={styles.loginsignup}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.loginSignupScrollViewContent}
    >
      <Loader visible={loading} />
      {error != "" && 
        <Text style={{color: 'red'}}>{error}</Text>
      }
      <View style={styles.loginOrSignupParent}>
        <Text style={styles.loginOrSignupContainer}>
          <Text style={styles.loginOr}>Login or
          {'\n'}
          signup</Text>
        </Text>
        <Text style={[styles.weRecommendUsingContainer, styles.mt33]}>
          We recommend using Google or
          {'\n'}
            Facebook - it’ll save your time filling in
          {'\n'}forms later.
        </Text>
      </View>
      <LoginButtonGroupContainer
        socialLoginImageUrl={require("../assets/iconsocial-networkfacebook.png")}
        socialLoginText="Login with Facebook"
        propBackgroundColor="#2e54d9"
        acceptToContinue="Login with email"
        navigation={navigation}
        onVerifyEmail={onVerifyEmail}
        onVerifyAppleEmail={onVerifyAppleEmail}
        showRMessage={showRMessage}
        user_type= {route.params.user_type}
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
    paddingTop: 40,
    paddingBottom: 32,
  },
  loginOr: {
    marginStart: 0,
    marginBlockEnd: 0,
    fontWeight: "400",
  },
  signup: {
    margin: Margin.m_3xs,
    fontWeight: "300",
  },
  loginOrSignupContainer: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.dark1,
    textAlign: "left",
  },
  weRecommendUsingContainer: {
    fontSize: 16,
    fontFamily: FontFamily.openSansRegular,
    color: "#273242",
    fontWeight: "400",
    textAlign: "left",
    marginBottom: 10
  },
  loginOrSignupParent: {
    alignSelf: "stretch",
    marginVertical: 42
  },
  loginsignup: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default LoginSignup;
