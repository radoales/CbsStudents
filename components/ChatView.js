import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from './../store/ChatActions';

const ChatView = ({ message }) => {
  const dispatch = useDispatch();
  //Get the Id of the owner of the message
  const userId = message.user.id;
  //Get the name of the user sending the message
  const userName = message.user.name;

  //Check if the owner of the message is the authenticated User
  //'1' should be replaced with the authenticated user
  const isAuthUser = userId == 1;

  //const flexPosition = isAuthUser ? 'flex-end' : 'flex-start';

  //The position of the time the message was received
  const timeReceivedPosition = isAuthUser
    ? styles.timeReceivedRight
    : styles.timeReceivedLeft;

  //The position of the message block
  const messageBlock = isAuthUser ? styles.chatBoxRight : styles.chatBoxLeft;

  //Get the date of the message
  const createddate = message.createdDate;

  //Format the receiving time of the message <- hh:mm ->
  const receivedTime = createddate.getHours() + ':' + createddate.getMinutes();

  //The style of the message text
  const textStyle = isAuthUser ? styles.textRight : styles.textLeft;

  //Format the created date <- mmm dd yyyy ->
  const date = createddate.toDateString().substring(4, 15);

  //Check if the message has a different date than the prevoius one
  //  let isNewDate = date == useSelector(state => state.chat.lastMessageDate) ? true : false;

  //Check if the message has a different userId then the prevoius one
  //  let isSameUser = userId == useSelector(state => state.chat.lastMessageUserId) ? true : false;
  let isNewDate = true;
  let isSameUser = false;

  dispatch(addMessage(date, userId));

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        alignSelf: 'center'
      }}>

        {/* If the date of the current message is different than the previous one, display it */}
        {!isNewDate ? (
          <Text style={{ color: 'grey', fontSize: 13, paddingBottom: 20, paddingTop: 20 }}>{date}</Text>
        ) : (<View />)}
      </View>
      <View style={{ flex: 1, flexDirection: 'row', /*alignSelf: flexPosition*/ }}>

        {/* If User is the authenticated user and not the same as the previous message, display profile image */}
        {
          !isAuthUser && !isSameUser ? (
            <Image source={message.user.image} style={styles.imageIcon} />
          ) : <View style={styles.imageIcon} />
        }
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={messageBlock}>
            <Text style={textStyle}>
              {message.message}
            </Text>
          </View>

          {/* If User is not the Authenticated User and is not the same as previous message, display userName and time */}
          {
            !isAuthUser && !isSameUser ? (
              <View style={timeReceivedPosition}>
                <Text style={styles.timeReceivedStyle}>
                  From {userName} - {receivedTime}
                </Text>
              </View>

              //If user is the Athenticated user, display only time
            ) : isAuthUser ? (
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
