import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { CHATROOM } from './../data/dummy-data';
import CBSChatRooms from './CBSChatRooms';
import MyChatRooms from './MyChatRooms';
import comonStyles from '../StyleSheets/Shared';

const Tab = createMaterialTopTabNavigator();

const Chat = () => {
    console.log(CHATROOM);
    return (
        <View style={styles.room}>
            <View
                style={comonStyles.titleBox}>
                <Text style={comonStyles.titleText}>Chat</Text>
                <Ionicons name='create-outline'></Ionicons>
            </View>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: 'darkslateblue',
                inactiveTintColor: 'gray',
                labelStyle: styles.tabLabels
            }} >
                <Tab.Screen name="Robert Jacobsen" component={CBSChatRooms} />
                <Tab.Screen name="CBS Surf" component={MyChatRooms} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "darkslateblue",
        fontSize: 20,
        fontFamily: 'monospace' 
    },
    titleBox: {
        height: 30,
        backgroundColor: "white"
    },
    tabLabels:{
        fontWeight: 'bold',
        fontSize: 15,
         fontFamily: 'monospace',
         textTransform:'none'
    }
});

export default Chat;