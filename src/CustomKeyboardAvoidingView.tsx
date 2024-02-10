import {ViewProps} from 'react-native';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';

export function CustomKeyboardAvoidingView({
  children,
}: ViewProps & {offset?: number}) {
  const keyboard = useAnimatedKeyboard();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      paddingBottom: keyboard.height.value,
    };
  });

  return (
    <Animated.View style={[animatedStyle, {flex: 1}]}>{children}</Animated.View>
  );
}
