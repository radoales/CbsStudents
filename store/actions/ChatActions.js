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
      // console.log('response not okay', response)
    } else {
      const data = await response.json()
      dispatch({
        type: CHATROOM_CREATED,
        payload: { chatroom },
      })
    }
  }
}

export const sendMessage = (value) => {
  return async (dispatch, getState) => {
    const { token } = getState().user
    const { user } = getState()
    console.log('user-------------->', user)
    const loggedInUser = new User(user.id, user.name, user.email)
    console.log('pachanga 2', user.loggedInUser)
    // const message = new ChatMessage('', new Date(), value, loggedInUser, true)
    const message = {
      createdDate: new Date(),
      message: value,
      user: user.loggedInUser,
      isRead: true,
    }
    const response = await fetch(
      `https://cbsstudents-kea-default-rtdb.firebaseio.com/chatrooms/-MYAMT4qOSj_Alzz5eEi/chatMessages.json?auth=${token}`,
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
    console.log('message from body', message)
    if (!response.ok) {
      console.log('response not okay', response)
    } else {
      const data = await response.json()
      dispatch({
        type: MESSAGE_SENT,
        payload: { message },
      })
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
      // console.log('response not okay', response)
    } else {
      const data = await response.json()
      const chatrooms = []
      // Add code here to create a chatmessages array and save that right
      for (const key in data) {
        chatrooms.push(
          new ChatRoom(
            key,
            new Date(data[key].createdDate),
            data[key].name,
            data[key].chatMessages,
            // eslint-disable-next-line global-require
            require('../../assets/lara.jpg'),
          ),
        )
      }
      dispatch({
        type: CHATROOM_FETCHED,
        payload: { chatrooms },
      })
    }
  }
}
