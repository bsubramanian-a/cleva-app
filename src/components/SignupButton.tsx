import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import {useNavigation} from '@react-navigation/native';

const SignupButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('PasswordLogin')} style={[styles.signupButton, styles.mt40]}>
      <Text style={styles.signupWithEmail}>Signup with email</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  signupWithEmail: {
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textMediumBoldText1,
    color: Color.textGrey2,
    textAlign: "center",
  },
  signupButton: {
    alignSelf: "stretch",
    borderRadius: Border.br_md,
    borderStyle: "solid",
    borderColor: "#8b8783",
    borderWidth: 2,
    height: 70,
    overflow: "hidden",
    padding: Padding.p_2xs,
    alignItems: "center",
    justifyContent: "center",
    color: Color.gray_200,
  },
});

export default SignupButton;
