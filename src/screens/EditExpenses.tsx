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

const EditExpenses = ({ }: any) => {
    const navigation = useNavigation();
    const route: any = useRoute();
    const { id, type } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state: any) => state?.data?.profile);
    const [datas, setDatas] = useState<any>([]);
    const [checkboxValue, setCheckboxValue] = useState(false);

    const handleCheckboxChange = (newValue: any) => {
        setCheckboxValue(newValue);
        updateState(newValue, "Any_changes_planned_next_6_12mths");
    };

    useEffect(() => {
        setDatas([profile[0]?.expenses[0]]);
    }, [profile, type])


    const updateProfile = async () => {
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
            id,
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
            Other_Expenses_p_a: !checkboxValue ? null : Other_Expenses_p_a,
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

    console.log("datas", datas);
    return (
        <View
            style={styles.wealthAssets}
        >
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <CustomHeader name="Edit Details" type={3} />
            <Loader visible={loading} />
            <FlashMessage position="top" />
            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={styles.advicecontainer}>
                    <View style={[styles.frWrapper, styles.wrapperLayout]}>
                        <Text style={styles.dr}>{datas?.length > 0 && (datas[0]?.Household?.name?.charAt(0) + datas[0]?.Household?.name?.charAt(1))}</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: 1, marginBottom: 10 }}>
                        <Text style={styles.dr}>{datas?.length > 0 && (datas[0]?.Household?.name?.charAt(0) + datas[0]?.Household?.name?.charAt(1))}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#FBB142' }}>Household</Text>
                    </View>

                    {type == 'user1' &&
                        <>
                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Gas_p_a' label='Gas' defaultValue={datas[0]?.Gas_p_a?.toString()} id='Gas_p_a' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Electricity_p_a' label='Electricity' defaultValue={datas[0]?.Electricity_p_a?.toString()} id='Electricity_p_a' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Water_p_a' label='Water' defaultValue={datas[0]?.Water_p_a?.toString()} id='Water_p_a' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Home_Contents_Insurance_p_a' label='Home/Contents Insurance' defaultValue={datas[0]?.Home_Contents_Insurance_p_a?.toString()} id='Home_Contents_Insurance_p_a' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Car_Insurance_p_a' label='Car Insurance' defaultValue={datas[0]?.Car_Insurance_p_a?.toString()} id='Car_Insurance_p_a' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Private_Health_Insurance_p_a' label='Private Health Insurance' defaultValue={datas[0]?.Private_Health_Insurance_p_a?.toString()} id='Private_Health_Insurance_p_a' updateState={updateState} isNumOnly={true} />
                        </>
                    }

                    <Text style={styles.loanR}>Loan Repayments</Text>

                    {type == 'user2' &&
                        <>
                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Home_Loan' label='Home' defaultValue={datas[0]?.Home_Loan?.toString()} id='Home_Loan' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Investment_Property_Loan_p_a' label='Investment Property' defaultValue={datas[0]?.Investment_Property_Loan_p_a?.toString()} id='Investment_Property_Loan_p_a' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Other_Investment_Loan_p_a' label='Other Investment' defaultValue={datas[0]?.Other_Investment_Loan_p_a?.toString()} id='Other_Investment_Loan_p_a' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Personal_Loan_p_a' label='Personal' defaultValue={datas[0]?.Personal_Loan_p_a?.toString()} id='Personal_Loan_p_a' updateState={updateState} isNumOnly={true} />

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Credit_Cards_per_month' label='Credit Cards' defaultValue={datas[0]?.Credit_Cards_per_month?.toString()} id='Credit_Cards_per_month' updateState={updateState} isNumOnly={true} />

                            <DualCheckbox
                                label="Other Expenses"
                                value={checkboxValue}
                                onChange={handleCheckboxChange}
                            />

                            {checkboxValue &&
                                <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Other_Expenses_p_a' label='Other Expenses' defaultValue={datas[0]?.Other_Expenses_p_a?.toString()} id='Other_Expenses_p_a' updateState={updateState} isNumOnly={false} isTextArea={true} />
                            }

                            <CTextInput icon={require("../assets/vuesaxlinearmoneyrecive.png")} key='Multi_Line_1' label='' defaultValue={datas[0]?.Multi_Line_1?.toString()} id='Multi_Line_1' updateState={updateState} isNumOnly={false} isTextArea={true} />
                        </>
                    }
                </View>
                <LinearGradient
                    style={[styles.bottom, styles.bottomFlexBox]}
                    locations={[0, 1]}
                    colors={["#fbb142", "#f6a326"]}
                    useAngle={true}
                    angle={180}
                >
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={updateProfile}>
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
    loanR: {
        color: "#FBB142",
        marginTop: 15,
        fontSize: 14
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

export default EditExpenses;
