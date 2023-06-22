import * as React from "react";
import { Text, StyleSheet, View, StatusBar, TouchableOpacity, Image } from "react-native";
import LoginButton from "../components/LoginButton";
import { Margin, FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";
import RadioButtonGroup from "../components/RadioButtonGroup";
import GraphModal from "../components/GraphModal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Tabs from "../components/Tab";
import { cos } from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import GoalItem from "../components/GoalItem";
import GoalCategoryModal from "../components/GoalCategoryModal";

const Goals = ({navigation}:any) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [isCateoryModalVisible, setIsCategoryModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  const handleRadioChange = (value:any) => {
    console.log('Selected Option:', value);
  };

  const handleFilter = (value:any) => {
    console.log('Selected filter:', value);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openPage = (page:any) => {
    navigation.navigate(page);
  }

  const handleTabPress = (tabNumber:number) => {
    console.log("tabNumber", tabNumber);
    setActiveTab(tabNumber);
  };

  return (
    <View>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Goals" type={1}/>

      {/* <TouchableOpacity onPress={() => openPage('AddANewGoalGoalDate')}><Text>AddANewGoalGoalDate</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('AddANewGoalGoalFrequenc')}><Text>AddANewGoalGoalFrequenc</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('AddANewGoalGoalImportan')}><Text>AddANewGoalGoalImportan</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('AddANewGoalGoalMoney')}><Text>AddANewGoalGoalMoney</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('AddANewGoalGoalResponsi')}><Text>AddANewGoalGoalResponsi</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('AddANewGoalGoalSummary')}><Text>AddANewGoalGoalSummary</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('AddANewGoalGoalType')}><Text>AddANewGoalGoalType</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('Goaln')}><Text>Goaln</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('Goal1')}><Text>Goal1</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => openPage('GoalsEditGoalsPopup')}><Text>GoalsEditGoalsPopup</Text></TouchableOpacity> */}

      <GraphModal visible={modalVisible} onClose={closeModal} filterOptions={[{value: "All"}, {value: "6 mo"}, {value: "1 yr"}, {value: "3 yrs"}, {value: "5 yrs"}, {value: "10 yrs"}]} handleFilter={handleFilter} selectedFilter={selectedFilter}/>

      <GoalCategoryModal navigation={navigation} visible={isCateoryModalVisible} onClose={() => setIsCategoryModalVisible(false)} />

      {/* <RadioButtonGroup
        options={["Option 1", "Option 2", "Option 3"]}
        defaultValue={"Option 2"}
        onChange={handleRadioChange}
        count={3}
      /> */}

      {/* <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>Open Graph</Text>
      </TouchableOpacity> */}

      <Tabs
        tabs={['Labelled Money', 'ClevaLife']}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />

      <LinearGradient
        style={[
          styles.setYourGoalsToSaveForSomParent,
          styles.parentFlexBox,
        ]}
        locations={[0, 1]}
        colors={["#fbb142", "#f6a326"]}
        useAngle={true}
        angle={180}
      >
        <Text style={[styles.setYourGoalsContainer, styles.doingTypo]}>
          Set your goals to save for somethingimportant and/or exciting
        </Text>
        <TouchableOpacity onPress={() => setIsCategoryModalVisible(true)}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-562.png")}
          />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.goalsContainer}>
        <GoalItem data={{title : " Save $5000 for Italy Holiday", owner: 'DR', dueDate: "12/07/2023", status: 'Doing'}}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer:{
    marginHorizontal: 20,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 20
  },
  doingTypo: {
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    flexWrap: 'wrap',
    width: '80%'
  },
  frameChild: {
    width: 58,
    height: 58,
  },
  setYourGoalsContainer: {
    fontSize: FontSize.textMediumBoldText_size,
    color: Color.white,
    textAlign: "left",
  },
  mt24: {
    marginTop: Margin.m_2xs,
  },
  aQuickCheck: {
    marginStart: 0,
    marginBlockEnd: 0,
  },
  fromTheLawyers: {
    margin: Margin.m_3xs,
  },
  aQuickCheckContainer: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.dark1,
    textAlign: "left",
  },
  heading: {
    alignSelf: "stretch",
  },
  beforeYouGet: {
    fontFamily: FontFamily.openSansRegular,
  },
  whatToKnow: {
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
  },
  beforeYouGetContainer: {
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    color: Color.black,
    textAlign: "left",
    alignSelf: "stretch",
  },
  termsAndCondition: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_lg,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  setYourGoalsToSaveForSomParent: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(251, 177, 66, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: "space-between",
    backgroundColor: "transparent",
    alignSelf: "stretch",
    overflow: "hidden",
  },

});

export default Goals;
