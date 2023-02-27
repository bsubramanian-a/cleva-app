import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

type HeaderBackType = {
  vuesaxlineararrowLeft?: ImageSourcePropType;
  getStarted?: string;

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
}: HeaderBackType) => {
  const pageHeadingStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", pageHeadingMarginLeft),
    };
  }, [pageHeadingMarginLeft]);

  return (
    <View style={[styles.topMenu, styles.mt_12, styles.topMenuFlexBox]}>
      <View style={styles.menu}>
        <Image
          style={styles.vuesaxlineararrowLeftIcon}
          resizeMode="cover"
          source={vuesaxlineararrowLeft}
        />
      </View>
      <View
        style={[
          styles.pageHeading,
          styles.ml83,
          styles.topMenuFlexBox,
          pageHeadingStyle,
        ]}
      >
        <Text style={styles.getStarted}>{getStarted}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml83: {
    marginLeft: 83,
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
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifProSemibold,
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
