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
import { useCallback, useState } from 'react';
import Label from '../components/Label';
import CustomDatePicker from '../components/CustomDatepicker';
import actions from '../../actions';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { format } from 'date-fns';
import { useCustomFlashMessage } from '../components/CustomFlashMessage';

const AddANewGoalGoalMoney = ({ navigation }: any) => {
  const { showFlashMessage } = useCustomFlashMessage();
  const [datas, setDatas] = useState<any>([]);
  const addGoals = useSelector((state: any) => state.data.addGoals);

  const updateState = (value: any, label: string) => {
    console.log("value", value, label);
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
      // showMessage({
      //   message: 'Failed',
      //   description: 'Please fille all the fields',
      //   type: 'danger',
      // });

      showFlashMessage("Please fille all the fields", 'failure');
    }
  };

  React.useEffect(() => {
    console.log("add goals change", addGoals);
  }, [addGoals])

  const today = new Date();
  const futureDate = new Date();
  futureDate.setFullYear(today.getFullYear() + 100);


  useFocusEffect(
    useCallback(() => {
      console.log("addGoals money", addGoals, !addGoals?.when_money_need);
      if(!addGoals?.when_money_need){
        // Trigger your focus event here
        actions.updateAddGoals({ "when_money_need": format(today, 'yyyy-MM-dd') });
      }
      
      // You can also dispatch an action to update the Redux store or perform other logic

      // Return a cleanup function if needed
      return () => {
        // Cleanup logic if needed
      };
    }, [])
  );

  return (
    <View
      style={styles.addANewGoalGoalDate}>
      <CustomHeader name={addGoals?.goalType + " Goal"} type={2} />
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
              shouldExecuteUseEffect={true}
              defaultValue={
                addGoals?.when_money_need ? new Date(addGoals?.when_money_need): today 
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
    </View>
  );
};

const styles = StyleSheet.create({
  addANewGoalGoalDate: {
    backgroundColor: Color.white1,
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
