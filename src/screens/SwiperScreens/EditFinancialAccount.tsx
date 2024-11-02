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

const EditFinancialAccount = () => {
    const route: any = useRoute();
    const { editData } = route.params;
    const { showFlashMessage } = useCustomFlashMessage();
    const navigation = useNavigation();
    //const { type } = route.params;
    const [loading, setLoading] = useState(false);
    //const profile = useSelector((state: any) => state.data.profile);
    const [datas, setDatas] = useState<any>(editData);

    useEffect(() => {
        //console.log("editData in useEffect in EditFinancialAccount", editData);
        setDatas(editData);
    }, [editData])

    const updateProfile = async () => {

        let updatedData: never[] = [];

        //console.log("datas",datas)
        const currentData = datas.map((item: any) => item.element);
        

        // if (Executor_of_the_Will == '' || Location_of_Will == '') {
        //     showFlashMessage("Please fill Location of Will and Executor of the Will", 'failure');

        //     return false;
        // }

        updatedData = currentData.map((item: any) => {
            return {
                id:item?.id,
                Life_Cover:item?.Life_Cover,
                TPD_Cover:item?.TPD_Cover,
                Salary_Continuance:item?.Salary_Continuance,
                Within_Super1:item?.Within_Super1,
                Trauma_Cover:item?.Trauma_Cover
            }
        });

        console.log("updatedData", updatedData);



        setLoading(true);
        await actions.updateFinancialAccounts(updatedData);

        //await actions.getINA();
        await actions.getFinancialAccounts();

        console.log("response done");

        //await actions.getFinancialAccounts();

        navigation.goBack();

        showMessage({
            message: 'Success',
            description: 'Financial Accounts updated successfully',
            type: 'success',
        });
        showFlashMessage("Financial Accounts updated successfully", 'success');

        setLoading(false);
    }

    const updateState = (value: any, label: string, id: any) => {
        setDatas((prevDatas: any) => {
            //console.log("prevDatas",prevDatas)
            // Find the index of the object with matching id in element
            const foundIndex = prevDatas.findIndex(
                (data: any) => data.element.id === id
            );

            // If the element is found (index is not -1)
            if (foundIndex !== -1) {
                // Create a copy of the object to update
                const updatedObject = { ...prevDatas[foundIndex] };

                // Update the specific property (label) with the new value
                updatedObject.element[label] = value;

                // Create a copy of the `datas` array with the updated object
                const updatedDatas = [...prevDatas];
                updatedDatas[foundIndex] = updatedObject;

                //console.log("updatedDatas",updatedDatas)

                // Return the updated `datas` array
                return updatedDatas;
            } else {
                // Handle the case where the element with the specified id is not found
                console.warn(`Element with id "${id}" not found in datas`);
                // You can optionally return the original `prevDatas` here if needed
                return prevDatas;
            }
        });
    };


    return (
        <View
            style={styles.wealthAssets}
        >
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <CustomHeader name="Edit Financial Accounts" type={3} />
            <Loader visible={loading} />

            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={styles.advicecontainer}>
                    {editData && editData?.length > 0 && editData.map((data: any) => {
                        //console.log("data", data);
                        return <View key={data?.id}>
                            <Text>Element Id : {data?.element?.id}</Text>
                            <Label label={data?.name} icon={require("../../assets/money-send.png")} />
                            <CTextInput icon="" key='Life_Cover' label='Life Cover' defaultValue={data?.element?.Life_Cover?.toString()} id='Life_Cover' updateState={updateState} isNumOnly={true} recordID={data?.element?.id} isFinance={true} />
                            <CTextInput icon="" key='TPD_Cover' label='TPD Cover' defaultValue={data?.element?.TPD_Cover?.toString()} id='TPD_Cover' updateState={updateState} isNumOnly={true} recordID={data?.element?.id} isFinance={true} />
                            <CTextInput icon="" key='Salary_Continuance' label='Income Protection' defaultValue={data?.element?.Salary_Continuance?.toString()} id='Salary_Continuance' updateState={updateState} isNumOnly={true} recordID={data?.element?.id} isFinance={true} />
                            <CTextInput icon="" key='Trauma_Cover' label='Critical Illness/Trauma Cover' defaultValue={data?.element?.Trauma_Cover?.toString()} id='Trauma_Cover' updateState={updateState} isNumOnly={true} recordID={data?.element?.id} isFinance={true} />
                            
                            <Label label="Inside Super?" icon="" />
                            <DropdownComponent
                                values={[
                                    { label: '-None-', value: '-None-' },
                                    { label: 'Yes', value: 'Yes' },
                                    { label: 'No', value: 'No' },
                                    { label: 'Unsure', value: 'Unsure' }
                                ]}
                                defaultValue={data?.element?.Within_Super1?.toString()}
                                onValueChange={(value: any) => updateState(value, 'Within_Super1', data?.element?.id)}
                            />
                        </View>
                    })}
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

export default EditFinancialAccount;
