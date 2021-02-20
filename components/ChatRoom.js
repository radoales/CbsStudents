import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatRoom = props => {
    const navigation = useNavigation();
    const isLastMessageRead = props.chatroom.chatMessages.map(m => m.isRead)[0];
    const createddate = props.chatroom.chatMessages.map(m => m.createdDate)[0];

    const receivedTime = createddate.getDate() === new Date().getDate() ? createddate.getHours() + ':' + createddate.getMinutes() 
    : createddate.toDateString();

    const isReadTextStyle = isLastMessageRead ? styles.chatTextRead : styles.chatTextUnread;
    const isReadMark = isLastMessageRead ? styles.dotRead : styles.dotUnread;
   
    let lastMessage = props.chatroom.chatMessages.map(m => m.message)[0];
    lastMessage = lastMessage.length >= 23 && !isLastMessageRead ? lastMessage.substring(0,23) + '...' 
    : isLastMessageRead && lastMessage.length >=25 ? lastMessage.substring(0,25) + '...'
    : lastMessage;
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        }}>
            <TouchableOpacity onPress={() => navigation.navigate("nameOfNavigationRouteEgMenu")}>
                <View style={styles.chatBlock} >
                    <Image source={{ uri: props.chatroom.chatImage }}
                        style={ styles.imageIcon} />
                    <View style={styles.column}>
                        <Text style={{ fontWeight: 'bold' }}>{props.chatroom.name}</Text>
                        <Text style={isReadTextStyle}>{lastMessage}</Text>
                    </View>
                    <View style={styles.endColumn}>
                        <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <View style={isReadMark}/>
                        </View>
                        <Text style={isReadTextStyle}>- {receivedTime}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    dotUnread: {
        backgroundColor: 'darkslateblue',
        height: 10,
        width: 10,
        borderRadius: 5,
        alignSelf: 'flex-end'
    },
    dotRead: {

        height: 10,
        width: 10,
        borderRadius: 5,
        alignSelf: 'flex-end'
    },
    chatBlock: {
        flexDirection: 'row',
        height: 50,
        padding: 10
    },
    chatTextUnread: {
        fontWeight: 'bold'
    },
    chatTextRead: {
        fontWeight: 'normal'
    },
    imageIcon: {
        width: 40,
         height: 40,
         borderRadius: 20,
          resizeMode: 'contain'
    },
    column :{
        flexDirection: 'column', 
        paddingLeft: 10
    },
    endColumn :{
        flex: 1,
        alignItems: 'flex-end'
    }
});

export default ChatRoom;