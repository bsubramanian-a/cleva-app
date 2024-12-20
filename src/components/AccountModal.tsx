import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal, Dimensions } from 'react-native';
import { FontFamily } from "../GlobalStyles";
import { formatDate } from "../utils/format-date";
import { wrapTitle } from "../utils/wrapTitle";

const AccountModal = ({ visible, onClose, acc }: any) => {
  console.log("acc", acc);
  const wrappedAccountName = wrapTitle(acc?.Name ? acc?.Name?.toString() : "N/A", 20);
  const wrappedProvider = wrapTitle(acc?.Product_Provider ? acc?.Product_Provider?.toString() : "N/A", 20);
  const wrappedValue = wrapTitle((acc?.Current_Value.toString() ? "$" + acc?.Current_Value?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',',) : "N/A").toString(), 20);
  const wrappedPrimaryOwner = wrapTitle(acc?.Primary_Owner ? acc?.Primary_Owner?.name?.toString() : "N/A", 20);
  const wrappedSecondaryOwner = wrapTitle(acc?.Secondary_Owner ? acc?.Secondary_Owner?.name?.toString() : "N/A", 20);
  const wrappedLastModified = wrapTitle((formatDate(acc?.Modified_Time)).toString(), 20);
  console.log("wrappedAccountName", wrappedAccountName);
  console.log("acc?.Name", acc?.Name);
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
                <Text style={styles.dateText}> {wrapTitle("Name".toString(), 20)}</Text>
              </View>
              <Text style={styles.titleText}>{wrappedAccountName}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/profile.png")}
                />
                <Text style={styles.dateText}>{wrapTitle("Provider".toString(), 20)}</Text>
              </View>
              <Text style={styles.titleText}>{wrappedProvider}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/dollar-square.png")}
                />
                <Text style={styles.dateText}>{wrapTitle("Value".toString(), 20)}</Text>
              </View>
              <Text style={styles.titleText}>
                {wrappedValue}
              </Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearprofilecircle.png")}
                />
                <Text style={styles.dateText}>{wrapTitle("Primary Owner".toString(), 20)}</Text>
              </View>
              <Text style={styles.titleText}>{wrappedPrimaryOwner}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearprofilecircle.png")}
                />
                <Text style={styles.dateText}>{wrapTitle("Secondary Owner".toString(), 20)}</Text>
              </View>
              <Text style={styles.titleText}>{wrappedSecondaryOwner}</Text>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.imgText}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/calendar.png")}
                />
                <Text style={styles.dateText}>{wrapTitle("Last Modified".toString(), 20)}</Text>
              </View>
              <Text style={styles.titleText}>{wrappedLastModified}</Text>
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
    fontWeight: "700",
    color: "#000"
  },
  frameChild: {
    width: 83,
    height: 92,
    zIndex: 10000,
  },
});

export default AccountModal;
