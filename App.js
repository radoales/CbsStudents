import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {comonStyles} from './StyleSheets/Shared';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Discover from './screens/Discover';
import Chat from './screens/Chat';
import Menu from './screens/Menu';
import ChatRoomScreen from './screens/ChatRoomScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Chat" component={Chat}
        options={{
          title: 'Chat',
          headerStyle: comonStyles.titleBox,
          headerTitleStyle: comonStyles.titleText,
        }} />
      <Stack.Screen  name="ChatRoomScreen" component={ChatRoomScreen}
         options={{
          headerStyle: comonStyles.titleBox,
          headerTitleStyle: comonStyles.titleText,
        }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home' : 'home-outline';
            } else if (route.name === 'Discover') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'darkslateblue',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Chat" component={StackNavigator} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
