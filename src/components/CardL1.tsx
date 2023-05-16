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

type CardL1Type = {
  frame510?: ImageSourcePropType;

  /** Style props */
  thank1MarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CardL1 = ({ thank1MarginLeft, frame510 }: CardL1Type) => {
  const thank1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", thank1MarginLeft),
    };
  }, [thank1MarginLeft]);

  return (
    <View style={[styles.thank1, thank1Style]}>
      <Image style={styles.thank1Child} resizeMode="cover" source={frame510} />
      <View style={[styles.findingTheBalanceBetweenOvParent, styles.mt13]}>
        <Text style={styles.findingTheBalance}>
          Finding the balance between ove...
        </Text>
        <View style={[styles.calendarParent, styles.mt7]}>
          <Image
            style={styles.calendarIcon}
            resizeMode="cover"
            source={require("../assets/calendar.png")}
          />
          <Text style={[styles.friday, styles.ml4]}>Friday</Text>
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
  thank1Child: {
    width: 280,
    height: 144,
    borderRadius: 16,
  },
  findingTheBalance: {
    fontSize: 15,
    fontWeight: "600",
    // fontFamily: FontFamily.textMediumBoldText1,
    color: Color.black,
    textAlign: "left",
  },
  calendarIcon: {
    width: 16,
    height: 16,
  },
  friday: {
    fontSize: 14,
    // fontFamily: FontFamily.openSansRegular,
    color: '#4B4B4B',
    fontWeight: '400',
    textAlign: "left",
  },
  calendarParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  findingTheBalanceBetweenOvParent: {
    paddingLeft: 7,
  },
  thank1: {
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
    paddingHorizontal: 5,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_sm,
    borderRadius: 16,
    marginRight: 15
  },
});

export default CardL1;
