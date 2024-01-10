import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color, FontFamily, Padding, Border, FontSize} from '../GlobalStyles';
import {useEffect, useRef, useState} from 'react';
import Loader from './Loader';
import CTextInput from './CTextInput';
import CustomCalendar from './Calendar';
import RadioButtonGroup from './RadioButtonGroup';
import actions from '../../actions';
import WebView from 'react-native-webview';

const SchedulePopup = ({
  visible,
  onClose,
  coachUrl,
}: any) => {
  console.log('coachUrl', coachUrl);
  // const [datas, setDatas] = useState<any>({});
  // const [loading, setLoading] = useState(false);
  // const scrollViewRef = useRef<any>(null);
  // const [error, setError] = useState('');
  // const [selectedDate, setSelectedDate] = useState();
  // const [selectedTime, setSelectedTime] = useState();

  // const updateState = (value: any, label: string) => {
  //   setDatas((prevDatas: any) => {
  //     if (prevDatas.length === 0) {
  //       return [{[label]: value}];
  //     } else {
  //       const updatedDatas = prevDatas.map((data: any) => {
  //         return {...data, [label]: value};
  //       });
  //       return updatedDatas;
  //     }
  //   });
  // };

  // const updateState = (value: any, label: string) => {
  //   setDatas((prevData: any) => {
  //     return {...prevData, [label]: value};
  //   });
  // };

  // useEffect(() => {
  //   console.log('datas.....................', datas);
  // }, [datas]);

  // const newDateFormat = (date: string) => {
  //   const inputDate: Date = new Date(date);

  //   const options: Intl.DateTimeFormatOptions = {
  //     year: 'numeric',
  //     month: 'short',
  //     day: 'numeric',
  //   };

  //   const formattedDateString: string = inputDate.toLocaleDateString(
  //     'en-IN',
  //     options,
  //   );

  //   return formattedDateString;
  // };

  // const generateTimeIntervals = () => {
  //   const options = [];
  //   let startTime = new Date();
  //   startTime.setHours(9, 0, 0, 0); // Set the start time to 9:00 AM

  //   while (startTime.getHours() < 18) {
  //     // Loop until 6:00 PM (18:00)
  //     const timeString = startTime.toLocaleTimeString([], {
  //       hour: '2-digit',
  //       minute: '2-digit',
  //     });
  //     options.push({value: timeString});
  //     startTime.setMinutes(startTime.getMinutes() + 30); // Increment by 30 minutes
  //   }

  //   return options;
  // };

  // const createMeeting = async () => {
  //   if (!datas?.topic || !datas?.Time || !datas?.Date) {
  //     setError('Please select all the details');
  //     scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  //     return;
  //   }
  //   setError('');
  //   const res: any = await actions.createZoomMeeting({
  //     topic: datas?.topic,
  //     time: datas?.Time,
  //     date: datas?.Date,
  //     userId,
  //     coachId,
  //   });
  //   console.log('create meeting res', res);
  // };

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      <View style={styles.backdrop}></View>
      <View style={{width: '100%', height: '100%'}}>
        <WebView
          // ref={webviewRef} // Use a ref to access the WebView instance
          source={{uri: coachUrl}}
          style={{flex: 1, marginTop: 20, border: 1}} // Optional styling
          // onMessage={handleWebViewMessage} // Optional for event handling
        />
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Image
            resizeMode="cover"
            source={require('../assets/group-1171275096.png')}
            style={styles.frameChild}
          />
        </Pressable>
      </View>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <View style={styles.modalDialog}>
          <View style={styles.goalsEditGoalsPopup}>
            <Loader visible={loading} />
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Image
                resizeMode="cover"
                source={require('../assets/group-1171275096.png')}
                style={styles.frameChild}
              />
            </Pressable>
            <ScrollView
              ref={scrollViewRef}
              contentContainerStyle={[
                styles.groupParent,
                styles.groupParentShadowBox,
              ]}>
              <View style={styles.save20000ForNewCarParent}>
                <Text style={styles.save20000For}>New Call</Text>
              </View>

              {error != '' && <Text style={{color: 'red', textAlign: 'center', marginTop: 20}}>{error}</Text>}

              <CTextInput
                icon={require('../assets/dollarcircle.png')}
                key="Current_Value"
                label="What would you like to discuss ?"
                // defaultValue={goal?.Current_Value?.toString() || null}
                id="topic"
                updateState={updateState}
                isNumOnly={false}
                placeholder={'Enter Details...'}
              />

              <CustomCalendar
                onChange={(value: any) => updateState(value, 'Date')}
              />

              <Text style={styles.subheading}>Select Time</Text>

              <RadioButtonGroup
                key="StatusRadioButtonGroup"
                // defaultValue={goal?.Status || ""}
                options={generateTimeIntervals()}
                onChange={(value: any) => updateState(value, 'Time')}
                orientation={'horizontal'}
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

              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={createMeeting}
                >
                <LinearGradient
                  style={[styles.bottom, styles.bottomFlexBox]}
                  locations={[0, 1]}
                  colors={['#fbb142', '#f6a326']}
                  useAngle={true} 
                  angle={180}>
                  <View style={styles.buttonView}>
                    <View>
                      {(datas?.Date ||
                        datas?.Time) && (
                          <Text style={[styles.buttonTime, styles.ml4]}>
                            {datas?.Date && newDateFormat(datas?.Date)}{' '}
                            {datas?.Date && datas?.Time ? ' at' : ""} {datas?.Time}
                          </Text>
                        )}
                      <Text style={[styles.buttonConfirm, styles.ml4]}>
                        Confirm & Add to Calendar
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={require('../components/icon/icons/arrow-circle-right.png')}
                        style={styles.customArrow}
                      />
                    </View>
                  </View>
                </LinearGradient>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonTime: {
    fontSize: 12,
    color: '#fff',
  },
  buttonConfirm: {
    fontSize: 15,
    color: '#fff',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 35,
  },
  customArrow: {
    width: 20,
    height: 20,
  },
  subheading: {
    fontFamily: FontFamily.sourceSerifPro,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 20,
  },
  coptionView: {
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: 10,
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
    borderRadius: 12,
    marginVertical: 28,
    paddingHorizontal: 10,
    paddingVertical: 14,
    width: '100%',
  },
  bottomFlexBox: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // overflow: 'hidden',
  },
  save200PerTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontWeight: '300',
  },
  save20000For: {
    fontSize: 20,
    textAlign: 'center',
    color: Color.black,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  save200Per: {
    marginLeft: -152,
    top: 37,
    width: 304,
    // lineHeight: 20,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.outfitLight,
    fontWeight: '300',
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    left: '50%',
    // position: "absolute",
  },
  save20000ForNewCarParent: {
    // height: 97,
    // marginTop: 30,
    alignSelf: 'stretch',
  },
  groupParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: 'hidden',
  },
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
  modalDialog: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalsEditGoalsPopup: {
    position: 'relative',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').height - 220,
    borderRadius: 12,
    alignSelf: 'center',
    padding: 0,
    zIndex: 1000,
  },
  closeButton: {
    alignSelf: 'flex-end',
    right: -20,
    top: 10,
    position: 'absolute',
    zIndex: 1000000,
  },
  frameChild: {
    width: 83,
    height: 92,
    zIndex: 10000,
  },
  groupParent: {
    borderRadius: Border.br_base,
    shadowColor: 'rgba(32, 34, 36, 0.08)',
    shadowRadius: 40,
    elevation: 40,
    paddingVertical: Padding.p_9xl,
    // alignItems: "flex-end",
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    padding: 14,
    overflow: 'scroll',
  },
});

export default SchedulePopup;
