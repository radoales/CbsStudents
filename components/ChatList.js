/* eslint-disable consistent-return */
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { chatListStyles } from '../StyleSheets/Shared'
import { app } from '../firebase'

import { setUpdateActiveChatRoom } from '../store/actions/ChatActions'

const EmptyChat = ({ handleNavigation, image, name }) => (
  <View>
    <TouchableOpacity onPress={handleNavigation}>
      <View style={chatListStyles.chatBlock}>
        <Image source={{ uri: image }} style={chatListStyles.imageIcon} />
        <View style={chatListStyles.column}>
          <Text style={{ fontWeight: 'bold' }}>{name}</Text>
        </View>
        <View style={chatListStyles.endColumn}>
          <Text>New message</Text>
        </View>
      </View>
    </TouchableOpacity>
    <View style={{ height: 10 }} />
  </View>
)

const ChatList = ({ chatroom, index }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const authUserId = useSelector((state) => state.user.loggedInUser)
  let chatroomName
  let chatroomPicture

  // Set the name of the chatroom. Each chatromm has two users
  // the name of the room should not be the name of the auth user, but the other
  chatroom.users?.forEach((u) => {
    if (u.id !== authUserId.id) {
      chatroomName = u.name
      chatroomPicture = u.image
    }
  })

  const handleNavigation = () => {
    dispatch(setUpdateActiveChatRoom(chatroom.id))
    // const lastMessage = chatroom.chatMessages[chatroom.chatMessages?.length - 1]
    // db.ref(`chatrooms/${chatroom.id}/chatMessages/${lastMessage.id}`).update({
    //   isRead: true,
    // })
    navigation.navigate('ChatRoomScreen', { name: chatroomName })
  }
  if (!chatroom) {
    return (
      <View>
        <Text>No chat rooms</Text>
      </View>
    )
  }
  // Get the array of chatmessages from the props
  const { chatMessages } = chatroom

  if (!chatMessages?.length) {
    return (
      <EmptyChat
        handleNavigation={handleNavigation}
        image={chatroomPicture}
        name={chatroomName}
      />
    )
  }
  // Get the last message
  const lastMessage = chatMessages[chatMessages?.length - 1]
  // const lastMessage = chatMessages[0]

  // Get the last message user Id
  const lastMessageUserId = chatMessages?.map((m) => m.user?.id ?? '')[
    chatMessages.length - 1
  ]
  // const lastMessageUserId = chatMessages[0].user?.id ?? ''
  // Check if user is the auth user
  const isAuthUser = lastMessageUserId === authUserId

  // Check if the last message was marked as read and not sent from the auth user
  const isLastMessageRead = !(lastMessage?.isRead === false && !isAuthUser)

  const lasteMessageDate = new Date(lastMessage.createdDate)

  // Format received time/date. If date is today, display <- hh:mm ->, if not display <- mmm dd ->
  const receivedTime =
    lasteMessageDate.getDate() === new Date().getDate()
      ? `${lasteMessageDate.getHours()}:${lasteMessageDate.getMinutes()}`
      : lasteMessageDate.toDateString().substring(4, 11)

  // Set style for the message if is read or not
  const isReadTextStyle = isLastMessageRead
    ? chatListStyles.chatTextRead
    : chatListStyles.chatTextUnread

  // Display the mark if a message is unread
  const isReadMark = isLastMessageRead
    ? chatListStyles.dotRead
    : chatListStyles.dotUnread

  let lastMessageText = lastMessage.message

  // // Display a part of the last message
  lastMessageText =
    lastMessageText.length >= 30 && !isLastMessageRead
      ? `${lastMessageText.substring(0, 30)}...`
      : isLastMessageRead && lastMessageText.length >= 32
      ? `${lastMessageText.substring(0, 32)}...`
      : lastMessageText

  return (
    <View style={styles.chatList}>
      <TouchableOpacity onPress={handleNavigation}>
        <View style={chatListStyles.chatBlock}>
          <Image
            source={{ uri: chatroomPicture }}
            style={chatListStyles.imageIcon}
          />
          <View style={chatListStyles.column}>
            <Text style={{ fontWeight: 'bold' }}>{chatroomName}</Text>
            <Text style={isReadTextStyle}>{lastMessageText}</Text>
          </View>
          <View style={chatListStyles.endColumn}>
            <View style={{ paddingBottom: 5, paddingTop: 5 }}>
              <View style={isReadMark} />
            </View>
            <Text style={isReadTextStyle}>- {receivedTime}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ height: 10 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  chatList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})

export default ChatList
