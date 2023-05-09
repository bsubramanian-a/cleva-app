import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/LoginForm";
import { Margin, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
import actions from "../../actions";
import { useSelector } from "react-redux";

const PasswordLogin = ({navigation}:any) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const email = useSelector((state:any) => state.auth.email);
  
  const onLogin = async () => {
    console.log("password", password, "email", email)
    setError("");
    try {
      const res:any = await actions.login({
        email,
        password,
      });
      console.log('res==>>>>>', res);

      if(res?.status){
        if(res?.status == 403){
          setError(res?.message);
        }else{
          navigation.navigate('Goals')
        }
      }else{
        navigation.navigate('Goals')
      }
    } catch (error) {
      console.log('error raised', error);
    }
  };
  
  return (
    <View style={[styles.passwordLogin, styles.nextpreviousSpaceBlock]}>
      <LoginForm setText={setPassword}/>
      {error != "" && 
          <Text>{error}</Text>
      }
      <View
        style={[
          styles.nextprevious,
          styles.mt120,
          styles.nextpreviousSpaceBlock,
        ]}
      >
        <Image
          style={styles.iconarrowLayout}
          resizeMode="cover"
          source={require("../assets/iconarrow.png")}
        />
        <Pressable onPress={onLogin} style={styles.next}>
          <Image
            style={[
              styles.iconarrow1,
              styles.loginPosition,
              styles.iconarrowLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconarrow1.png")}
          />
          <Text style={[styles.login, styles.loginPosition]}>LOGIN</Text>
        </Pressable>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt120: {
    marginTop: Margin.m_2xl,
  },
  nextpreviousSpaceBlock: {
    paddingBottom: Padding.p_lg,
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
    left: -10,
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    color: Color.dark1,
    textAlign: "right",
  },
  next: {
    width: 71,
    height: 22,
  },
  nextprevious: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: Padding.p_2xs,
    justifyContent: "space-between",
  },
  passwordLogin: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_xl,
  },
});

export default PasswordLogin;
