import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupChats from './CBSChatRooms';

const Tab = createMaterialTopTabNavigator();

const Home = props => {
   return (
      <View>
         <Text>Hi, I am the Home Screen</Text>
         <Button title="Don't click me"></Button>
      </View>
   );
}

const styles = StyleSheet.create({

});

export default Home;