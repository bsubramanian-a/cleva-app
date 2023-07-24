import * as React from 'react';
import {Text, StyleSheet, View, Image, Pressable} from 'react-native';
import {Color, FontFamily, FontSize, Padding} from '../GlobalStyles';
import DeletePopup from './DeletePopup';
import {useState} from 'react';
import actions from '../../actions';
import {showMessage} from 'react-native-flash-message';
import { useCustomFlashMessage } from './CustomFlashMessage';

const AssetsWealth = ({datas, loading, setLoading, type}: any) => {
  const { showFlashMessage } = useCustomFlashMessage();
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const total = parseFloat(
    datas
      ?.reduce((sum: number, item: any) => sum + item.Current_Value, 0)
      ?.toFixed(2),
  );

  const handleDelete = async (id: any) => {
    setDeleteModalVisible(false);
    setLoading(true);
    let deletedRes: any;
    if (type == 'asset') {
      deletedRes = await actions.deleteAsset(id);
    } else {
      deletedRes = await actions.deleteLiability(id);
    }

    if (
      deletedRes?.data?.length > 0 &&
      deletedRes?.data[0]?.code == 'SUCCESS'
    ) {
      if (type == 'asset') {
        await actions.getAssets();
      } else {
        await actions.getLiabilities();
      }

      // showMessage({
      //   message: 'Success',
      //   description: 'Asset deleted successfully',
      //   type: 'success',
      // });
      showFlashMessage("Asset deleted successfully", 'success');
    } else {
      // showMessage({
      //   message: 'Failed',
      //   description: 'Asset delete failed',
      //   type: 'danger',
      // });
      showFlashMessage("Asset delete failed", 'failure');
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setDeleteModalVisible(false);
  };

  return (
    <View style={[styles.advice, styles.adviceFlexBox]}>
      <View style={styles.assetsview}>
        {datas?.map((data: any) => {
          return (
            <>
              <View style={[styles.myHomeParent, styles.totalviewFlexBox]}>
                <Text style={styles.myHome}>{data?.Name}</Text>
                <Text style={[styles.text, styles.textTypo]}>
                  $
                  {data?.Current_Value?.toFixed(0)?.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ',',
                  )}
                </Text>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 20,
                  }}
                  onPress={() => setDeleteModalVisible(data.id)}>
                  <Image
                    style={styles.vuesaxlinearedit2Icon}
                    resizeMode="cover"
                    source={require('../assets/delete.png')}
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

              <View
                style={[styles.assetsviewChild, styles.mt15, styles.mb15]}
              />
            </>
          );
        })}
      </View>
      <View
        style={[
          styles.totalview,
          styles.mt26,
          styles.totalviewFlexBox,
          styles.adviceFlexBox,
        ]}>
        <Text style={[styles.total, styles.textTypo]}>Total</Text>
        <Text style={styles.text7}>
          $
          {!isNaN(total)
            ? total?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : 0}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  advice: {
    backgroundColor: Color.white1,
    borderRadius: 16,
    elevation: 40,
    justifyContent: 'center',
    paddingBottom: Padding.p_sm,
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_lg,
    shadowColor: 'rgba(32, 34, 36, 0.08)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    width: '100%',
  },
  adviceFlexBox: {
    // overflow: "hidden",
    // alignSelf: "stretch",
  },
  assetsview: {
    // paddingLeft: 9,
    alignSelf: 'stretch',
  },
  assetsviewChild: {
    borderStyle: 'solid',
    borderColor: '#f3f1ee',
    borderTopWidth: 1,
    // width: 306,
    height: 1,
  },
  edit: {
    color: Color.white1,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.textMediumBoldText1_size,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  mb15: {
    marginBottom: 15,
  },
  ml4: {
    marginLeft: 4,
  },
  mt15: {
    marginTop: 15,
  },
  mt26: {
    marginTop: 26,
  },
  myHome: {
    color: '#4B4B4B',
    fontFamily: FontFamily.openSansRegular,
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 22,
    textAlign: 'left',
    width: '60%',
  },
  myHomeParent: {
    // width: 305,
  },
  text: {
    color: '#000000',
    fontFamily: FontFamily.openSansRegular,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'right',
  },
  text7: {
    color: '#EF9F27',
    fontFamily: FontFamily.textMediumBoldText1,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'left',
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.textMediumBoldText1,
    fontWeight: '500',
    lineHeight: 22,
  },
  total: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  totalview: {
    alignItems: 'center',
    backgroundColor: 'rgba(239, 159, 39, 0.1)',
    borderRadius: 12,
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: Padding.p_2xs,
  },
  totalviewFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vuesaxlinearedit2Icon: {
    height: 20,
    width: 20,
  },
});

export default AssetsWealth;
