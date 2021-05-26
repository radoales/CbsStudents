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
  setUpdateActiveChatRoom,
} from '../store/actions/ChatActions'
import ChatRoom from '../models/ChatRoom'

// @flow

const callFirebase = async (endpoint, request = {}) => {
  const { method = 'get', data } = request

  const url = `${endpoint}`
  return axios({
    url,
    method,
    data,
  })
}

const createNewRoom = ({ name, createdDate, chatMessages, token }) => {
  return callFirebase(
    `https://cbsstudents-kea-default-rtdb.firebaseio.com/chatrooms.json?auth=${token}`,
    {
      method: 'post',
      data: {
        name,
        createdDate,
        chatMessages,
      },
    },
  )
}
const getAllChatrooms = (token) => {
  return callFirebase(
    `https://cbsstudents-kea-default-rtdb.firebaseio.com/chatrooms.json?auth=${token}`,
  )
}
const Contacts = () => {
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

  const handleCreateChatrooms = (data) => {
    return data.map((room) => ({
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
  }
  const handleNavigation = ({ userName }) => {
    const chatroom = {
      id: '',
      createdDate: new Date(),
      name: `Chat with ${userName}`,
      chatMessages: [],
      chatImage: '',
    }

    // Todo: Fix this, create new chatroom before redirecting to the chat

    createNewRoom({
      name: chatroom.name,
      createdDate: chatroom.createdDate,
      chatMessages: chatroom.chatMessages,
      token,
    })
      .then((results) => {
        dispatch(handleSaveNewChatroom(chatroom))
        getAllChatrooms(token)
          .then((res) => {
            const data = Object.keys(res.data).map((key) => ({
              ...res.data[key],
              id: key,
            }))
            const chatrooms = handleCreateChatrooms(data)
            dispatch(updateChatRooms(chatrooms))
            dispatch(setUpdateActiveChatRoom(results?.data?.name))
            navigation.navigate('ChatRoomScreen', {
              name: `Chat with ${userName}`,
            })
          })
          .catch((err) => {
            console.log('err', err)
          })
      })
      .catch((err) => {
        console.log('err', err)
      })
    // Add code here to create a chatmessages array and save that right
  }
  return (
    <View style={{ paddingTop: 20 }}>
      {users.map((user) => (
        <ButtonBox
          hasImage
          imageSource={require('../assets/lara.jpg')}
          key={user.id}
          func={() => handleNavigation({ userName: user.name })}
          title={user.name}
          textColor="Black"
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
