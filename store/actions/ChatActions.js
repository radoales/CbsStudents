import ChatMessage from '../../models/ChatMessage'
import { USERS } from '../../data/dummy-data'
import ChatRoom from '../../models/ChatRoom'

export const MESSAGE_SENT = 'MESSAGE_SENT'
export const MESSAGE_ADDED = 'MESSAGE_ADDED'
export const CHAT_SELECTED = 'CHAT_SELECTED'
export const CHATROOM_CREATED = 'CHATROOM_CREATED'
export const CHATROOM_RETRIEVED = 'CHATROOM_RETRIEVED'

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
      console.log('response okay')
      dispatch({
        type: CHATROOM_CREATED,
        payload: { chatroom },
      })
    }
  }
}

export const getChatroom = () => {
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
      console.log('response okay', data)
      for (const chat in data) {
        console.log('This is chat: ', data[chat])
      }
      dispatch({
        type: CHATROOM_RETRIEVED,
        payload: { data },
      })
    }
  }
}
