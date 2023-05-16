import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { FontFamily } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const CTextInput = ({ label, defaultValue, ...props }: any) => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setInputValue(defaultValue);
    });

    return unsubscribe;
}, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={inputValue}
        {...props}
        onKeyPress={(text) => console.log("keypress", text)}
        onChangeText={(text) => {
          // Remove non-numeric characters except '.'
          const newText = text.replace(/[^0-9.]/g, '');
          // Allow only one decimal point
          const decimalCount = newText.split('.').length - 1;
          if (decimalCount > 1) {
            const parts = newText.split('.');
            const integerPart = parts[0];
            const decimalPart = parts.slice(1).join('');
            setInputValue(`${integerPart}.${decimalPart}`);
          } else {
            setInputValue(newText);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  label: {
    fontWeight: '300',
    fontFamily: FontFamily.openSansRegular,
    color: '#4B4B4B',
    textAlign: 'left',
    lineHeight: 22,
    fontSize: 14,
  },
  input: {
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#4B4B4B',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 4,
    width: '100%',
  },
});

export default CTextInput;
