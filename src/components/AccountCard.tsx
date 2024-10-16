import React, { useEffect, useState } from 'react';
import {
    View,
    Modal,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    Image,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import RadioButtonGroup from './RadioButtonGroup';
import ThreeDotMenu from './ThreeDotMenu';
import { useNavigation } from '@react-navigation/native';
import DeletePopup from './DeletePopup';
import { FontFamily } from '../GlobalStyles';

const AccountCard = ({ acc, setDeleteModalVisible, setDeleteId, setCurrentAccount, setIsAccountModalVisible, color, index, count }: any) => {
    const navigation: any = useNavigation();

    const editAccount = () => {
        navigation.navigate('EditAccount', { id: acc?.id });
    };

    const deleteAccount = () => {
        console.log("delete clicked")
        setDeleteModalVisible(acc?.id);
        setDeleteId(acc?.id);
    };

    const options = [
        { label: 'Edit', onClick: editAccount, icon: require("../assets/editAcc.png") },
        { label: 'Delete', onClick: deleteAccount, icon: require("../assets/trashAcc.png") },
    ];

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getFullYear();

        const getOrdinalSuffix = (day: any) => {
            if (day === 1 || day === 21 || day === 31) {
                return 'st';
            } else if (day === 2 || day === 22) {
                return 'nd';
            } else if (day === 3 || day === 23) {
                return 'rd';
            } else {
                return 'th';
            }
        };

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const formattedYear = year === currentYear ? '' : ` ${year}`;

        return `${day}${getOrdinalSuffix(day)} ${month}${formattedYear}`;
    };

    const getInitials = (name: string) => {
        if(name){
            const words = name.split(' ');
            let initials = '';
    
            if (words.length === 1) {
                initials = words[0].substring(0, 2);
            } else if (words.length >= 2) {
                initials = words[0][0] + words[1][0];
            }
    
            return initials.toUpperCase();
        }else{
            return "";
        }
    };

    return (
        <Pressable onPress={() => {setCurrentAccount(acc); setIsAccountModalVisible(true)}} style={[styles.container, count == index + 1 && {marginBottom: 30}]}>
            <View style={styles.wrapper}>
                <View style={[styles.leftLine, {borderColor: color}]}></View>
                <View style={styles.contentView}>
                    <View style={styles.titleView}>
                        <View style={styles.titleWrap}>
                            <Text style={styles.titleText}>{acc?.Name?.length <= 20 ? acc?.Name : acc?.Name.substring(0, 20) + '...'}</Text>
                            <Text style={styles.moneyText}>${acc?.Current_Value ? acc?.Current_Value?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',',) : 0}</Text>
                        </View>
                        <View>
                            <Text style={styles.dateText}>As at {formatDate(acc?.Modified_Time)}</Text>
                        </View>
                    </View>

                    <View style={styles.ownerView}>
                        <View style={styles.ownerWrap}>
                            <Text style={styles.dateText}>{(acc?.Primary_Owner && acc?.Secondary_Owner) ? 'Joint owner' : ((acc?.Primary_Owner || acc?.Secondary_Owner) ? 'Single Owner' : 'No Owner')}</Text>
                            {(acc?.Primary_Owner && acc?.Secondary_Owner) ?
                                <>
                                    <View style={styles.frWrapper}>
                                        <Text style={styles.peopleText}>
                                            {getInitials(acc?.Primary_Owner?.name)}
                                        </Text>
                                    </View>
                                    <View style={styles.drWrapper}>
                                        <Text style={styles.peopleText}>
                                            {getInitials(acc?.Secondary_Owner?.name)}
                                        </Text>
                                    </View>
                                </> :
                                <>
                                {(acc?.Primary_Owner || acc?.Secondary_Owner) &&
                                    <View style={styles.frWrapper}>
                                        <Text style={styles.peopleText}>
                                            {getInitials(acc?.Primary_Owner?.name || acc?.Secondary_Owner?.name)}
                                        </Text>
                                    </View>}
                                </>
                            }

                        </View>
                        <ThreeDotMenu options={options} />
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        shadowColor: "rgba(251, 177, 66, 0.1)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 15,
        elevation: 40,
        shadowOpacity: 0.04,
        borderColor: "#ffeccf",
        borderWidth: 1,
        backgroundColor: "#fff",
        height: 120,
        borderRadius: 16,
        paddingVertical: 5,
        zIndex: 10
    },
    wrapper: {
        flex: 1,
        borderRightWidth: 4,
        borderColor: 'transparent',
        flexDirection: 'row',
        zIndex: 10
    },
    leftLine: {
        flex: 1,
        alignSelf: "center",
        borderWidth: 2,
        borderRadius: 7,
        width: 2,
        height: '80%',
    },
    titleWrap: {
        marginTop: 6,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 18,
        fontFamily: FontFamily.sourceSerifPro,
        fontWeight: "600",
        color: "#000"
    },
    moneyText: {
        fontSize: 18,
        fontFamily: FontFamily.sourceSerifPro,
        fontWeight: "600",
        color: "#EF9F27"
    },
    dateText: {
        marginVertical: 5,
        fontSize: 14,
        fontFamily: FontFamily.outfitLight,
        fontWeight: "300",
        color: "#4B4B4B"
    },
    peopleText: {
        fontSize: 12,
        color: "#fff",
    },
    contentView: {
        width: Dimensions.get('window').width - 30,
        paddingHorizontal: 13,
    },
    titleView: {
        borderBottomWidth: 1,
        borderColor: "#DEDEDE"
    },
    ownerWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    frWrapper: {
        backgroundColor: "#9755b6",
        justifyContent: "center",
        width: 27,
        height: 27,
        marginLeft: 4,
        borderRadius: 52,
        padding: 5,
        alignItems: "center",
        overflow: "hidden",
    },
    drWrapper: {
        backgroundColor: '#EF9F27',
        justifyContent: "center",
        width: 27,
        height: 27,
        marginLeft: -5,
        borderRadius: 52,
        padding: 5,
        alignItems: "center",
        overflow: "hidden",
    },
    ownerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    }
});

export default AccountCard;
