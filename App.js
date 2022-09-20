import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/Home-Screen';
import NavBar from './src/components/Nav-Bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './src/components/App-Bar';
import { backgroundColor } from './src/utils/Color-Pallete';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: (props) => <AppBar {...props} />, headerBackground: backgroundColor }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}