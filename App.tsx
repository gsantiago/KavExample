import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IndexScreen} from './src/screens/IndexScreen';
import {DemoScreen} from './src/screens/DemoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Demo"
          component={DemoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
