import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const AccordionHeading = ({ title, value }: any) => {
    return (
        <>
            <View style={styles.listContent}>
                <Text style={styles.listName}>{title}</Text>
                <Text style={styles.listValue}>{value}</Text>
            </View>
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
});