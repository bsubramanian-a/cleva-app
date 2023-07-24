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
import { INSURANCE } from "../../urls";
import DualCheckbox from "../components/DualCheckbox";
import { useCustomFlashMessage } from "../components/CustomFlashMessage";

const EditInsurance = ({ }: any) => {
    const { showFlashMessage } = useCustomFlashMessage();
    const navigation = useNavigation();
    const route: any = useRoute();
    const { id, type } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state: any) => state?.data?.profile);
    const [datas, setDatas] = useState<any>([]);
    const [otherheckboxValue, setOtherCheckboxValue] = useState(false);

    const handleOtherCheckboxChange = (newValue: any) => {
        setOtherCheckboxValue(newValue);
    };

    useEffect(() => {
        const data = profile[0]?.insurance?.find((dp: any) => dp?.Client_Name.id == id);

        if (data) {
            setDatas([data]);
            if (data?.Other_Allowances_Consideration && data?.Other_Allowances_Consideration != "" && data?.Other_Allowances_Consideration != 0) {
                setOtherCheckboxValue(true);
            } else {
                setOtherCheckboxValue(false);
            }
        }
    }, [profile, id])

    const updateProfile = async () => {
        const {
            id,
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
        } = datas[0];

        const updatedData = {
            id,
            Total_Liabilities,
            Child_Edu_Allowance,
            Replace_Income_p_a,
            Number_of_Income_Yrs,
            Allowance_Medical,
            Allowance_Funeral,
            Allowance_Emergency,
            Allowance_Home_Mods,
            Other_Allowances_Consideration: otherheckboxValue ? Other_Allowances_Consideration : null,
            Multi_Line_1,
        };

        setLoading(true);

        await actions.updateOtherProfileDetails([updatedData], INSURANCE);

        await actions.getProfile();

        navigation.goBack();

        // showMessage({
        //     message: 'Success',
        //     description: 'Profile updated successfully',
        //     type: 'success',
        // });
        showFlashMessage("Profile updated successfully", 'success');
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
                    <View style={[styles.frWrapper, styles.ml_11, styles.wrapperLayout]}>
                        <Text style={styles.dr}>{datas?.length > 0 && (datas[0]?.Client_Name?.name?.charAt(0) + datas[0]?.Client_Name?.name?.charAt(1))}</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontWeight: '500', fontSize: 22, color: 'black', fontFamily: FontFamily.sourceSerifPro, }}>{datas[0]?.Client_Name?.name}</Text>
                    </View>

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Total_Liabilities' label='Total Liabilitiese' defaultValue={datas[0]?.Total_Liabilities?.toString()} id='Total_Liabilities' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Child_Edu_Allowance' label='Allowance for Children/Education' defaultValue={datas[0]?.Child_Edu_Allowance?.toString()} id='Child_Edu_Allowance' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Replace_Income_p_a' label='Replace Income p.a.' defaultValue={datas[0]?.Replace_Income_p_a?.toString()} id='Replace_Income_p_a' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Number_of_Income_Yrs' label='Number of years' defaultValue={datas[0]?.Number_of_Income_Yrs?.toString()} id='Number_of_Income_Yrs' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Allowance_Medical' label='Allowance for Medical' defaultValue={datas[0]?.Allowance_Medical?.toString()} id='Allowance_Medical' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Allowance_Funeral' label='Allowance for funeral' defaultValue={datas[0]?.Allowance_Funeral?.toString()} id='Allowance_Funeral' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Allowance_Emergency' label='Allowance for Emergency' defaultValue={datas[0]?.Allowance_Emergency?.toString()} id='Allowance_Emergency' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Allowance_Home_Mods' label='Allowance for House Modifications' defaultValue={datas[0]?.Allowance_Home_Mods?.toString()} id='Allowance_Home_Mods' updateState={updateState} isNumOnly={true} />

                    <DualCheckbox
                        label="Other"
                        value={otherheckboxValue}
                        onChange={handleOtherCheckboxChange}
                        containerStyle={{marginTop: 12}}
                    />

                    {otherheckboxValue && <CTextInput icon={require("../assets/dollar-square.png")} key='Other_Allowances_Consideration' label='Other' defaultValue={datas[0]?.Other_Allowances_Consideration?.toString()} id='Other_Allowances_Consideration' updateState={updateState} isNumOnly={true} />}

                    <CTextInput isTextArea={true} key='Multi_Line_1' label='' defaultValue={datas[0]?.Multi_Line_1?.toString()} id='Multi_Line_1' updateState={updateState} isNumOnly={false} placeholder="Other income details write here..." />
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

export default EditInsurance;
