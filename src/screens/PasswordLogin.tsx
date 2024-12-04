import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/LoginForm";
import { Margin, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
import actions from "../../actions";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import CKeyboard from "../components/CKeyboard";

const PasswordLogin = ({ navigation, route }: any) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const email = useSelector((state: any) => state.auth.email);
  const email = "testawebon3@gmail.com";
  const [user_type, setUserType] = useState("user");

  const onLogin = async () => {
    setLoading(true);
    setError("");
    try {
      // const res: any = await actions.login({
      //   email,
      //   password,
      //   user_type: route.params.user_type
      // });
      const res: any = await actions.login({
        email,
        password,
        user_type
      });
      console.log('res5==>>>>>', res);

      if (res?.status) {
        if (res?.status == 403) {
          setError(res?.message);
        } else {
          // navigation.navigate('Goals')
        }
      } else {
        // navigation.navigate('Goals')
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error raised', error);
    }
  };

  return (
    <View style={[styles.passwordLogin, styles.nextpreviousSpaceBlock]}>
      <Loader visible={loading} />
      <CKeyboard>
        <LoginForm setText={setPassword} error={error} initialValue={password} />

        <View
          style={[
            styles.nextprevious,
            styles.nextpreviousSpaceBlock,
          ]}
        >
          <Pressable onPress={() => navigation.navigate('EmailLogin')}>
            <Image
              style={styles.iconarrowLayout}
              resizeMode="cover"
              source={require("../assets/iconarrow.png")}
            />
          </Pressable>

          <Pressable onPress={password != "" ? onLogin : undefined} style={styles.next}>
            <Image
              style={[
                styles.iconarrow1,
                styles.loginPosition,
                styles.iconarrowLayout,
              ]}
              resizeMode="cover"
              source={password != "" ? require("../assets/iconarrow1.png") : require("../assets/iconrightarrow.png")}
            />
            <Text style={[styles.login, styles.loginPosition, password != "" && { color: '#000' }]}>LOGIN</Text>
          </Pressable>

        </View>
      </CKeyboard>
    </View>
  );
};

const styles = StyleSheet.create({
  nextpreviousSpaceBlock: {
    paddingBottom: 12,
    overflow: "hidden",
  },
  loginPosition: {
    top: 0,
    position: "absolute",
  },
  iconarrowLayout: {
    height: 20,
    width: 20,
  },
  iconarrow1: {
    left: 51,
  },
  login: {
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    color: '#aaa9a8',
  },
  next: {
    width: 71,
    height: 22,
  },
  nextprevious: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 24,
    justifyContent: "space-between",
  },
  passwordLogin: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_lg,
    paddingTop: 80,
  },
});

export default PasswordLogin;
