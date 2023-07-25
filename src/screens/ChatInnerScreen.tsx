// ChatInnerScreen.tsx

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useCustomFlashMessage} from '../components/CustomFlashMessage';
import {useChatClient} from '../providers/ChatProvider';

const ChatInnerScreen = ({route}: any) => {
  const {chatId} = route.params;
  const [messages, setMessages] = useState<any>([]);
  const chatClient = useChatClient();
  const {showFlashMessage} = useCustomFlashMessage();

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      // Get the chat channel based on the selected chat ID
      const channel = chatClient.channel('messaging', chatId);

      // Fetch messages for the selected chat channel
      const response = await channel.query({messages: {limit: 100}});

      setMessages(response.messages);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      showFlashMessage('Error fetching chat messages', 'failure'); // Display error message using the custom flash message hook
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Inner</Text>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.messageItem}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    messageText: {
      fontSize: 16,
    },
});

export default ChatInnerScreen;
