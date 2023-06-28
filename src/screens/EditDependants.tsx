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
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import { DEPENDANT } from "../../urls";

const EditDependants = ({ }: any) => {
    const navigation = useNavigation();
    const route: any = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state: any) => state?.data?.profile);
    const [datas, setDatas] = useState<any>([]);

    useEffect(() => {
        const data = profile[0]?.dependants?.find((dp: any) => dp?.id == id);

        if (data) setDatas([data]);
    }, [profile, id])

    const updateProfile = async () => {
        const {
            id,
            Name,
            Age,
            Dependant_Until2,
            Dependant_of_Person
        } = datas[0];

        const updatedData = {
            id,
            Name,
            Age,
            Dependant_Until2,
            Dependant_of_Person
        };

        console.log("updatedData", updatedData);

        setLoading(true);

        await actions.updateOtherProfileDetails([updatedData], DEPENDANT);

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

    const updateSelectState = (value: any, label: string) => {
        let foundUser = null;
        for (const prof of profile) {
            if (prof.id === value) {
                foundUser = prof;
                break;
            }
            for (const account of prof.accounts) {
                if (account.id === value) {
                    foundUser = account;
                    break;
                }
            }
            if (foundUser) {
                break;
            }
        }

        let newValue = {
            "name": foundUser?.First_Name + " " + foundUser?.Last_Name,
            "id": value
        }

        setDatas((prevDatas: any) => {
            const updatedDatas = prevDatas.map((data: any) => {
                if (label in data) {
                    return { ...data, [label]: newValue };
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
                        <Text style={styles.dr}>{datas?.length > 0 && (profile[0]?.First_Name?.charAt(0) + profile[0]?.Last_Name?.charAt(0))}</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontWeight: '500', fontSize: 22, color: 'black', fontFamily: FontFamily.sourceSerifPro }}>{datas[0]?.Name}</Text>
                    </View>


                    <CTextInput icon={require("../assets/profile.png")} key='Name' label='First Name' defaultValue={datas[0]?.Name?.toString()} id='Name' updateState={updateState} isNumOnly={false} />


                    <View style={styles.mainBox}>
                        <View style={styles.sideBox}><Text style={styles.textBox}>Years</Text></View>
                        <CTextInput icon={require("../assets/dob.png")} key='Age' label='Age' defaultValue={datas[0]?.Age?.toString()} id='Age' updateState={updateState} isNumOnly={true} />
                    </View>

                    <View style={styles.mainBox}>
                        <View style={styles.sideBox}><Text style={styles.textBox}>Years old</Text></View>
                        <CTextInput icon={require("../assets/hierarchy.png")} key='Dependant_Until2' label='Dependant until:' defaultValue={datas[0]?.Dependant_Until2?.toString()} id='Dependant_Until2' updateState={updateState} isNumOnly={false} />
                    </View>

                    <Label label="Dependant Of:" icon={require("../assets/hierarchy.png")} />
                    <DropdownComponent
                        values={[{ label: 'None', value: '' }, { label: profile[0]?.First_Name + " " + profile[0]?.Last_Name, value: profile[0]?.id }, profile[0]?.accounts?.length > 0 && { label: profile[0]?.accounts[0]?.First_Name + " " + profile[0]?.accounts[0]?.Last_Name, value: profile[0]?.accounts[0]?.id }]}
                        defaultValue={datas[0]?.Dependant_of_Person?.id?.toString()}
                        onValueChange={(value: any) => updateSelectState(value, 'Dependant_of_Person')}
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
    mainBox: {
        position: "relative",
    },
    sideBox: {
        position: "absolute",
        right: 0,
        bottom: 0,
        borderWidth: 1,
        borderColor: "#FBB142",
        width: "35%",
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

export default EditDependants;
