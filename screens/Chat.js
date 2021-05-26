import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { mainColor, mainColorInactive } from '../constants'

import ActiveChatsScreen from './ActiveChatsScreen'
import Contacts from './Contacts'

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
      <Tab.Screen name="Active Chats" component={ActiveChatsScreen} />
      <Tab.Screen name="Contacts" component={Contacts} />
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
