import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const DropdownComponent = ({ values, defaultValue, onValueChange }:any) => {
    const [value, setValue] = useState(defaultValue);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue])

    return (
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        data={values}
        value={value}
        selectedTextStyle={{ fontSize: 14, color: '#000', fontWeight: '600' }}
        placeholderStyle={{ fontSize: 14, color: '#000', fontWeight: '600' }}
        itemTextStyle={{ fontSize: 14, color: '#000', fontWeight: '600' }}
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
        height: 44,
        borderColor: "#DEDEDE",
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 8,
    },
});
  
export default DropdownComponent;
