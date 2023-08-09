/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/Navigations/Routes';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import CustomFlashMessageProvider from './src/components/CustomFlashMessage';
import ChatProvider from './src/providers/ChatProvider';
import { ZoomVideoSdkProvider, useZoom,  EventType } from '@zoom/react-native-videosdk';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <CustomFlashMessageProvider>
        <ChatProvider>
          <NavigationContainer>
            <ZoomVideoSdkProvider
              config={{
              appGroupId: '{Your Apple Group ID here}',
              domain: 'zoom.us',
              enableLog: true,
            }}>
              <Routes />
            </ZoomVideoSdkProvider>
          </NavigationContainer>
        </ChatProvider>
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
