import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { FontFamily } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const CTextInput = ({ label, defaultValue, id, updateState, isNumOnly = true, icon="", isMobile = false, isTextArea=false, placeholder="", inputStyle={}, ...props }: any) => {
  // console.log("defaultValue.......", defaultValue, id)
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue])

  const formatMobileNumber = (mobileNumber:any) => {
    if(mobileNumber){
      // Remove all non-digit characters from the mobile number except for the plus sign
      const digitsOnly = mobileNumber.replace(/[^+\d]/g, '');
    
     // Check if the mobile number has a valid length
      if (digitsOnly.length > 3) {
        // Format the mobile number in the Australian format
        let formattedNumber = digitsOnly.replace(/^(\+\d{1,2})/, '$1 ');
        formattedNumber = formattedNumber.replace(/(\d{3})(?!$)/g, '$1 ');
        formattedNumber = formattedNumber.trim();
        formattedNumber = formattedNumber.replace(/ /g, '-');
        return formattedNumber;
      }
    }
    
    // Return the original mobile number if it doesn't match the expected format
    return mobileNumber;
  };

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
        {label && <Text style={styles.label}>{label}</Text>}
      </View>
      <TextInput
        multiline={isTextArea}
        keyboardType={isNumOnly ? "numeric" : "default"}
        style={[styles.input, inputStyle]}
        defaultValue={isNumOnly ? inputValue?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : isMobile ? formatMobileNumber(inputValue) : inputValue}
        placeholder={placeholder}
        placeholderTextColor={"#AAA9A8"}
        // autoCapitalize="none"
        // autoCorrect={false}
        {...props}
        onChangeText={(text) => {
          if (isNumOnly) {
            // Remove non-numeric characters
            const newText = text.replace(/[^0-9]/g, '');
            const formattedText = newText.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            setInputValue(formattedText);
            updateState(newText, id);
          } else {
            if(isMobile){
              const newNum = formatMobileNumber(text);

              setInputValue(newNum);
              updateState(text ? text?.replace(/-/g, '') : "", id);
            }else{
              updateState(text, id);
            }
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
    fontFamily: FontFamily.openSansRegular,
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
    height: 48,
    width: '100%',
    color: '#000',
    fontWeight: '600'
  },
});

export default CTextInput;
