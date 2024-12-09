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

const EditPlanBEmergencyFund = () => {
    const route: any = useRoute();
    const { allAccounts } = route.params;
    const { showFlashMessage } = useCustomFlashMessage();
    const navigation = useNavigation();    
    const { type } = route.params;
    const [loading, setLoading] = useState(false);
    console.log("allAccounts",allAccounts)
    console.log("Target_Emergency_Fund:",allAccounts?.Target_Emergency_Fund)
    console.log("id:",allAccounts?.id)
    //const profile = useSelector((state: any) => state.data.profile);
    // const [datas, setDatas] = useState<any>(allAccounts);
    const [currentTargetValue, setCurrentTargetValue] = useState(allAccounts?.Target_Emergency_Fund); 
    const [currentId, setCurrentId] = useState(allAccounts?.id); 

   

    const updateProfile = async () => {

        const updatedData = {
            id: currentId,
            Target_Emergency_Fund: currentTargetValue
        };

        console.log("updatedData", updatedData);

        // if(Executor_of_the_Will == '' || Location_of_Will == ''){            
        //     showFlashMessage("Please fill Location of Will and Executor of the Will", 'failure');

        //     return false;
        // }

        setLoading(true);
        await actions.updateEmergencyFund(updatedData);

        await actions.getPlanBEmergencyFund();
        showMessage({
            message: 'Success',
            description: 'PlanBEmergency Fund updated successfully',
            type: 'success',
        });
        showFlashMessage("PlanBEmergency Fund updated successfully", 'success');
        navigation.goBack();        

        setLoading(false);
    }

    
    

    return (
        <View
            style={styles.wealthAssets}
        >
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <CustomHeader name="Edit PlanBEmergency Fund" type={3} />
            <Loader visible={loading} />

            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={styles.advicecontainer}>
                    <CTextInput icon={require("../../assets/money-send.png")} key='Target_Emergency_Fund' label='Target Emergency Fund' defaultValue={currentTargetValue?.toString()} id='Target_Emergency_Fund' updateState={setCurrentTargetValue} isNumOnly={true} />      
                </View>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}  onPress={updateProfile}>
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

export default EditPlanBEmergencyFund;
