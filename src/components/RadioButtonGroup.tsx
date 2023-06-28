import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {FontFamily} from '../GlobalStyles';

const RadioButtonGroup = ({
  options,
  defaultValue,
  orientation = 'horizontal',
  count = 1,
  onChange,
  coptionContainer,
  cselectedOptionBackground,
  coptionView,
  coptionDescription,
  coptionTextStyle,
}: any) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleOptionPress = (option: any) => {
    setSelectedValue(option?.value);
    if (onChange) {
      onChange(option?.id || option?.value);
    }
  };

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const renderOptions = () => {
    const rows = [];
    let row: any = [];
    let rowIndex = 0;

    options.forEach((option: any, index: any) => {
      const isSelected = selectedValue === option?.value;
      const optionContainerStyle = [
        styles.optionContainer,
        coptionContainer,
        isSelected && styles.selectedOption,
        orientation === 'horizontal' && styles.horizontalOption,
        orientation === 'horizontal' &&
          rowIndex % count !== 0 &&
          styles.horizontalGap,
      ];
      const optionTextStyle = [
        styles.optionText,
        isSelected && styles.selectedOptionText,
      ];

      row.push(
        <TouchableOpacity
          key={option+index}
          style={optionContainerStyle}
          onPress={() => handleOptionPress(option)}
          activeOpacity={0.8}>
          {isSelected ? (
            <View
              style={[
                styles.selectedOptionBackground,
                styles.optionView,
                cselectedOptionBackground,
                coptionView,
              ]}>
              <Text
                style={[optionTextStyle, {color: '#FBB142'}, coptionTextStyle]}>
                {option?.value}
              </Text>
              {option?.description && (
                <Text style={coptionDescription}>{option?.description}</Text>
              )}
            </View>
          ) : (
            <View style={[styles.optionView, coptionView]}>
              <Text style={[optionTextStyle, coptionTextStyle]}>
                {option?.value}
              </Text>
              {option?.description && (
                <Text style={coptionDescription}>{option?.description}</Text>
              )}
            </View>
          )}
        </TouchableOpacity>,
      );

      if (orientation === 'horizontal' && row.length === count) {
        rows.push(
          <View style={styles.horizontalRow} key={rowIndex}>
            {row}
          </View>,
        );
        row = [];
        rowIndex++;
      }
    });

    if (orientation === 'horizontal' && row.length > 0) {
      rows.push(
        <View style={styles.horizontalRow} key={rowIndex}>
          {row}
        </View>,
      );
    }

    return rows.length > 0 ? rows : row;
  };

  return <View style={styles.container}>{renderOptions()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  horizontalGap: {
    marginRight: 0,
  },
  horizontalOption: {
    flex: 1,
  },
  horizontalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionContainer: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    height: 52,
    justifyContent: 'center',
    marginRight: 8,
    marginVertical: 4,
    paddingHorizontal: 3,
  },
  optionText: {
    color: '#000',
    fontFamily: FontFamily.outfitMedium,
    fontSize: 14,
    fontWeight: '500',
  },
  optionView: {
    flexDirection: 'column',
    // borderWidth: 1,
    flex: 1,
    borderRadius: 12,
  },
  selectedOption: {
    overflow: 'hidden',
  },
  selectedOptionBackground: {
    alignItems: 'center',
    borderColor: '#F6A326',
    borderRadius: 12,
    borderWidth: 1,
    flex: 1,
    height: 30,
    justifyContent: 'center',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
});

export default RadioButtonGroup;
