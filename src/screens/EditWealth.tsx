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
import { useCustomFlashMessage } from "../components/CustomFlashMessage";

const EditWealth = ({ route }: any) => {
    const { showFlashMessage } = useCustomFlashMessage();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const { type } = route.params;
    const [datas, setDatas] = useState<any>([]);
    const assets = useSelector((state: any) => state.data.assets);
    // console.log("assets", assets);
    const liabilities = useSelector((state: any) => state.data.liabilities);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Cleanup function to stop the video and reset the state
            if (type == 'asset') {
                setDatas(assets);
            } else {
                setDatas(liabilities);
            }
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation, type, assets, liabilities]);

    const updateWealth = async () => {
        setLoading(true);
        await actions.updateWealth(datas);

        if (type == 'asset') {
            await actions.getAssets();
        } else {
            await actions.getLiabilities();
        }

        // showMessage({
        //     message: 'Success',
        //     description: 'Wealth updated successfully',
        //     type: 'success',
        // });
        showFlashMessage("Wealth updated successfully", 'success');
        setLoading(false);
    }

    const updateState = (value: any, id: any) => {
        const updatedDatas = datas.map((item: any) => {
            if (item.id == id) {
                return { ...item, Current_Value: value };
            }
            return item;
        });
        setDatas(updatedDatas);
    }

    const updateNameState = (value: any, id: any) => {
        const updatedDatas = datas.map((item: any) => {
            if (item.id == id) {
                return { ...item, Name: value };
            }
            return item;
        });
        setDatas(updatedDatas);
    }

    return (
        <View
            style={styles.wealthAssets}
        >
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <CustomHeader name="Your Wealth" type={2} />
            <FlashMessage position="top" />
            <Loader visible={loading} />
            <ScrollView
                style={styles.wealthTabParent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <View style={styles.advicecontainer}>
                    {datas?.map((data: any, index: any) => {
                        return (
                            <View key={index.toString()} style={{ borderBottomWidth: 1, paddingBottom: 15 }}>
                                <CTextInput label="Name" id={data?.id} isNumOnly={false} updateState={updateNameState} defaultValue={data?.Name} />
                                <CTextInput label="Value" defaultValue={data?.Current_Value?.toString()} id={data?.id} updateState={updateState} />
                            </View>
                        )
                    })}
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

export default EditWealth;
