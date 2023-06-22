import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButtonGroup = ({ options, defaultValue, orientation = 'horizontal', count = 1, onChange, coptionContainer, cselectedOptionBackground, coptionView, coptionDescription, coptionTextStyle }:any) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleOptionPress = (value:any) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const renderOptions = () => {
    const rows = [];
    let row:any = [];
    let rowIndex = 0;

    options.forEach((option:any, index:any) => {
      const isSelected = selectedValue === option?.value;
      const optionContainerStyle = [
        styles.optionContainer,
        coptionContainer,
        isSelected && styles.selectedOption,
        orientation === 'horizontal' && styles.horizontalOption,
        orientation === 'horizontal' && rowIndex % count !== 0 && styles.horizontalGap,
      ];
      const optionTextStyle = [styles.optionText, isSelected && styles.selectedOptionText];

      row.push(
        <TouchableOpacity
          key={option}
          style={optionContainerStyle}
          onPress={() => handleOptionPress(option?.value)}
          activeOpacity={0.8}
        >
          {isSelected ? (
            <View style={[styles.selectedOptionBackground, styles.optionView, cselectedOptionBackground, coptionView]}>
              <Text style={[optionTextStyle, {color: '#FBB142'}, coptionTextStyle]}>{option?.value}</Text>
              {option?.description && <Text style={[coptionDescription]}>{option?.description}</Text>}
            </View>
          ) : (
            <View style={[styles.optionView, coptionView]}>
              <Text style={[optionTextStyle, coptionTextStyle]}>{option?.value}</Text>
              {option?.description && <Text style={[coptionDescription]}>{option?.description}</Text>}
            </View>
          )}
        </TouchableOpacity>
      );

      if (orientation === 'horizontal' && row.length === count) {
        rows.push(<View style={styles.horizontalRow} key={rowIndex}>{row}</View>);
        row = [];
        rowIndex++;
      }
    });

    if (orientation === 'horizontal' && row.length > 0) {
      rows.push(<View style={styles.horizontalRow} key={rowIndex}>{row}</View>);
    }

    return rows.length > 0 ? rows : row;
  };

  return <View style={styles.container}>{renderOptions()}</View>;
};

const styles = StyleSheet.create({
  optionView:{
    flexDirection: "column",
    // borderWidth: 1,
    flex: 1,
    borderRadius: 12
  },
  container: {
    flexDirection: 'column',
  },
  horizontalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    paddingHorizontal: 3,
    borderRadius: 12,
    marginVertical: 4,
    marginRight: 8,
  },
  optionText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#555555',
  },
  selectedOptionBackground: {
    borderRadius: 12,
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: 'center',
    borderColor: '#F6A326',
    borderWidth: 1
  },
  selectedOption: {
    overflow: 'hidden',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  horizontalOption: {
    flex: 1,
  },
  horizontalGap: {
    marginRight: 0,
  },
});

export default RadioButtonGroup;
