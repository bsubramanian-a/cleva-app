// ChatListScreen.tsx

import React, { useEffect, useState } from 'react';
import { useCustomFlashMessage } from '../components/CustomFlashMessage';
import { useChatClient } from '../providers/ChatProvider';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, Pressable, Dimensions } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import WealthTab from '../components/WealthTab';
import { useNavigation } from '@react-navigation/native';

const ChatListScreen = () => {
  const navigation: any = useNavigation();
  const [chats, setChats] = useState<any>([]);
  const chatClient = useChatClient();
  const { showFlashMessage } = useCustomFlashMessage();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  async function fetchChats() {
    try {
      // Fetch the list of chat channels for the user
      const response = await chatClient.queryChannels({}, { last_message_at: -1 });

      // setChats(response);
      setChats([{ id: 'chat1', data: { name: 'Chat 1' } },
      { id: 'chat2', data: { name: 'Chat 2' } }]);
    } catch (error) {
      console.error('Error fetching chats:', error);
      showFlashMessage('Error fetching chats', 'failure'); // Display error message using the custom flash message hook
    }
  }

  const newChat = () => {
    console.log("newChat");
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Coach" type={1}/>

      <WealthTab tabs={['Chat', 'Calls', 'Advice']}
          activeTab={activeTab}
          onTabPress={handleTabPress} />
        <View style={styles.container}>
          {
            activeTab == 0 &&
              <View style={styles.chatContainer}>
                <View style={styles.titleRow}>
                  <Text>Current</Text>
                  <Pressable onPress={newChat}><Text>New Chat</Text></Pressable>
                </View>
                <FlatList
                  data={chats}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.chatItem}
                      onPress={() => {
                        navigation.navigate('ChatInnerScreen', { chatId: item?.id });
                      }}
                    >
                      <Text style={styles.chatName}>{item.data.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
          }
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer:{
   flex: 1
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 55
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
  chatItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatName: {
    fontSize: 18,
  },
});

export default ChatListScreen;
