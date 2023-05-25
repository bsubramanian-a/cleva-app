import * as React from "react";
import { useMemo, useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Padding } from "../GlobalStyles";

type EmailInputType = {
  emailInputPlaceholder?: string;

  /** Style props */
  emailInputPaddingTop?: number | string;
  emailInputPaddingRight?: number | string;
  emailInputPaddingBottom?: number | string;
  emailInputJustifyContent?: string;
  emailInputPaddingHorizontal?: number | string;
  emailInputPaddingVertical?: number | string;
  emailInputMarginTop?: number | string;
  setText?:any;
  isPassword?:boolean;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PasswordInput = ({
  emailInputPlaceholder,
  emailInputPaddingTop,
  emailInputPaddingRight,
  emailInputPaddingBottom,
  emailInputJustifyContent,
  emailInputPaddingHorizontal,
  emailInputPaddingVertical,
  emailInputMarginTop,
  setText,
  isPassword
}: EmailInputType) => {
  const emailInputStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingTop", emailInputPaddingTop),
      ...getStyleValue("paddingRight", emailInputPaddingRight),
      ...getStyleValue("paddingBottom", emailInputPaddingBottom),
      ...getStyleValue("justifyContent", emailInputJustifyContent),
      ...getStyleValue("paddingHorizontal", emailInputPaddingHorizontal),
      ...getStyleValue("paddingVertical", emailInputPaddingVertical),
      ...getStyleValue("marginTop", emailInputMarginTop),
    };
  }, [
    emailInputPaddingTop,
    emailInputPaddingRight,
    emailInputPaddingBottom,
    emailInputJustifyContent,
    emailInputPaddingHorizontal,
    emailInputPaddingVertical,
    emailInputMarginTop,
  ]);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor={"#AAA9A8"}
        secureTextEntry={!isPasswordVisible}
        onChangeText={(text) => setText(text)}
      />
      <TouchableOpacity
        style={styles.eyeIconContainer}
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        <Image
          style={styles.eyeIcon}
          source={
            isPasswordVisible
              ? require('../assets/eye.png')
              : require('../assets/eye_closed.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: "solid",
    borderColor: "#eba947",
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#000'
  },
  eyeIconContainer: {
    padding: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  emailInput: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#eba947",
    borderBottomWidth: 1,
    fontSize: 16,
    overflow: "hidden",
    flexDirection: "row",
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_sm,
    justifyContent: "space-between",
  },
});

export default PasswordInput;
