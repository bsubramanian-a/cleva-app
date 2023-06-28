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
import { INCOME } from "../../urls";
import DualCheckbox from "../components/DualCheckbox";

const EditIncome = ({ }: any) => {
    const navigation = useNavigation();
    const route: any = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state: any) => state?.data?.profile);
    const [datas, setDatas] = useState<any>([]);
    const [checkboxValue, setCheckboxValue] = useState<any>(null);

    const handleCheckboxChange = (newValue: any) => {
        setCheckboxValue(newValue);
        updateState(null, "Other_Income_p_a");
        updateState("", "Details_Other_Income");
    };

    useEffect(() => {
        const data = profile[0]?.income?.find((dp: any) => dp?.id == id);
        console.log("data income", data);

        if (data) {
            setDatas([data]);
            setCheckboxValue(data?.Other_Income_p_a ? true : false);
        }
    }, [profile, id])

    const updateProfile = async () => {
        const {
            Centrelink_DVA_p_a,
            Interest_Income_p_a,
            Rental_Income_p_a,
            Dividends_p_a,
            Pension_Annuity_p_a,
            Other_Income_p_a,
            Details_Other_Income,
        } = datas[0];

        const updatedData = {
            id,
            Centrelink_DVA_p_a,
            Interest_Income_p_a,
            Rental_Income_p_a,
            Dividends_p_a,
            Pension_Annuity_p_a,
            Other_Income_p_a,
            Details_Other_Income,
        };

        setLoading(true);

        await actions.updateOtherProfileDetails([updatedData], INCOME);

        await actions.getProfile();

        navigation.goBack();

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
                        <Text style={styles.dr}>{datas?.length > 0 && (datas[0]?.Person_Account?.name?.split(' ').map((word: string) => word.charAt(0).toUpperCase()).join(''))}</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontWeight: '500', fontSize: 22, color: 'black', fontFamily: FontFamily.sourceSerifPro, }}>{datas[0]?.Person_Account?.name}</Text>
                    </View>

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Centrelink_DVA_p_a' label='Centrelink/DVA' defaultValue={datas[0]?.Centrelink_DVA_p_a?.toString()} id='Centrelink_DVA_p_a' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Interest_Income_p_a' label='Interest Income' defaultValue={datas[0]?.Interest_Income_p_a?.toString()} id='Interest_Income_p_a' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Rental_Income_p_a' label='Rental Income' defaultValue={datas[0]?.Rental_Income_p_a?.toString()} id='Rental_Income_p_a' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Dividends_p_a' label='Dividends' defaultValue={datas[0]?.Dividends_p_a?.toString()} id='Dividends_p_a' updateState={updateState} isNumOnly={true} />

                    <CTextInput icon={require("../assets/dollar-square.png")} key='Pension_Annuity_p_a' label='Pension/Annuity' defaultValue={datas[0]?.Pension_Annuity_p_a?.toString()} id='Pension_Annuity_p_a' updateState={updateState} isNumOnly={true} />

                    <View>
                        <View style={styles.imgText}>
                            <Image
                                style={styles.vuesaxlinearedit2Icon}
                                resizeMode="cover"
                                source={require('../assets/document-text.png')}
                            />
                            <Text style={styles.labelText}>Other Income</Text>
                        </View>
                        <DualCheckbox
                            value={checkboxValue}
                            onChange={handleCheckboxChange}
                        />
                    </View>

                    {checkboxValue && <>
                        <CTextInput icon={require("../assets/dollar-square.png")} key='Other_Income_p_a' label='Other Income' defaultValue={datas[0]?.Other_Income_p_a?.toString()} id='Other_Income_p_a' updateState={updateState} isNumOnly={true} />

                        <CTextInput style={styles.tInput} key='Details_Other_Income' defaultValue={datas[0]?.Details_Other_Income?.toString()} id='Details_Other_Income' updateState={updateState} isNumOnly={false} isTextArea={true} />
                    </>}
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
    tInput: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#DEDEDE",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 12,
        paddingTop: 10,
    },
    imgText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 24,
        gap: 5,
    },
    labelText: {
        color: "#4B4B4B",
        fontSize: 14,
    },
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
    mainBox: {
        position: "relative",
    },
    mainBox1: {
        position: "relative",
        width: "48%"
    },
    sideBox: {
        position: "absolute",
        right: 0,
        bottom: 0,
        borderWidth: 1,
        borderColor: "#FBB142",
        width: "30%",
        height: 48,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    textBox: {
        color: "#000",
        fontSize: 15,
        fontWeight: "600"
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

export default EditIncome;
