// UserListPage.tsx

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StreamChat, Channel } from 'stream-chat';
import { useChatClient } from '../providers/ChatProvider';
import { StatusBar } from 'react-native';
import CustomHeader from '../components/CustomHeader';

const selectedSubject = "Financial Review";

const CoachListPage = () => {
  const navigation: any = useNavigation();
  const client = useChatClient();
  const route: any = useRoute();
  const { subject } = route.params;

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
      extra_data: {
        subject: selectedSubject,
      },
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
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <CustomHeader name="Coach List Page" type={3} />
      {/* <Loader visible={loading} /> */}

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
