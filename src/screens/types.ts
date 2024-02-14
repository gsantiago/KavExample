import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface DemoScreenProps {
  type:
    | 'useKeyboardHeight'
    | 'KeyboardAvoidingView'
    | 'useAnimatedKeyboard'
    | 'KeyboardAwareScrollView';
  content: 'chat' | 'webview' | 'form';
  hasHeader: boolean;
  behavior: 'padding' | 'position' | 'height';
}

type RootStackParamList = {
  Index: undefined;
  Demo: DemoScreenProps;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
