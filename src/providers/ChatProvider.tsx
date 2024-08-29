// ChatProvider.tsx

import React, { createContext, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StreamChat, User } from 'stream-chat';

const API_KEY = 'wqbhczcmweqc';

const client = StreamChat.getInstance(API_KEY);

// client.on(event => {
//   console.log('Received an event on client - ', event);
// });

// Create a context for the ChatProvider
const ChatContext = createContext(client);

// Custom hook to access the ChatContext
export const useChatClient = () => useContext(ChatContext);

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }: any) => {
  const userData = useSelector((state: any) => state?.auth?.userData?.user);
  const token = useSelector((state: any) => state?.auth?.userData?.token);
  // console.log("userData.......................", userData, token);

  // useEffect(() => {
  //   const user: User = {
  //     id: userData?.id,
  //     name: userData?.name,
  //     image: '',
  //   };

  //   const USER_TOKEN = userData?.streamToken;
  //   // console.log("USER_TOKEN", USER_TOKEN);

  //   if (user?.id && user?.name && token) connectChatClient(user, USER_TOKEN);
  // }, [userData]);

  // useEffect(() => {
  //   if (userData) {
  //     const { id, name, streamToken } = userData;
  //     if (id && name && streamToken) {
  //       // Disconnect the current user before connecting the new user
  //       client.disconnectUser()
  //         .then(() => {
  //           // Attempt to connect the new user
  //           connectChatClient({
  //             id,
  //             name,
  //             image: '', // You can add the user's image here if available
  //           }, streamToken);
  //         })
  //         .catch((error) => {
  //           console.error('Error disconnecting user:', error);
  //           // Handle the disconnection error
  //         });
  //     } else {
  //       console.error('Missing user data. Cannot connect to chat.');
  //     }
  //   }
  // }, [userData]);  


  useEffect(() => {
    if (userData) {
      const { id, name, streamToken } = userData;
      if (id && name && streamToken) {
        // Check if the user is already connected
        if (client.user && client.user.id === id) {
          console.log('User is already connected.');
          // Disconnect the current user before connecting the new user
          client.disconnectUser()
          .then(() => {
            console.log('User disconnected successfully');
            // Attempt to connect the new user
            connectChatClient({
              id,
              name,
              image: '', // You can add the user's image here if available
            }, streamToken);
          })
          .catch((error) => {
            console.error('Error disconnecting user:', error);
            // Handle the disconnection error
          });
          return; // No need to disconnect or reconnect, as the user is already connected.
        }
        connectChatClient({
          id,
          name,
          image: '', // You can add the user's image here if available
        }, streamToken);
      } else {
        console.error('Missing user data. Cannot connect to chat.');
      }
    }
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
