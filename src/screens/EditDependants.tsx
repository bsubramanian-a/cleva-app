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

const EditDependants = ({}:any) => {
    const navigation = useNavigation();
    const route:any = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(false);
    const profile = useSelector((state:any) => state?.data?.profile);
    const [datas, setDatas] = useState<any>([]);

    useEffect(() => {
       const data = profile[0]?.dependants?.find((dp:any) => dp?.id == id);

       if(data) setDatas([data]);
    }, [profile, id])

    const updateProfile = async() => {
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
                  <Text style={styles.dr}>{datas?.length > 0 && (profile[0]?.First_Name?.charAt(0)+profile[0]?.Last_Name?.charAt(0))}</Text>
                </View>
                
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>{datas[0]?.Name}</Text>
                </View>

                <CTextInput icon={require("../assets/profile.png")} key='Name' label='First Name' defaultValue={datas[0]?.Name?.toString()} id='Name' updateState={updateState} isNumOnly={false}/>

                <CTextInput icon={require("../assets/dob.png")} key='Age' label='Age' defaultValue={datas[0]?.Age?.toString()} id='Age' updateState={updateState} isNumOnly={true}/>
                
                <CTextInput icon={require("../assets/hierarchy.png")} key='Dependant_Until2' label='Dependant until:' defaultValue={datas[0]?.Dependant_Until2?.toString()} id='Dependant_Until2' updateState={updateState} isNumOnly={false}/>

                <Label label="Dependant Of:" icon={require("../assets/hierarchy.png")} />
                <DropdownComponent
                    values={[{ label: 'None', value: '' }, { label: profile[0]?.First_Name + " " + profile[0]?.Last_Name, value: profile[0]?.id }, profile[0]?.accounts?.length > 0 && { label: profile[0]?.accounts[0]?.First_Name + " " + profile[0]?.accounts[0]?.Last_Name, value: profile[0]?.accounts[0]?.id }]}
                    defaultValue={datas[0]?.Dependant_of_Person?.id?.toString()}
                    onValueChange={(value:any) => updateSelectState(value, 'Dependant_of_Person')}
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
