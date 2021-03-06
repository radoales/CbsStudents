import ChatMessage from './../models/ChatMessage';
import { USERS } from '../data/dummy-data';

export const MESSAGE_SENT = 'MESSAGE_SENT';
export const MESSAGE_ADDED = 'MESSAGE_ADDED';
export const CHAT_SELECTED = 'CHAT_SELECTED';

export const addToChats = (text) => {

    //USERS[0] should be replaced with the auth user
    const message = new ChatMessage(Math.random().toString(), new Date(), text, USERS[0]);

    return { type: MESSAGE_SENT, payload: message };
};

export const addMessage = (date, userId) => {
    return { type: MESSAGE_ADDED, payload: { date, userId } };
};

export const setUpdateActiveChatRoom = (index) => {
    return { type: CHAT_SELECTED, payload: { index } };
};