import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const AssetsWealth = ({datas}:any) => {
  const total = parseFloat(datas.reduce((sum:number, item:any) => sum + item.Current_Value, 0)?.toFixed(2))
  return (
    <View style={[styles.advice, styles.adviceFlexBox]}>
      <View style={styles.assetsview}>
        {datas?.map((data:any) => {
          return(
            <>
              <View style={[styles.myHomeParent, styles.totalviewFlexBox]}>
                <Text style={styles.myHome}>{data?.Name}</Text>
                <Text style={[styles.text, styles.textTypo]}>${data?.Current_Value}</Text>
              </View>
              <View style={[styles.assetsviewChild, styles.mt15, styles.mb15]} />
            </>
          )
        })}
      </View>
      <View
        style={[
          styles.totalview,
          styles.mt26,
          styles.totalviewFlexBox,
          styles.adviceFlexBox,
        ]}
      >
        <Text style={[styles.total, styles.textTypo]}>Total</Text>
        <Text style={styles.text7}>${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt15: {
    marginTop: 15,
  },
  mb15: {
    marginBottom: 15,
  },
  mt26: {
    marginTop: 26,
  },
  adviceFlexBox: {
    // overflow: "hidden",
    // alignSelf: "stretch",
  },
  totalviewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.black,
    // fontFamily: FontFamily.textMediumBoldText1,
    fontWeight: "500",
    lineHeight: 22,
  },
  myHome: {
    fontWeight: "300",
    // fontFamily: FontFamily.openSansRegular,
    color: '#4B4B4B',
    textAlign: "left",
    lineHeight: 22,
    fontSize: 14,
    width: '60%'
  },
  text: {
    textAlign: "right",
    fontWeight: "500",
    // fontFamily: FontFamily.openSansRegular,
    color: '#000000',
    lineHeight: 22,
    fontSize: 14,
  },
  myHomeParent: {
    // width: 305,
  },
  assetsviewChild: {
    borderStyle: "solid",
    borderColor: "#f3f1ee",
    borderTopWidth: 1,
    // width: 306,
    height: 1,
  },
  assetsview: {
    // paddingLeft: 9,
    alignSelf: "stretch",
  },
  total: {
    fontSize: 16,
    textAlign: "left",
    color: '#000000',
    fontWeight: '500',
  },
  text7: {
    fontSize: 18,
    color: '#EF9F27',
    // fontFamily: FontFamily.textMediumBoldText1,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 22,
  },
  totalview: {
    borderRadius: 12,
    backgroundColor: 'rgba(239, 159, 39, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    justifyContent: 'space-between',
    height: 50
  },
  advice: {
    borderRadius: 16,
    backgroundColor: Color.white1,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingTop: Padding.p_lg,
    justifyContent: "center",
  },
});

export default AssetsWealth;
