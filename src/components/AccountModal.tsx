import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal, Dimensions, ScrollView } from 'react-native';
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

const AccountModal = ({ visible, onClose, acc }: any) => {

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
        <View style={styles.cardView}>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Image
              resizeMode="cover"
              source={require('../assets/group-1171275096.png')}
              style={styles.frameChild}
            />
          </Pressable>
          <View style={styles.modalContent}>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/profile.png")}
                />
                <Text style={styles.dateText}>Name</Text>
              </View>
              <Text style={styles.titleText}>{acc?.Name}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/profile.png")}
                />
                <Text style={styles.dateText}>Provider</Text>
              </View>
              <Text style={styles.titleText}>{acc?.Product_Provider}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/dollar-square.png")}
                />
                <Text style={styles.dateText}>Value</Text>
              </View>
              <Text style={styles.titleText}>${acc?.Current_Value?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',',)}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearprofilecircle.png")}
                />
                <Text style={styles.dateText}>Primary Owner</Text>
              </View>
              <Text style={styles.titleText}>{acc?.Primary_Owner?.name}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearprofilecircle.png")}
                />
                <Text style={styles.dateText}>Secondary Owner</Text>
              </View>
              <Text style={styles.titleText}>{acc?.Secondary_Owner?.name}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/calendar.png")}
                />
                <Text style={styles.dateText}>Last Modified</Text>
              </View>
              <Text style={styles.titleText}>{formatDate(acc?.Modified_Time)}</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardView: {
    position: 'relative',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderRadius: 12,
    padding: 0,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapContent: {
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e8e8e8"
  },
  imgText: {
    flexDirection: "row",
    gap: 4
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '90%'
  },
  closeButton: {
    alignSelf: 'flex-end',
    right: -15,
    top: -35,
    position: 'absolute',
    zIndex: 1000000
  },
  vuesaxlinearprofileCircleIcon: {
    marginTop: 1,
    width: 18,
    height: 18,
  },
  dateText: {
    fontSize: 15,
    fontFamily: FontFamily.outfitLight,
    fontWeight: "300",
    color: "#4B4B4B"
  },
  titleText: {
    fontSize: 15,
    fontFamily: FontFamily.outfitRegular,
    fontWeight: "400",
    color: "#000"
  },
  frameChild: {
    width: 83,
    height: 92,
    zIndex: 10000,
  },
});

export default AccountModal;
