import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import {
  Margin,
  Border,
  Color,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const ProfileHeader = () => {
  return (
    <View style={[styles.topMenu, styles.mt_12, styles.topMenuFlexBox]}>
      <View style={styles.menu}>
        <Image
          style={styles.vuesaxlineararrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowleft4.png")}
        />
      </View>
      <View style={[styles.pageHeading, styles.topMenuFlexBox]}>
        <Text style={styles.profile}>Profile</Text>
      </View>
      <Pressable style={[styles.pageHeading, styles.topMenuFlexBox]}>
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
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifProSemibold,
    color: Color.black,
    textAlign: "center",
  },
  pageHeading: {
    alignItems: "center",
  },
  logout: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontFamily: FontFamily.outfitRegular,
    color: Color.orange_100,
    textAlign: "right",
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
