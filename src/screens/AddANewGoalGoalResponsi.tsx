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
import RadioButtonGroup from '../components/RadioButtonGroup';
import { useSelector } from 'react-redux';
import actions from '../../actions';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import RadioButtonGroupOwner from '../components/RadioButtonGroupOwner';
import { useCustomFlashMessage } from '../components/CustomFlashMessage';

const AddANewGoalGoalResponsi = ({navigation}: any) => {
  const { showFlashMessage } = useCustomFlashMessage();
  const profile = useSelector((state: any) => state.data.profile);
  const addGoals = useSelector((state: any) => state.data.addGoals);

  const handleChange = (option: any) => {
    console.log("option handleChange", option);
    let val = option?.id ? option?.value : option;
    console.log("val", val);
    actions.updateAddGoals({ownerId: option?.id, Goal_Owner_s: val});
  };

  const updateData = () => {
    if (addGoals?.Goal_Owner_s) {
      navigation.navigate('AddANewGoalGoalFrequenc');
    } else {
      // showMessage({
      //   message: 'Failed',
      //   description: 'Please select any option',
      //   type: 'danger',
      // });

      showFlashMessage("Please select any option", 'failure');
    }
  };

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
            <Text style={styles.heading}>
              Who owns/Will be responsible{'\n'} For The Goals ?
            </Text>

            <RadioButtonGroupOwner
              options={[
                {
                  value: `${profile[0]?.First_Name} ${profile[0]?.Last_Name}`,
                  id: profile[0]?.id,
                },
                profile[0]?.accounts?.length > 0 &&
                profile[0]?.accounts[0]?.Email && {
                  value: `${profile[0]?.accounts[0]?.First_Name} ${profile[0]?.accounts[0]?.Last_Name}`,
                  id: profile[0]?.accounts[0]?.id,
                },
                { value: 'Joint' },
              ]}
              onChange={handleChange}
              count={1}
              coptionContainer={{
                height: 56,
                backgroundColor: '#fff',
                marginVertical: 10,
                padding: 0,
                margin: 0,
                paddingHorizontal: 0,
              }}
              coptionView={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              defaultValue={addGoals?.Goal_Owner_s}
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
  advice: {
    borderRadius: Border.br_base,
    elevation: 40,
    justifyContent: 'center',
    paddingVertical: Padding.p_xl,
    shadowColor: 'rgba(32, 34, 36, 0.08)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
  },
  adviceFlexBox: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Color.white1,
    overflow: 'hidden',
    paddingHorizontal: Padding.p_xs,
  },
  advicecontainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    minHeight: Dimensions.get('window').height - 265,
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
  calendarIcon: {
    height: 16,
    width: 16,
  },
  calendarParent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  edit: {
    color: Color.white1,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.textMediumBoldText1_size,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  editBtn: {
    height: 44,
    marginTop: 450,
  },
  frameChild: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Color.white1,
    borderColor: '#dedede',
    borderRadius: Border.br_md,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    fontSize: FontSize.size_sm,
    marginTop: 4,
    overflow: 'hidden',
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_smi,
  },
  frameChildTypo: {
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  frameParent: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  frameScrollViewContent: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  frameWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 35,
  },
  header: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  heading: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 30,
    textAlign: 'center',
  },
  mainvector1Icon: {
    height: 63,
    overflow: 'hidden',
    width: 164,
  },
  menu: {
    backgroundColor: Color.snow,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: Padding.p_4xs,
  },
  menuFlexBox: {
    alignItems: 'center',
    borderRadius: Border.br_11xl,
    justifyContent: 'center',
  },
  ml4: {
    marginLeft: 4,
  },
  next: {
    color: Color.white1,
    fontFamily: FontFamily.outfitSemibold,
    fontSize: FontSize.textMediumBoldText1_size,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  pageHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 66,
  },
  pressable: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_xs,
  },
  propertyGoal: {
    fontFamily: FontFamily.sourceSerifPro,
    fontSize: FontSize.size_3xl,
    fontWeight: '600',
    textAlign: 'center',
  },
  propertyGoalClr: {
    color: Color.black,
    textAlign: 'center',
  },
  selectDate: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontSize: FontSize.size_sm,
    fontWeight: '300',
    lineHeight: 22,
    marginLeft: 3,
    textAlign: 'left',
  },
  tInput: {
    borderColor: '#DEDEDE',
    borderRadius: 25,
    borderWidth: 1,
    height: 200,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: '100%',
  },
  topMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: -12,
    paddingBottom: Padding.p_17xl,
  },
  topMenuSpaceBlock: {
    alignSelf: 'stretch',
    paddingHorizontal: 24,
  },
  vuesaxlineararrowLeftIcon: {
    height: 22,
    width: 22,
  },
  whenDoYouContainer: {
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
  },
  whenDoYouNeedTheMoneyByParent: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default AddANewGoalGoalResponsi;
