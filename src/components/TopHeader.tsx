import * as React from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";
import { Margin, Color, Border, Padding } from "../GlobalStyles";

type TopHeaderType = {
  logo?: ImageSourcePropType;
};

const TopHeader = ({ logo }: TopHeaderType) => {
  return (
    <View style={[styles.topMenu, styles.mt_12, styles.menuFlexBox1]}>
      <View style={[styles.menu, styles.menuFlexBox]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <Image style={styles.logoIcon} resizeMode="cover" source={logo} />
      <View style={[styles.menuGroup, styles.menuFlexBox1]}>
        <View style={[styles.vuesaxlinearaddWrapper, styles.menuFlexBox]}>
          <Image
            style={styles.vuesaxlinearaddIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearadd.png")}
          />
        </View>
        <Image
          style={[styles.menuGroupChild, styles.ml8]}
          resizeMode="cover"
          source={require("../assets/ellipse-584.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_4xs,
  },
  menuFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Color.snow,
    borderRadius: Border.br_lg,
    alignItems: "center",
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_2xl,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    width: 18,
  },
  groupItem: {
    top: 5,
    width: 18,
  },
  groupInner: {
    top: 10,
    width: 12,
  },
  rectangleParent: {
    height: 12,
    width: 18,
  },
  menu: {
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_2xs,
  },
  logoIcon: {
    width: 85,
    height: 25,
  },
  vuesaxlinearaddIcon: {
    width: 24,
    height: 24,
  },
  vuesaxlinearaddWrapper: {
    borderStyle: "solid",
    borderColor: "#fbb142",
    borderWidth: 1,
    padding: Padding.p_7xs,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Color.snow,
    borderRadius: Border.br_lg,
  },
  menuGroupChild: {
    width: 40,
    height: 40,
  },
  menuGroup: {
    justifyContent: "flex-end",
  },
  topMenu: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_lg,
    paddingBottom: Padding.p_5xl,
    justifyContent: "space-between",
  },
});

export default TopHeader;
