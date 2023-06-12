import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "../GlobalStyles";
import DeletePopup from "./DeletePopup";
import { useState } from "react";
import actions from "../../actions";
import { showMessage } from "react-native-flash-message";

const AssetsWealth = ({datas, loading, setLoading, type}:any) => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const total = parseFloat(datas?.reduce((sum:number, item:any) => sum + item.Current_Value, 0)?.toFixed(2))

  const handleDelete = async(id:any) => {
    setDeleteModalVisible(false);
    setLoading(true);
    let deletedRes:any;
    if(type == 'asset'){
      deletedRes = await actions.deleteAsset(id);
    }else{
      deletedRes = await actions.deleteLiability(id);
    }

    if(deletedRes?.data?.length > 0 && deletedRes?.data[0]?.code == "SUCCESS"){
      if(type == 'asset'){
        await actions.getAssets();
      }else{
        await actions.getLiabilities();
      }

      showMessage({
        message: 'Success',
        description: 'Asset deleted successfully',
        type: 'success',
      });
    }else{
      showMessage({
        message: 'Failed',
        description: 'Asset deleted successfully',
        type: 'danger',
      });
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setDeleteModalVisible(false);
  };

  return (
    <View style={[styles.advice, styles.adviceFlexBox]}>
      <View style={styles.assetsview}>
        {datas?.map((data:any) => {
          return(
            <>
              <View style={[styles.myHomeParent, styles.totalviewFlexBox]}>
                <Text style={styles.myHome}>{data?.Name}</Text>
                <Text style={[styles.text, styles.textTypo]}>${data?.Current_Value?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                <Pressable style={{flexDirection: 'row', alignItems: 'center', width: 20}} onPress={() => setDeleteModalVisible(data.id)}>
                  <Image
                    style={styles.vuesaxlinearedit2Icon}
                    resizeMode="cover"
                    source={require("../assets/delete.png")}
                  />
                </Pressable>
              </View>
              <DeletePopup
                key={data.id}
                isVisible={isDeleteModalVisible === data.id}
                onDelete={handleDelete}
                onCancel={handleCancel}
                id={data.id}
              />

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
        <Text style={styles.text7}>${!isNaN(total) ? total?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  vuesaxlinearedit2Icon: {
    width: 20,
    height: 20,
  },
  edit: {
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.openSansRegular,
    color: Color.white1,
    textAlign: "center",
  },
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
    alignItems: 'center'
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.textMediumBoldText1,
    fontWeight: "500",
    lineHeight: 22,
  },
  myHome: {
    fontWeight: "300",
    fontFamily: FontFamily.openSansRegular,
    color: '#4B4B4B',
    textAlign: "left",
    lineHeight: 22,
    fontSize: 14,
    width: '60%'
  },
  text: {
    textAlign: "right",
    fontWeight: "500",
    fontFamily: FontFamily.openSansRegular,
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
    fontFamily: FontFamily.textMediumBoldText1,
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
    width: "100%",
    paddingHorizontal: Padding.p_lg,
    paddingBottom: Padding.p_sm,
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
