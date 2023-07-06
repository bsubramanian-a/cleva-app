import React, {useEffect, useState} from 'react';
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
import {LineChart} from 'react-native-chart-kit';
import RadioButtonGroup from './RadioButtonGroup';
import ThreeDotMenu from './ThreeDotMenu';
import { useNavigation } from '@react-navigation/native';
import DeletePopup from './DeletePopup';

const AccountCard = ({acc, setDeleteModalVisible, setDeleteId, setCurrentAccount, setIsAccountModalVisible}: any) => {
    const navigation:any = useNavigation();

    const editAccount = () => {
        navigation.navigate('EditAccount', {id: acc?.id});
    };
    
    const deleteAccount = () => {
        console.log("delete clicked")
        setDeleteModalVisible(acc?.id);
        setDeleteId(acc?.id);
    };
    
    const options = [
        { label: 'Edit', onClick: editAccount },
        { label: 'Delete', onClick: deleteAccount },
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

    const getInitials = (name:string) => {
        const words = name.split(' ');
        let initials = '';
      
        if (words.length === 1) {
          initials = words[0].substring(0, 2);
        } else if (words.length >= 2) {
          initials = words[0][0] + words[1][0];
        }
      
        return initials.toUpperCase();
    };    

    return (
        <Pressable onPress={() => {setCurrentAccount(acc?.id); setIsAccountModalVisible(true)}} style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.leftLine}></View>
                <View style={styles.contentView}>
                    <View style={styles.titleView}>
                        <View style={styles.titleWrap}>
                            <Text>{acc?.Name?.length <= 20 ? acc?.Name : acc?.Name.substring(0, 20) + '...'}</Text>
                            <Text>${acc?.Current_Value?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g,',',)}</Text>
                        </View>
                        <View>
                            <Text>As at {formatDate(acc?.Modified_Time)}</Text>
                        </View>
                    </View>
      
                    <View style={styles.ownerView}>
                        <View style={styles.ownerWrap}>
                            <Text>{(acc?.Primary_Owner && acc?.Secondary_Owner) ? 'Joint owner' : ((acc?.Primary_Owner || acc?.Secondary_Owner) ? 'Single Owner' : 'No Owner') }</Text>
                            {(acc?.Primary_Owner && acc?.Secondary_Owner) ?
                                <>
                                    <View style={styles.frWrapper}>
                                        <Text>
                                            {getInitials(acc?.Primary_Owner?.name)}
                                        </Text>
                                    </View>
                                    <View style={styles.drWrapper}>
                                        <Text>
                                            {getInitials(acc?.Secondary_Owner?.name)}
                                        </Text>
                                    </View>
                                </> : 
                                <View style={styles.frWrapper}>
                                    <Text>
                                        {getInitials(acc?.Primary_Owner?.name || acc?.Secondary_Owner?.name)}
                                    </Text>
                                </View>
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
        borderWidth: 1,
        height: 100,
        borderRadius: 7,
        paddingVertical: 5,
        zIndex: 100
    },
    wrapper: {
        flex: 1,
        borderRightWidth: 4,
        borderColor: 'transparent',
        flexDirection: 'row'
    },
    leftLine: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 7,
        width: 2,
        height: '100%'
    },
    titleWrap: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentView:{
        width: Dimensions.get('window').width - 30,
        paddingHorizontal: 13,
    },
    titleView: {
        borderBottomWidth: 2
    },
    ownerWrap:{
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
        justifyContent: 'space-between'
    }
});

export default AccountCard;
