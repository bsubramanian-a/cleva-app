import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable, Modal, Dimensions, ScrollView} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import RadioButtonGroup from "./RadioButtonGroup";
import { useState } from "react";
import { useSelector } from "react-redux";
import Label from "./Label";
import CustomDatePicker from "./CustomDatepicker";
import actions from "../../actions";
import Loader from "./Loader";
import CTextInput from "./CTextInput";
import RadioButtonGroupOwner from "./RadioButtonGroupOwner";

const AccountModal = ({visible, onClose, acc}: any) => {

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

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
        <View style={styles.modalContainer}>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Image
              resizeMode="cover"
              source={require('../assets/group-1171275096.png')}
              style={styles.frameChild}
            />
          </Pressable>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text>Name: {acc?.Name}</Text>
            <Text>Value: ${acc?.Current_Value?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g,',',)}</Text>
            <Text>Primary Owner: {acc?.Primary_Owner?.name}</Text>
            <Text>Secondary Owner: {acc?.Secondary_Owner?.name}</Text>
            <Text>:Last Modified {formatDate(acc?.Modified_Time)}</Text>
          </ScrollView>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: "#fff",
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').height - 150,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 75,
    padding: 0,
    zIndex: 1000
  },
  modalContainer: {
    position: 'relative',
    backgroundColor: "#fff",
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').height - 150,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 75,
    padding: 0,
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  closeButton: {
    alignSelf: 'flex-end',
    right: -35,
    top: -35,
    position: 'absolute',
    zIndex: 1000000
  },
  frameChild: {
    width: 83,
    height: 92,
    zIndex: 10000,
  },
});

export default AccountModal;
