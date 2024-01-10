import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export const WebViewComponent = () => {
  return <WebView source={{ uri: 'https://calendly.com/testawebon1/' }} style={{ flex: 1 }} />;
}