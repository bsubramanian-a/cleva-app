import * as React from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Padding, FontFamily, Color, FontSize } from '../GlobalStyles';
import CustomHeader from '../components/CustomHeader';
import { useSelector } from 'react-redux';
import CTextInput from '../components/CTextInput';
import { useEffect, useState } from 'react';
import actions from '../../actions';
import Loader from '../components/Loader';
import { useNavigation } from '@react-navigation/native';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

const AddWealth = ({ route }: any) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const { type } = route.params;

  const addWealth = async () => {
    setLoading(true);

    let data = {
      Current_Value: value,
      Name: name,
    };

    if (type == 'asset') {
      const res: any = await actions.addAsset(data);

      if (res?.data?.length > 0 && res?.data[0]?.code == 'SUCCESS') {
        showMessage({
          message: 'Success',
          description: 'Asset added successfully',
          type: 'success',
        });

        setName('');
        setValue('');

        await actions.getAssets();
      } else {
        showMessage({
          message: 'Failed',
          description: 'Asset creation failed, please try again later!',
          type: 'danger',
        });
      }
    } else {
      const res: any = await actions.addLiability(data);

      if (res?.data?.length > 0 && res?.data[0]?.code == 'SUCCESS') {
        showMessage({
          message: 'Success',
          description: 'Liability added successfully',
          type: 'success',
        });

        setName('');
        setValue('');

        await actions.getLiabilities();
      } else {
        showMessage({
          message: 'Failed',
          description: 'Liability creation failed, please try again later!',
          type: 'danger',
        });
      }
    }

    setLoading(false);
  };

  const updateState = (value: any, id: any) => {
    if (id == 1) {
      setName(value);
    } else {
      setValue(value);
    }
  };

  return (
    <View style={styles.wealthAssets}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CustomHeader name="Your Wealth" type={2} />
      <FlashMessage position="top" />
      <Loader visible={loading} />
      <ScrollView
        style={styles.wealthTabParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}>
        <View style={styles.advicecontainer}>
          <CTextInput
            isNumOnly={false}
            label={type == 'asset' ? 'Asset Name' : 'Liability Name'}
            id="1"
            updateState={updateState}
            defaultValue={name}
          />
          <CTextInput
            label={type == 'asset' ? 'Asset Value' : 'Liability Value'}
            id="2"
            updateState={updateState}
            defaultValue={value}
          />
        </View>

        <Pressable
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          onPress={addWealth}>
          <LinearGradient
            style={[styles.bottom, styles.bottomFlexBox]}
            locations={[0, 1]}
            colors={['#fbb142', '#f6a326']}
            useAngle={true}
            angle={180}>
            <Text style={[styles.edit, styles.ml4]}>Save</Text>
          </LinearGradient>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  advicecontainer: {
    alignSelf: 'stretch',
    backgroundColor: Color.white1,
    borderColor: '#ffeccf',
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    elevation: 40,
    marginHorizontal: 24,
    marginTop: 30,
    paddingBottom: Padding.p_sm,
    paddingHorizontal: Padding.p_lg,
    shadowColor: 'rgba(32, 34, 36, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.04,
    shadowRadius: 15,
  },
  bottom: {
    alignSelf: 'center',
    borderRadius: 60,
    marginTop: 28,
    paddingHorizontal: 5,
    paddingVertical: 14,
    width: 180,
  },
  bottomFlexBox: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  edit: {
    color: Color.white1,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.textMediumBoldText1_size,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  frameScrollViewContent: {
    flexDirection: 'column',
  },
  ml4: {
    marginLeft: 4,
  },

  vuesaxlinearedit2Icon: {
    height: 18,
    width: 18,
  },
  wealthAssets: {
    backgroundColor: Color.white1,
    flex: 1,
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wealthTabParent: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default AddWealth;
