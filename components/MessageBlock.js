import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { addMessage } from '../store/actions/ChatActions'
import { mainColor, mainColorInactive } from '../constants'

const MessageBlock = ({ message }) => {
  const dispatch = useDispatch()
  const store = useStore()
  const loggedInuserId = useSelector((state) => state.user.loggedInUser.id)

  // Get the Id of the owner of the message
  const userId = message.user.id

  // Check if the owner of the message is the authenticated User
  const isAuthUser = userId === loggedInuserId

  // Set the color of the time in the message block
  const timeReceivedTextColor = isAuthUser ? 'white' : 'black'

  // The position of the message block
  const messageBlock = isAuthUser ? styles.chatBoxRight : styles.chatBoxLeft

  // Get the date of the message
  const createddate = new Date(message.createdDate)

  // Format the receiving time of the message <- hh:mm ->
  const receivedTime = `${createddate.getHours()}:${createddate.getMinutes()}`

  // The style of the message text
  const textStyle = isAuthUser ? styles.textRight : styles.textLeft

  // Format the created date <- mmm dd yyyy ->
  let date = createddate.toDateString().substring(4, 15)

  // Check if the message has a different date than the prevoius one
  const isNewDate = date !== store.getState().chat.prevMessageDate

  // Check if the message has a different userId then the prevoius one
  const isSameUser = userId === store.getState().chat.prevMessageUserId
  dispatch(addMessage(date, userId))
  date = date === new Date().toDateString().substring(4, 15) ? 'Today' : date
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}
      >
        {/* If the date of the current message is different than the previous one, display it */}
        {isNewDate ? (
          <Text
            style={{
              color: 'grey',
              fontSize: 13,
              paddingBottom: 20,
              paddingTop: 20,
            }}
          >
            {date}
          </Text>
        ) : (
          <View />
        )}
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {/* If User is the auth user and not the same as the previous message, display profile image */}
        {!isAuthUser && !isSameUser ? (
          <Image
            source={{ uri: message.user.image }}
            style={styles.imageIcon}
          />
        ) : (
          <View style={styles.imageIcon} />
        )}
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={messageBlock}>
            <Text style={textStyle}>{message.message}</Text>
            <Text
              style={{
                color: timeReceivedTextColor,
                alignSelf: 'flex-end',
                fontSize: 10,
              }}
            >
              {receivedTime}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chatBoxRight: {
    backgroundColor: mainColor,
    padding: 10,
    // width: 260,
    maxWidth: 250,
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
    // width: 260,
    maxWidth: 250,
    padding: 10,
    alignSelf: 'flex-start',
    marginVertical: 2,
    // marginHorizontal: 2,
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
    alignSelf: 'flex-end',
    fontSize: 10,
  },
  imageIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 8,

    borderRadius: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
})

export default MessageBlock
