/* eslint-disable consistent-return */
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { chatListStyles } from '../StyleSheets/Shared'

import { setUpdateActiveChatRoom } from '../store/actions/ChatActions'

const EmptyChat = ({ handleNavigation, image, name }) => (
  <View>
    <TouchableOpacity onPress={handleNavigation}>
      <View style={chatListStyles.chatBlock}>
        <Image source={image} style={chatListStyles.imageIcon} />
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

  const handleNavigation = () => {
    dispatch(setUpdateActiveChatRoom(chatroom.id))
    navigation.navigate('ChatRoomScreen', { name: chatroom.name })
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
        image={chatroom.chatImage}
        name={chatroom.name}
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
  const isAuthUser = lastMessageUserId === '1'

  // Check if the last message was marked as read and not sent from the auth user
  const isLastMessageRead = !(lastMessage?.isRead === false && !isAuthUser)

  const lasteMessageDate = new Date(lastMessage.createdDate)

  // Format received time/date. If date is today, display <- hh:mm ->, if not display <- mmm dd ->
  const receivedTime =
    lasteMessageDate.getDate() === new Date().getDate()
      ? `${lasteMessageDate.getHours()}:${lasteMessageDate.getMinutes()}`
      : lasteMessageDate.toDateString().substring(4, 10)

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
          <Image source={chatroom.chatImage} style={chatListStyles.imageIcon} />
          <View style={chatListStyles.column}>
            <Text style={{ fontWeight: 'bold' }}>{chatroom.name}</Text>
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
