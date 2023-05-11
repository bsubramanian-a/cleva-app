import * as React from "react";
import { StyleSheet, View, Image, ImageSourcePropType, Text, Pressable } from "react-native";
import { Margin, Color, Border, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

type TopHeaderType = {
  title?: any;
};

const TopHeader = ({ title }: TopHeaderType) => {
  const navigation:any = useNavigation();
  
  return (
    <View style={[styles.topMenu, styles.menuFlexBox1]}>
      <View style={[styles.menu, styles.menuFlexBox]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>{title}</Text>
      <View style={[styles.menuGroup, styles.menuFlexBox1]}>
        <View style={[styles.vuesaxlinearaddWrapper, styles.menuFlexBox]}>
          <Image
            style={styles.vuesaxlinearaddIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearadd.png")}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Image
            style={[styles.menuGroupChild, styles.ml8]}
            resizeMode="cover"
            source={require("../assets/ellipse-584.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 12,
  },
  menuFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: '#FEF7F5',
    borderRadius: Border.br_md,
    alignItems: "center",
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_md,
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
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_2xs,
  },
  logoIcon: {
    width: 85,
    height: 25,
  },
  vuesaxlinearaddIcon: {
    width: 25,
    height: 25,
  },
  vuesaxlinearaddWrapper: {
    borderStyle: "solid",
    borderColor: "#fbb142",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Color.cadetblue,
    borderRadius: Border.br_md,
    width: 40,
    height: 40
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
    paddingBottom: Padding.p_lg,
    justifyContent: "space-between",
  },
});

export default TopHeader;
