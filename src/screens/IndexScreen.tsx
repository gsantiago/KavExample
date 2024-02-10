import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet} from 'react-native';
import {ScreenProps, DemoScreenProps} from './types';

export function IndexScreen({navigation}: ScreenProps<'Index'>) {
  const push = (options: DemoScreenProps) => () =>
    navigation.navigate('Demo', options);

  return (
    <ScrollView contentContainerStyle={{padding: 20, gap: 40}}>
      <Text style={styles.title}>ChatApp</Text>
      <View style={styles.section}>
        <Text style={styles.heading}>useKeyboardHeight</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'padding',
            content: 'chat',
            hasHeader: false,
          })}
        />
        <Button
          title="Estratégia Position"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'position',
            content: 'chat',
            hasHeader: false,
          })}
        />
        <Button
          title="Estratégia Height"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'height',
            content: 'chat',
            hasHeader: false,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>KeyboardAvoidingView</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'padding',
            content: 'chat',
            hasHeader: false,
          })}
        />
        <Button
          title="Estratégia Position"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'position',
            content: 'chat',
            hasHeader: false,
          })}
        />
        <Button
          title="Estratégia Height"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'height',
            content: 'chat',
            hasHeader: false,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>useAnimatedKeyboard</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'useAnimatedKeyboard',
            behavior: 'padding',
            content: 'chat',
            hasHeader: false,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Header + useKeyboardHeight</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'padding',
            content: 'chat',
            hasHeader: true,
          })}
        />
        <Button
          title="Estratégia Position"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'position',
            content: 'chat',
            hasHeader: true,
          })}
        />
        <Button
          title="Estratégia Height"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'height',
            content: 'chat',
            hasHeader: true,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Header + KeyboardAvoidingView</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'padding',
            content: 'chat',
            hasHeader: true,
          })}
        />
        <Button
          title="Estratégia Position"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'position',
            content: 'chat',
            hasHeader: true,
          })}
        />
        <Button
          title="Estratégia Height"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'height',
            content: 'chat',
            hasHeader: true,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Header + useAnimatedKeyboard</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'useAnimatedKeyboard',
            behavior: 'padding',
            content: 'chat',
            hasHeader: true,
          })}
        />
      </View>
      <Text style={styles.title}>WebView</Text>
      <View style={styles.section}>
        <Text style={styles.heading}>useKeyboardHeight</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'padding',
            content: 'webview',
            hasHeader: false,
          })}
        />
        <Button
          title="Estratégia Position"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'position',
            content: 'webview',
            hasHeader: false,
          })}
        />
        <Button
          title="Estratégia Height"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'height',
            content: 'webview',
            hasHeader: false,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>KeyboardAvoidingView</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'padding',
            content: 'webview',
            hasHeader: false,
          })}
        />
        <Button
          title="Estratégia Position"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'position',
            content: 'webview',
            hasHeader: false,
          })}
        />
        <Button
          title="Estratégia Height"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'height',
            content: 'webview',
            hasHeader: false,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>useAnimatedKeyboard</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'useAnimatedKeyboard',
            behavior: 'padding',
            content: 'webview',
            hasHeader: false,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Header + useKeyboardHeight</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'padding',
            content: 'webview',
            hasHeader: true,
          })}
        />
        <Button
          title="Estratégia Position"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'position',
            content: 'webview',
            hasHeader: true,
          })}
        />
        <Button
          title="Estratégia Height"
          onPress={push({
            type: 'useKeyboardHeight',
            behavior: 'height',
            content: 'webview',
            hasHeader: true,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Header + KeyboardAvoidingView</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'padding',
            content: 'webview',
            hasHeader: true,
          })}
        />
        <Button
          title="Estratégia Position"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'position',
            content: 'webview',
            hasHeader: true,
          })}
        />
        <Button
          title="Estratégia Height"
          onPress={push({
            type: 'KeyboardAvoidingView',
            behavior: 'height',
            content: 'webview',
            hasHeader: true,
          })}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Header + useAnimatedKeyboard</Text>
        <Button
          title="Estratégia Padding"
          onPress={push({
            type: 'useAnimatedKeyboard',
            behavior: 'padding',
            content: 'webview',
            hasHeader: true,
          })}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 20,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
});
