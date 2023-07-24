import React, { createContext, useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FlashMessageContextProps {
  showFlashMessage: (message: string, type: 'success' | 'failure') => void;
  hideFlashMessage: () => void;
}

const FlashMessageContext = createContext<FlashMessageContextProps>({
  showFlashMessage: () => {},
  hideFlashMessage: () => {},
});

export const useCustomFlashMessage = () => useContext(FlashMessageContext);

const CustomFlashMessageProvider: React.FC = ({ children }) => {
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
            { backgroundColor: messageType === 'success' ? '#00ff00' : '#ff0000' },
          ]}
          onPress={hideFlashMessage}
        >
          <Text style={styles.flashMessageText}>{message}</Text>
        </TouchableOpacity>
      )}
    </FlashMessageContext.Provider>
  );
};

const styles = StyleSheet.create({
  flashMessageContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: 'center',
  },
  flashMessageText: {
    color: '#ffffff', // Customize the text color
  },
});

export default CustomFlashMessageProvider;
