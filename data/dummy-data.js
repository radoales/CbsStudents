import ChatMessage from "../models/ChatMessage";
import ChatRoom from "../models/ChatRoom";
import User from "../models/User";

export const USERS = [
    new User('1','Felix Sandgren', '1234', 'felix@sandgren.dk', '', 'MSc in Medicine', true),
    new User('2','Thomas Nielsen', '1234', 'felix2@sandgren.dk', '', 'MSc2 in Medicine', true)
];

export const CHATMESSAGES_SURF = [
    new ChatMessage('1',new Date(2021, 0, 1, 20, 10, 1), 'Thank you for your message!', USERS[0], false),
    new ChatMessage('2',new Date(2021, 0, 1, 20, 12, 1), 'Hello I am here', USERS[1], true),
    new ChatMessage('3',new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0], true),
    new ChatMessage('4',new Date(2021, 0, 1, 20, 15, 1), 'Hello looking at a React Native teacher right now..!', USERS[1],true),
];

export const CHATMESSAGES_FEM = [
    new ChatMessage('5',new Date(2021, 0, 1, 20, 10, 1), 'Thank you for your message!', USERS[0], true),
    new ChatMessage('6',new Date(2021, 0, 1, 20, 12, 1), 'Hello I am here', USERS[1], true),
    new ChatMessage('7',new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0], true),
    new ChatMessage('8',new Date(2021, 0, 1, 20, 15, 1), 'Hello looking at a React Native teacher right now..!', USERS[1],true),
];

export const CHATMESSAGES_STUDENTS = [
    new ChatMessage('9',new Date(2021, 0, 1, 20, 10, 1), 'Thank you for your message!', USERS[0], true),
    new ChatMessage('10',new Date(2021, 0, 1, 20, 12, 1), 'Hello I am here', USERS[1], true),
    new ChatMessage('11',new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0], true),
    new ChatMessage('12',new Date(2021, 0, 1, 20, 15, 1), 'Hello looking at a React Native teacher right now..!', USERS[1],true),
];

export const CHATMESSAGES_GOLF = [
    new ChatMessage('13',new Date(2021, 0, 1, 20, 10, 1), 'Thank you for your message!', USERS[0], false),
    new ChatMessage('14',new Date(2021, 0, 1, 20, 12, 1), 'Hello I am here', USERS[1], true),
    new ChatMessage('15',new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0], true),
    new ChatMessage('16',new Date(2021, 0, 1, 20, 15, 1), 'Hello looking at a React Native teacher right now..!', USERS[1],true),
];

export const CHATMESSAGES_POKER = [
    new ChatMessage('17',new Date(2021, 0, 1, 20, 10, 1), 'Thank you for your message!', USERS[0], true),
    new ChatMessage('18',new Date(2021, 0, 1, 20, 12, 1), 'Hello I am here', USERS[1], true),
    new ChatMessage('19',new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0], true),
    new ChatMessage('20',new Date(2021, 0, 1, 20, 15, 1), 'Hello looking at a React Native teacher right now..!', USERS[1],true),
];

export const CHATROOM = [
    new ChatRoom('1',new Date(2021, 0, 1, 2, 0, 0), 'CBS Surf', CHATMESSAGES_SURF, require('../assets/cbssurf.jpg')),
    new ChatRoom('2',new Date(2021, 0, 1, 2, 1, 0), 'CBS Feminist Society', CHATMESSAGES_FEM, require('../assets/cbsfem.png') ),
    new ChatRoom('3',new Date(2021, 0, 1, 2, 2, 0), 'CBS Students', CHATMESSAGES_STUDENTS, require('../assets/cbsstud.png')),
    new ChatRoom('4',new Date(2021, 0, 1, 2, 2, 0), 'CBS Golf', CHATMESSAGES_GOLF, require('../assets/cbsgolf.jpg')),
    new ChatRoom('5',new Date(2021, 0, 1, 2, 2, 0), 'CBS Poker', CHATMESSAGES_POKER, require('../assets/cbspoker.png'))
];