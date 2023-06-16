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
import { EMPLOYMENT } from "../../urls";
import DualCheckbox from "../components/DualCheckbox";

const EditEmployment = ({ }: any) => {
    const navigation = useNavigation();
    const route: any = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state: any) => state?.data?.profile);
    const [datas, setDatas] = useState<any>([]);
    const [checkboxValue, setCheckboxValue] = useState(null);

    const handleCheckboxChange = (newValue: any) => {
        setCheckboxValue(newValue);
        updateState(newValue, "Any_changes_planned_next_6_12mths");
    };
    
    useEffect(() => {
        const data = profile[0]?.employmentDetails?.find((dp: any) => dp?.id == id);

        if (data) {
            setDatas([data]);
            setCheckboxValue(data?.Any_changes_planned_next_6_12mths)
        }
    }, [profile, id])

    const updateProfile = async () => {
        const {
            Occupation,
            Job_Title,
            Name,
            Status,
            Salary_ex_Super,
            Super,
            Employment_Start_Date,
            Long_Service,
            Annual,
            Sick,
            Multi_Line_1,
            Any_changes_planned_next_6_12mths
        } = datas[0];

        const updatedData = {
            id,
            Occupation,
            Job_Title,
            Name,
            Status,
            Salary_ex_Super,
            Super,
            Employment_Start_Date,
            Long_Service,
            Annual,
            Sick,
            Multi_Line_1,
            Any_changes_planned_next_6_12mths
        };

        setLoading(true);

        console.log("updatedData", updatedData);

        await actions.updateOtherProfileDetails([updatedData], EMPLOYMENT);

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
                        <Text style={styles.dr}>{datas?.length > 0 && (profile[0]?.First_Name?.charAt(0) + profile[0]?.Last_Name?.charAt(0))}</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{datas[0]?.Name}</Text>
                    </View>

                    <CTextInput icon={require("../assets/briefcase.png")} key='Occupation' label='Occupation' defaultValue={datas[0]?.Occupation?.toString()} id='Occupation' updateState={updateState} isNumOnly={false} />

                    <CTextInput icon={require("../assets/personalcard.png")} key='Job_Title' label='Job Title' defaultValue={datas[0]?.Job_Title?.toString()} id='Job_Title' updateState={updateState} isNumOnly={false} />

                    <CTextInput icon={require("../assets/tag-user.png")} key='Name' label='Employer' defaultValue={datas[0]?.Name?.toString()} id='Name' updateState={updateState} isNumOnly={false} />

                    <Label label="Status" icon={require("../assets/cd.png")} />
                    <DropdownComponent
                        values={[{ label: 'None', value: '' }, { label: 'Full Time', value: 'Full Time' }, { label: 'Part Time', value: 'Part Time' }, { label: 'Casual', value: 'Casual' }, { label: 'Self Employed', value: 'Self Employed' }]}
                        defaultValue={datas[0]?.Status?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Status')}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12 }}>
                        <CTextInput icon={require("../assets/wallet.png")} key='Salary_ex_Super' label='Salary' defaultValue={datas[0]?.Salary_ex_Super?.toString()} id='Salary_ex_Super' updateState={updateState} isNumOnly={true} />
                        <View style={styles.mainBox1}>
                            <View style={styles.sideBox}><Text style={styles.textBox}>%</Text></View>
                            <CTextInput icon={require("../assets/discount-circle.png")} key='Super' label='Super' defaultValue={datas[0]?.Super?.toString()} id='Super' updateState={updateState} isNumOnly={true} />
                        </View>
                    </View>

                    <Label label="Employment Start Date" icon={require("../assets/calendar.png")} />
                    <CustomDatePicker defaultValue={datas[0]?.Employment_Start_Date && new Date(datas[0]?.Employment_Start_Date?.toString())} onValueChange={(value: any) => updateState(value, 'Employment_Start_Date')} />

                    <View style={styles.mainBox}>
                        <View style={styles.sideBox}><Text style={styles.textBox}>Days</Text></View>
                        <CTextInput icon={require("../assets/calendar.png")} key='Annual' label='Annual Leave' defaultValue={datas[0]?.Annual?.toString()} id='Annual' updateState={updateState} isNumOnly={true} />
                    </View>

                    <View style={styles.mainBox}>
                        <View style={styles.sideBox}><Text style={styles.textBox}>Days</Text></View>
                        <CTextInput icon={require("../assets/sick.png")} key='Sick' label='Sick Leave' defaultValue={datas[0]?.Sick?.toString()} id='Sick' updateState={updateState} isNumOnly={true} />
                    </View>

                    <View style={styles.mainBox}>
                        <View style={styles.sideBox}><Text style={styles.textBox}>Days</Text></View>
                        <CTextInput icon={require("../assets/calendar.png")} key='Long_Service' label='Long Service Leave' defaultValue={datas[0]?.Long_Service?.toString()} id='Long_Service' updateState={updateState} isNumOnly={true} />
                    </View>

                    <DualCheckbox
                        label="Is there likely any changes in the next 6-12 months?"
                        value={checkboxValue}
                        onChange={handleCheckboxChange}
                    />

                    <CTextInput icon={require("../assets/document-text.png")} key='Multi_Line_1' label='Long Service Leave' defaultValue={datas[0]?.Multi_Line_1?.toString()} id='Multi_Line_1' updateState={updateState} isNumOnly={false} isTextArea={true} />
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

export default EditEmployment;
