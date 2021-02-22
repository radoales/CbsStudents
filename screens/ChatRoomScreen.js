import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { comonStyles } from '../StyleSheets/Shared';
import Home from '../screens/Home';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ChatRoomScreen = props => {
   return (
      <View
         style={comonStyles.titleBox}>
         <Text style={comonStyles.titleText}>chatroom</Text>
      </View>
   );
}

const styles = StyleSheet.create({

});

export default ChatRoomScreen;