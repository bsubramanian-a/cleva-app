// ChatProvider.tsx

import React, { createContext, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StreamChat, User } from 'stream-chat';

const API_KEY = '74hmm5v7ubs2';

const client = StreamChat.getInstance(API_KEY);

client.on(event => {
  console.log('Received an event on client - ', event);
});

// Create a context for the ChatProvider
const ChatContext = createContext(client);

// Custom hook to access the ChatContext
export const useChatClient = () => useContext(ChatContext);

const ChatProvider: React.FC = ({ children }: any) => {
  const userData = useSelector((state: any) => state?.auth?.userData?.user);
  const token = useSelector((state: any) => state?.auth?.userData?.token);

  useEffect(() => {
    const user: User = {
      id: userData?.id,
      name: userData?.name,
      image: '',
    };

    const USER_TOKEN = userData?.streamToken;
    // console.log("USER_TOKEN", USER_TOKEN);

    if (user?.id && user?.name && token) connectChatClient(user, USER_TOKEN);
  }, [userData]);

  async function connectChatClient(user: User, USER_TOKEN: string) {
    await client.connectUser(
      {
        id: user.id,
        name: user.name,
        image: user.image,
      },
      USER_TOKEN,
    );
  }

  return <ChatContext.Provider value={client}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
