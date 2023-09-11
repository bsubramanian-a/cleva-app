import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import LoginButtonGroupContainer from "../components/LoginButtonGroupContainer";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";
import { useState } from "react";
import actions from "../../actions";
import Loader from "../components/Loader";
import { showMessage } from "react-native-flash-message";
import { useCustomFlashMessage } from "../components/CustomFlashMessage";
import LoginBtn from "../components/LoginBtn";
import DropdownComponent from "../components/DropdownComponent";

const UserType = ({navigation}:any) => {
  const { showFlashMessage } = useCustomFlashMessage();
  const [type, setType] = useState("");

  const login = () => {
    if(type == ""){
      showFlashMessage("Please select user type", "failure");
      return;
    }

    navigation.navigate('LoginSignup', { user_type: type });
  }

  return (
    <ScrollView
      style={styles.loginsignup}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.loginSignupScrollViewContent}
    >
      <View style={styles.loginOrSignupParent}>
        <Text style={styles.loginOrSignupContainer}>
          <Text style={styles.loginOr}>Select user type</Text>
        </Text>
      </View>

      <DropdownComponent
        values={[{ label: 'Advisor Coach', value: 'advisor_coach' }, { label: 'User', value: 'user' }]}
        defaultValue={type}
        onValueChange={(value: any) => setType(value)}
      /> 

      <LoginBtn cstyles={styles.mt33} onPress={login}/>
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

export default UserType;
