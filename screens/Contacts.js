/* eslint-disable global-require */
import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import ButtonBox from '../components/ButtonBox'
import { setUpdateActiveChatRoom } from '../store/actions/ChatActions'
import { app } from '../firebase'

const Contacts = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { users, loggedInUser } = useSelector((state) => state.user)
  const { chatrooms } = useSelector((state) => state.chat)

  // Navigate to an existing or create a new chatroom
  const handleNavigation = ({ user }) => {
    let roomExist = false
    let roomId
    const chats = Object.values(chatrooms)

    // Check if chatroom with that user already exists
    chats.forEach((chatroom) => {
      if (chatroom.users?.some((x) => x.id === user.id)) {
        roomExist = true
        roomId = chatroom.id
      }
    })

    // If chatroom exists, set it as the active chatroom and navigate to it
    if (roomExist) {
      dispatch(setUpdateActiveChatRoom(roomId))
      navigation.navigate('ChatRoomScreen', {
        name: `${user.name}`,
      })
    } else {
      // If it doesn't exist, create a new chatroom,
      const chatroom = {
        id: '',
        users: [user, loggedInUser],
        createdDate: new Date(),
        name: `Chat between ${user.name} and ${loggedInUser.name}`,
        chatMessages: [],
        chatImage: '',
      }

      // push it to firebase
      const newRef = app.database().ref('chatrooms').push({
        name: chatroom.name,
        createdDate: chatroom.createdDate,
        chatMessages: chatroom.chatMessages,
        users: chatroom.users,
      })
      // set it as active chatroom and navigate to it
      dispatch(setUpdateActiveChatRoom(newRef.key))
      navigation.navigate('ChatRoomScreen', {
        name: user.name,
      })
    }
  }
  return (
    <View style={{ paddingTop: 20 }}>
      {users?.map((user) => (
        <ButtonBox
          hasImage
          imageSource={{ uri: user.image }}
          key={user.id}
          func={() => handleNavigation({ user })}
          title={user.name}
          textColor="black"
        />
      ))}
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          marginBottom: 50,
          marginTop: 50,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 100,
    height: 100,
    borderRadius: 20,
    resizeMode: 'contain',
  },
})

export default Contacts
