import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/Home-Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './src/components/App-Bar';
import { backgroundColor, otherColor, textSecondary } from './src/utils/Color-Pallete';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './src/screens/About-Screen';
import DetailScreen from './src/screens/Detail-Screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator 
          useLegacyImplementation 
          initialRouteName="Home"
          screenOptions={{
            drawerStyle: {
              backgroundColor: backgroundColor,
              width: 240,
            },
            drawerActiveBackgroundColor: otherColor,
            drawerActiveTintColor: textSecondary,
            drawerInactiveTintColor: textSecondary
          }}
        >
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              header: (props) => <AppBar {...props} />, headerBackground: backgroundColor
            }}
          />
          <Drawer.Screen 
            name="Detail" 
            component={DetailScreen} 
            options={{ 
              header: (props) => <AppBar {...props} />, headerBackground: backgroundColor
            }}
          />
          <Drawer.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ 
            header: (props) => <AppBar {...props} />, headerBackground: backgroundColor
          }}
        />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}