import * as React from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Padding, Border, Color, FontFamily, FontSize } from '../GlobalStyles';
import CustomHeader from '../components/CustomHeader';
import CTextInput from '../components/CTextInput';
import { useState } from 'react';
import Label from '../components/Label';
import CustomDatePicker from '../components/CustomDatepicker';
import actions from '../../actions';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';

const AddANewGoalGoalMoney = ({ navigation }: any) => {
  const [datas, setDatas] = useState<any>([]);
  const addGoals = useSelector((state: any) => state.data.addGoals);

  const updateState = (value: any, label: string) => {
    actions.updateAddGoals({ [label]: value });
    setDatas((prevDatas: any) => {
      const updatedDatas = prevDatas.map((data: any) => {
        if (label in data) {
          return { ...data, [label]: value };
        }
        return data;
      });
      return updatedDatas;
    });
  };

  const updateData = () => {
    if (
      addGoals?.money_need &&
      addGoals?.money_have &&
      addGoals?.when_money_need
    ) {
      navigation.navigate('AddANewGoalGoalResponsi');
    } else {
      showMessage({
        message: 'Failed',
        description: 'Please fille all the fields',
        type: 'danger',
      });
    }
  };

  const today = new Date();
  const futureDate = new Date();
  futureDate.setFullYear(today.getFullYear() + 100);

  return (
    <ScrollView
      style={styles.addANewGoalGoalDate}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.addANewGoalGoalDateContent}>
      <CustomHeader name="Property Goal" type={2} />
      <FlashMessage position="top" />
      <ScrollView
        style={styles.advicecontainerWrapper}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}>
        <View style={[styles.advicecontainer, styles.topMenuSpaceBlock]}>
          <View>
            <CTextInput
              icon={require('../assets/dollarcircle.png')}
              key="money_need"
              label="How much do you need?"
              defaultValue={addGoals?.money_need}
              id="money_need"
              updateState={updateState}
              isNumOnly={true}
            />

            <CTextInput
              icon={require('../assets/dollarcircle.png')}
              key="money_have"
              label="How much do you have now?"
              defaultValue={addGoals?.money_have}
              id="money_have"
              updateState={updateState}
              isNumOnly={true}
            />

            <Text style={styles.sHead}>
              When do you need the {'\n'} money by?
            </Text>

            <Label
              label="Select Date"
              icon={require('../assets/calendar.png')}
            />
            <CustomDatePicker
              defaultValue={
                addGoals?.when_money_need && new Date(addGoals?.when_money_need)
              }
              onValueChange={(value: any) =>
                updateState(value, 'when_money_need')
              }
              minimumDate={null}
              maximumDate={futureDate}
              disableFutureDates={false}
              disablePastDates={true}
            />
          </View>

          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            onPress={updateData}>
            <LinearGradient
              style={[styles.bottom, styles.bottomFlexBox]}
              locations={[0, 1]}
              colors={['#fbb142', '#f6a326']}
              useAngle={true}
              angle={180}>
              <Text style={[styles.edit, styles.ml4]}>Next</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addANewGoalGoalDate: {
    backgroundColor: Color.white,
    flex: 1,
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  addANewGoalGoalDateContent: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  advicecontainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    minHeight: Dimensions.get('window').height - 270,
    paddingBottom: Padding.p_xs,
  },
  advicecontainerWrapper: {
    alignSelf: 'stretch',
    flex: 1,
  },
  bottom: {
    alignSelf: 'center',
    borderRadius: 60,
    marginVertical: 28,
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
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  ml4: {
    marginLeft: 4,
  },
  sHead: {
    fontFamily: FontFamily.outfitMedium,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 12,
    marginTop: 28,
    textAlign: 'center',
  },
  topMenuSpaceBlock: {
    alignSelf: 'stretch',
    paddingHorizontal: 24,
  },
});

export default AddANewGoalGoalMoney;
