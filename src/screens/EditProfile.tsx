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
import { useNavigation } from "@react-navigation/native";
import DropdownComponent from "../components/DropdownComponent";
import CustomDatePicker from "../components/CustomDatepicker";
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';

const EditProfile = ({}:any) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state:any) => state.data.profile);
    const [datas, setDatas] = useState<any>(profile);

    useEffect(() => {
        setDatas(profile);
    }, [profile])

    const updateProfile = async() => {
        const {
            First_Name,
            Last_Name,
            Preferred_1st_Name,
            Sex_Description,
            Date_of_Birth,
            Marital_Status,
            Mobile,
            Email
        } = datas[0];
        
        const updatedData = {
            First_Name,
            Last_Name,
            Preferred_1st_Name,
            Sex_Description,
            Date_of_Birth,
            Marital_Status,
            Mobile,
            Email
        };

        // console.log("updatedData", updatedData);

        setLoading(true);
        await actions.updateProfile([updatedData]);

        await actions.getProfile();

        showMessage({
            message: 'Success',
            description: 'Profile updated successfully',
            type: 'success',
        });
        setLoading(false);
    }

    const updateState = (value: any, label: string) => {
        console.log("label", label, value);
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
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
        <CustomHeader name="Edit Details" type={3}/>
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
                  <Text style={styles.dr}>{profile?.length > 0 && (datas[0]?.First_Name?.charAt(0)+profile[0]?.Last_Name?.charAt(0))}</Text>
                </View>
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>{datas[0]?.First_Name} {datas[0]?.Last_Name}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 12}}>
                    <CTextInput icon={require("../assets/profile.png")} key='First_Name' label='First Name' defaultValue={datas[0]?.First_Name?.toString()} id='First_Name' updateState={updateState} isNumOnly={false}/>
                    <CTextInput icon={require("../assets/profile.png")} key='Last_Name' label='Last Name' defaultValue={datas[0]?.Last_Name?.toString()} id='Last_Name' updateState={updateState} isNumOnly={false}/>
                </View>
                <CTextInput icon={require("../assets/profile.png")} key='Preferred_1st_Name' label='Preferred Name' defaultValue={datas[0]?.Preferred_1st_Name?.toString()} id='Preferred_1st_Name' updateState={updateState} isNumOnly={false}/>
                {/* <CTextInput icon={require("../assets/vuesaxlinearprofilecircle.png")} key='Sex_Description' label='Sex' defaultValue={datas[0]?.Sex_Description?.toString()} id='Sex_Description' updateState={updateState} isNumOnly={false}/> */}

                <Label label="Sex" icon={require("../assets/sex.png")} />
                <DropdownComponent
                    values={[{ label: 'None', value: '' }, { label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }, { label: 'Transexual', value: 'Transexual' }]}
                    defaultValue={datas[0]?.Sex_Description?.toString()}
                    onValueChange={(value:any) => updateState(value, 'Sex_Description')}
                />

                {/* <CTextInput icon={require("../assets/vuesaxlinearprofilecircle.png")} key='Date_of_Birth' label='Date of Birth' defaultValue={datas[0]?.Date_of_Birth?.toString()} id='Date_of_Birth' updateState={updateState} isNumOnly={false}/> */}

                <Label label="Date of Birth" icon={require("../assets/dob.png")} />
                <CustomDatePicker defaultValue={new Date(datas[0]?.Date_of_Birth?.toString())} onValueChange={(value:any) => updateState(value, 'Date_of_Birth')} />

                {/* <CTextInput icon={require("../assets/vuesaxlinearprofilecircle.png")} key='Marital_Status' label='Marital Status' defaultValue={datas[0]?.Marital_Status?.toString()} id='Marital_Status' updateState={updateState} isNumOnly={false}/> */}

                <Label label="Marital Status" icon={require("../assets/mstatus.png")} />
                <DropdownComponent
                    values={[{ label: 'None', value: '' }, { label: 'Single', value: 'Single' }, { label: 'Relationship Not Married', value: 'Relationship Not Married' }, { label: 'Married', value: 'Married' }]}
                    defaultValue={datas[0]?.Sex_Description?.toString()}
                    onValueChange={(value:any) => updateState(value, 'Marital_Status')}
                />

                <CTextInput icon={require("../assets/contact.png")} key='Mobile' label='Mobile Phone' defaultValue={datas[0]?.Mobile?.toString()} id='Mobile' updateState={updateState} isNumOnly={false}/>

                <CTextInput icon={require("../assets/vuesaxlinearsms.png")} key='Email' label='Email' defaultValue={datas[0]?.Email?.toString()} id='Email' updateState={updateState} isNumOnly={false}/>

                <CTextInput icon={require("../assets/shealth.png")} key="Health" label='State of Health' defaultValue="Healthy" id='Health' updateState={updateState} isNumOnly={false}/>

                <Label label="Smoker" icon={require("../assets/smoker.png")} />
                <DropdownComponent
                    values={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]}
                    defaultValue="No"
                    onValueChange={(value:any) => updateState(value, 'Sex_Description')}
                />
            </View>
            <LinearGradient
            style={[styles.bottom, styles.bottomFlexBox]}
            locations={[0, 1]}
            colors={["#fbb142", "#f6a326"]}
            useAngle={true}
            angle={180}
            >
                <Pressable style={{flexDirection: 'row', alignItems: 'center'}} onPress={updateProfile}>
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
        // fontFamily: FontFamily.sourceSerifProSemibold,
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
        // fontFamily: FontFamily.openSansRegular,
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

export default EditProfile;