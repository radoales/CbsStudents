/* eslint-disable global-require */
import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import InputBlock from '../components/InputBlock'
import ButtonBox from '../components/ButtonBox'
import {
  createChatroom,
  fetchChatRooms,
  updateChatRooms,
  handleSaveNewChatroom,
} from '../store/actions/ChatActions'
import ChatRoom from '../models/ChatRoom'

const NewChatroomScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { users, token } = useSelector((state) => state.user)

  const [name, setName] = React.useState()

  const handleSave = () => {
    dispatch(createChatroom(name))
    dispatch(fetchChatRooms())
    // navigation.goBack()
  }
  const handleCall = () => {
    dispatch(fetchChatRooms())
    // navigation.goBack()
  }

  const handleNavigation = ({ userName }) => {
    const chatroom = new ChatRoom('', new Date(), name, [], '')
    // Todo: Fix this, create new chatroom before redirecting to the chat
    axios
      .post(
        `https://cbsstudents-kea-default-rtdb.firebaseio.com/chatrooms.json?auth=${token}`,
        {
          name: chatroom.name,
          createdDate: chatroom.createdDate,
          chatMessages: chatroom.chatMessages,
        },
      )
      .then((results) => {
        handleSaveNewChatroom(chatroom)

        axios
          .get(
            `https://cbsstudents-kea-default-rtdb.firebaseio.com/chatrooms.json?auth=${token}`,
          )
          .then((res) => {
            const data = Object.keys(res.data).map((key) => ({
              ...res.data[key],
              key,
            }))
            console.log('data', data)
            const chatrooms = data.map((room) => ({
              id: room.id,
              createdDate: room.createdDate,
              name: room.name,
              chatMessages: room.chatMessages
                ? Object.keys(room.chatMessages).map((key) => ({
                    ...room.chatMessages[key],
                    key,
                  }))
                : [],
              chatImage: room.chatImage,
            }))
            console.log('chatrooms', chatrooms)
            dispatch(updateChatRooms(chatrooms))

            // dispatch(setUpdateActiveChatRoom(index))
            navigation.navigate('ChatRoomScreen', {
              name: `Chat with ${userName}`,
            })
          })
          .catch((err) => {
            console.log('err', err)
          })
      })
      .catch((err) => {
        console.log('errer', err)
      })

    // Add code here to create a chatmessages array and save that right
  }
  return (
    <View style={{ paddingTop: 20 }}>
      {users.map((user) => (
        <ButtonBox
          key={user.id}
          func={() => handleNavigation({ userName: user.name })}
          title={user.name}
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
      <View style={{ padding: 20 }}>
        <InputBlock
          value={name}
          setValue={setName}
          required
          label="WHAT IS THE CHATROOM'S NAME?"
          placeholder="chatroom name"
          initialState={name}
        />
      </View>
      <ButtonBox func={() => handleSave()} title="Create" />
      <ButtonBox func={() => handleCall()} title="Call" />
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

export default NewChatroomScreen
