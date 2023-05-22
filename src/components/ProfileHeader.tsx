import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import {
  Margin,
  Border,
  Color,
  Padding,
  FontFamily,
} from "../GlobalStyles";
import actions from "../../actions";

const ProfileHeader = ({name, goBack}:any) => {
  return (
    <View style={[styles.topMenu, styles.mt_12, styles.topMenuFlexBox]}>
      <Pressable style={styles.menu} onPress={goBack}>
        <Image
          style={styles.vuesaxlineararrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowleft4.png")}
        />
      </Pressable>
      <View style={[styles.pageHeading, styles.topMenuFlexBox]}>
        <Text style={styles.profile}>{name}</Text>
      </View>
      <Pressable style={[styles.pageHeading, styles.topMenuFlexBox]} onPress={actions.logout}>
        <Text style={styles.logout}>Logout</Text>
        <Image
          style={[styles.vuesaxlinearloginIcon, styles.ml5]}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearlogin.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: Margin.m_7xs,
  },
  topMenuFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  vuesaxlineararrowLeftIcon: {
    width: 22,
    height: 22,
  },
  menu: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.snow,
    overflow: "hidden",
    padding: Padding.p_6xs,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: FontFamily.textMediumBoldText1,
    color: Color.black,
    textAlign: "center",
  },
  pageHeading: {
    alignItems: "center",
  },
  logout: {
    fontSize: 14,
    textDecoration: "underline",
    fontFamily: FontFamily.openSansRegular,
    color: '#EF9F27',
    fontWeight: "400",
    textAlign: "right",
    marginRight: 4
  },
  vuesaxlinearloginIcon: {
    width: 18,
    height: 18,
  },
  topMenu: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_lg,
    paddingBottom: Padding.p_5xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProfileHeader;
