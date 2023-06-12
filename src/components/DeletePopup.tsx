import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const DeletePopup = ({ isVisible, onDelete, onCancel, id }:any) => {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.5}>
      <View style={styles.container}>
        <Text style={styles.message}>Are you sure you want to delete?</Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onDelete(id)}>
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    btnContainer:{
        flexDirection: 'row',
        gap: 20
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    message: {
        marginBottom: 16,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#f44336',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 8,
    },
    buttonCancel: {
        backgroundColor: "FBB142",
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DeletePopup;
