import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DualCheckbox = ({ label, value, onChange }:any) => {
  const handleCheckboxChange = (newValue:any) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <View style={styles.checkboxContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.checkboxGroup}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleCheckboxChange(true)}
        >
          {value === true && (
            <Icon name="check" size={20} color="#FBB142" />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Yes</Text>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleCheckboxChange(false)}
        >
          {value === false && (
            <Icon name="check" size={20} color="#FBB142" />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>No</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#FBB142',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxLabel: {
    fontSize: 16,
    marginRight: 20,
  },
});

export default DualCheckbox;
