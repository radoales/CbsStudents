import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CBSChatList from './CBSChatList';
import MyChatList from './MyChatList';


const Tab = createMaterialTopTabNavigator();

const Chat = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'darkslateblue',
            inactiveTintColor: 'gray',
            labelStyle: styles.tabLabels
        }} >
            <Tab.Screen name="Robert Jacobsen" component={CBSChatList} />
            <Tab.Screen name="CBS Surf" component={MyChatList} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabLabels: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily:  Platform.OS === 'ios'? 'Al Nile' : 'monospace' ,
        textTransform: 'none'
    }
});

export default Chat;