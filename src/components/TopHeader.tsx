import * as React from "react";
import { StyleSheet, View, Image, ImageSourcePropType, Text, Pressable } from "react-native";
import { Margin, Color, Border, Padding, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

type TopHeaderType = {
  title?: any;
};

const TopHeader = ({ title }: TopHeaderType) => {
  const profile = useSelector((state:any) => state.data.profile);
  const navigation: any = useNavigation();

  return (
    <View style={[styles.topMenu, styles.menuFlexBox1]}>
      <View style={[styles.menu, styles.menuFlexBox]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      {title != 'Cleva' && <Text style={styles.headerTitle}>{title}</Text>}
      {title == 'Cleva' &&  <Image
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />}
      <View style={[styles.menuGroup, styles.menuFlexBox1]}>
        {profile[0]?.accounts?.length == 0 && <View style={[styles.vuesaxlinearaddWrapper, styles.menuFlexBox]}>
          <Image
            style={styles.vuesaxlinearaddIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearadd.png")}
          />
        </View>}

        <Pressable style={[styles.frWrapper, styles.wrapperLayout]} onPress={() => navigation.navigate('Profile')}>
          <Text style={[]}>
            {profile?.length > 0 && (
              (profile[0]?.First_Name && profile[0]?.Last_Name)
                ? (profile[0]?.First_Name.charAt(0) + profile[0]?.Last_Name.charAt(0))
                : ((profile[0]?.First_Name || profile[0]?.Last_Name) || '').slice(0, 2)
            )}
          </Text>
        </Pressable>

        {profile[0]?.accounts?.length > 0 && <Pressable style={[styles.drWrapper, styles.wrapperLayout]} onPress={() => navigation.navigate('Profile')}>
          <Text style={[]}>
            {profile[0]?.accounts?.length > 0 && (
              (profile[0]?.accounts[0]?.First_Name && profile[0]?.accounts[0]?.Last_Name)
                ? (profile[0]?.accounts[0]?.First_Name.charAt(0) + profile[0]?.accounts[0]?.Last_Name.charAt(0))
                : ((profile[0]?.accounts[0]?.First_Name || profile[0]?.accounts[0]?.Last_Name) || '').slice(0, 2)
            )}
          </Text>
        </Pressable>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drWrapper: {
    backgroundColor: '#EF9F27',
  },
  headerTitle: {
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#000",
    fontFamily: FontFamily.sourceSerifPro,
  },
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
    height: 40,
    width: 40,
    alignItems: "center",
  },
  frWrapper: {
    backgroundColor: "#9755b6",
  },
  wrapperLayout: {
    justifyContent: "center",
    width: 40,
    height: 40,
    marginLeft: 4,
    borderRadius: 52,
    padding: 5,
    alignItems: "center",
    overflow: "hidden",
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
