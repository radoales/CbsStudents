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
  activeChatRoomId: null,
  activeChatRoom: null,
}

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_ADDED: {
      return {
        ...state,
        prevMessageDate: action.payload.prevMessageDate,
        prevMessageUserId: action.payload.prevMessageUserId,
      }
    }
    case CHATROOM_FETCHED: {
      console.log('reducer called', action.payload.chatrooms)
      return {
        ...state,
        chatrooms: action.payload.chatrooms,
      }
    }
    case MESSAGE_SENT: {
      // Get the message from the payload
      const newMessage = action.payload.message

      // Find the Chatroom where the message belongs
      const activeRoom = state.activeChatRoom

      // Copy the messages from the room and add the new message to the array
      const chatMessages = [...activeRoom.chatMessages, newMessage]

      // Copy the Chatroom and replace the old array of messages with the new one
      const newChatRoom = { ...activeRoom }

      newChatRoom.chatMessages = chatMessages.reverse()

      // Copy the Chatrooms array to a new variable
      const chatRoomArray = [...state.chatrooms]

      // Replace the chatroom with the new chatroom
      chatRoomArray.splice(state.activeChatRoomId, 1, newChatRoom)

      return {
        ...state,
        activeChatRoom: newChatRoom,
        chatrooms: chatRoomArray,
      }
    }
    case CHAT_SELECTED: {
      const chatroomSelected = state?.chatrooms?.filter(
        (x) => x.id === action.payload.index,
      )[0]
      console.log('selected chatrooms', chatroomSelected)
      return {
        ...state,
        activeChatRoomId: action.payload.index,
        activeChatRoom: {
          ...chatroomSelected,
          chatMessages: chatroomSelected?.chatMessages?.reverse(),
        },
      }
    }
    default:
      return state
  }
}

export default ChatReducer
