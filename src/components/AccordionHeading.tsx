import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from '../GlobalStyles';
import { wrapTitle } from '../utils/wrapTitle';

const AccordionHeading = ({ title, value, editable, toggleAccordion, icon }: any) => {
    const wrappedTitle = wrapTitle(title, 24);
    return (
        <>
            <TouchableOpacity
                style={[styles.excercise1, styles.frameParentFlexBox]}
                onPress={toggleAccordion}
            >
                <View style={styles.vuesaxlinearsmsParent}>
                    <View style={styles.vuesaxlinearprofileCircleWrapper}>
                        <Image
                            resizeMode="cover"
                            source={icon}
                            style={styles.vuesaxlinearprofileCircleIcon}
                        />
                    </View>


                    {editable && <View style={styles.listContent}>
                        <Text style={styles.listName}>{wrappedTitle}</Text>
                        <Text style={styles.listValue}>{value}</Text>
                    </View>}

                    {!editable && <View>
                        <Text
                            style={[
                                styles.aboutYou,
                                styles.mTypo,
                                styles.danFleurClr,
                            ]}
                        >
                            {wrappedTitle}
                        </Text>
                    </View>}

                </View>
                <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require('../assets/vuesaxlineararrowcircledown.png')}
                />
            </TouchableOpacity>
        </>
    );
};

export default AccordionHeading;

const styles = StyleSheet.create({
    listContent: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    listName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    listValue: {
        fontSize: 14,
        marginRight: 10
    },
    excercise1: {
        justifyContent: "space-between",
        alignItems: "center",
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(32, 34, 36, 0.08)",
        alignSelf: "stretch",
        overflow: "hidden",
        backgroundColor: Color.white1,
    },
    frameParentFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        // width: '100%'
    },
    vuesaxlinearsmsParent: {
        flexDirection: "row",
        alignItems: "center",
    },
    vuesaxlinearprofileCircleWrapper: {
        borderRadius: 10,
        backgroundColor: "#FFF9F1",
        borderColor: "#ffeccf",
        borderWidth: 1,
        width: 40,
        height: 40,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    vuesaxlinearprofileCircleIcon: {
        width: 20,
        height: 20,
    },
    aboutYou: {
        marginLeft: 10,
        fontSize: 15,
        lineHeight: 24,
    },
    mTypo: {
        textAlign: "left",
        fontFamily: FontFamily.sourceSerifPro,
        fontWeight: '700'
    },
    danFleurClr: {
        textAlign: "left",
    },
    vuesaxlinearsmsIcon: {
        width: 18,
        height: 18,
    },
});

