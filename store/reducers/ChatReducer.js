import { CHATROOM_CBS } from '../../data/dummy-data'
import { MESSAGE_SENT, MESSAGE_ADDED, CHAT_SELECTED } from '../ChatActions'

const initialState = {
  prevMessageDate: null,
  prevMessageUserId: null,
  chatrooms: CHATROOM_CBS,
  activeChatRoom: null,
}

const ChatReducer = (state = initialState, action) => {
  if (action.type === MESSAGE_ADDED) {
    return {
      ...state,
      prevMessageDate: action.payload.prevMessageDate,
      prevMessageUserId: action.payload.prevMessageUserId,
    }
  }
  if (action.type === MESSAGE_SENT) {
    // Get the message from the payload
    const newMessage = action.payload

    // Find the Chatroom where the message belongs
    const chatroom = state.chatrooms.find((room) => room.id == 1)

    // Copy the messages from the room and add the new message to the array
    const chatMessages = [...chatroom.chatMessages, newMessage]

    // Copy the Chatroom and replace the old array of messages with the new one
    const newChatRoom = { ...chatroom }
    newChatRoom.chatMessages = chatMessages

    // Copy the Chatrooms array to a new variable
    const chatRoomArray = [...state.chatrooms]

    // Replace the the chatroom with the new chatroom
    chatRoomArray.splice(0, 1, newChatRoom)

    return {
      ...state,
      chatrooms: chatRoomArray,
    }
  }
  if (action.type === CHAT_SELECTED) {
    return {
      ...state,
      activeChatRoom: action.payload.index,
    }
  }
  return state
}

export default ChatReducer
