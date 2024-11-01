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

const EditPlanBInsurance = () => {
    const route: any = useRoute();
    const { editData } = route.params;
    const { showFlashMessage } = useCustomFlashMessage();
    const navigation = useNavigation();    
    //const { type } = route.params;
    const [loading, setLoading] = useState(false);
    //const profile = useSelector((state: any) => state.data.profile);
    const [datas, setDatas] = useState<any>(editData);

    console.log("editData in edit",editData)

    useEffect(() => {
        console.log("editData in useEffect in EditPlanBInsurance", editData);
        setDatas(editData);
    }, [editData])

    const updateProfile = async () => {
        const {
            Total_Liabilities,
            Child_Edu_Allowance,
            Replace_Income_p_a,
            Number_of_Income_Yrs,
            Allowance_Medical,
            Allowance_Funeral,
            Allowance_Emergency,
            Allowance_Home_Mods,
            Other_Allowances_Consideration,
            Multi_Line_1,
            id       
        } = datas;
        

        const updatedData = {
            Total_Liabilities,
            Child_Edu_Allowance,
            Replace_Income_p_a,
            Number_of_Income_Yrs,
            Allowance_Medical,
            Allowance_Funeral,
            Allowance_Emergency,
            Allowance_Home_Mods,
            Other_Allowances_Consideration,
            Multi_Line_1,
            id 
        };

        console.log("updatedData", updatedData);

        // if(Executor_of_the_Will == '' || Location_of_Will == ''){            
        //     showFlashMessage("Please fill Location of Will and Executor of the Will", 'failure');

        //     return false;
        // }

        setLoading(true);
        await actions.updatePlanBInsurance([updatedData]);

        await actions.getINA();
        await actions.getFinancialAccounts();

        navigation.goBack();

        showMessage({
            message: 'Success',
            description: 'PlanB Insurance updated successfully',
            type: 'success',
        });
        showFlashMessage("PlanB Insurance updated successfully", 'success');

        setLoading(false);
    }

    const updateState = (value: any, label: string) => {
        console.log("label1233", label, value);
        setDatas((prevDatas: any) => {
            console.log("prevDatas", prevDatas);
            if (label in prevDatas) {
                return { ...prevDatas, [label]: value };
            }
            return prevDatas;
            // const updatedDatas = prevDatas.map((data: any) => {
            //     console.log("data", data)
            //     // console.log("data[label]", data[label]);
            //     console.log("label", label);
            //     console.log("value", value);
            //     // if (label in data) {
            //     //     return { ...data, [label]: value };
            //     // }
            //     // return data;
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
            <CustomHeader name="Edit Plan B Insurance" type={3} />
            <Loader visible={loading} />

            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={styles.advicecontainer}>

                    <CTextInput icon={require("../../assets/money-send.png")} key='Total_Liabilities' label='Total Liabilities' defaultValue={datas?.Total_Liabilities?.toString()} id='Total_Liabilities' updateState={updateState} isNumOnly={true} />        

                    <CTextInput icon={require("../../assets/money-send.png")} key='Child_Edu_Allowance' label='Child Education Allowance' defaultValue={datas?.Child_Edu_Allowance?.toString()} id='Child_Edu_Allowance' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Replace_Income_p_a' label='Replace Income' defaultValue={datas?.Replace_Income_p_a?.toString()} id='Replace_Income_p_a' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Number_of_Income_Yrs' label='Number of Income Years' defaultValue={datas?.Number_of_Income_Yrs?.toString()} id='Number_of_Income_Yrs' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Allowance_Medical' label='Medical Allowance' defaultValue={datas?.Allowance_Medical?.toString()} id='Allowance_Medical' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Allowance_Funeral' label='Funeral Allowance' defaultValue={datas?.Allowance_Funeral?.toString()} id='Allowance_Funeral' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Allowance_Emergency' label='Emergency Allowance' defaultValue={datas?.Allowance_Emergency?.toString()} id='Allowance_Emergency' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Allowance_Home_Mods' label='Home Modification Allowance' defaultValue={datas?.Allowance_Home_Mods?.toString()} id='Allowance_Home_Mods' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Other_Allowances_Consideration' label='Other Allowance Consideration' defaultValue={datas?.Other_Allowances_Consideration?.toString()} id='Other_Allowances_Consideration' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../../assets/money-send.png")} key='Multi_Line_1' label='INA Notes And Comments' defaultValue={datas?.Multi_Line_1?.toString()} id='Multi_Line_1' updateState={updateState} isNumOnly={false} isTextArea={true} />
                                        
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

export default EditPlanBInsurance;
