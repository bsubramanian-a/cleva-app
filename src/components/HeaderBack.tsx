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
  goBack?: Function;
  subject?: ""
  /** Style props */
  pageHeadingMarginLeft?: number | string;
  deleteChat?: Function;
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
  subject,
  deleteChat
}: HeaderBackType) => {
  const pageHeadingStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", pageHeadingMarginLeft),
    };
  }, [pageHeadingMarginLeft]);

  const options = [
    { label: 'Delete', onClick: deleteChat, icon: require("../assets/trashAcc.png") },
  ];

  const getInitials = (name = "") => {
    const initials = name
      ? name.split(' ').length === 1
        ? name.substring(0, 2)
        : name
          .split(' ')
          .map((word: string) => word.charAt(0))
          .join('')
      : '';

    return initials;
  }
  return (
    <View style={[styles.topMenu, styles.topMenuFlexBox, subject ? { borderBottomColor: "#dddd", borderBottomWidth: 1, paddingBottom: 10 } : null]}>
      {vuesaxlineararrowLeft && <Pressable style={styles.menu} onPress={(e) => goBack?.(e)}>
        <Image
          style={styles.vuesaxlineararrowLeftIcon}
          resizeMode="cover"
          source={vuesaxlineararrowLeft}
        />
      </Pressable>}
      {subject != '' ?
        <View style={[styles.ml83, { flexDirection: 'row', gap: 6, marginLeft: 18 }]}>
          <View style={[styles.initialWrapper, { backgroundColor: "#fbb142" }]}>
            <Text style={styles.initialText}>{getInitials(getStarted)}</Text>
          </View>
          <View
            style={[
              styles.pageHeading,
              // styles.topMenuFlexBox,
              pageHeadingStyle,
              { flexDirection: 'column', flex: 0, alignItems: 'flex-start' }
            ]}
          >
            <Text style={styles.getStarted}>{getStarted}</Text>
            <Text style={{ color: '#000' }}>{subject}</Text>
          </View>
        </View> :
        <View
          style={[
            styles.pageHeading,
            getStarted && !(getStarted.length > 22) ? styles.ml83 : null,
            styles.topMenuFlexBox,
            pageHeadingStyle,
          ]}
        >
          <Text style={styles.getStarted}>{getStarted}</Text>
          <Text>{subject}</Text>
        </View>
      }
      {subject != '' && <View style={{ marginLeft: 'auto' }}>
        <ThreeDotMenu icon={require('../assets/more1.png')} options={options} />
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  initialWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  initialText: {
    color: '#fff'
  },
  user_img: {
    width: 40,
    height: 40
  },
  ml83: {
    // marginLeft: 60,
    // justifyContent: 'center'
    paddingLeft: "22%"
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
    overflow: "hidden",
    padding: Padding.p_6xs,
    borderWidth: 0,
    borderColor: '#fbb142'
  },
  getStarted: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: FontFamily.TiemposHeadlineBold,
    color: Color.black,
    borderWidth: 0,
    borderColor: '#fbb142'
  },
  pageHeading: {
    flex: 1,
    borderWidth: 0,
    borderColor: '#fbb142',
    textAlign: 'center'
  },
  topMenu: {
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingBottom: Padding.p_7xs
  },
});

export default HeaderBack;
