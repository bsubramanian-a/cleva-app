// ChatListScreen.tsx

import React, { useEffect, useState } from 'react';
import { useCustomFlashMessage } from '../components/CustomFlashMessage';
import { useChatClient } from '../providers/ChatProvider';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, Pressable, Dimensions } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import WealthTab from '../components/WealthTab';
import { useNavigation } from '@react-navigation/native';
import ThreeDotMenu from '../components/ThreeDotMenu';
import NewChatModal from '../components/NewChatModal';

const ChatListScreen = () => {
  const navigation: any = useNavigation();
  const [chats, setChats] = useState<any>([]);
  const chatClient = useChatClient();
  const { showFlashMessage } = useCustomFlashMessage();
  const [activeTab, setActiveTab] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [subject, setSubject] = useState("");

  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const closeModal = () => {
    setModalVisible(false);
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
    setModalVisible(true);
  }

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

  const getRandomColor = () => {
    // Generate random values for red, green, and blue components (0-255)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Convert the RGB values to hexadecimal format
    const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  
    return color;
  };

  const renderItem = ({ item }: any) => {
    const randomColor = getRandomColor();

    return (
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => {
          navigation.navigate('ChatInnerScreen', { chatId: item?.id });
        }}
      >
        <View style={styles.cardLeftContent}>
          <View style={[styles.initialWrapper, { backgroundColor: randomColor }]}>
            <Text style={styles.initialText}>{getInitials(item?.data?.name)}</Text>
          </View>
          <View>
            <Text style={styles.chatName}>{item.data.name}</Text>
            <Text style={styles.chatSubject}>Financial Review</Text>
          </View>
        </View>
        <View style={styles.cardRightContent}>
          <Text>1 hr</Text>
          <ThreeDotMenu options={options} />
        </View>
      </TouchableOpacity>
    );
  };

  const deleteChat = (id: any) => {
      console.log("delete id", id);
  }

  const options = [
    { label: 'Delete', onClick: deleteChat, icon: require("../assets/trashAcc.png") },
  ];

  const onSubjectSelection = (subject: string) => {
    console.log("subject selected", subject);
    setSubject(subject);
  }

  const coachList = () => {
    setModalVisible(false);
    navigation.navigate('CoachListPage', { subject });
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Coach" type={1}/>

      <NewChatModal visible={modalVisible} onClose={closeModal} onSelect={onSubjectSelection} coachList={coachList}/>

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
                  renderItem={renderItem} 
                />
              </View>
          }
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 18,
  },
});

export default ChatListScreen;
