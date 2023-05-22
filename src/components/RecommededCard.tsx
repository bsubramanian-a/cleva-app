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
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
} from "../GlobalStyles";

type RecommededCardType = {
  frame510?: ImageSourcePropType;
  vuesaxlineararrowRight?: ImageSourcePropType;

  /** Style props */
  recommeded1MarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const RecommededCard = ({
  recommeded1MarginLeft,
  frame510,
  vuesaxlineararrowRight,
}: RecommededCardType) => {
  const recommeded1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", recommeded1MarginLeft),
    };
  }, [recommeded1MarginLeft]);

  return (
    <View style={[styles.recommeded1, styles.recommeded1Bg, recommeded1Style]}>
      <Image
        style={styles.recommeded1Child}
        resizeMode="cover"
        source={frame510}
      />
      <View style={[styles.frameParent, styles.mt13]}>
        <View>
          <Text style={styles.tedLasso}>Ted Lasso</Text>
          <Text style={[styles.appleTv, styles.mt7]}>Apple TV</Text>
        </View>
        <View
          style={[styles.vuesaxlineararrowRightWrapper, styles.recommeded1Bg]}
        >
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={vuesaxlineararrowRight}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt7: {
    marginTop: Margin.m_5xs,
  },
  mt13: {
    marginTop: 13,
  },
  recommeded1Bg: {
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  recommeded1Child: {
    width: 280,
    height: 144,
    borderRadius: 16,
  },
  tedLasso: {
    fontSize: 15,
    fontWeight: "500",
    fontFamily: FontFamily.textMediumBoldText1,
    color: Color.black,
    textAlign: "left",
    marginBottom: 7
  },
  appleTv: {
    fontSize: 14,
    fontFamily: FontFamily.openSansRegular,
    color: '#4B4B4B',
    textAlign: "left",
  },
  vuesaxlineararrowRightIcon: {
    width: 18,
    height: 18,
  },
  vuesaxlineararrowRightWrapper: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#ef9f27",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: "center",
    justifyContent: "space-between",
  },
  recommeded1: {
    shadowColor: "rgba(32, 34, 36, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 10,
    borderRadius: 16,
  },
});

export default RecommededCard;
