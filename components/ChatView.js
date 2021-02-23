import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import { comonStyles, chatListStyles } from '../StyleSheets/Shared';

const ChatView = (props) => {
  const userId = props.message.user.id;

  const isLoggedInUser = userId == 1;

  const flexPosition = isLoggedInUser ? 'flex-end' : 'flex-start';
  const timeReceivedPosition = isLoggedInUser
    ? styles.timeReceivedRight
    : styles.timeReceivedLeft;

  const block = isLoggedInUser ? styles.chatBoxRight : styles.chatBoxLeft;
  const createddate = props.message.createdDate;
  const receivedTime = createddate.getHours() + ':' + createddate.getMinutes();
  const textStyle = isLoggedInUser ? styles.textRight : styles.textLeft;

  const userName = props.message.user.name;

  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row', alignSelf: flexPosition }}>
      {!isLoggedInUser ? (
        <Image source={props.message.user.image} style={styles.imageIcon} />
        ) : <View/> }
        
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={block}>
            <Text style={textStyle}>
              {props.message.message} : {userId}
            </Text>
          </View>
          <View style={timeReceivedPosition}>
            <Text style={styles.timeReceivedStyle}>
              From {userName} - {receivedTime}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBoxRight: {
    backgroundColor: 'darkslateblue',
    padding: 10,
    width: 250,
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: 'flex-end',
    borderBottomEndRadius: 3,
    borderBottomStartRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  chatBoxLeft: {
    backgroundColor: '#D9D9D9',
    width: 250,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomStartRadius: 3,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  textRight: {
    fontSize: 14,
    color: 'white',
  },
  textLeft: {
    fontSize: 14,
    color: 'black',
  },
  timeReceivedStyle: {
    color: 'grey',
    alignSelf: 'flex-end',
    fontSize: 10
  },
  timeReceivedRight: {
    alignSelf: 'flex-end',
    paddingRight: 20
  },
  timeReceivedLeft: {
    alignSelf: 'flex-start',
    paddingLeft: 20
  },
  imageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
});

export default ChatView;
