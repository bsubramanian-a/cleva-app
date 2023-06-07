import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Label from "../components/Label";
import {
  Padding,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";
import { useSelector } from "react-redux";
import CTextInput from "../components/CTextInput";
import { useEffect, useState } from "react";
import actions from "../../actions";
import Loader from "../components/Loader";
import { useNavigation, useRoute } from "@react-navigation/native";
import DropdownComponent from "../components/DropdownComponent";
import CustomDatePicker from "../components/CustomDatepicker";
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import { EXPENSES } from "../../urls";
import DualCheckbox from "../components/DualCheckbox";
import data from "../../reducers/data";

const EditEstate = ({}:any) => {
    const navigation = useNavigation();
    const route:any = useRoute();
    const { id, type } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state:any) => state?.data?.profile);
    const [datas, setDatas] = useState<any>([]);
    const [willCheckboxValue, setWillCheckboxValue] = useState(false);
    const [currentCheckboxValue, setCurrentCheckboxValue] = useState(false);

    const handleWillCheckboxChange = (newValue:any) => {
        setWillCheckboxValue(newValue);
        updateState(newValue, "Do_you_have_a_Will");
      };
      
      const handleCurrentCheckboxChange = (newValue:any) => {
        setCurrentCheckboxValue(newValue);
        updateState(newValue, "Is_it_up_to_date");
      };
      

    useEffect(() => {
        if(type == 'user1'){
            setDatas(profile);
        }else{
            setDatas(profile[0]?.accounts);
        }
    }, [profile, type])

    const updateProfile = async() => {
        const {
            Gas_p_a,
            Electricity_p_a,
            Water_p_a,
            Home_Contents_Insurance_p_a,
            Car_Insurance_p_a,
            Private_Health_Insurance_p_a,
            Home_Loan,
            Investment_Property_Loan_p_a,
            Other_Investment_Loan_p_a,
            Personal_Loan_p_a,
            Credit_Cards_per_month,
            Other_Expenses_p_a,
            Multi_Line_1
        } = datas[0];
        
        const updatedData = {
            Gas_p_a,
            Electricity_p_a,
            Water_p_a,
            Home_Contents_Insurance_p_a,
            Car_Insurance_p_a,
            Private_Health_Insurance_p_a,
            Home_Loan,
            Investment_Property_Loan_p_a,
            Other_Investment_Loan_p_a,
            Personal_Loan_p_a,
            Credit_Cards_per_month,
            Other_Expenses_p_a,
            Multi_Line_1
        };

        setLoading(true);

        await actions.updateOtherProfileDetails([updatedData], EXPENSES);

        await actions.getProfile();

        showMessage({
            message: 'Success',
            description: 'Profile updated successfully',
            type: 'success',
        });
        setLoading(false);
    }

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

    return (
        <View
        style={styles.wealthAssets}
        >
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
        <CustomHeader name="Edit Details" type={3}/>
        <Loader visible={loading} />
        <FlashMessage position="top" />
        <ScrollView
            style={styles.wealthTabParent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
        >
            <View style={styles.advicecontainer}>
                <View style={[styles.frWrapper, styles.ml_11, styles.wrapperLayout]}>
                  <Text style={styles.dr}>{datas?.length > 0 && (datas[0]?.First_Name?.charAt(0) +datas[0]?.Last_Name?.charAt(0))}</Text>
                </View>
                
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>Household</Text>
                </View>

                <Label label="Do you have a beneficiary for your super fund??" icon={require("../assets/sex.png")} />
                <DropdownComponent
                    values={[{ label: 'None', value: '' }, { label: 'Not Sure', value: 'Not Sure' }, { label: 'No', value: 'No' }, { label: 'Yes Binding', value: 'Yes Binding' }, { label: 'Yes - Non-Binding', value: 'Yes - Non-Binding' },]}
                    defaultValue={datas[0]?.Super_Fund_Beneficiary?.toString()}
                    onValueChange={(value:any) => updateState(value, 'Super_Fund_Beneficiary')}
                />

                <CTextInput icon={require("../assets/profile.png")} key='If_Yes_Beneficiary_Name_s' label='If Yes, Beneficiary Name' defaultValue={datas[0]?.If_Yes_Beneficiary_Name_s?.toString()} id='If_Yes_Beneficiary_Name_s' updateState={updateState} isNumOnly={true}/>

                <DualCheckbox
                    label="Do you have a Will?"
                    value={willCheckboxValue}
                    onChange={handleWillCheckboxChange}
                />

                <DualCheckbox
                    label="Is it current?"
                    value={currentCheckboxValue}
                    onChange={handleCurrentCheckboxChange}
                />

                <CTextInput icon={require("../assets/profile.png")} key='Location_of_Will' label='Location of Will?' defaultValue={datas[0]?.Location_of_Will?.toString()} id='Location_of_Will' updateState={updateState} isNumOnly={true}/>

                {/* <CTextInput icon={require("../assets/profile.png")} key='Credit_Cards_per_month' label='Credit Cards' defaultValue={datas[0]?.Credit_Cards_per_month?.toString()} id='Credit_Cards_per_month' updateState={updateState} isNumOnly={true}/> */}

                <Label label="Do you have a POA?" icon={require("../assets/sex.png")} />
                <DropdownComponent
                    values={[{ label: 'No', value: 'No' }, { label: 'Yes - Medical', value: 'Yes - Medical' }, { label: 'Yes - Guardianship', value: 'Yes - Guardianship' }, { label: 'Yes - Other', value: 'Yes - Other' }, { label: 'Yes - Enduring', value: 'Yes - Enduring' }]}
                    defaultValue={datas[0]?.Do_you_have_a_POA[0]?.toString()}
                    onValueChange={(value:any) => updateState(value, 'Sex_Description')}
                />
            </View>
            <LinearGradient
            style={[styles.bottom, styles.bottomFlexBox]}
            locations={[0, 1]}
            colors={["#fbb142", "#f6a326"]}
            useAngle={true}
            angle={180}
            >
                <Pressable style={{flexDirection: 'row', alignItems: 'center'}} onPress={updateProfile}>
                    <Text style={[styles.edit, styles.ml4]}>Save</Text>
                </Pressable>
            </LinearGradient>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    frWrapper: {
        backgroundColor: "#9755b6",
        alignSelf: 'center'
    },
    ml_11: {
        marginLeft: -11,
    },
    wrapperLayout: {
        justifyContent: "center",
        height: 104,
        width: 104,
        borderRadius: 52,
        padding: 5,
        alignItems: "center",
        overflow: "hidden",
    },
    dr: {
        fontSize: FontSize.size_6xl,
        color: Color.white1,
        textAlign: "center",
        fontFamily: FontFamily.sourceSerifProSemibold,
        fontWeight: "600",
        lineHeight: 22,
    },
    advicecontainer: {
        paddingTop: 30,
        paddingHorizontal: Padding.p_lg,
        paddingBottom: Padding.p_sm,
        alignSelf: "stretch",
        borderRadius: 16,
        shadowColor: "rgba(32, 34, 36, 0.5)",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 15,
        elevation: 40,
        shadowOpacity: 0.04,
        borderColor: "#ffeccf",
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: Color.white1,
        marginHorizontal: 24
    },
    wealthAssets: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        flex: 1,
        backgroundColor: Color.white1,
    },
    ml4: {
        marginLeft: 4,
    },
    vuesaxlinearedit2Icon: {
        width: 18,
        height: 18,
    },
    edit: {
        fontSize: FontSize.textMediumBoldText1_size,
        lineHeight: 20,
        fontWeight: "600",
        fontFamily: FontFamily.openSansRegular,
        color: Color.white1,
        textAlign: "center",
    },
    bottomFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },

    frameScrollViewContent: {
        paddingTop: 18,
        flexDirection: "column",
    },
    bottom: {
        width: 180,
        paddingHorizontal: 5,
        paddingVertical: 14,
        alignSelf: 'center',
        borderRadius: 60,
        marginVertical: 28
    },
    wealthTabParent: {
        alignSelf: "stretch",
        flex: 1,
    },    
});

export default EditEstate;
