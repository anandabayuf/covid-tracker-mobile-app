import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/Home-Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './src/components/App-Bar';
import { backgroundColor } from './src/utils/Color-Pallete';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './src/screens/About-Screen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AboutScreen />
  );
}