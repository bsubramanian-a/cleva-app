import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from '../GlobalStyles';
import { wrapTitle } from '../utils/wrapTitle';

const InsuranceBox = ({ element, name, value }: any) => {
    
    return (
        <>
            <View style={[styles.wrapItemContainer]}>
                <View style={styles.itemContainer}>
                    <View style={styles.itemContent}>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <Text style={styles.value}>{value}</Text>
                </View>
                <View style={styles.secondItemContainer}>
                    <View style={styles.secondItemContent}>
                        <Text style={styles.secondName}>{element?.Product_Provider ? wrapTitle(element?.Product_Provider, 22) : "N/A"}</Text>
                    </View>
                    <Text style={styles.secondValue}>{(element?.Within_Super1 == "Yes") ? "Inside Super" : ""}</Text>
                </View>
            </View>
        </>
    );
};

export default InsuranceBox;

const styles = StyleSheet.create({
    wrapItemContainer: {   
        flexDirection: 'column',        
        // marginBottom: 5,             
        marginTop: 0,
        width: '100%',
        borderWidth:0,
        backgroundColor:'#fcfcfc'
    },
    itemContainer: {     
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',  
        padding: 10,
        width: '100%',
        borderWidth:0,
        paddingBottom:0
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },    
    name: {
        marginRight: 10,
        color: '#4B4B4B',
        fontWeight:'bold',
        fontSize: 16
    },
    value: {
        fontWeight: 'bold',
        color: '#EF9F27',
        fontSize: 16
    },
    secondItemContainer: {     
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingLeft:10,
        paddingRight:10,
        paddingTop:0,
        width: '100%',
        borderWidth:0
    },
    secondItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    secondName: {
        marginRight: 10,
        color: '#4B4B4B',
        fontSize: 16
    },
    secondValue: {
        color: '#4B4B4B',
    },
});

