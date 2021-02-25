import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { chatListStyles } from '../StyleSheets/Shared';

const ChatList = props => {
    const navigation = useNavigation();
    const isLastMessageRead = props.chatroom.chatMessages.map(m => m.isRead)[0];
    const createddate = props.chatroom.chatMessages.map(m => m.createdDate)[0];

    const receivedTime = createddate.getDate() === new Date().getDate() ? createddate.getHours() + ':' + createddate.getMinutes()
        : createddate.toDateString().substring(4, 10);

    const isReadTextStyle = isLastMessageRead ? chatListStyles.chatTextRead : chatListStyles.chatTextUnread;
    const isReadMark = isLastMessageRead ? chatListStyles.dotRead : chatListStyles.dotUnread;

    let lastMessage = props.chatroom.chatMessages.map(m => m.message)[0];
    lastMessage = lastMessage.length >= 23 && !isLastMessageRead ? lastMessage.substring(0, 23) + '...'
        : isLastMessageRead && lastMessage.length >= 25 ? lastMessage.substring(0, 25) + '...'
            : lastMessage;
    return (
        <View style={styles.chatList}>
            <TouchableOpacity onPress={() => navigation.navigate('ChatRoomScreen', { chatRoom: props.chatroom }
            )}
            >
                <View style={chatListStyles.chatBlock} >
                    <Image source={props.chatroom.chatImage}
                        style={chatListStyles.imageIcon} />
                    <View style={chatListStyles.column}>
                        <Text style={{ fontWeight: 'bold' }}>{props.chatroom.name}</Text>
                        <Text style={isReadTextStyle}>{lastMessage}</Text>
                    </View>
                    <View style={chatListStyles.endColumn}>
                        <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <View style={isReadMark} />
                        </View>
                        <Text style={isReadTextStyle}>- {receivedTime}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ height: 10 }}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    chatList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    }
});

export default ChatList;