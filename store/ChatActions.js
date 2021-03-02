import User from './../models/User';
import ChatMessage from './../models/ChatMessage';
import {USERS} from '../data/dummy-data';

export const NEW_CHATMESSAGE = 'NEW_CHATMESSAGE';

export const addToChats = (text) => {
   // const tempUser = new User('1','Felix Sandgren', '1234', 'felix@sandgren.dk', '', 'MSc in Medicine', true);
    const message = new ChatMessage(Math.random().toString(), new Date(), text, USERS[0]);

    return {type: NEW_CHATMESSAGE, payload: message};
};