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
    marginTop: Margin.m_xs,
  },
  recommeded1Bg: {
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  recommeded1Child: {
    width: 280,
    height: 144,
    borderRadius: Border.br_sm,
  },
  tedLasso: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSerifProSemibold,
    color: Color.black,
    textAlign: "left",
  },
  appleTv: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.outfitRegular,
    color: Color.darkslategray_100,
    textAlign: "left",
  },
  vuesaxlineararrowRightIcon: {
    width: 18,
    height: 18,
  },
  vuesaxlineararrowRightWrapper: {
    borderRadius: Border.br_2xs,
    borderStyle: "solid",
    borderColor: "#ef9f27",
    borderWidth: 1,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_6xs,
  },
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: Padding.p_7xs,
    paddingRight: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "space-between",
  },
  recommeded1: {
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_9xs,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_sm,
    borderRadius: Border.br_sm,
  },
});

export default RecommededCard;
