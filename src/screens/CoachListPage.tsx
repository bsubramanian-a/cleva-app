// UserListPage.tsx

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StreamChat, Channel } from 'stream-chat';

const API_KEY = 'YOUR_STREAM_API_KEY'; // Replace this with your actual Stream API key
const client = StreamChat.getInstance(API_KEY);

const CoachListPage = () => {
  const navigation: any = useNavigation();

  // Sample data for users, replace with actual data from the server
  const users = [
    { id: 'user1', name: 'User 1' },
    { id: 'user2', name: 'User 2' },
    // Add more user data as needed
  ];

  // Function to handle the user click
  const handleUserClick = async (selectedUser: any) => {
    const currentUserID = 'current-user-id'; // Replace this with the ID of the current user
    const channel = await client.channel('messaging', {
      members: [currentUserID, selectedUser.id],
    });

    try {
      // Check if the channel exists in Stream Chat
      await channel.watch();
    } catch (error) {
      // If the channel does not exist, create a new one
      await channel.create();
    }

    const chatID = channel.id;

    // Navigate to the ChatInnerScreen with the chat ID
    navigation.navigate('ChatInnerScreen', { chatId: chatID });
  };

  return (
    <View>
      <Text>User List Page</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleUserClick(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CoachListPage;
