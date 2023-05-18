import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { FontFamily } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const CTextInput = ({ label, defaultValue, id, updateState, isNumOnly = true, icon="", ...props }: any) => {
  // console.log("defaultValue.......", defaultValue, id)
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue])

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
        {icon && 
          <Image
            style={styles.vuesaxlinearprofileCircleIcon}
            resizeMode="cover"
            source={icon}
          />
        }
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        keyboardType= {isNumOnly ? "numeric" : "default"}
        style={styles.input}
        defaultValue={inputValue}
        {...props}
        // onKeyPress={(text) => console.log("keypress", text)}
        onChangeText={(text) => {
          // console.log("isNumOnly", isNumOnly, text);
          if(isNumOnly){
            // Remove non-numeric characters except '.'
            const newText = text.replace(/[^0-9.]/g, '');
            // Allow only one decimal point
            const decimalCount = newText.split('.').length - 1;
            if (decimalCount > 1) {
              const parts = newText.split('.');
              const integerPart = parts[0];
              const decimalPart = parts.slice(1).join('');
              setInputValue(`${integerPart}.${decimalPart}`);
              updateState(`${integerPart}.${decimalPart}`, id);
            } else {
              setInputValue(newText);
              updateState(newText, id);
            }
          }else{
            updateState(text, id);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vuesaxlinearprofileCircleIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  container: {
    marginTop: 20,
    flex: 1,
  },
  label: {
    fontWeight: '300',
    // fontFamily: FontFamily.openSansRegular,
    color: '#4B4B4B',
    textAlign: 'left',
    lineHeight: 22,
    fontSize: 14,
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 4,
    width: '100%',
    color: '#000',
    fontWeight: '600'
  },
});

export default CTextInput;
