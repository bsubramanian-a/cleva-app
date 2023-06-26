import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";
import CTextInput from "../components/CTextInput";
import { useState } from "react";
import Label from "../components/Label";
import CustomDatePicker from "../components/CustomDatepicker";

const AddANewGoalGoalDate = ({navigation}:any) => {
  const [datas, setDatas] = useState<any>([]);
  
  const updateState = (value: any, label: string) => {
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
    console.log("datas", datas);

    navigation.navigate('AddANewGoalGoalImportan');
  }

  return (
    <ScrollView
      style={styles.addANewGoalGoalDate}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.addANewGoalGoalDateContent}
    >
      <CustomHeader name="Property Goal" type={2}/>

      <ScrollView
        style={styles.advicecontainerWrapper}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.advicecontainer, styles.topMenuSpaceBlock]}>
          <View>
            <CTextInput isMobile={true} icon={require("../assets/gps.png")} key='title' label='Give your goal a name' defaultValue={""} id='title' updateState={updateState} isNumOnly={false}/>

            <CTextInput style={styles.tInput} key='Multi_Line_1' label="Short Description of your goal" defaultValue={datas[0]?.Multi_Line_1?.toString()} id='Multi_Line_1' updateState={updateState} isNumOnly={false} isTextArea={true} />

            <Label label={`When do you want to achieve this goal by ? \n dd/mm/yyyy`} icon={require("../assets/dob.png")} />
            <CustomDatePicker defaultValue={datas[0]?.Date_of_Birth && new Date(datas[0]?.Date_of_Birth?.toString())} onValueChange={(value:any) => updateState(value, 'Date_of_Birth')} />
          </View>
          
          <LinearGradient
            style={[styles.bottom, styles.bottomFlexBox]}
            locations={[0, 1]}
            colors={["#fbb142", "#f6a326"]}
            useAngle={true}
            angle={180}
          >
            <Pressable style={{flexDirection: 'row', alignItems: 'center'}} onPress={updateData}>
              <Text style={[styles.edit, styles.ml4]}>Next</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    width: 180,
    paddingHorizontal: 5,
    paddingVertical: 14,
    alignSelf: 'center',
    borderRadius: 60,
    marginVertical: 28
  },
  bottomFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  ml4: {
    marginLeft: 4,
  },
  edit: {
      fontSize: FontSize.textMediumBoldText1_size,
      lineHeight: 20,
      fontWeight: "600",
      fontFamily: FontFamily.openSansRegular,
      color: Color.white1,
      textAlign: "center",
  },
  tInput: {
    borderWidth: 1,
    borderColor: "#DEDEDE",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 12,
    height: 200,
    borderRadius: 25,
    overflow: 'hidden'
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addANewGoalGoalDateContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topMenuSpaceBlock: {
    paddingHorizontal: 24,
    alignSelf: "stretch",
  },
  menuFlexBox: {
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
  },
  propertyGoalClr: {
    color: Color.black,
    textAlign: "center",
  },
  adviceFlexBox: {
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  frameChildTypo: {
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
  },
  mainvector1Icon: {
    width: 164,
    height: 63,
    overflow: "hidden",
  },
  vuesaxlineararrowLeftIcon: {
    width: 22,
    height: 22,
  },
  menu: {
    backgroundColor: Color.snow,
    padding: Padding.p_4xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  propertyGoal: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.sourceSerifPro,
    textAlign: "center",
    fontWeight: "600",
  },
  pageHeading: {
    marginLeft: 66,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  topMenu: {
    paddingBottom: Padding.p_17xl,
    marginTop: -12,
    alignItems: "center",
    flexDirection: "row",
  },
  header: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  whenDoYouContainer: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.black,
  },
  calendarIcon: {
    width: 16,
    height: 16,
  },
  selectDate: {
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: FontFamily.outfitLight,
    color: Color.darkslategray_100,
    textAlign: "left",
    marginLeft: 3,
    fontSize: FontSize.size_sm,
  },
  calendarParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: "#dedede",
    borderWidth: 1,
    paddingVertical: Padding.p_smi,
    marginTop: 4,
    fontSize: FontSize.size_sm,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  frameParent: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameWrapper: {
    marginTop: 35,
    alignItems: "center",
    alignSelf: "stretch",
  },
  whenDoYouNeedTheMoneyByParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  next: {
    fontSize: FontSize.textMediumBoldText_size,
    lineHeight: 20,
    fontFamily: FontFamily.outfitSemibold,
    color: Color.white,
    textAlign: "center",
    fontWeight: "600",
  },
  pressable: {
    height: "100%",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  editBtn: {
    height: 44,
    marginTop: 450,
  },
  advice: {
    borderRadius: Border.br_base,
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
  },
  advicecontainer: {
    paddingBottom: Padding.p_xs,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    minHeight: Dimensions.get('window').height - 200
  },
  advicecontainerWrapper: {
    alignSelf: "stretch",
    flex: 1,
  },
  addANewGoalGoalDate: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default AddANewGoalGoalDate;
