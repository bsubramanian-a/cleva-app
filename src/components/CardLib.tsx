import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import {
  Margin,
  Border,
  FontSize,
  FontFamily,
  Color,
  Padding,
} from "../GlobalStyles";

type CardLibType = {
  frame510?: ImageSourcePropType;
  calendar?: ImageSourcePropType;

  /** Style props */
  mojo1MarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CardLib = ({ mojo1MarginLeft, frame510, calendar }: CardLibType) => {
  const mojo1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", mojo1MarginLeft),
    };
  }, [mojo1MarginLeft]);

  return (
    <View style={[styles.mojo1, mojo1Style]}>
      <Image style={styles.mojo1Child} resizeMode="cover" source={frame510} />
      <View style={[styles.thePowerOfSelfParent, styles.mt13]}>
        <Text style={styles.thePowerOf}>The power of self-...</Text>
        <View style={[styles.calendarParent, styles.mt7]}>
          <Image
            style={styles.calendarIcon}
            resizeMode="cover"
            source={calendar}
          />
          <Text style={[styles.jan2023, styles.ml4]}>9 Jan 2023</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  mt7: {
    marginTop: 7,
  },
  mt13: {
    marginTop: 13,
  },
  mojo1Child: {
    width: "100%",
    height: 144,
    borderRadius: 16,
  },
  thePowerOf: {
    fontSize: 18,
    fontWeight: "500",
    // fontFamily: FontFamily.textMediumBoldText1,
    color: Color.black,
    textAlign: "left",
  },
  calendarIcon: {
    width: 16,
    height: 16,
  },
  jan2023: {
    fontSize: FontSize.size_base,
    // fontFamily: FontFamily.outfitRegular,
    color: Color.darkslategray_100,
    textAlign: "left",
  },
  calendarParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  thePowerOfSelfParent: {
    paddingLeft: Padding.p_7xs,
  },
  mojo1: {
    backgroundColor: Color.white1,
    shadowColor: "rgba(32, 34, 36, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    overflow: "hidden",
    borderRadius: 16,
    paddingHorizontal: 5,
    paddingVertical: 5,
    paddingBottom: 10
  },
});

export default CardLib;
