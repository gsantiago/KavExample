import React, {useState} from 'react';
import {View, TextInput, Image, StyleSheet, Text} from 'react-native';

export interface InputProps {
  onSubmit: (message: string) => void;
}

export function Input({onSubmit}: InputProps) {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={() => {
          onSubmit(message);
          setMessage('');
        }}
      />
      <View style={styles.buttons}>
        <Image
          source={require('../assets/image-regular.png')}
          style={styles.icon}
        />
        <Image
          source={require('../assets/face-smile-regular.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 2,
    borderTopColor: '#ddd',
  },
  input: {
    backgroundColor: '#f6f6f6',
    borderRadius: 100,
    paddingHorizontal: 16,
    fontSize: 16,
    height: 45,
  },
  buttons: {
    position: 'absolute',
    alignItems: 'center',
    right: 32,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#969899',
  },
});
