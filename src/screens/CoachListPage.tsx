// UserListPage.tsx

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StreamChat, Channel } from 'stream-chat';
import { useChatClient } from '../providers/ChatProvider';
import { StatusBar } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import ThreeDotMenu from '../components/ThreeDotMenu';
import { FontFamily } from '../GlobalStyles';
import { useSelector } from 'react-redux';

const CoachListPage = () => {
  const navigation: any = useNavigation();
  const client = useChatClient();
  const route: any = useRoute();
  // const { subject } = route.params;
  const userData = useSelector((state: any) => state?.auth?.userData?.user);
  console.log("userData", userData);

  // Sample data for users, replace with actual data from the server
  const users = [
    { id: userData?.owner?.id, name: userData?.owner?.name }
  ];

  // Function to handle the user click
  const handleUserClick = async (selectedUser: any) => {
    const currentUserID = userData?.id;
    const otherUserID = selectedUser.id;
    const channelId = currentUserID < otherUserID ? `${currentUserID}_${otherUserID}` : `${otherUserID}_${currentUserID}`;
    const channel = await client.channel('chat', channelId, {
      members: [currentUserID, selectedUser.id],
    });

    const member: any =  Object.values(channel.state.members).find(
      (user: any) => {
        // console.log("user", user?.user?.id);
        // console.log('platform============', Platform.OS);
        // console.log("userId++++++++++", user.id);
        // console.log("current userId", userData?.id);
        // console.log("condition", user.id !== userData?.id);
        return user?.user?.id !== userData?.id
      }
    );
    

    try {
      // Check if the channel exists in Stream Chat
      await channel.watch();
    } catch (error) {
      // If the channel does not exist, create a new one
      await channel.create();
    }

    const chatID = channel.id;

    // Navigate to the ChatInnerScreen with the chat ID
    navigation.navigate('ChatInnerScreen', { chatId: chatID, name: member?.user?.name });
  };

  const getRandomColor = () => {
    // Generate random values for red, green, and blue components (0-255)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Convert the RGB values to hexadecimal format
    const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  
    return color;
  };

  const getInitials = (name="") => {
    const initials = name
        ? name.split(' ').length === 1
            ? name.substring(0, 2)
            : name
                .split(' ')
                .map((word:string) => word.charAt(0))
                .join('')
        : '';

    return initials;
  }

  const renderItem = ({ item }: any) => {
    const randomColor = getRandomColor();

    return (
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => {
          // navigation.navigate('ChatInnerScreen', { chatId: item?.id });
          handleUserClick(item);
        }}
      >
        <View style={styles.cardLeftContent}>
          <View style={[styles.initialWrapper, { backgroundColor: randomColor }]}>
            <Text style={styles.initialText}>{getInitials(item?.name)}</Text>
          </View>
          <View>
            <Text style={styles.chatName}>{item?.name}</Text>
            {/* <Text style={styles.chatSubject}>Financial Review</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <CustomHeader name="Coach List Page" type={2} />
      {/* <Loader visible={loading} /> */}
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hour:{
    color: '#4b4b4b',
    fontSize: 13, 
    fontWeight: '400', 
    fontFamily: FontFamily.outfitLight
  },
  add_circle:{
    width: 20,
    height: 20
  },
  newChat:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  newChatText:{
    color: '#ef9f27',
    fontSize: 14, 
    fontWeight: '500', 
    fontFamily: FontFamily.sourceSerifPro
  },
  current:{
    fontSize: 18, 
    fontWeight: '500', 
    color: "#000",
    fontFamily: FontFamily.sourceSerifPro
  },
  cardRightContent:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10
  },
  initialWrapper:{
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  initialText: {
    color: '#fff'
  },
  cardLeftContent:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  chatSubject: {
    fontFamily: FontFamily.outfitRegular,
    fontWeight: '400',
    fontSize: 14,
    color: '#4b4b4b'
  },
  chatContainer:{
   flex: 1
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 55
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  chatItem: {
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.08)",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 12,
  },
  chatName: {
    fontSize: 15, 
    fontWeight: '500', 
    color: "#000",
    fontFamily: FontFamily.sourceSerifPro
  },
});

export default CoachListPage;
