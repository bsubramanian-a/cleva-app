import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const AccordionItem = ({ icon, name, value }:any) => {
  return (
    <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
            <Image
                style={styles.vuesaxlinearprofileCircle}
                resizeMode="contain"
                source={icon}
            />
            <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const Accordion = ({ title, subHeading, items, activeAccordion, setActiveAccordion, icon, navigation }:any) => {
    const isActive = activeAccordion === title;

    const toggleAccordion = () => {
        if (isActive) {
        setActiveAccordion(null);
        } else {
        setActiveAccordion(title);
        }
    };

    const editProfile = () => {
        navigation.navigate('EditProfile');
    }

    return (
        <View style={[styles.container, styles.aboutCard]}>
            <TouchableOpacity style={[styles.excercise1, styles.frameParentFlexBox]} onPress={toggleAccordion}>
                <View style={styles.vuesaxlinearsmsParent}>
                    <View style={styles.vuesaxlinearprofileCircleWrapper}>
                        <Image
                            style={styles.vuesaxlinearprofileCircleIcon}
                            resizeMode="cover"
                            source={icon}
                        />
                    </View>
                    <Text
                        style={[
                            styles.aboutYou,
                            styles.ml10,
                            styles.mTypo,
                            styles.danFleurClr,
                        ]}
                    >
                        {title}
                    </Text>
                </View>
                <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlineararrowcircledown.png")}
                />
            </TouchableOpacity>
            {isActive && (
                <View>
                    <View style={styles.lineStyle}></View>
                    <View style={styles.editRow}>
                        <Text style={styles.subHeading}>{subHeading}</Text>
                        <Pressable onPress={editProfile}>
                            <Image
                                style={styles.vuesaxlinearedit}
                                resizeMode="cover"
                                source={require('../assets/edit.png')}
                            />
                        </Pressable>
                    </View>
                    {items.map((item:any, index:any) => (
                        <>
                            <AccordionItem
                                key={index.toString()}
                                icon={item.icon}
                                name={item.name}
                                value={item.value}
                            />
                            <View
                                style={[
                                styles.assetsviewChild,
                                styles.mt15,
                                styles.childBorder,
                                ]}
                            />
                        </>
                    ))}
                </View>
            )}

        </View>
    );
};

const AccordionContainer = ({ accordions }:any) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.accordionContainer}>
      {accordions.map((accordion:any, index:any) => (
        <Accordion
          key={index.toString()}
          title={accordion.title}
          subHeading={accordion.subHeading}
          items={accordion.items}
          icon={accordion?.icon}
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

export default AccordionContainer;

const styles = StyleSheet.create({
    assetsviewChild: {
        borderTopWidth: 1,
        width: "100%",
        height: 1,
    },
    mt15: {
        marginTop: 15,
    },
    childBorder: {
        borderColor: "#f3f1ee",
        borderStyle: "solid",
    },
    lineStyle:{
        marginVertical: 10,
        height: 1,
        width: "100%",
        borderColor: "#F3F1EE",
        borderWidth: 1,
        borderStyle: "solid"
    },
    editRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    subHeading:{
        color: "#FBB142",
        fontSize: 14,
        fontWeight: "600"
    },
    accordionContainer:{
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#eaeaea",
        marginHorizontal: 30,
        marginTop : 20
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
    aboutCard:{
        padding: 10,
        borderRadius: 16,
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(32, 34, 36, 0.5)",
        paddingHorizontal: 10,
        overflow: "hidden",
        backgroundColor: Color.white1,
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
    vuesaxlinearprofileCircle: {
        width: 20,
        height: 20,
        marginRight: 9
    },
    vuesaxlinearedit: {
        width: 20,
        height: 20,
    },
    aboutYou: {
        fontSize: FontSize.textMediumBoldText1_size,
        lineHeight: 24,
    },
    ml10: {
        marginLeft: Margin.m_2xs,
    },
    mTypo: {
        textAlign: "left",
        fontFamily: FontFamily.sourceSerifPro,
        fontWeight: "600",
        color: '#FBB142',
    },
    danFleurClr: {
        color: Color.black,
        fontWeight: '700',
        textAlign: "left",
    },
    vuesaxlinearsmsIcon: {
        width: 18,
        height: 18,
    },
    container: {
        // marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 5,
        width: '100%',
        padding: 10
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        marginRight: 10,
        color: '#4B4B4B'
    },
    value: {
        fontWeight: 'bold',
        color: '#000'
    },
});