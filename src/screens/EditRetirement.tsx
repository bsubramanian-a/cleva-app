import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable, Dimensions } from "react-native";
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
import { RETIREMENT } from "../../urls";

const EditRetirement = ({ }: any) => {
    const navigation = useNavigation();
    const route: any = useRoute();
    const { type } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state: any) => state.data.profile);
    const [datas, setDatas] = useState<any>(profile);

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
            Choice_Retirement_Target_Age,
            Choice_Retirement_Target_Income_p_a,
        } = datas[0];

        const updatedData = {
            Email,
            Choice_Retirement_Target_Age,
            Choice_Retirement_Target_Income_p_a
        };

        setLoading(true);

        await actions.updateProfile([updatedData]);

        await actions.getProfile();

        navigation.navigate('Profile');

        showMessage({
            message: 'Success',
            description: 'Profile updated successfully',
            type: 'success',
        });
        setLoading(false);
    }

    const updateState = (value: any, label: string) => {
        console.log("label1233", label, value);
        setDatas((prevDatas: any) => {
            const updatedDatas = prevDatas.map((data: any) => {
                // console.log("data", data[label]);
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
                        <Text style={styles.dr}>{datas?.length > 0 && (datas[0]?.First_Name?.charAt(0) + profile[0]?.Last_Name?.charAt(0))}</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontWeight: '500', fontSize: 22, color: 'black', fontFamily: FontFamily.sourceSerifPro, }}>{datas[0]?.First_Name} {datas[0]?.Last_Name}</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.label}>{datas[0]?.First_Name}, you'd like to retire or have </Text>
                        <Text style={styles.label}>choice of whether you work by </Text>
                        <CTextInput inputStyle={{ width: "60%", height: 36, }} key='Choice_Retirement_Target_Age' label='' defaultValue={datas[0]?.Choice_Retirement_Target_Age?.toString()} id='Choice_Retirement_Target_Age' updateState={updateState} isNumOnly={true} placeholder="age (retirement)" />
                        <Text style={styles.label}>(approx). You'd like to have approx.</Text>
                        <View style={{ flexDirection: "row", gap: 0, justifyContent: "flex-start", alignItems: "center" }}>
                            <CTextInput inputStyle={{ width: "90%", height: 36, marginTop: 0 }} key='Choice_Retirement_Target_Income_p_a' label='' defaultValue={datas[0]?.Choice_Retirement_Target_Income_p_a?.toString()} id='Choice_Retirement_Target_Income_p_a' updateState={updateState} isNumOnly={true} placeholder="$[00,000]" />
                            <Text style={[styles.label, styles.mTop]}> (in today's dollars) sustain</Text>
                        </View>
                        <Text style={styles.label}>your lifestyle.</Text>
                    </View>
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mTop: {
        marginTop: 28
    },
    textInput: {
        // Custom styles for the text input
        // Adjust the width, margin, or padding as needed
        width: 70,
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
        paddingHorizontal: Padding.p_sm,
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
    container: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    label: {
        fontSize: 14,
        marginBottom: 10,
        color: "#4B4B4B"
    },
    paragraph: {
        fontSize: 14,
        color: "#4B4B4B"
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 8,
        fontSize: 14,
        marginBottom: 6,
    },
});

export default EditRetirement;
