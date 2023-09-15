import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useCustomFlashMessage } from '../components/CustomFlashMessage';
import { useChatClient } from '../providers/ChatProvider';
import CustomHeader from '../components/CustomHeader';
import { FontFamily } from '../GlobalStyles';
import { useSelector } from 'react-redux';
import moment from 'moment';
import DynamicFlatList from '../components/DyanamicFlatList';
import DeletePopup from '../components/DeletePopup';

const ChatInnerScreen = ({ navigation, route }: any) => {
  const { chatId, name } = route.params;
  const [messages, setMessages] = useState<any>([]);
  const chatClient = useChatClient();
  const { showFlashMessage } = useCustomFlashMessage();
  const [inputMessage, setInputMessage] = useState('');
  const userData = useSelector((state: any) => state?.auth?.userData?.user);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchMessages();
    });

    // Subscribe to new message events when the component mounts
    chatClient.on('message.new', handleNewMessage);

    return () => {
      unsubscribe();
      // Unsubscribe from message events when the component unmounts
      chatClient.off('message.new', handleNewMessage);
    };
  }, [navigation, chatId]);

  const handleNewMessage = (event: any) => {
    // Update the messages state with the new message
    setMessages((prevMessages: any) => [...prevMessages, event.message]);
  };

  async function fetchMessages() {
    try {
      // Get the chat channel based on the selected chat ID
      const channel = chatClient.channel('chat', chatId);

      // console.log("channel details", channel);

      // Fetch messages for the selected chat channel
      const response = await channel.query({ messages: { limit: 100 } });

      // console.log("messages---", response?.messages[0]?.user?.id);

      setMessages(response.messages);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      showFlashMessage('Error fetching chat messages', 'failure'); // Display error message using the custom flash message hook
    }
  }

  // Temporary message array with user and my messages
  // const tempMessages = [
  //   {
  //     id: '1',
  //     text: 'Hello, how are you?',
  //     user: { name: 'User', image: require('../assets/user.png') },
  //     created_at: new Date(),
  //   },
  //   {
  //     id: '2',
  //     text: 'I am doing great! Thanks.',
  //     user: { name: 'Me', image: require('../assets/user.png') },
  //     created_at: new Date(),
  //   },
  //   // Add more messages as needed
  // ];

  // Function to send a new message to the chat channel
  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    try {
      // Get the chat channel based on the selected chat ID
      const channel = chatClient.channel('chat', chatId);

      // Send the new message to the chat channel
      await channel.sendMessage({ text: inputMessage });

      // Clear the input field after sending the message
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      showFlashMessage('Error sending message', 'failure'); // Display error message using the custom flash message hook
    }
  };

  // console.log("userdata", userData?.id);

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

  const formattedTimestamp = (created_at: string) => {
    const currentTime = moment();
    const messageTime = moment(created_at);
  
    const timeDifference = currentTime.diff(messageTime, 'days');
  
    let formattedTimestamp;
  
    if (timeDifference === 0) {
      // If the chat is today, show the time only
      formattedTimestamp = messageTime.format('h:mm A');
    } else if (timeDifference < 7) {
      // If the chat is within the current week, show the day and time
      formattedTimestamp = messageTime.format('dddd, h:mm A');
    } else {
      // If the chat is older than a week, show the full date and time
      formattedTimestamp = messageTime.format('MMMM Do YYYY, h:mm A');
    }
  
    return formattedTimestamp;
  };

  const deleteChat = async () => {
    try {
      // Delete the chat channel
      await chatClient.deleteChannels([`chat:${chatId}`]);
  
      // Show a success flash message
      showFlashMessage('Chat deleted successfully', 'success');

      setIsDeleteModalVisible(false);
  
      navigation.goBack();
    } catch (error) {
      console.error('Error deleting chat:', error);
      // Show an error flash message
      showFlashMessage('Error deleting chat', 'failure');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name={name} type={2} subject="Coach" deleteChat={() => setIsDeleteModalVisible(true)}/>
      <DeletePopup
        key={`chat:${chatId}`}
        isVisible={isDeleteModalVisible}
        onDelete={deleteChat}
        onCancel={() => setIsDeleteModalVisible(false)}
        id={`chat:${chatId}`}
      />
      <DynamicFlatList
        data={messages}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View
            style={[
              styles.messageItem,
            ]}
          >
            <View style={styles.messageContent}>
              {item.user.id === userData?.id && (
                <View style={[styles.initialWrapper, { backgroundColor: "#fbb142" }]}>
                  <Text style={styles.initialText}>{getInitials(item?.user?.name)}</Text>
                </View>
              )}
              {/* <Text>{userData?.id}</Text> */}
              <View style={item.user.id == userData?.id ? {marginRight: 'auto'} : {marginLeft: 'auto'}}>
                <View style={item.user.id == userData?.id ? styles.userMessage : styles.myMessage}>
                  <Text style={[styles.messageText, item.user.id == userData?.id ? styles.userMessageText : styles.myMessageText]}>{item.text}</Text>
                </View>
                <Text style={[item.user.id === userData?.id ? (styles.userMessageText, {marginLeft: 20, marginTop: 8}) : (styles.myMessageText, {marginTop: 8, textAlign: 'right', marginRight: 20}), styles.messageTime]}>
                    {formattedTimestamp(item?.created_at)}
                </Text>
              </View>
              {item.user.id !== userData?.id && (
                <View style={[styles.initialWrapper, { backgroundColor: "#42fbcd" }]}>
                  <Text style={styles.initialText}>{getInitials(item?.user?.name)}</Text>
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
    fontFamily: FontFamily.outfitRegular,
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
    textAlign: 'right',
    marginRight: 20
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 50,
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
