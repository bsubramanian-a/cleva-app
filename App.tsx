/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/Navigations/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store';
import CustomFlashMessageProvider from './src/components/CustomFlashMessage';
//import ChatProvider from './src/providers/ChatProvider';
import { LogBox } from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // return (
  //   <Provider store={store}>
  //     <CustomFlashMessageProvider>
  //       <ChatProvider>
  //         <NavigationContainer>           
  //             <Routes />
  //         </NavigationContainer>
  //       </ChatProvider>
  //     </CustomFlashMessageProvider>
  //   </Provider>
  // );
  return (
    <Provider store={store}>
      <CustomFlashMessageProvider>
        <NavigationContainer>           
            <Routes />
        </NavigationContainer>
      </CustomFlashMessageProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
