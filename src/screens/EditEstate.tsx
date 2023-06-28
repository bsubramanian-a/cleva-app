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

const EditEstate = ({ }: any) => {
    const navigation = useNavigation();
    const route: any = useRoute();
    const { id, type } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state: any) => state?.data?.profile);
    const [datas, setDatas] = useState<any>([]);
    const [willCheckboxValue, setWillCheckboxValue] = useState(false);
    const [currentCheckboxValue, setCurrentCheckboxValue] = useState(false);

    const handleWillCheckboxChange = (newValue: any) => {
        setWillCheckboxValue(newValue);
        updateState(newValue, "Do_you_have_a_Will");
    };

    const handleCurrentCheckboxChange = (newValue: any) => {
        setCurrentCheckboxValue(newValue);
        updateState(newValue, "Is_it_up_to_date");
    };


    useEffect(() => {
        if (type == 'user1') {
            setDatas(profile);
        } else {
            setDatas(profile[0]?.accounts);
        }
    }, [profile, type])

    const updateProfile = async () => {
        const {
            Email,
            Super_Fund_Beneficiary,
            If_Yes_Beneficiary_Name_s,
            Do_you_have_a_Will,
            Is_it_up_to_date,
            Location_of_Will,
            Do_you_have_a_POA,
            Executor_of_the_Will
        } = datas[0];

        const updatedData = {
            Email,
            Super_Fund_Beneficiary,
            If_Yes_Beneficiary_Name_s,
            Do_you_have_a_Will,
            Is_it_up_to_date,
            Location_of_Will,
            Do_you_have_a_POA,
            Executor_of_the_Will
        };

        setLoading(true);

        await actions.updateProfile([updatedData]);

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

    const updatePOAState = (value: any, label: string) => {
        setDatas((prevDatas: any) => {
            const updatedDatas = prevDatas.map((data: any) => {
                if (label in data) {
                    return { ...data, [label]: [value] };
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
                        <Text style={styles.dr}>{datas?.length > 0 && (datas[0]?.First_Name?.charAt(0) + datas[0]?.Last_Name?.charAt(0))}</Text>
                    </View>

                    <View style={{alignItems: 'center', marginVertical: 10}}>
                        <Text style={{fontWeight: '500', fontSize: 22, color: 'black', fontFamily: FontFamily.sourceSerifPro}}>{datas[0]?.First_Name} {datas[0]?.Last_Name}</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontWeight: '500', fontSize: 14, color: '#FBB142' }}>Household</Text>
                    </View>

                    <Label label="Do you have a beneficiary for your super fund??" icon={require("../assets/profile.png")} />
                    <DropdownComponent
                        values={[{ label: 'None', value: '' }, { label: 'Not Sure', value: 'Not Sure' }, { label: 'No', value: 'No' }, { label: 'Yes Binding', value: 'Yes Binding' }, { label: 'Yes - Non-Binding', value: 'Yes - Non-Binding' },]}
                        defaultValue={datas[0]?.Super_Fund_Beneficiary?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Super_Fund_Beneficiary')}
                    />

                    <CTextInput icon={require("../assets/document-text.png")} key='If_Yes_Beneficiary_Name_s' label='If Yes, Beneficiary Name' defaultValue={datas[0]?.If_Yes_Beneficiary_Name_s?.toString()} id='If_Yes_Beneficiary_Name_s' updateState={updateState} isNumOnly={false} />

                    <DualCheckbox
                        style={styles.mTop}
                        label="Do you have a Will?"
                        value={willCheckboxValue}
                        onChange={handleWillCheckboxChange}
                    />

                    <DualCheckbox
                        label="Is it current?"
                        value={currentCheckboxValue}
                        onChange={handleCurrentCheckboxChange}
                    />

                    <CTextInput icon={require("../assets/vuesaxlinearlocation.png")} key='Location_of_Will' label='Location of Will?' defaultValue={datas[0]?.Location_of_Will?.toString()} id='Location_of_Will' updateState={updateState} isNumOnly={false} />

                    <CTextInput icon={require("../assets/profile.png")} key='Executor_of_the_Will' label='Executor of Will' defaultValue={datas[0]?.Executor_of_the_Will?.toString()} id='Executor_of_the_Will' updateState={updateState} isNumOnly={false} />

                    <Label label="Do you have a POA?" icon={require("../assets/document-text.png")} />
                    <DropdownComponent
                        values={[{ label: 'No', value: 'No' }, { label: 'Yes - Medical', value: 'Yes - Medical' }, { label: 'Yes - Guardianship', value: 'Yes - Guardianship' }, { label: 'Yes - Other', value: 'Yes - Other' }, { label: 'Yes - Enduring', value: 'Yes - Enduring' }]}
                        defaultValue={datas[0]?.Do_you_have_a_POA[0]?.toString()}
                        onValueChange={(value: any) => updatePOAState(value, 'Do_you_have_a_POA')}
                    />
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
    mTop: {
        marginTop: 15
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

export default EditEstate;
