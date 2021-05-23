import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { mainColor, mainColorInactive } from '../constants'

import CBSChatList from './CBSChatList'
import MyChatList from './MyChatList'
import NewChatroomScreen from './NewChatroomScreen'

const Tab = createMaterialTopTabNavigator()

const Chat = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: mainColor,
        inactiveTintColor: 'gray',
        labelStyle: styles.tabLabels,
      }}
    >
      <Tab.Screen name="Robert Jacobsen" component={CBSChatList} />
      {/* <Tab.Screen name="CBS Surf" component={MyChatList} /> */}
      <Tab.Screen name="New Chatroom" component={NewChatroomScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabLabels: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Al Nile' : 'monospace',
    textTransform: 'none',
  },
})

export default Chat
