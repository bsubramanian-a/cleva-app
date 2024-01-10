import React, {useEffect, useRef, useState} from 'react';
import {useCustomFlashMessage} from '../components/CustomFlashMessage';
import {useChatClient} from '../providers/ChatProvider';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Pressable,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import WealthTab from '../components/WealthTab';
import {useNavigation} from '@react-navigation/native';
import ThreeDotMenu from '../components/ThreeDotMenu';
import NewChatModal from '../components/NewChatModal';
import {FontFamily} from '../GlobalStyles';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import moment from 'moment';
import DeletePopup from '../components/DeletePopup';
import SchedulePopup from '../components/SchedulePopup';
import actions from '../../actions';
import { MeetingDetails } from '../components/MeetingDetails';

const ChatListScreen = () => {
  const navigation: any = useNavigation();
  const [chats, setChats] = useState<any>([]);
  const chatClient = useChatClient();
  const {showFlashMessage} = useCustomFlashMessage();
  const [activeTab, setActiveTab] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const swipeableRef = useRef<Swipeable>(null);
  const swipeableRefs = useRef(new Map()).current;
  const token = useSelector((state: any) => state?.auth?.userData?.token);
  const userData = useSelector((state: any) => state?.auth?.userData?.user);
  console.log("userData------", userData);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [meetings, setMeetings] = useState<any[]>([]);
  const [scheduleVisible, setScheduleVisible] = useState('');

  const handlePopupClose = () => { 
    setScheduleVisible('');
    getMeetings();
  };

  const coaches = [{id: userData?.owner?.id, name: userData?.owner?.name}];

  const getMeetings = async () => {
    //console.log('get meetings called 1111111111111111');
    const meetings: any = await actions.getMeetings(userData?.userType);
    //console.log('meetings', meetings);
    setMeetings(meetings);
  };

  // //console.log("userData", userData);

  // //console.log("Platform.OS_________", Platform.OS, userData?.id);

  // Function to delete the chat from history
  const deleteChat = async (cid: any) => {
    //console.log('delette cid--------', cid);
    await chatClient.deleteChannels([cid]);
    // For now, we'll just show a flash message
    showFlashMessage('Chat deleted successfully', 'failure');
    swipeableRef.current?.close();
    setIsDeleteModalVisible(false);
  };

  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getMeetings();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (scheduleVisible == '' || !scheduleVisible) {
      getMeetings();
    }
  }, [scheduleVisible]);

  useEffect(() => {
    // Fetch initial chats
    fetchChats();
    // getMeetings();

    // Listen for new messages in real-time
    const listener = (event: any) => {
      // //console.log("event listener++++++++++", event);
      if (
        event.type === 'message.new' ||
        event.type === 'channel.deleted' ||
        event.type === 'notification.message_new'
      ) {
        // A new message has arrived, update the chat list
        fetchChats();
      }
    };

    // Add the event listener
    chatClient.on(listener);

    // Clean up the event listener when the component unmounts
    return () => {
      chatClient.off(listener);
    };
  }, []);

  const joinZoom = async () => {
    // //console.log("join zoom1");
    // navigation.navigate("CallScreen");
    // try {
    //   // await zoom.joinSession({
    //   //   sessionName: 'Cool Cars',
    //   //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoieTJsTVRYUVdqTjE0b3lDY1B3U2NQaVIyZlNmZ1Y2azZtYzhTIiwidHBjIjoiQ29vbCBDYXJzIiwicm9sZV90eXBlIjoxLCJzZXNzaW9uX2tleSI6InNlc3Npb24xMjMiLCJ1c2VyX2lkZW50aXR5IjoidXNlcjEyMyIsInZlcnNpb24iOjEsImlhdCI6MTY5Mzg5OTU1NywiZXhwIjoxNjkzOTA2NzU3fQ.E8suBTzzIt_g7vXSFtkC9ssyhz69Y0xtKwP7Tb9WcIA",
    //   //   userName: 'user123',
    //   //   audioOptions: {
    //   //     connect: true,
    //   //     mute: false,
    //   //   },
    //   //   videoOptions: {
    //   //     localVideoOn: true,
    //   //   },
    //   //   sessionIdleTimeoutMins: 40,
    //   // });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  async function fetchChats() {
    try {
      //console.log('userid', userData);
      // Fetch the list of chat channels for the user
      const response: any = await chatClient.queryChannels(
        {members: {$in: [userData?.id]}},
        {last_message_at: -1},
      );

      // //console.log("chatlist------------", response[0]?.state?.messageSets);
      // //console.log("chatlist------------", response[0]?.state?.members);
      //console.log('chatlist------------', response[0]?.state);

      setChats(response);
      // setChats([{ id: 'chat1', data: { name: 'Chat 1' } },
      // { id: 'chat2', data: { name: 'Chat 2' } }]);
    } catch (error) {
      console.error('Error fetching chats:', error);
      showFlashMessage('Error fetching chats', 'failure'); // Display error message using the custom flash message hook
    }
  }

  const newChat = (type?: string) => {
    // setModalVisible(true);
    navigation.navigate('CoachListPage', type);
  };

  const getInitials = (name = '') => {
    const initials = name
      ? name.split(' ').length === 1
        ? name.substring(0, 2)
        : name
            .split(' ')
            .map((word: string) => word.charAt(0))
            .join('')
      : '';

    return initials;
  };

  const getRandomColor = () => {
    // Generate random values for red, green, and blue components (0-255)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert the RGB values to hexadecimal format
    const color = `#${red.toString(16).padStart(2, '0')}${green
      .toString(16)
      .padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

    return color;
  };

  const formattedTimestamp = (created_at: string) => {
    const currentTime = moment();
    const messageTime = moment(created_at);

    const timeDifference = currentTime.diff(messageTime, 'minutes'); // Calculate the time difference in minutes

    let formattedTimestamp;

    if (timeDifference === 0) {
      // If the chat is within the same minute, display "Just now"
      formattedTimestamp = 'Just now';
    } else if (timeDifference < 60) {
      // If the chat is within the same hour, display the minutes ago
      formattedTimestamp = `${timeDifference}m ago`;
    } else if (timeDifference < 1440) {
      // If the chat is within the same day, display the time in "h:mm A" format
      formattedTimestamp = messageTime.format('h:mm A');
    } else if (timeDifference < 10080) {
      // If the chat is within the same week, display the day of the week
      formattedTimestamp = messageTime.format('dddd');
    } else {
      // If the chat is older than a week, display the full date
      formattedTimestamp = messageTime.format('MMM Do YYYY');
    }

    return formattedTimestamp;
  };

  const onDeleteClick = (cid: any) => {
    setDeleteId(cid);
    swipeableRef.current?.close();
    setIsDeleteModalVisible(true);
  };

  const onDeleteClickC = (link: any, itemID: any) => {
    setScheduleVisible(link);
    const swipeable = swipeableRefs.get(itemID);
    swipeable?.close();
  };

  const renderItem = ({item}: any) => {
    const randomColor = getRandomColor();
    // //console.log("item.state.members.............", item.state.members);
    const member: any = Object.values(item.state.members).find((user: any) => {
      // //console.log("user", user?.user?.id);
      // //console.log('platform============', Platform.OS);
      // //console.log("userId++++++++++", user.id);
      // //console.log("current userId", userData?.id);
      // //console.log("condition", user.id !== userData?.id);
      return user?.user?.id !== userData?.id;
    });

    // //console.log("user ++++++", member);

    const options = [
      {
        label: 'Delete',
        onClick: () => onDeleteClick(item?.cid),
        icon: require('../assets/trashAcc.png'),
      },
    ];

    return (
      <View style={styles.swipeableContainer}>
        <Swipeable
          ref={swipeableRef}
          renderRightActions={() => (
            <RectButton onPress={() => onDeleteClick(item?.cid)}>
              <View style={styles.deleteButton}>
                <Image
                  style={styles.trash}
                  resizeMode="cover"
                  source={require('../assets/trash.png')}
                />
              </View>
            </RectButton>
          )}
          onSwipeableClose={() => swipeableRef.current?.close()}
          containerStyle={{width: '100%'}}>
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => {
              navigation.navigate('ChatInnerScreen', {
                chatId: item?.id,
                name: member?.user?.name,
              });
            }}>
            <View style={styles.cardLeftContent}>
              <View
                style={[styles.initialWrapper, {backgroundColor: randomColor}]}>
                <Text style={styles.initialText}>
                  {getInitials(member?.user?.name)}
                </Text>
              </View>
              <View>
                <Text style={styles.chatName}>{member?.user?.name}</Text>
                <Text style={styles.chatSubject}>
                  {item?.state?.messageSets?.length > 0 &&
                  item?.state?.messageSets[0]?.messages?.length > 0
                    ? item?.state?.messageSets[0]?.messages[
                        item?.state?.messageSets[0]?.messages?.length - 1
                      ]?.text?.slice(0, 20)
                    : ''}
                </Text>
              </View>
            </View>
            <View style={styles.cardRightContent}>
              <Text style={styles.hour}>
                {formattedTimestamp(item?.state?.last_message_at)}
              </Text>
              <ThreeDotMenu options={options} />
            </View>
          </TouchableOpacity>
        </Swipeable>
      </View>
    );
  };

  const processData = (jsonData: any) => {
    return jsonData.map((item: any) => {
      const description = item.Description;
      // console.log("description", description);

      // Regular expressions to find URLs
      const startLinkRegex = /Start Link : (https:\/\/[\S]+)/;
      const joinLinkRegex = /Join Link : (https:\/\/[\S]+)/;

      // Extract URLs using regex
      if (description && description != '') {
        // console.log("inside")
        const startLinkMatch = description?.match(startLinkRegex);
        const joinLinkMatch = description?.match(joinLinkRegex);

        // Get the links from the regex match results
        const startLink = startLinkMatch ? startLinkMatch[1] : null;
        const joinLink = joinLinkMatch ? joinLinkMatch[1] : null;

        return {
          ...item,
          StartLink: startLink,
          JoinLink: joinLink,
        };
      }

      return {
        ...item,
        StartLink: '',
        JoinLink: '',
      };
    });
  };

  const callRenderItem = ({item}: any) => {
    const randomColor = getRandomColor();
    //console.log('item...', item);
    console.log('start link...', item['StartLink']);
    console.log('join link...', item['JoinLink']);

    function convertDateTime(dateTimeStr: string): {
      date: string;
      time: string;
    } {
      // Parse the date-time string
      const date = new Date(dateTimeStr);

      // Options for formatting the date
      const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };

      // Options for formatting the time
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };

      // Format the date and time
      const formattedDate = new Intl.DateTimeFormat(
        'en-US',
        dateOptions,
      ).format(date);
      const formattedTime = new Intl.DateTimeFormat(
        'en-US',
        timeOptions,
      ).format(date);

      // Convert date to desired format
      const dateParts = formattedDate.split('/');
      const convertedDate = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;

      return {date: convertedDate, time: formattedTime};
    }

    const {date, time} = convertDateTime(item?.Start_DateTime);

    //console.log('?userData?.userType', userData?.userType);

    return (
      <View style={styles.swipeableContainer}>
        <Swipeable
          ref={ref => swipeableRefs.set(item.id, ref)}
          renderRightActions={
            userData?.userType != 'advisor_coach'
              ? () => (
                  <>
                    <RectButton
                      onPress={() =>
                        onDeleteClickC(
                          item?.zohobookingstest__Booking_Summary,
                          item?.id,
                        )
                      }>
                      <View
                        style={[styles.deleteButton, styles.rescheduleButton]}>
                        <Image
                          style={styles.trash}
                          resizeMode="cover"
                          source={require('../assets/trash.png')}
                        />
                        <Text style={styles.actionText}>Reschedule</Text>
                      </View>
                    </RectButton>
                    <RectButton
                      onPress={() =>
                        onDeleteClickC(
                          item?.zohobookingstest__Booking_Summary,
                          item?.id,
                        )
                      }>
                      <View style={styles.deleteButton}>
                        <Image
                          style={styles.trash}
                          resizeMode="cover"
                          source={require('../assets/trash.png')}
                        />
                        <Text style={styles.actionText}>Cancel</Text>
                      </View>
                    </RectButton>
                  </>
                )
              : () => null
          }
          // onSwipeableClose={() => swipeableRefC.current?.close()}
          containerStyle={{width: '100%'}}>
          <View style={[styles.chatItem, {flexDirection: 'column', alignItems: 'stretch'}]}>
            <TouchableOpacity style={styles.chatItem}>
              <View style={styles.cardLeftContent}> 
                <View
                  style={[
                    styles.initialWrapper,
                    {backgroundColor: randomColor},
                  ]}>
                  <Text style={styles.initialText}>
                    {getInitials(item?.Owner?.name)}
                  </Text> 
                </View>
                <View>
                  <Text style={styles.chatName}>{item?.Event_Title}</Text>
                  {((userData?.userType == 'advisor_coach' &&
                    item?.Participants?.length > 0) ||
                    (userData?.userType != 'advisor_coach' &&
                      item?.Owner?.name != '')) && (
                    <Text style={styles.chatSubject}>
                      With{' '}
                      <Text style={{fontWeight: 'bold'}}>
                        {userData?.userType == 'advisor_coach'
                          ? item?.Participants?.map(
                              (participant: any) => participant.name,
                            ).join(', ')
                          : item?.Owner?.name}
                      </Text>
                    </Text>
                  )}
                </View>
              </View>
              <View
                style={[styles.cardRightContent, {flexDirection: 'column'}]}>
                <Text style={styles.hour}>{date}</Text>
                <Text style={styles.hour}>{time}</Text>
              </View>
            </TouchableOpacity>
            <MeetingDetails link={userData?.userType == 'advisor_coach' ? item['StartLink'] : item['JoinLink']} />
          </View>
        </Swipeable>
      </View>
    );
  };

  const onSubjectSelection = (subject: string) => {
    //console.log('subject selected', subject);
    setSubject(subject);
  };

  const coachList = () => {
    setModalVisible(false);
    navigation.navigate('CoachListPage', {subject});
  };

  return (
    <View style={styles.container}>
      {/* <DeletePopup
        key={deleteId}
        isVisible={isDeleteModalVisible}
        onDelete={deleteChat}
        onCancel={() => {
          setIsDeleteModalVisible(false);
          swipeableRefC.current?.close();
        }}
        id={deleteId}
      /> */}
      <SchedulePopup
        visible={scheduleVisible != ''}
        onClose={handlePopupClose}
        coachUrl={scheduleVisible}
      />
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CustomHeader name="Coach" type={1} />

      <NewChatModal
        visible={modalVisible}
        onClose={closeModal}
        onSelect={onSubjectSelection}
        coachList={coachList}
      />

      <WealthTab
        tabs={['Chat', 'Calls', 'Advice']}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
      <View style={styles.container}>
        {activeTab == 0 && (
          <View style={styles.chatContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.current}>Current</Text>
              {userData?.userType != 'advisor_coach' && (
                <Pressable style={styles.newChat} onPress={() => newChat()}>
                  <Image
                    style={styles.add_circle}
                    resizeMode="cover"
                    source={require('../assets/add-circle.png')}
                  />
                  <Text style={styles.newChatText}>New Chat</Text>
                </Pressable>
              )}
            </View>
            <FlatList
              data={chats}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
        )}

        {activeTab == 1 && (
          // <>
          //   <TouchableOpacity onPress={joinZoom}>
          //     <Text>Join zoom</Text>
          //   </TouchableOpacity>
          // </>
          <View style={styles.chatContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.current}>Opening Bookings</Text>
              {userData?.userType != 'advisor_coach' && (
                <Pressable
                  style={styles.newChat}
                  onPress={() => newChat('meeting')}>
                  <Image
                    style={styles.add_circle}
                    resizeMode="cover"
                    source={require('../assets/add-circle.png')}
                  />
                  <Text style={styles.newChatText}>New Calls</Text>
                </Pressable>
              )}
            </View>
            <FlatList
              data={processData(meetings)}
              keyExtractor={item => item.id}
              renderItem={callRenderItem}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionText: {
    fontSize: 10,
  },
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
    marginLeft: 15,
  },
  rescheduleButton: {
    width: 75,
  },
  trash: {
    width: 26,
    height: 26,
  },
  hour: {
    color: '#4b4b4b',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: FontFamily.outfitLight,
  },
  add_circle: {
    width: 20,
    height: 20,
  },
  newChat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  newChatText: {
    color: '#ef9f27',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FontFamily.sourceSerifPro,
  },
  current: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    fontFamily: FontFamily.sourceSerifPro,
  },
  cardRightContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  initialWrapper: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialText: {
    color: '#fff',
  },
  cardLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chatSubject: {
    fontFamily: FontFamily.outfitRegular,
    fontWeight: '400',
    fontSize: 14,
    color: '#4b4b4b',
  },
  chatContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 55,
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
    paddingHorizontal: 10,
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
    shadowColor: 'rgba(32, 34, 36, 0.08)',
    // alignSelf: "stretch",
    // overflow: "hidden",
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginVertical: 12,
    minHeight: 80,
  },
  chatName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    fontFamily: FontFamily.sourceSerifPro,
    flexWrap: 'nowrap',
    maxWidth: 180,
  },
});

export default ChatListScreen;
