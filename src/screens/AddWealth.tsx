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

const AddWealth = ({route}:any) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const { type } = route.params;

    const addWealth = async() => {
        setLoading(true);

        let data = {
            "Current_Value": value,
            "Name": name
        }

        if(type == 'asset'){
            const res:any = await actions.addAsset(data);

            if(res?.data?.length > 0 && res?.data[0]?.code == "SUCCESS"){
                showMessage({
                    message: 'Success',
                    description: 'Asset added successfully',
                    type: 'success',
                });

                setName("");
                setValue("");

                await actions.getAssets();
            }else{
                showMessage({
                    message: 'Failed',
                    description: 'Asset creation failed, please try again later!',
                    type: 'danger',
                });
            }
        }else{
            const res:any = await actions.addLiability(data);

            if(res?.data?.length > 0 && res?.data[0]?.code == "SUCCESS"){
                showMessage({
                    message: 'Success',
                    description: 'Liability added successfully',
                    type: 'success',
                });

                setName("");
                setValue("");

                await actions.getLiabilities();
            }else{
                showMessage({
                    message: 'Failed',
                    description: 'Liability creation failed, please try again later!',
                    type: 'danger',
                });
            }
        }

        setLoading(false);
    }

    const updateState = (value:any, id:any) => {
       if(id == 1){
        setName(value);
       }else{
        setValue(value);
       }
    }

    return (
        <View
        style={styles.wealthAssets}
        >
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
        <CustomHeader name="Your Wealth" type={2}/>
        <FlashMessage position="top" />
        <Loader visible={loading} />
        <ScrollView
            style={styles.wealthTabParent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
        >
            <View style={styles.advicecontainer}>
                <CTextInput isNumOnly={false} label={type == 'asset' ? 'Asset Name' : 'Liability Name'} id="1" updateState={updateState} defaultValue={name}/>
                <CTextInput label={type == 'asset' ? 'Asset Value' : 'Liability Value'} id="2" updateState={updateState} defaultValue={value}/>
            </View>
            <LinearGradient
            style={[styles.bottom, styles.bottomFlexBox]}
            locations={[0, 1]}
            colors={["#fbb142", "#f6a326"]}
            useAngle={true}
            angle={180}
            >
                <Pressable style={{flexDirection: 'row', alignItems: 'center'}} onPress={addWealth}>
                    <Text style={[styles.edit, styles.ml4]}>Save</Text>
                </Pressable>
            </LinearGradient>
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

export default AddWealth;
