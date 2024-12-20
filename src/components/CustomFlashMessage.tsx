import React, { createContext, useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface FlashMessageContextProps {
  showFlashMessage: (message: string, type: 'success' | 'failure') => void;
  hideFlashMessage: () => void;
}

const FlashMessageContext = createContext<FlashMessageContextProps>({
  showFlashMessage: () => { },
  hideFlashMessage: () => { },
});

export const useCustomFlashMessage = () => useContext(FlashMessageContext);

const CustomFlashMessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'failure'>('success');

  const showFlashMessage = (msg: string, type: 'success' | 'failure') => {
    setMessage(msg);
    setMessageType(type);
    setVisible(true);
    setTimeout(() => {
      hideFlashMessage();
    }, 3000); // Hide the flash message after 3 seconds
  };

  const hideFlashMessage = () => {
    setVisible(false);
    setMessage('');
    setMessageType('success');
  };

  return (
    <FlashMessageContext.Provider value={{ showFlashMessage, hideFlashMessage }}>
      {children}
      {visible && (
        <TouchableOpacity
          style={[
            styles.flashMessageContainer,
            messageType === 'success' ? styles.successBorder : styles.failureBorder
          ]}
          onPress={hideFlashMessage}
        >
          <View style={styles.flashMessageImageContainer}>
            {messageType === 'success' && <Image     
            style={[styles.flashMessageImage]}       
            source={require("../assets/success-icon.png")}
            />}
            {messageType === 'failure' && <Image     
            style={[styles.flashMessageImage]}       
            source={require("../assets/error-icon.png")}
            />}
          </View>
          <View style={styles.flashMessageTextContainer}>
            <Text style={styles.flashMessageText}>{message}</Text>
          </View>
        </TouchableOpacity>
      )}
    </FlashMessageContext.Provider>
  );
};

const styles = StyleSheet.create({
  flashMessageContainer: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
  },
  successBorder: {
    borderColor: '#20C997',
    backgroundColor: '#C0EDE0'
  },
  failureBorder: {
    borderColor: '#ff0000',
    backgroundColor:"#FFB7B7"
  },
  flashMessageText: {
    color: '#000', 
    paddingLeft: 10,
    borderWidth: 0,
    borderColor: "#000"
  },
  flashMessageImage: {
    width: 30,
    height: 30
  },
  flashMessageImageContainer: {
    alignSelf:"flex-start"
  },
  flashMessageTextContainer: {
    borderWidth: 0,
    borderColor: "#000",
    width: "90%"
  }
});

export default CustomFlashMessageProvider;
