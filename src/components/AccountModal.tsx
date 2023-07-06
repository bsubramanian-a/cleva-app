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
  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
        <View style={styles.container}>
           <Text>View Account</Text>
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
});

export default AccountModal;
