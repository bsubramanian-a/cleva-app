import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";
import ThreeDotMenu from "./ThreeDotMenu";

type HeaderBackType = {
  vuesaxlineararrowLeft?: ImageSourcePropType;
  getStarted?: string;
  goBack?:Function;
  subject?: ""
  /** Style props */
  pageHeadingMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const HeaderBack = ({
  vuesaxlineararrowLeft,
  pageHeadingMarginLeft,
  getStarted,
  goBack,
  subject
}: HeaderBackType) => {
  const pageHeadingStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", pageHeadingMarginLeft),
    };
  }, [pageHeadingMarginLeft]);

  const options = [
    { label: 'Delete', onClick: console.log("delete"), icon: require("../assets/trashAcc.png") },
  ];

  return (
    <View style={[styles.topMenu, styles.mt_12, styles.topMenuFlexBox, subject && {borderBottomColor: "#dddd", borderBottomWidth: 1, paddingBottom: 20}]}>
      <Pressable style={styles.menu} onPress={goBack}>
        <Image
          style={styles.vuesaxlineararrowLeftIcon}
          resizeMode="cover"
          source={vuesaxlineararrowLeft}
        />
      </Pressable>
      {subject != '' ? 
        <View style={[styles.ml83, {flexDirection: 'row', gap: 6, marginLeft: 18}]}>
          <Image
            style={styles.user_img}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
          <View
            style={[
              styles.pageHeading,
              // styles.topMenuFlexBox,
              pageHeadingStyle,
              {flexDirection: 'column', flex: 0}
            ]}
          >
            <Text style={styles.getStarted}>{getStarted}</Text>
            <Text>{subject}</Text>
          </View>
        </View> :
        <View
          style={[
            styles.pageHeading,
            styles.ml83,
            styles.topMenuFlexBox,
            pageHeadingStyle,
          ]}
        >
          <Text style={styles.getStarted}>{getStarted}</Text>
          <Text>{subject}</Text>
        </View>
      }
      {subject != '' && <View style={{marginLeft: 'auto'}}>
        <ThreeDotMenu icon={require('../assets/more1.png')} options={options}/>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  user_img:{
    width: 40,
    height: 40
  },
  ml83: {
    // marginLeft: 60,
    justifyContent: 'center'
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
  getStarted: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.black,
    textAlign: "center",
  },
  pageHeading: {
    flex: 1,
    alignItems: "center",
  },
  topMenu: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_lg,
    paddingBottom: Padding.p_5xl,
    alignItems: "center",
  },
});

export default HeaderBack;
