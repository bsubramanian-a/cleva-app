import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import CKeyboard from '../components/CKeyboard';
import Loader from '../components/Loader';
import { Color, FontFamily, FontSize, Margin, Padding } from '../GlobalStyles';
import actions from '../../actions';
import { useSelector } from 'react-redux';

const OTPScreen = ({ navigation, route }: any) => {
  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const email = useSelector((state: any) => state.auth.email);

  const handleOTPTyping = (code: any) => {
    console.log("handleOTPTyping", code);
    setOTP(code);
  };

  const otpVerify = async () => {
    setLoading(true);
    setError("");
    try {
      const res: any = await actions.verifyOTP({
        otp,
        email
      });
      console.log('res==>>>>>', res);
      if (res?.isCorrect === true) {
        navigation.navigate('PasswordLogin', { user_type: route.params.user_type })
      } else {
        setError(res?.error);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error raised', error);
    }
  }

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <CKeyboard>
        <View style={styles.heading}>
          <Text style={styles.loginWithEmailContainer}>
            <Text style={styles.login}>Enter the</Text>  {'\n'}
            <Text style={styles.login}>OTP</Text>  {'\n'}
          </Text>
          {error != "" &&
            <Text style={{ color: 'red' }}>{error}</Text>
          }
          <View style={styles.otpContainer}>
            <OtpInputs
              handleChange={handleOTPTyping}
              numberOfInputs={6}
              autofillFromClipboard={false}
              inputStyles={styles.inputStyles}
            />
          </View>
        </View>
        <View
          style={[styles.nextprevious, styles.emailLoginSpaceBlock]}
        >
          <Pressable onPress={() => navigation.navigate("EmailLogin", { user_type: route.params.user_type })} style={styles.next}>
            <Image
              style={styles.iconleftarrow}
              resizeMode="cover"
              source={require("../assets/iconarrow.png")}
            />
          </Pressable>
          <Pressable onPress={otp != "" ? otpVerify : undefined} style={styles.next}>
            <Image
              style={styles.iconrightarrow}
              resizeMode="cover"
              source={otp != "" ? require("../assets/iconarrow1.png") : require("../assets/iconrightarrow.png")}
            />
            <Text style={[styles.next1, otp != "" && { color: '#000' }]}>NEXT</Text>
          </Pressable>
        </View>
      </CKeyboard>
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    width: '80%', // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputStyles: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    fontSize: 24,
    width: 40,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  mt48: {
    marginTop: Margin.m_md,
  },
  mt120: {
    marginTop: Margin.m_2xl,
  },
  emailLoginSpaceBlock: {
    paddingBottom: 25,
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
    marginTop: 50
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

export default OTPScreen;
