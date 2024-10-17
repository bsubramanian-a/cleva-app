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

const EditMoneyAutoDrive = () => {
    const route: any = useRoute();
    const { houseHoldExpenses } = route.params;
    const { showFlashMessage } = useCustomFlashMessage();
    const navigation = useNavigation();    
    const { type } = route.params;
    const [loading, setLoading] = useState(false);
    //const profile = useSelector((state: any) => state.data.profile);
    const [datas, setDatas] = useState<any>(houseHoldExpenses);

    useEffect(() => {
        console.log("houseHoldExpenses in useEffect in EditMoneyAutoDrive", houseHoldExpenses);
        setDatas(houseHoldExpenses);
    }, [houseHoldExpenses])

    const updateProfile = async () => {
        const {
            Gas_p_a,
            Gas_Pay_Frequency,
            Electricity_p_a,
            Electricity_Pay_Frequency,
            Water_p_a,
            Water_Pay_Frequency,
            Home_Contents_Insurance_p_a,
            Home_Contents_Pay_Frequency,
            Car_Insurance_p_a,
            Car_Insurance_Pay_Frequency,
            Private_Health_Insurance_p_a,
            Private_Health_Pay_Frequency,
            General_Non_Utilities_Household,
            General_Non_Utilities_Payment_Frequency,
            Home_Loan,
            Home_Loan_Repayment_Frequency,
            Investment_Property_Loan_p_a,
            Invest_Property_Pay_Frequency,
            Other_Investment_Loan_p_a,
            Other_Investment_Loan_Pay_Freq,
            Personal_Loan_p_a,
            Personal_Laon_Pay_Freq,
            Credit_Cards_per_month,
            Other_Expenses_p_a,
            Household_Expenses_Notes_Comments,            
            id       
        } = datas[0];
        

        const updatedData = {
            Gas_p_a,
            Gas_Pay_Frequency,
            Electricity_p_a,
            Electricity_Pay_Frequency,
            Water_p_a,
            Water_Pay_Frequency,
            Home_Contents_Insurance_p_a,
            Home_Contents_Pay_Frequency,
            Car_Insurance_p_a,
            Car_Insurance_Pay_Frequency,
            Private_Health_Insurance_p_a,
            Private_Health_Pay_Frequency,
            General_Non_Utilities_Household,
            General_Non_Utilities_Payment_Frequency,
            Home_Loan,
            Home_Loan_Repayment_Frequency,
            Investment_Property_Loan_p_a,
            Invest_Property_Pay_Frequency,
            Other_Investment_Loan_p_a,
            Other_Investment_Loan_Pay_Freq,
            Personal_Loan_p_a,
            Personal_Laon_Pay_Freq,
            Credit_Cards_per_month,
            Other_Expenses_p_a,
            Household_Expenses_Notes_Comments,
            id 
        };

        console.log("updatedData", updatedData);

        // if(Executor_of_the_Will == '' || Location_of_Will == ''){            
        //     showFlashMessage("Please fill Location of Will and Executor of the Will", 'failure');

        //     return false;
        // }

        setLoading(true);
        await actions.updateHouseHoldExpenses([updatedData]);

        await actions.getHouseHoldExpenses();
        showMessage({
            message: 'Success',
            description: 'HouseHold Expenses updated successfully',
            type: 'success',
        });
        showFlashMessage("HouseHold Expenses updated successfully", 'success');
        navigation.goBack();        

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
            <CustomHeader name="Edit HouseHold Expenses" type={3} />
            <Loader visible={loading} />

            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={styles.advicecontainer}>

                    <CTextInput icon={require("../../assets/money-send.png")} key='Gas_p_a' label='Gas (p.a.)' defaultValue={datas[0]?.Gas_p_a?.toString()} id='Gas_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Gas Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Gas_Pay_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Gas_Pay_Frequency')}
                    /> 

                    <CTextInput icon={require("../../assets/money-send.png")} key='Electricity_p_a' label='Electricity (p.a.)' defaultValue={datas[0]?.Electricity_p_a?.toString()} id='Electricity_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Electricity Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Electricity_Pay_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Electricity_Pay_Frequency')}
                    />  

                    <CTextInput icon={require("../../assets/money-send.png")} key='Water_p_a' label='Water (p.a.)' defaultValue={datas[0]?.Water_p_a?.toString()} id='Water_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Water Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Water_Pay_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Water_Pay_Frequency')}
                    /> 

                    <CTextInput icon={require("../../assets/money-send.png")} key='Home_Contents_Insurance_p_a' label='Home/Contents Insurance (p.a.)' defaultValue={datas[0]?.Home_Contents_Insurance_p_a?.toString()} id='Home_Contents_Insurance_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Home Contents Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Home_Contents_Pay_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Home_Contents_Pay_Frequency')}
                    /> 

                    <CTextInput icon={require("../../assets/money-send.png")} key='Car_Insurance_p_a' label='Car Insurance (p.a.)' defaultValue={datas[0]?.Car_Insurance_p_a?.toString()} id='Car_Insurance_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Car Insurance Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Car_Insurance_Pay_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Car_Insurance_Pay_Frequency')}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Private_Health_Insurance_p_a' label='Private Health Insurance (p.a.)' defaultValue={datas[0]?.Private_Health_Insurance_p_a?.toString()} id='Private_Health_Insurance_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Private Health Insurance Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Private_Health_Pay_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Private_Health_Pay_Frequency')}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='General_Non_Utilities_Household' label='General Non-Utilities Household' defaultValue={datas[0]?.General_Non_Utilities_Household?.toString()} id='General_Non_Utilities_Household' updateState={updateState} isNumOnly={true} />
                    <Label label="General Non-Utilities Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.General_Non_Utilities_Payment_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'General_Non_Utilities_Payment_Frequency')}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Home_Loan' label='Home Loan' defaultValue={datas[0]?.Home_Loan?.toString()} id='Home_Loan' updateState={updateState} isNumOnly={true} />
                    <Label label="Home Loan Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Home_Loan_Repayment_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Home_Loan_Repayment_Frequency')}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Investment_Property_Loan_p_a' label='Investment Property Loan (p.a.)' defaultValue={datas[0]?.Investment_Property_Loan_p_a?.toString()} id='Investment_Property_Loan_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Investment Property Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Invest_Property_Pay_Frequency?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Invest_Property_Pay_Frequency')}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Other_Investment_Loan_p_a' label='Other Investment Loan (p.a.)' defaultValue={datas[0]?.Other_Investment_Loan_p_a?.toString()} id='Other_Investment_Loan_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Other Investments Pay Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Other_Investment_Loan_Pay_Freq?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Other_Investment_Loan_Pay_Freq')}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Personal_Loan_p_a' label='Personal Loan (p.a.)' defaultValue={datas[0]?.Personal_Loan_p_a?.toString()} id='Personal_Loan_p_a' updateState={updateState} isNumOnly={true} />
                    <Label label="Personal Loan Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-'}, 
                            { label: 'Weekly', value: 'Weekly'},
                            { label: 'Fortnightly', value: 'Fortnightly'},
                            { label: 'Monthly', value: 'Monthly'}, 
                            { label: 'Quarterly', value: 'Quarterly'},
                            { label: 'Twice Yearly', value: 'Twice Yearly'},
                            { label: 'Annual', value: 'Annual'},
                            { label: 'Not Applicable', value: 'Not Applicable'}
                        ]}
                        defaultValue={datas[0]?.Personal_Laon_Pay_Freq?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Personal_Laon_Pay_Freq')}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Credit_Cards_per_month' label='Credit Cards (per month)' defaultValue={datas[0]?.Credit_Cards_per_month?.toString()} id='Credit_Cards_per_month' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Other_Expenses_p_a' label='Other Expenses (p.a.)' defaultValue={datas[0]?.Other_Expenses_p_a?.toString()} id='Other_Expenses_p_a' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Household_Expenses_Notes_Comments' label='Household Expenses Notes_Comments' defaultValue={datas[0]?.Household_Expenses_Notes_Comments?.toString()} id='Household_Expenses_Notes_Comments' updateState={updateState} isNumOnly={false} />
                                      
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

export default EditMoneyAutoDrive;
