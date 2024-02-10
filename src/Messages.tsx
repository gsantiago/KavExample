import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

export type MessageType = {
  body: string;
  from: string;
};

export interface MessagesProps {
  messages: MessageType[];
}

export function Messages({messages}: MessagesProps) {
  return (
    <FlatList<MessageType>
      inverted
      style={styles.list}
      contentContainerStyle={styles.container}
      data={messages}
      renderItem={({item}) => {
        return (
          <View style={styles.item}>
            <View
              style={[
                styles.message,
                item.from === 'user' ? styles.messageUser : styles.messageGuest,
              ]}>
              <Text
                style={[
                  styles.messageText,
                  item.from === 'user'
                    ? styles.messageTextUser
                    : styles.messageTextGuest,
                ]}>
                {item.body}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  item: {
    marginVertical: 16,
  },
  message: {
    padding: 12,
    borderRadius: 15,
  },
  messageUser: {
    alignSelf: 'flex-end',
    backgroundColor: '#0347e5',
  },
  messageGuest: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  messageText: {
    fontSize: 16,
  },
  messageTextUser: {
    color: '#fff',
  },
  messageTextGuest: {
    color: '#363636',
  },
});
