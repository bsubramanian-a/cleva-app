import React, { useEffect, useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet } from 'react-native';

const CKeyboard = ({ children } : any) => {
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    // Subscribe to keyboard events
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', onKeyboardHide);

    // Clean up listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onKeyboardShow = (event : any) => {
    // Calculate the offset to move the form up
    const keyboardHeight = event.endCoordinates.height;
    const formOffset = keyboardHeight * 0.5; // Adjust this value based on your layout
    setKeyboardOffset(formOffset);
  };

  const onKeyboardHide = () => {
    setKeyboardOffset(0); // Reset the offset when the keyboard is hidden
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardOffset}
      style={styles.container}
    >
      <View style={styles.form}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
    // Other styles for the form container
  },
});

export default CKeyboard;
