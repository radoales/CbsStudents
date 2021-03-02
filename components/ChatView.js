import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

import store from '../store/store';
import * as constants from '../constants';

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
  const date = createddate.toDateString().substring(4, 15);

  const userName = props.message.user.name;

  let isNewDate = date == store.getState().date ? true : false;
  let isSameUser = userId == store.getState().userId ? true : false;

  store.dispatch({
    type: constants.MESSAGE_ADDED,
    payload: {
      date: date,
      userId: userId
    }
  });

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        alignSelf: 'center'
      }}>
        {!isNewDate ? (
          <Text style={{ color: 'grey', fontSize: 13, paddingBottom: 20, paddingTop: 20 }}>{date}</Text>
        ) : (<View />)}
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignSelf: flexPosition }}>
        {
          !isLoggedInUser && !isSameUser ? (
            <Image source={props.message.user.image} style={styles.imageIcon} />
          ) : <View style={styles.imageIcon} />
        }
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={block}>
            <Text style={textStyle}>
              {props.message.message}
            </Text>
          </View>
          {
            !isSameUser && !isLoggedInUser ? (
              <View style={timeReceivedPosition}>
                <Text style={styles.timeReceivedStyle}>
                  From {userName} - {receivedTime}
                </Text>
              </View>
            ) : isLoggedInUser ? (
              <View style={timeReceivedPosition}>
                <Text style={styles.timeReceivedStyle}>
                  {receivedTime}
                </Text>
              </View>
            ) : (<View />)
          }
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
    marginVertical: 2,
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
