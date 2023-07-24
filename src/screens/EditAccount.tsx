import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
import { useNavigation } from "@react-navigation/native";
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import DropdownComponent from "../components/DropdownComponent";
import Label from "../components/Label";
import DeletePopup from "../components/DeletePopup";

const EditAccount = ({ route }: any) => {
    const navigation:any = useNavigation();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>();
    const profile = useSelector((state: any) => state.data.profile);
    const accounts = useSelector((state: any) => state.data.accounts);
    const { id } = route.params;
    console.log("id", id);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if(accounts?.length > 0){
                const data = accounts?.find((acc:any) => acc?.id == id);
                // console.log("data.......", data);
                setData(data);
            }else{
                setData([]);
            }
        });

        return unsubscribe;
    }, [navigation, accounts, id]);

    const updateWealth = async () => {
        try{
            setLoading(true);

            await actions.updateAccount(data);
    
            await actions.getAccounts();
    
            await actions.getLiabilities();
    
            await actions.getAssets();
    
            showMessage({
                message: 'Success',
                description: 'Account updated successfully',
                type: 'success',
            });
    
            navigation.navigate('Accounts');
            setLoading(false);
        } catch(err) {
            console.log("err", err);
            setLoading(false);
        }
    }

    const updateState = (value: any, label: string) => {
        setData((prevData: any) => ({ ...prevData, [label]: value }));
    };      

    return (
        <View
            style={styles.wealthAssets}
        >
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <CustomHeader name="Edit Account" type={2} />
            <FlashMessage position="top" />
            <Loader visible={loading} />
            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={styles.advicecontainer}>
                    <CTextInput label="Name" icon={require("../assets/profile.png")} id={data?.id} isNumOnly={false} updateState={(value:any) => updateState(value, 'Name')} defaultValue={data?.Name} />

                    <CTextInput label="Value" icon={require("../assets/dollar-square.png")} defaultValue={data?.Current_Value?.toString()} id={data?.id} updateState={(value:any) => updateState(value, 'Current_Value')} />

                    <CTextInput label="Provider" icon={require("../assets/profile.png")} defaultValue={data?.Product_Provider?.toString()} id={data?.id} updateState={(value:any) => updateState(value, 'Product_Provider')} isNumOnly={false}/>
                    
                    <Label label="Primary Owner" icon={require("../assets/vuesaxlinearprofilecircle.png")} />
                    <DropdownComponent
                        values={[{ label: 'None', value: '' }, { label: (profile[0]?.First_Name && (profile[0]?.First_Name + " ")) + profile[0]?.Last_Name && profile[0]?.Last_Name, value: profile[0]?.id }, profile[0]?.accounts?.length > 0 && { label: (profile[0]?.accounts[0]?.First_Name && (profile[0]?.accounts[0]?.First_Name + " ")) + profile[0]?.accounts[0]?.Last_Name && profile[0]?.accounts[0]?.Last_Name, value: profile[0]?.accounts[0]?.id }]}
                        defaultValue={data?.Primary_Owner?.id?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Primary_Owner')}
                    />

                    <Label label="Secondary Owner" icon={require("../assets/vuesaxlinearprofilecircle.png")} />
                    <DropdownComponent
                        values={[{ label: 'None', value: '' }, { label: (profile[0]?.First_Name && (profile[0]?.First_Name + " ")) + profile[0]?.Last_Name && profile[0]?.Last_Name, value: profile[0]?.id }, profile[0]?.accounts?.length > 0 && { label: (profile[0]?.accounts[0]?.First_Name && (profile[0]?.accounts[0]?.First_Name + " ")) + profile[0]?.accounts[0]?.Last_Name && profile[0]?.accounts[0]?.Last_Name, value: profile[0]?.accounts[0]?.id }]}
                        defaultValue={data?.Secondary_Owner?.id?.toString()}
                        onValueChange={(value: any) => updateState(value, 'Secondary_Owner')}
                    />
                </View>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={updateWealth}>
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
    advicecontainer: {
        marginTop: 30,
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
        flexDirection: "column",
    },
    bottom: {
        width: 180,
        paddingHorizontal: 5,
        paddingVertical: 14,
        alignSelf: 'center',
        borderRadius: 60,
        marginTop: 28
    },
    wealthTabParent: {
        alignSelf: "stretch",
        flex: 1,
    },
});

export default EditAccount;
