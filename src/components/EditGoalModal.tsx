import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable, Modal, Dimensions, ScrollView, KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import RadioButtonGroup from "./RadioButtonGroup";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Label from "./Label";
import CustomDatePicker from "./CustomDatepicker";
import actions from "../../actions";
import Loader from "./Loader";
import CTextInput from "./CTextInput";
import RadioButtonGroupOwner from "./RadioButtonGroupOwner";

const EditGoalModal = ({visible, onClose, goal, navigation}: any) => {
  const [datas, setDatas] = useState<any>([]);
  const profile = useSelector((state: any) => state.data.profile);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef<any>(null);

  const updateState = (value: any, label: string) => {
    setDatas((prevDatas: any) => {
      if (prevDatas.length === 0) {
        return [{ [label]: value }];
      } else {
        const updatedDatas = prevDatas.map((data: any) => {
          return { ...data, [label]: value };
        });
        return updatedDatas;
      }
    });
  };

  useEffect(() => {
    setDatas([]);
  }, [goal])

  const updateData = async () => {
    const currentGoalOwners = goal?.owners;
    const currentHouseHoldOwners = [{ id: profile[0]?.id, name: `${profile[0]?.First_Name} ${profile[0]?.Last_Name}` }, profile[0]?.accounts?.length > 0 && { id: profile[0]?.accounts[0]?.id, name: `${profile[0]?.accounts[0]?.First_Name} ${profile[0]?.accounts[0]?.Last_Name}` }];

    setLoading(true);

    const updateData = {id : goal?.id, name: goal?.Name, currentGoalOwners, currentHouseHoldOwners, ...datas[0]}

    try {
      const response: any = await actions.updateGoal(updateData);

      await actions.getGoalsByAccount();

      onClose();
      setLoading(false);  
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    } 
  };

  const today = new Date();
  const futureDate = new Date();
  futureDate.setFullYear(today.getFullYear() + 100);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        if (scrollViewRef?.current) {
          scrollViewRef.current.scrollToEnd({ animated: true });
        }
      }
    );
  
    return () => {
      keyboardDidShowListener.remove();
    };
  }, [scrollViewRef]);

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      <View style={styles.backdrop}></View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.modalDialog}>
          <View style={styles.goalsEditGoalsPopup}>
            <Loader visible={loading} />
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Image
                resizeMode="cover"
                source={require("../assets/group-1171275096.png")}
                style={styles.frameChild}
              />
            </Pressable>
            <ScrollView ref={scrollViewRef} contentContainerStyle={[styles.groupParent, styles.groupParentShadowBox]}>
                <View style={styles.save20000ForNewCarParent}>
                    <Text style={styles.save20000For}>{goal?.Name}</Text>
                    <Text style={[styles.save200Per, styles.save200PerTypo]}>
                        {goal?.Description}
                    </Text>
                </View>

                <View style={{marginTop: 40}}>
                  <Text style={styles.subheading}>
                    Status
                  </Text>
                  <RadioButtonGroup
                    key="StatusRadioButtonGroup"
                    defaultValue={goal?.Status || ""}
                    options={[{value: 'To Do'}, {value: 'Doing'}, {value: 'Paused'}]}
                    onChange={(value:any) => updateState(value, 'Status')}
                    count={3}
                    cselectedOptionBackground={{height: 25, padding: 4}}
                    coptionView={styles.coptionView}
                    coptionContainer={{
                      height: 50,
                      paddingVertical: 0,
                      backgroundColor: '#fff',
                      borderRadius: 12,
                    }}
                    coptionDescription={{
                      textAlign: 'center',
                      color: '#000',
                      fontSize: 14,
                    }}
                    coptionTextStyle={{
                      textAlign: 'center',
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  />
                </View>
                
                <View>
                  <Text style={styles.subheading}>
                    Goal Owner
                  </Text>
                  <RadioButtonGroupOwner
                    key="OwnerRadioButtonGroup"
                    defaultValue={goal?.owners?.length > 0 ? (goal?.owners?.length > 1 ? 'Joint' : goal?.owners[0]?.Goal_Owner_s?.name) : ""}
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
                      {value: 'Joint'},
                      // {value: 'Cleva'},
                    ]}
                    onChange={(value:any) => updateState(value, 'Goal_Owner_s')}
                    count={2}
                    cselectedOptionBackground={{height: 25, padding: 4}}
                    coptionView={styles.coptionView}
                    coptionContainer={{
                      height: 50,
                      paddingVertical: 0,
                      backgroundColor: '#fff',
                      borderRadius: 12,
                    }}
                    coptionDescription={{
                      textAlign: 'center',
                      color: '#000',
                      fontSize: 14,
                    }}
                    coptionTextStyle={{
                      textAlign: 'center',
                      color: '#000',
                      fontFamily: FontFamily.outfitBold,
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  />
                </View>

                <View>
                  <Text style={styles.subheading}>
                    Due Date
                  </Text>
                  <Label
                    label={'Select Date'}
                    icon={require('../assets/calendar.png')}
                  />
                  <CustomDatePicker
                    defaultValue={
                      goal?.Target_Date && new Date(goal?.Target_Date)
                    }
                    onValueChange={(value: any) => updateState(value, 'Target_Date')}
                    minimumDate={today}
                    maximumDate={futureDate}
                    disableFutureDates={false}
                    disablePastDates={true}
                  />
                </View>

                <CTextInput
                  icon={require('../assets/dollarcircle.png')}
                  key="Current_Value"
                  label="How much do you have now?"
                  defaultValue={goal?.Current_Value?.toString() || null}
                  id="Current_Value"
                  updateState={updateState}
                  isNumOnly={true}
                />

                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                  onPress={updateData}>
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
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    color: Color.white1,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.textMediumBoldText1_size,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  ml4: {
    marginLeft: 4,
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
  subheading: {
    fontFamily: FontFamily.sourceSerifPro,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 20
  },
  closeButton: {
    alignSelf: 'flex-end',
    right: -35,
    top: -35,
    position: 'absolute',
    zIndex: 1000000
  },
  coptionView: {
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  groupParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
  },
  save200PerTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontWeight: "300",
  },
  frameSpaceBlock: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  wrapperShadowBox1: {
    paddingVertical: Padding.p_sm,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(36, 41, 41, 0.1)",
    borderRadius: Border.br_md,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white1,
    flexDirection: "row",
    overflow: "hidden",
  },
  toDoTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_md,
    backgroundColor: Color.white1,
    flexDirection: "row",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  frameChild: {
    width: 83,
    height: 92,
    zIndex: 10000,
  },
  save20000For: {
    fontSize: 20,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
  },
  save200Per: {
    marginLeft: -152,
    top: 37,
    width: 304,
    // lineHeight: 20,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: "50%",
    // position: "absolute",
  },
  save20000ForNewCarParent: {
    // height: 97,
    // marginTop: 30,
    alignSelf: "stretch",
  },
  nSeeveeLane: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.gray_800,
    textAlign: "left",
    fontWeight: "600",
  },
  toDo: {
    color: Color.black,
  },
  toDoWrapper: {
    paddingHorizontal: 29,
  },
  doing: {
    color: Color.orange_100,
  },
  doingWrapper: {
    paddingHorizontal: Padding.p_9xl,
    borderColor: "#ef9f27",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_sm,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(36, 41, 41, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  pausedWrapper: {
    paddingHorizontal: 24,
  },
  frameParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  nSeeveeLaneBParent: {
    marginTop: 30,
    alignSelf: "stretch",
  },
  drWrapper: {
    paddingHorizontal: 64,
    justifyContent: "center",
    borderColor: "#ef9f27",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_sm,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(36, 41, 41, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
  },
  frWrapper: {
    paddingHorizontal: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  jointWrapper: {
    paddingHorizontal: 58,
    justifyContent: "center",
    alignItems: "center",
  },
  clevaWrapper: {
    paddingHorizontal: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  frameView: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameGroup: {
    justifyContent: "center",
  },
  vuesaxlinearcalendarIcon: {
    width: 16,
    height: 16,
  },
  selectDate: {
    marginLeft: 4,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontWeight: "300",
  },
  vuesaxlinearcalendarParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: Color.black,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    lineHeight: 22,
  },
  vuesaxlinearcalendarWrapper: {
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(251, 177, 66, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    padding: Padding.p_6xs,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  parent: {
    borderColor: "#dedede",
    width: 310,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_6xs,
    paddingRight: Padding.p_6xs,
    paddingBottom: Padding.p_6xs,
    marginTop: 7,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent1: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  nSeeveeLaneBContainer: {
    marginTop: 30,
  },
  save: {
    fontSize: FontSize.textMediumBoldText1_size,
    fontFamily: FontFamily.outfitSemibold,
    color: Color.white1,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "center",
  },
  pressable: {
    borderRadius: Border.br_11xl,
    height: "100%",
    paddingHorizontal: Padding.p_53xl,
    paddingVertical: Padding.p_xs,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  editBtn: {
    height: 44,
    marginTop: 30,
  },
  groupParent: {
    borderRadius: Border.br_base,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowRadius: 40,
    elevation: 40,
    paddingVertical: Padding.p_9xl,
    // alignItems: "flex-end",
    backgroundColor: Color.white1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    padding: 14
  },
  goalsEditGoalsPopup: {
    position: 'relative',
    backgroundColor: "#fff",
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').height - 220,
    borderRadius: 12,
    alignSelf: 'center',
    padding: 0,
    zIndex: 1000,
  },
  modalDialog: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default EditGoalModal;
