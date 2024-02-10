import React from 'react';
import {WebView} from 'react-native-webview';

export function WebChat() {
  return (
    <WebView source={{uri: 'http://192.168.18.226:3000'}} style={{flex: 1}} />
  );
}
