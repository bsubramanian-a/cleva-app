import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useCustomFlashMessage } from '../components/CustomFlashMessage';
import { useChatClient } from '../providers/ChatProvider';
import CustomHeader from '../components/CustomHeader';
import { FontFamily } from '../GlobalStyles';

const ChatInnerScreen = ({ route }: any) => {
  const { chatId } = route.params;
  const [messages, setMessages] = useState<any>([]);
  const chatClient = useChatClient();
  const { showFlashMessage } = useCustomFlashMessage();
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      // Get the chat channel based on the selected chat ID
      const channel = chatClient.channel('messaging', chatId);

      // Fetch messages for the selected chat channel
      const response = await channel.query({ messages: { limit: 100 } });

      setMessages(response.messages);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      showFlashMessage('Error fetching chat messages', 'failure'); // Display error message using the custom flash message hook
    }
  }

  // Temporary message array with user and my messages
  const tempMessages = [
    {
      id: '1',
      text: 'Hello, how are you?',
      user: { name: 'User', image: require('../assets/user.png') },
      created_at: new Date(),
    },
    {
      id: '2',
      text: 'I am doing great! Thanks.',
      user: { name: 'Me', image: require('../assets/user.png') },
      created_at: new Date(),
    },
    // Add more messages as needed
  ];

  // Function to send a new message to the chat channel
  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    try {
      // Get the chat channel based on the selected chat ID
      const channel = chatClient.channel('messaging', chatId);

      // Send the new message to the chat channel
      await channel.sendMessage({ text: inputMessage });

      // Clear the input field after sending the message
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      showFlashMessage('Error sending message', 'failure'); // Display error message using the custom flash message hook
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Jakob Gouse" type={2} subject="Financial Review"/>

      <FlatList
        data={tempMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageItem,
            ]}
          >
            <View style={styles.messageContent}>
              {item.user.name === 'User' && (
                <View style={styles.userImageWrap}>
                  <Image source={item.user.image} style={styles.userImage} />
                </View>
              )}
              <View style={item.user.name === 'User' ? {marginRight: 'auto'} : {marginLeft: 'auto'}}>
                <View style={item.user.name === 'User' ? styles.userMessage : styles.myMessage}>
                  <Text style={[styles.messageText, item.user.name === 'User' ? styles.userMessageText : styles.myMessageText]}>{item.text}</Text>
                </View>
                <Text style={[item.user.name === 'User' ? (styles.userMessageText, {marginLeft: 20, marginTop: 8}) : (styles.myMessageText, {marginTop: 8, textAlign: 'right'}), styles.messageTime]}>
                    {item.created_at.toLocaleTimeString()}
                </Text>
              </View>
              {item.user.name === 'Me' && (
                <View style={styles.myImageWrap}>
                  <Image source={item.user.image} style={styles.myImage} />
                </View>
              )}
            </View>
          </View>
        )}
      />
      
      <View style={styles.chatInputContainer}>
        <TextInput
          style={styles.chatInput}
          placeholder="Type something here..."
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholderTextColor={'#2e3c3e'}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Image
            style={styles.sendButtonImage}
            resizeMode="cover"
            source={require("../assets/send-btn-chat.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 7,
    paddingLeft: 18,
    paddingRight: 7,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 20,
    borderRadius: 12
  },
  chatInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 0,
    color: '#2b3c3e'
  },
  sendButton: {
  },
  sendButtonImage: {
    width: 34,
    height: 34
  },
  chatLayout: {
    // width: Dimensions.get('window').width
  },
  userMessageText: {
    textAlign: 'left',
    // marginTop: 6,
    color: '#2b3c3e',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FontFamily.outfitRegular
  },
  myMessageText: {
    textAlign: 'left',
    // marginTop: 6,
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FontFamily.outfitRegular
  },
  userImageWrap: {
    borderRadius: 20,
    width: 40,
    height: 40
  },
  myImageWrap: {
    borderRadius: 22,
    width: 44,
    height: 44
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  messageItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  userMessage: {
    backgroundColor: '#fbb14225',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    // width: Dimensions.get('window').width - 100,
    marginLeft: 20,
  },
  myMessage: {
    backgroundColor: '#FBB142',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    // width: Dimensions.get('window').width - 100,
    textAlign: 'right'
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 50
  },
  myImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginLeft: 10,
  },
  userImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 15
  },
  messageTime: {
    fontSize: 12,
    color: '#4b4b4b',
    fontWeight: '400',
    fontFamily: FontFamily.outfitRegular
  },
});

export default ChatInnerScreen;
