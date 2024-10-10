import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Label from "../../components/Label";
import {
    Padding,
    FontFamily,
    Color,
    FontSize,
} from "../../GlobalStyles";
import CustomHeader from "../../components/CustomHeader";
import { useSelector } from "react-redux";
import CTextInput from "../../components/CTextInput";
import { useEffect, useState } from "react";
import actions from "../../../actions";
import Loader from "../../components/Loader";
import { useNavigation, useRoute } from "@react-navigation/native";
import DropdownComponent from "../../components/DropdownComponent";
import CustomDatePicker from "../../components/CustomDatepicker";
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import { useCustomFlashMessage } from "../../components/CustomFlashMessage";

const EditPlanBEstatePlanWill = () => {
    const route: any = useRoute();
    const { profile } = route.params;
    const { showFlashMessage } = useCustomFlashMessage();
    const navigation = useNavigation();    
    const { type } = route.params;
    const [loading, setLoading] = useState(false);
    //const profile = useSelector((state: any) => state.data.profile);
    const [datas, setDatas] = useState<any>(profile);

    useEffect(() => {
        console.log("profile in useEffect in EditPlanBEmergencyFund", profile);
        setDatas(profile);
    }, [profile])

    const updateProfile = async () => {
        const {
            Super_Fund_Beneficiary,
            If_Yes_Beneficiary_Name_s,
            Do_you_have_a_Will,
            Is_it_up_to_date,
            Location_of_Will,
            Executor_of_the_Will,
            Do_you_have_a_POA,
            Last_Name,
            id       
        } = datas[0];
        

        const updatedData = {
            Super_Fund_Beneficiary,
            If_Yes_Beneficiary_Name_s,
            Do_you_have_a_Will,
            Is_it_up_to_date,
            Location_of_Will,
            Executor_of_the_Will,
            Do_you_have_a_POA: [Do_you_have_a_POA],
            Last_Name,
            id 
        };

        console.log("updatedData", updatedData);

        if(Executor_of_the_Will == '' || Location_of_Will == ''){            
            showFlashMessage("Please fill Location of Will and Executor of the Will", 'failure');

            return false;
        }

        setLoading(true);
        await actions.updatePlanBEstatePlanWill([updatedData]);

        await actions.getProfile();

        navigation.goBack();

        showMessage({
            message: 'Success',
            description: 'PlanB Estate Plan Will updated successfully',
            type: 'success',
        });
        showFlashMessage("PlanB Estate Plan Will updated successfully", 'success');

        setLoading(false);
    }

    const updateState = (value: any, label: string) => {
        // console.log("label1233", label, value);
        setDatas((prevDatas: any) => {
            console.log("prevDatas", prevDatas);
            const updatedDatas = prevDatas.map((data: any) => {
                console.log("data[label]", data[label]);
                console.log("label", label);
                console.log("value", value);
                if (label in data) {
                    return { ...data, [label]: value };
                }
                return data;
            });
            console.log("updatedDatas", updatedDatas);
            return updatedDatas;
        });
    };

    

    return (
        <View
            style={styles.wealthAssets}
        >
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <CustomHeader name="Edit Details" type={3} />
            <Loader visible={loading} />

            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={styles.advicecontainer}>
                    <Label label="Do you have a benificiery for your super fund?" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-' }, 
                            { label: 'Not Sure', value: 'Not Sure' },
                            { label: 'No', value: 'No' },
                            { label: 'Yes Binding', value: 'Yes Binding' }, 
                            { label: 'Yes - Non-Binding', value: 'Yes - Non-Binding' }
                        ]}
                        defaultValue={datas[0]?.Super_Fund_Beneficiary?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Super_Fund_Beneficiary')}
                    />                    
                    <CTextInput icon={require("../../assets/money-send.png")} key='If_Yes_Beneficiary_Name_s' label='If Yes, Beneficiary Name' defaultValue={datas[0]?.If_Yes_Beneficiary_Name_s?.toString()} id='If_Yes_Beneficiary_Name_s' updateState={updateState} isNumOnly={false} />
                    <Label label="Do you have a Will?" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '' }, 
                            { label: 'No', value: 'No' },
                            { label: 'Yes', value: 'Yes' }
                        ]}
                        defaultValue={datas[0]?.Do_you_have_a_Will?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Do_you_have_a_Will')}
                    /> 
                    <Label label="is it current?" />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '' }, 
                            { label: 'No', value: 'No' },
                            { label: 'Yes', value: 'Yes' }
                        ]}
                        defaultValue={datas[0]?.Is_it_up_to_date?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Is_it_up_to_date')}
                    /> 
                    <CTextInput icon={require("../../assets/money-send.png")} key='Location_of_Will' label='Location of Will' defaultValue={datas[0]?.Location_of_Will?.toString()} id='Location_of_Will' updateState={updateState} isNumOnly={false} />
                    <CTextInput icon={require("../../assets/money-send.png")} key='Location_of_Will' label='Executor of Will' defaultValue={datas[0]?.Executor_of_the_Will?.toString()} id='Executor_of_the_Will' updateState={updateState} isNumOnly={false} />
                    <Label label="Do you have a POA?" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: 'No', value: 'No' },
                            { label: 'Yes - Enduring', value: 'Yes - Enduring' },
                            { label: 'Yes - Guardianship', value: 'Yes - Guardianship' },
                            { label: 'Yes - Other', value: 'Yes - Other' },
                        ]}
                        defaultValue={datas[0]?.Do_you_have_a_POA?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Do_you_have_a_POA')}
                    />                    
                </View>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={updateProfile}>
                    <LinearGradient
                        style={[styles.bottom, styles.bottomFlexBox]}
                        locations={[0, 1]}
                        colors={["#fbb142", "#f6a326"]}
                        useAngle={true}
                        angle={180}
                    >
                        <Text style={[styles.edit, styles.ml4]}>Save</Text>
                    </LinearGradient>
                </Pressable>
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
        fontSize: 26,
        color: Color.white1,
        textAlign: "center",
        fontFamily: FontFamily.sourceSerifPro,
        fontWeight: "600",
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

export default EditPlanBEstatePlanWill;
