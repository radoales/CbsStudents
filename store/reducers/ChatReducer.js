import { CHATROOM_CBS } from '../../data/dummy-data'
import ChatRoom from '../../models/ChatRoom'
import {
  MESSAGE_SENT,
  MESSAGE_ADDED,
  CHAT_SELECTED,
  CHATROOM_FETCHED,
  CHATROOM_CREATED,
} from '../actions/ChatActions'

const initialState = {
  prevMessageDate: null,
  prevMessageUserId: null,
  chatrooms: null,
  activeChatRoom: null,
}

const ChatReducer = (state = initialState, action) => {
  console.log('les reduceres !~!!')
  switch (action.type) {
    case MESSAGE_ADDED: {
      return {
        ...state,
        prevMessageDate: action.payload.prevMessageDate,
        prevMessageUserId: action.payload.prevMessageUserId,
      }
    }

    case CHATROOM_FETCHED: {
      return {
        ...state,
        chatrooms: action.payload.chatrooms,
      }
    }
    case MESSAGE_SENT: {
      // Get the message from the payload
      console.log('stuuff send', action)
      const newMessage = action.payload

      // Find the Chatroom where the message belongs
      const chatroom = state.chatrooms[state.activeChatRoom]

      // Copy the messages from the room and add the new message to the array
      const chatMessages = [...chatroom.chatMessages, newMessage]
      // Copy the Chatroom and replace the old array of messages with the new one
      const newChatRoom = { ...chatroom }
      newChatRoom.chatMessages = chatMessages

      // Copy the Chatrooms array to a new variable
      const chatRoomArray = [...state.chatrooms]

      // Replace the the chatroom with the new chatroom
      chatRoomArray.splice(state.activeChatRoom, 1, newChatRoom)

      return {
        ...state,
        chatrooms: chatRoomArray,
      }
    }
    case CHAT_SELECTED:
      return {
        ...state,
        activeChatRoom: action.payload.index,
      }

    default:
      return state
  }
}

export default ChatReducer
