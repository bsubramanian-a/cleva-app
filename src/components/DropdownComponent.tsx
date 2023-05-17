import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const DropdownComponent = ({ values, defaultValue, onValueChange }:any) => {
    const [value, setValue] = useState(defaultValue);
    const [isFocus, setIsFocus] = useState(false);

    return (
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        data={values}
        value={value}
        onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            onValueChange(item?.value);
        }}
        labelField="label"
        valueField="value"
      />
    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
});
  
export default DropdownComponent;
