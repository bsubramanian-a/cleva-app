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
import RadioButtonGroup from "../components/RadioButtonGroup";

const AddANewGoalGoalResponsi = ({navigation}:any) => {
  const [reponsible, setResponsible] = useState<any>(null)

  const handleChange = (value:any) => {
    setResponsible(value);
  };

  const updateData = () => {
    console.log("reponsible", reponsible);

    navigation.navigate('AddANewGoalGoalFrequenc');
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
            <Text style={styles.heading}>Who owns/Will be responsible{'\n'} For The Goals ?</Text>

            <RadioButtonGroup
                options={[{value: "Family Member 1"}, {value: "Family Member 2"}, {value: "Joint"}]}
                onChange={handleChange}
                count={1}
                coptionContainer={{height: 56, backgroundColor: "#fff", marginVertical: 10, padding: 0, margin: 0, paddingHorizontal: 0}}
                coptionView={{height: 56, alignItems: 'center', justifyContent : 'center'}}
            />
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
  heading:{
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 30,
    textAlign: 'center'
  },
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
    fontFamily: FontFamily.sourceSerifProSemibold,
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
    minHeight: Dimensions.get('window').height - 265
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

export default AddANewGoalGoalResponsi;
