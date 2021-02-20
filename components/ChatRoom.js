import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatRoom = props => {
    const navigation = useNavigation();
    const isReadTextStyle = props.chatroom.chatMessages.map(m => m.isRead)[0] ? styles.chatTextRead : styles.chatTextUnread;
    const isReadMark = props.chatroom.chatMessages.map(m => m.isRead)[0] ? styles.dotRead : styles.dotUnread;
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
                        <Text style={isReadTextStyle}>{props.chatroom.chatMessages.map(m => m.message)[0]}</Text>
                    </View>
                    <View style={styles.column}>
                        <View style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <View style={isReadMark}/>
                        </View>
                        <Text style={isReadTextStyle}>- {props.chatroom.chatMessages.map(m => m.createdDate.getHours())[0]}:{props.chatroom.chatMessages.map(m => m.createdDate.getMinutes())[0]}</Text>
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
    }
});

export default ChatRoom;