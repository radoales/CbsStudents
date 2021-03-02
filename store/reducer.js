import { CHATROOM_CBS } from "../data/dummy-data";
import ChatMessage from "../models/ChatMessage";
import { USERS } from '../data/dummy-data';


const initialState = {
    date: new Date().toDateString().substring(4, 15),
    userId: null,
    chatrooms: CHATROOM_CBS,
    chatroomId: null
};

export default reducer = (state = initialState, action) => {
    // if (action.type === 'messageAdded') {
    //     if (state !== action.payload) {
    //         return {
    //             date: state.date = action.payload.date,
    //             userId: state.userId = action.payload.userId,
    //             chatrooms: [...state.chatrooms]
    //         };
    //     }
    // } else 
    if (action.type === 'sent') {

        let message = new ChatMessage(Math.random().toString(), new Date(), action.payload.message, USERS[0], false);

        const chatroom = state.chatrooms.find(room => room.id == 1);

        const chatMessages = [...chatroom.chatMessages, message];
        
        chatroom.chatMessages = chatMessages;

        const chatRoomArray = [...state.chatrooms];
        chatRoomArray.splice(0, 1, chatroom);

        return {
            ...state,
            chatroom: chatRoomArray
        }
    }

    return state;
};