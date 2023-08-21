// ChatListScreen.tsx

import React, { useEffect, useRef, useState } from 'react';
import { useCustomFlashMessage } from '../components/CustomFlashMessage';
import { useChatClient } from '../providers/ChatProvider';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, Pressable, Dimensions, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import WealthTab from '../components/WealthTab';
import { useNavigation } from '@react-navigation/native';
import ThreeDotMenu from '../components/ThreeDotMenu';
import NewChatModal from '../components/NewChatModal';
import { FontFamily } from '../GlobalStyles';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
// import { useZoom } from '@zoom/react-native-videosdk';
import { useSelector } from 'react-redux';

const ChatListScreen = () => {
  const navigation: any = useNavigation();
  const [chats, setChats] = useState<any>([]);
  const chatClient = useChatClient();
  const { showFlashMessage } = useCustomFlashMessage();
  const [activeTab, setActiveTab] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [subject, setSubject] = useState("");
  const swipeableRef = useRef<Swipeable>(null);
  // const zoom = useZoom();
  const token = useSelector((state: any) => state?.auth?.userData?.token);

  // Function to delete the chat from history
  const deleteChat = () => {
    // Add the logic to delete the chat here
    // For now, we'll just show a flash message
    showFlashMessage('Chat deleted successfully', 'failure');
    swipeableRef.current?.close();
  };

  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const joinZoom = async () => {
    // await zoom.joinSession({
    //   sessionName: 'name of video session',
    //   token,
    //   userName: 'name of user',
    //   audioOptions: {
    //     connect: true,
    //     mute: false,
    //   },
    //   videoOptions: {
    //     localVideoOn: true,
    //   },
    //   sessionIdleTimeoutMins: 40,
    // });
  } 

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
      <View style={styles.swipeableContainer}>
        <Swipeable
          ref={swipeableRef}
          renderRightActions={() => (
            <RectButton onPress={deleteChat}>
              <View style={styles.deleteButton}>
                <Image
                  style={styles.trash}
                  resizeMode="cover"
                  source={require("../assets/trash.png")}
                />
              </View>
            </RectButton>
          )}
          onSwipeableClose={() => swipeableRef.current?.close()}
          containerStyle={{width: '100%'}}
        >
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
              <Text style={styles.hour}>1 hr</Text>
              <ThreeDotMenu options={options} />
            </View>
          </TouchableOpacity>
        </Swipeable>
      </View>
    );
  };

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
                  <Text style={styles.current}>Current</Text>
                  <Pressable style={styles.newChat} onPress={newChat}>
                    <Image
                      style={styles.add_circle}
                      resizeMode="cover"
                      source={require("../assets/add-circle.png")}
                    />
                    <Text style={styles.newChatText}>New Chat</Text>
                  </Pressable>
                </View>
                <FlatList
                  data={chats}
                  keyExtractor={(item) => item.id}
                  renderItem={renderItem} 
                />
              </View>
          }

          {
            activeTab == 1 && 
              <>
                <TouchableOpacity onPress={joinZoom}>
                  <Text>Join zoom</Text>
                </TouchableOpacity>
              </>
          }
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeableContainer: {
    alignItems: 'center',
    flex: 1,
    marginVertical: 12,
  },
  deleteButton: {
    backgroundColor: '#FFE0E0',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 62,
    borderRadius: 16,
    marginLeft: 15
  },
  trash: {
    width: 26,
    height: 26
  },
  hour:{
    color: '#4b4b4b',
    fontSize: 12, 
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
    // marginVertical: 12,
    minHeight: 60,
  },
  chatName: {
    fontSize: 15, 
    fontWeight: '500', 
    color: "#000",
    fontFamily: FontFamily.sourceSerifPro
  },
});

export default ChatListScreen;
