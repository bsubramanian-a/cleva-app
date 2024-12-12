import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Label from "../../components/Label";
import {
    Padding,
    FontFamily,
    Color,
    FontSize,
    Border,
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

const EditDebtonateDebt = () => {
    const route: any = useRoute();
    const { account } = route.params;
    const { showFlashMessage } = useCustomFlashMessage();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState<any>({});

    const today = new Date();
    const futureDate = new Date();
    futureDate.setFullYear(today.getFullYear() + 100);

    useEffect(() => {
        console.log("account in useEffect in EditDebtonateDebt", account);
        setDatas(account);
    }, [account])

    const updateProfile = async () => {
        const {
            Product_Provider,
            Last_4_Digits,
            Interest_Rate,
            Term_Months,
            Term_Remaining_Months,
            Goal_Date,
            Current_Repayment_Amount,
            Repayment_Amount,
            Repayment_Type,
            Deductible,
            Good_Debt_Bad_Debt,
            Linked_Asset_Value,
            Purpose_of_the_Debt_Loan,
            id
        } = datas;


        const updatedData = {
            Product_Provider,
            Last_4_Digits,
            Interest_Rate,
            Term_Months,
            Term_Remaining_Months,
            Goal_Date,
            Current_Repayment_Amount,
            Repayment_Amount,
            Repayment_Type,
            Deductible,
            Good_Debt_Bad_Debt,
            Linked_Asset_Value,
            Purpose_of_the_Debt_Loan,
            id
        };

        console.log("updatedData", updatedData);

        // if (Executor_of_your_Will == '' || Location_of_the_Will == '') {
        //     showFlashMessage("Please fill Location of Will and Executor of the Will", 'failure');

        //     return false;
        // }

        setLoading(true);
        await actions.updateFinancialAccounts([updatedData]);

        await actions.getFinancialAccounts();

        navigation.goBack();

        showMessage({
            message: 'Success',
            description: 'Financial Account (Debtonate Debt) updated successfully',
            type: 'success',
        });
        showFlashMessage("Financial Account (Debtonate Debt) updated successfully", 'success');

        setLoading(false);
    }

    const updateState = (value: any, label: string) => {
        // console.log("label1233", label, value);
        setDatas((prevDatas: any) => {
            console.log("prevDatas", prevDatas);
            if (label in prevDatas) {
                return { ...prevDatas, [label]: value };
            }
            return prevDatas;
            // console.log("prevDatas", prevDatas);
            // const updatedDatas = prevDatas.map((data: any) => {
            //     console.log("data[label]", data[label]);
            //     console.log("label", label);
            //     console.log("value", value);
            //     if (label in data) {
            //         return { ...data, [label]: value };
            //     }
            //     return data;
            // });
            // console.log("updatedDatas", updatedDatas);
            // return updatedDatas;
        });
    };



    return (
        <View
            style={styles.wealthAssets}
        >
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <CustomHeader name="Edit Fin Account (Debtonate Debt)" type={2} />
            <Loader visible={loading} />

            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={[styles.advice]}>
                    <Text style={[styles.balanceNextLine]}>{account?.Plan_Name}</Text>
                </View>
                <View style={styles.advicecontainer}>

                    <CTextInput icon={require("../../assets/money-send.png")} key='Product_Provider' label='Product Provider' defaultValue={account?.Product_Provider?.toString()} id='Product_Provider' updateState={updateState} isNumOnly={false} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Last_4_Digits' label='Last 4 Digits' defaultValue={account?.Last_4_Digits?.toString()} id='Last_4_Digits' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Interest_Rate' label='Interest Rate' defaultValue={account?.Interest_Rate?.toString()} id='Interest_Rate' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Term_Months' label='Term Months' defaultValue={account?.Term_Months?.toString()} id='Term_Months' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Term_Remaining_Months' label='Term Remaining Months' defaultValue={account?.Term_Remaining_Months?.toString()} id='Term_Remaining_Months' updateState={updateState} isNumOnly={true} />

                    <Label
                        label={'When do you want to achieve this goal by ? \n dd/mm/yyyy'}
                        icon={require('../../assets/calendar.png')}
                    />
                    <CustomDatePicker
                        shouldExecuteUseEffect={true}
                        defaultValue={
                            account?.Goal_Date ? new Date(account?.Goal_Date) : ""
                        }
                        onValueChange={(value: any) => updateState(value, 'Goal_Date')}
                        minimumDate={null}
                        maximumDate={futureDate}
                        disableFutureDates={false}
                        disablePastDates={true}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Current_Repayment_Amount' label='Current Repayment Amount (Monthly)' defaultValue={account?.Current_Repayment_Amount?.toString()} id='Current_Repayment_Amount' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Repayment_Amount' label='Required Repayment (goal)' defaultValue={account?.Repayment_Amount?.toString()} id='Repayment_Amount' updateState={updateState} isNumOnly={true} />
                    

                    <Label label="Actual Repayment Frequency" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-' },
                            { label: 'P&I', value: 'P&I' },
                            { label: 'Interest Only', value: 'Interest Only' },
                            { label: 'Combination', value: 'Combination' },
                            { label: 'Other', value: 'Other' }
                        ]}
                        defaultValue={datas?.Repayment_Type?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Repayment_Type')}
                    />

                    <Label label="Deductible" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-' },
                            { label: 'Deductible', value: 'Deductible' },
                            { label: 'Non-Deductible', value: 'Non-Deductible' },
                            { label: 'Not Applicable', value: 'Not Applicable' }
                        ]}
                        defaultValue={datas?.Deductible?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Deductible')}
                    />

                    <Label label="Good/Bad" icon={require("../../assets/money-send.png")} />
                    <DropdownComponent
                        values={[
                            { label: '-None-', value: '-None-' },
                            { label: 'Good', value: 'Good' },
                            { label: 'Bad', value: 'Bad' },
                            { label: 'Not Applicable', value: 'Not Applicable' }
                        ]}
                        defaultValue={datas?.Good_Debt_Bad_Debt?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Good_Debt_Bad_Debt')}
                    />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Linked_Asset_Value' label='Linked Asset Value' defaultValue={account?.Linked_Asset_Value?.toString()} id='Linked_Asset_Value' updateState={updateState} isNumOnly={true} />   

                    <Label label="Purpose of the Debt Loan..." icon={require("../../assets/money-send.png")}  />


                    <CTextInput isTextArea={true} key='Purpose_of_the_Debt_Loan' label='' defaultValue={account?.Purpose_of_the_Debt_Loan?.toString()} id='Purpose_of_the_Debt_Loan' updateState={updateState} isNumOnly={false} placeholder="Purpose of the Debt Loan..." containerStyle={{marginTop:0}} />  

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
    advice: {
        borderWidth: 0,
        borderColor: "#eaeaea",
        paddingTop: 5,
        paddingBottom: 10,
        alignItems: "center",
    },
    users: {
        alignItems: "center",
        alignSelf: "stretch",
    },
    loginuser: {
        flexDirection: "row",
    },
    danFleurClr: {
        color: Color.black,
        textAlign: "left",
    },
    danFleur: {
        fontSize: 18,
        fontFamily: FontFamily.sourceSerifPro
    },
    mt26: {
        marginTop: 26,
    },
    mTypo: {
        textAlign: "left",
        fontFamily: FontFamily.sourceSerifPro,
        fontWeight: "500",
        color: '#FBB142',
    },
    balanceNextLine: {
        fontSize: 14,
        color: '#EF9F27',
        fontWeight: "bold"
    },
    balanceText: {
        fontSize: 26,
        color: Color.black
    },
    balance: {
        backgroundColor: "#FFF9F1",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: Padding.p_md,
        paddingVertical: Padding.p_sm,
        borderRadius: 8,
        marginLeft: 30,
        marginRight: 30,
        alignItems: "center",

    },
});

export default EditDebtonateDebt;
