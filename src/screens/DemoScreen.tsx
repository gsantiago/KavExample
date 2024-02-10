import {
  View,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {useKeyboardHeight} from '../useKeyboardHeight';
import {ScreenProps, DemoScreenProps} from './types';
import {Chat} from '../Chat';
import {HEADER_HEIGHT, Header} from '../Header';
import {CustomKeyboardAvoidingView} from '../CustomKeyboardAvoidingView';
import {WebChat} from '../WebChat';

export function DemoScreen({route: {params}}: ScreenProps<'Demo'>) {
  if (params.type === 'useKeyboardHeight') {
    return <KeyboardHeight {...params} />;
  }

  if (params.type === 'KeyboardAvoidingView') {
    return <Kav {...params} />;
  }

  if (params.type === 'useAnimatedKeyboard') {
    return <AnimatedKav {...params} />;
  }

  return null;
}

const KeyboardHeight = (params: DemoScreenProps) => {
  const height = useKeyboardHeight();
  const window = useWindowDimensions();

  const content = (
    <>
      {params.hasHeader && <Header />}
      {params.content === 'chat' ? <Chat /> : <WebChat />}
    </>
  );

  if (params.behavior === 'padding') {
    return (
      <View style={[styles.screen, {paddingBottom: height}]}>{content}</View>
    );
  }

  if (params.behavior === 'position') {
    return (
      <View style={styles.screen}>
        <View style={[styles.screen, {bottom: height}]}>{content}</View>
      </View>
    );
  }

  if (params.behavior === 'height') {
    return (
      <View style={styles.screen}>
        <View style={[{flex: 0}, {height: window.height - height}]}>
          {content}
        </View>
      </View>
    );
  }

  return null;
};

const Kav = (params: DemoScreenProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={params.behavior}
      contentContainerStyle={{flex: 1}}
      keyboardVerticalOffset={params.hasHeader ? HEADER_HEIGHT : 0}>
      {params.hasHeader && <Header />}
      {params.content === 'chat' ? <Chat /> : <WebChat />}
    </KeyboardAvoidingView>
  );
};

const AnimatedKav = (params: DemoScreenProps) => {
  if (params.behavior !== 'padding') return null;

  return (
    <CustomKeyboardAvoidingView style={styles.screen}>
      {params.hasHeader && <Header />}
      {params.content === 'chat' ? <Chat /> : <WebChat />}
    </CustomKeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
