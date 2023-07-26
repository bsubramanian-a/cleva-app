import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
import { useCustomFlashMessage } from '../components/CustomFlashMessage';
import { useChatClient } from '../providers/ChatProvider';
import CustomHeader from '../components/CustomHeader';

const ChatInnerScreen = ({ route }: any) => {
  const { chatId } = route.params;
  const [messages, setMessages] = useState<any>([]);
  const chatClient = useChatClient();
  const { showFlashMessage } = useCustomFlashMessage();

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
      user: { name: 'User', image: require('../assets/calendar.png') },
      created_at: new Date(),
    },
    {
      id: '2',
      text: 'I am doing great! Thanks.',
      user: { name: 'Me', image: require('../assets/calendar.png') },
      created_at: new Date(),
    },
    // Add more messages as needed
  ];

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Jakob Gouse" type={2}/>

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
                <Text style={[styles.messageTime, item.user.name === 'User' ? styles.userMessageText : styles.myMessageText]}>
                    {item.created_at.toLocaleTimeString()}
                </Text>
              </View>
              {item.user.name === 'Me' && (
                <View style={styles.userImageWrap}>
                  <Image source={item.user.image} style={styles.myImage} />
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatLayout: {
    // width: Dimensions.get('window').width
  },
  userMessageText: {
    textAlign: 'left'
  },
  myMessageText: {
    textAlign: 'right'
  },
  userImageWrap: {
    borderRadius: 20,
    width: 40,
    height: 40
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
    backgroundColor: '#f4d19c',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: Dimensions.get('window').width - 100
  },
  myMessage: {
    backgroundColor: '#FBB142',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    width: Dimensions.get('window').width - 100,
    textAlign: 'right'
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 50
  },
  myImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
    padding: 20
  },
  messageTime: {
    fontSize: 12,
    color: '#777',
  },
});

export default ChatInnerScreen;
