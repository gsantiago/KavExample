import {View, Text} from 'react-native';

export const HEADER_HEIGHT = 75;

export const Header = () => (
  <>
    <View
      style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
      }}>
      <Text style={{fontSize: 18, color: '#fff'}}>Header</Text>
    </View>
  </>
);
