/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import ChatMessage from '../../models/ChatMessage'
import { USERS } from '../../data/dummy-data'
import ChatRoom from '../../models/ChatRoom'
import User from '../../models/User'

export const MESSAGE_SENT = 'MESSAGE_SENT'
export const MESSAGE_ADDED = 'MESSAGE_ADDED'
export const CHAT_SELECTED = 'CHAT_SELECTED'
export const CHATROOM_CREATED = 'CHATROOM_CREATED'
export const CHATROOM_FETCHED = 'CHATROOM_FETCHED'

export const addToChats = (text) => {
  // USERS[0] should be replaced with the auth user
  const message = new ChatMessage(
    Math.random().toString(),
    new Date(),
    text,
    USERS[0],
  )

  return { type: MESSAGE_SENT, payload: message }
}

export const addMessage = (prevMessageDate, prevMessageUserId) => {
  return {
    type: MESSAGE_ADDED,
    payload: { prevMessageDate, prevMessageUserId },
  }
}

export const setUpdateActiveChatRoom = (index) => {
  return { type: CHAT_SELECTED, payload: { index } }
}

export const handleSaveNewChatroom = (chatroom) => {
  return {
    type: CHATROOM_CREATED,
    payload: { chatroom },
  }
}

export const createChatroom = (name) => {
  return async (dispatch, getState) => {
    const { token } = getState().user

    const chatroom = new ChatRoom('', new Date(), name, [], '')
    const response = await fetch(
      `https://cbsstudents-kea-default-rtdb.firebaseio.com/chatrooms.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: chatroom.name,
          createdDate: chatroom.createdDate,
          chatMessages: chatroom.chatMessages,
        }),
      },
    )
    if (!response.ok) {
      console.log('response not okay', response)
    } else {
      const data = await response.json()
      dispatch({
        type: CHATROOM_CREATED,
        payload: { chatroom },
      })
    }
  }
}

const messageSent = (message) => {
  return {
    type: MESSAGE_SENT,
    payload: { message },
  }
}

export const updateChatRooms = (chatrooms) => {
  return {
    type: CHATROOM_FETCHED,
    payload: { chatrooms },
  }
}

export const sendMessage = (value) => {
  return async (dispatch, getState) => {
    const { token } = getState().user
    const { user } = getState()
    const { activeChatRoomId } = getState().chat
    const loggedInUser = new User(user.id, user.name, user.email)
    // const message = new ChatMessage('', new Date(), value, loggedInUser, true)
    const message = {
      createdDate: new Date(),
      message: value,
      user: user.loggedInUser,
      isRead: true,
    }
    const response = await fetch(
      `https://cbsstudents-kea-default-rtdb.firebaseio.com/chatrooms/${activeChatRoomId}/chatMessages.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: message.user,
          createdDate: message.createdDate,
          isRead: message.isRead,
          message: message.message,
        }),
      },
    )
    if (!response.ok) {
      console.log('response not okay', response)
    } else {
      // const data = await response.json()
      dispatch(messageSent(message))
      // dispatch({
      //   type: MESSAGE_SENT,
      //   payload: { message },
      // })
    }
  }
}

export const fetchChatRooms = () => {
  return async (dispatch, getState) => {
    const { token } = getState().user

    // const chatroom = new ChatRoom('', new Date(), name, [], '')
    const response = await fetch(
      `https://cbsstudents-kea-default-rtdb.firebaseio.com/chatrooms.json?auth=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (!response.ok) {
      console.log('response not okay', response)
    } else {
      const res = await response.json()
      const data = Object.keys(res).map((key) => ({
        ...res[key],
        id: key,
      }))
      // Add code here to create a chatmessages array and save that right
      const chatrooms = data.map((room) => ({
        id: room.id,
        createdDate: room.createdDate,
        name: room.name,
        chatMessages: room.chatMessages
          ? Object.keys(room.chatMessages).map((key) => ({
              ...room.chatMessages[key],
              id: key,
            }))
          : [],
        chatImage: room.chatImage,
      }))
      dispatch({
        type: CHATROOM_FETCHED,
        payload: { chatrooms },
      })
    }
  }
}
