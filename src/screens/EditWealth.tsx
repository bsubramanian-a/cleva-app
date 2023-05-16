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

const EditWealth = ({route}:any) => {
    const { type } = route.params;
    const [datas, setDatas] = useState([]);
    const assets = useSelector((state:any) => state.data.assets);
    const liabilities = useSelector((state:any) => state.data.liabilities);

    useEffect(() => {
        if(type == 'asset'){
            setDatas(assets);
        }else{
            setDatas(liabilities);
        }
    }, [type])

    return (
        <View
        style={styles.wealthAssets}
        >
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
        <CustomHeader name="Your Wealth" type={2}/>
        <ScrollView
            style={styles.wealthTabParent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
        >
            <View style={styles.advicecontainer}>
                {datas?.map((data:any, index:any) => {
                    return(
                        <CTextInput key={index.toString()} label={data.Name} defaultValue={data?.Current_Value?.toString()} />
                    )
                })}
            </View>
            <LinearGradient
            style={[styles.bottom, styles.bottomFlexBox]}
            locations={[0, 1]}
            colors={["#fbb142", "#f6a326"]}
            useAngle={true}
            angle={180}
            >
            <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.edit, styles.ml4]}>Save</Text>
            </Pressable>
            </LinearGradient>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    advicecontainer: {
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
