import { CHATROOM_CBS } from "../../data/dummy-data";

import {NEW_CHATMESSAGE } from './../ChatActions';
import { USERS } from './../../data/dummy-data'
import ChatMessage  from './../../models/ChatMessage'

const initialState = {
    date: new Date().toDateString().substring(4, 15),
    userId: null,
    chatrooms: CHATROOM_CBS
};



const ChatReducer = (state = initialState, action) => {
    // if (action.type === 'messageAdded') {
    //     if (state !== action.payload) {
    //         return {
    //             date: state.date = action.payload.date,
    //             userId: state.userId = action.payload.userId,
    //             chatrooms: [...state.chatrooms]
    //         };
    //     }
    // } else 
    if (action.type === NEW_CHATMESSAGE) {
            console.log(action.payload);
        let message = action.payload;
            console.log(message);
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

export default ChatReducer;