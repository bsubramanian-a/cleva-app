import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import { Color, FontFamily } from '../../GlobalStyles';
import { wrapTitle } from '../../utils/wrapTitle';

const AccordionHeading = ({ title="", value, editable, toggleAccordion, icon, link, element, navigation, showEdit }: any) => {
    const wrappedTitle = wrapTitle(title.toString(), 24);
    const goEdit = (link: string, editData: any) => {        
        navigation.navigate(link, { editData });
    };

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
                        <View style={[styles.listTitle]}>
                            <Text style={styles.listName}>{wrappedTitle}</Text>
                            {showEdit && <Pressable onPress={() => goEdit(link, element)} style={{ marginTop: 2, marginLeft:7 }}>
                                <Image
                                    style={styles.vuesaxlinearedit}
                                    resizeMode="cover"
                                    source={require('../../assets/edit.png')}
                                />
                            </Pressable>}                            
                        </View>
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
                    source={require('../../assets/vuesaxlineararrowcircledown.png')}
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
    listTitle:{
        flexDirection:"row",
        alignItems: 'flex-start',
        justifyContent: 'space-between'
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
        flexDirection: "row"
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
    vuesaxlinearedit: {
        width: 20,
        height: 20,
    },
});

