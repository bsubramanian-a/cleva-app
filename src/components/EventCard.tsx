import * as React from "react";
import { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ImageSourcePropType,
} from "react-native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

type EventCardType = {
  frame510?: ImageSourcePropType;
  prop?: string;
  pM?: string;
  vuesaxlinearclock?: ImageSourcePropType;

  /** Style props */
  event1MarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const EventCard = ({
  event1MarginLeft,
  frame510,
  prop,
  pM,
  vuesaxlinearclock,
}: EventCardType) => {
  const event1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", event1MarginLeft),
    };
  }, [event1MarginLeft]);

  return (
    <View style={[styles.event1, event1Style]}>
      <ImageBackground
        style={styles.event1Inner}
        resizeMode="cover"
        source={frame510}
      >
        <View style={styles.jan14Wrapper}>
          <View style={styles.jan14}>
            <Text style={styles.jan}>{`Jan `}</Text>
            <Text style={styles.text}>{prop}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={[styles.aMojoMembersMParent, styles.mt13]}>
        <Text style={styles.aMojoMembers}>A Mojo Members M..</Text>
        <View style={[styles.vuesaxlinearclockParent, styles.mt7]}>
          <Image
            style={styles.vuesaxlinearclockIcon}
            resizeMode="cover"
            source={vuesaxlinearclock}
          />
          <Text style={[styles.pm, styles.ml4]}>{pM}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: Margin.m_8xs,
  },
  mt7: {
    marginTop: Margin.m_5xs,
  },
  mt13: {
    marginTop: 10,
  },
  jan: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center'
  },
  jan14: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontFamily: FontFamily.outfitSemibold,
    color: Color.white1,
    textAlign: "center",
    fontWeight: "600",
  },
  jan14Wrapper: {
    borderRadius: 12,
    backgroundColor: '#EAEAEA99',
    borderStyle: "solid",
    borderColor: "#eaeaea",
    borderWidth: 1,
    padding: 5,
    overflow: "hidden",
    margin: 7,
    height: 50,
    textAlign: "center",
  },
  event1Inner: {
    width: 150,
    height: 144,
    justifyContent: "flex-end",
    padding: Padding.p_7xs,
    flexDirection: "row",
    borderRadius: Border.br_sm,
  },
  aMojoMembers: {
    fontSize: 15,
    fontFamily: FontFamily.textMediumBoldText1,
    color: '#000',
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 5
  },
  vuesaxlinearclockIcon: {
    width: 16,
    height: 16,
    marginRight: 3
  },
  pm: {
    fontSize: 14,
    fontFamily: FontFamily.openSansRegular,
    color: '#4B4B4B',
    textAlign: "left",
  },
  vuesaxlinearclockParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  aMojoMembersMParent: {
    paddingLeft: Padding.p_7xs,
  },
  event1: {
    backgroundColor: Color.white1,
    shadowColor: "rgba(32, 34, 36, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingHorizontal: 7,
    paddingTop: 5,
    paddingBottom: 10,
    overflow: "hidden",
    borderRadius: 16,
  },
});

export default EventCard;
