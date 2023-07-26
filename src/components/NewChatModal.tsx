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
import Label from './Label';
import DropdownComponent from './DropdownComponent';
import LinearGradient from 'react-native-linear-gradient';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

const NewChatModal = ({
  visible,
  onClose,
  onSelect,
  coachList
}: any) => {

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Pressable onPress={onClose} style={styles.closeButton}>
                <Image
                resizeMode="cover"
                source={require('../assets/group-1171275096.png')}
                style={styles.frameChild}
                />
            </Pressable>

            <Text style={styles.heading}>What's the Subject?</Text>
         
            <Label label="Select one" icon={require("../assets/document-text.png")} />
            <DropdownComponent
                values={[{ label: 'None', value: '' }, { label: 'Financial Review', value: 'Financial Review' }, { label: 'Tax Review', value: 'Tax Review' }, { label: 'Businees Review', value: 'Businees Review' }]}
                defaultValue=""
                onValueChange={(value: any) => onSelect(value)}
            /> 

            <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={coachList}>
                <LinearGradient
                    style={[styles.bottom, styles.bottomFlexBox]}
                    locations={[0, 1]}
                    colors={["#fbb142", "#f6a326"]}
                    useAngle={true}
                    angle={180}
                >
                    <Text style={[styles.edit, styles.ml4]}>Save</Text>
                </LinearGradient>
            </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    ml4: {
        marginLeft: 4,
    },
    edit: {
        fontSize: FontSize.textMediumBoldText1_size,
        lineHeight: 20,
        fontWeight: "600",
        fontFamily: FontFamily.openSansRegular,
        color: Color.white1,
        textAlign: "center",
    },
    bottom: {
        width: 180,
        paddingHorizontal: 5,
        paddingVertical: 14,
        alignSelf: 'center',
        borderRadius: 60,
        marginVertical: 28
    },
    bottomFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    heading:{
        textAlign: 'center'
    },
    frameChild: {
        width: 83,
        height: 92,
        zIndex: 10000,
    },
    lineStyle: {
        marginVertical: 10,
        height: 1,
        width: Dimensions.get('window').width - 100,
        alignSelf: 'center',
        borderColor: '#F3F1EE',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        width: Dimensions.get('window').width - 40
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    filterButton: {
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#EEEEEE',
    },
    selectedFilterButton: {
        backgroundColor: '#007AFF',
    },
    filterButtonText: {
        color: '#555555',
    },
    selectedFilterButtonText: {
        color: '#FFFFFF',
    },
    chartContainer: {
        marginBottom: 16,
        alignItems: 'center',
    },
    closeButton: {
        alignSelf: 'flex-end',
        right: -35,
        top: -35,
        position: 'absolute',
        zIndex: 1000000
    },
    closeButtonText: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
});

export default NewChatModal;
