import ChatMessage from '../models/ChatMessage'
import ChatRoom from '../models/ChatRoom'
import User from '../models/User'

export const USERS = [
  new User(
    '1',
    'Robert Jacobsen',
    '1234',
    'rob@student.dk',
    require('../assets/robert.jpg'),
    'MSc in Medicine',
    true,
  ),
  new User(
    '2',
    'Lara Thylor',
    '1234',
    'lara@student.dk',
    require('../assets/lara.jpg'),
    'MSc in Medicine',
    true,
  ),
  new User(
    '3',
    'Alex Lee',
    '1234',
    'alex@student.dk',
    require('../assets/alex.jpg'),
    'MSc2 in Medicine',
    true,
  ),
  new User(
    '4',
    'Felipe Grace',
    '1234',
    'felipe@student.dk',
    require('../assets/felipe.jpg'),
    'MSc in Medicine',
    true,
  ),
]
// ------------------------------------------------ChatMessages-------------------------------------------------//
export const CHATMESSAGES_SURF = [
  new ChatMessage(
    '1',
    new Date(2020, 0, 20, 11, 36, 23),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    USERS[0],
    false,
  ),
  new ChatMessage(
    '2',
    new Date(2020, 0, 17, 20, 12, 1),
    'Lorem ipsum dolor sit amet, consectetur ',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '25',
    new Date(2020, 0, 17, 20, 12, 1),
    'Lorem ipsum',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '26',
    new Date(2020, 0, 17, 20, 12, 1),
    '*Lorem ipsum dolor',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '27',
    new Date(2020, 1, 5, 20, 12, 1),
    'Lorem ipsum dolor sit amet, consectetur ',
    USERS[2],
    true,
  ),
  new ChatMessage(
    '3',
    new Date(2021, 2, 1, 20, 14, 1),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '4',
    new Date(2021, 2, 1, 20, 15, 1),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .',
    USERS[1],
    false,
  ),
]

export const CHATMESSAGES_FEM = [
  new ChatMessage(
    '5',
    new Date(2021, 4, 19, 20, 10, 1),
    'Thank you for your message!',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '6',
    new Date(2021, 0, 1, 20, 12, 1),
    'Hello I am here',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '7',
    new Date(2021, 0, 1, 20, 14, 1),
    'Hello how are you!',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '8',
    new Date(2021, 0, 1, 20, 15, 1),
    'Hello looking at a React Native teacher right now..!',
    USERS[1],
    true,
  ),
]

export const CHATMESSAGES_STUDENTS = [
  new ChatMessage(
    '9',
    new Date(2021, 4, 10, 20, 10, 1),
    'Thank you for your message!',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '10',
    new Date(2021, 0, 1, 20, 12, 1),
    'Hello I am here',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '11',
    new Date(2021, 0, 1, 20, 14, 1),
    'Hello how are you!',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '12',
    new Date(2021, 0, 1, 20, 15, 1),
    'Hello looking at a React Native teacher right now..!',
    USERS[1],
    false,
  ),
]

export const CHATMESSAGES_GOLF = [
  new ChatMessage(
    '13',
    new Date(2021, 3, 21, 20, 10, 1),
    'Thank you for your message!',
    USERS[0],
    false,
  ),
  new ChatMessage(
    '14',
    new Date(2021, 0, 1, 20, 12, 1),
    'Hello I am here',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '15',
    new Date(2021, 0, 1, 20, 14, 1),
    'Hello how are you!',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '16',
    new Date(2021, 0, 1, 20, 15, 1),
    'Hello looking at a React Native teacher right now..!',
    USERS[1],
    true,
  ),
]

export const CHATMESSAGES_POKER = [
  new ChatMessage(
    '17',
    new Date(2021, 0, 1, 20, 10, 1),
    'Thank you for your message!',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '18',
    new Date(2021, 0, 1, 20, 12, 1),
    'Hello I am here',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '19',
    new Date(2021, 0, 1, 20, 14, 1),
    'Hello how are you!',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '20',
    new Date(2021, 0, 1, 20, 15, 1),
    'Hello looking at a React Native teacher right now..!',
    USERS[1],
    true,
  ),
]

export const CHATMESSAGES_PRVT = [
  new ChatMessage(
    '21',
    new Date(2020, 11, 7, 20, 10, 1),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '22',
    new Date(2020, 11, 3, 20, 12, 1),
    'Hello I am here',
    USERS[0],
    true,
  ),
  new ChatMessage(
    '23',
    new Date(2020, 10, 18, 20, 14, 1),
    'Hello how are you!',
    USERS[1],
    true,
  ),
  new ChatMessage(
    '24',
    new Date(2021, 2, 20, 20, 15, 1),
    'Hello looking at a React Native teacher right now..!',
    USERS[0],
    true,
  ),
]

// -------------------------------------------------ChatRooms--------------------------------------------------------//

export const CHATROOM_CBS = [
  new ChatRoom(
    '1',
    new Date(2021, 0, 1, 2, 0, 0),
    'CBS Surf',
    CHATMESSAGES_SURF,
    require('../assets/cbssurf.jpg'),
  ),
  new ChatRoom(
    '2',
    new Date(2021, 0, 1, 2, 1, 0),
    'CBS Feminist Society',
    CHATMESSAGES_FEM,
    require('../assets/cbsfem.png'),
  ),
  new ChatRoom(
    '3',
    new Date(2021, 0, 1, 2, 2, 0),
    'CBS Students',
    CHATMESSAGES_STUDENTS,
    require('../assets/cbsstud.png'),
  ),
  new ChatRoom(
    '4',
    new Date(2021, 0, 1, 2, 2, 0),
    'CBS Golf',
    CHATMESSAGES_GOLF,
    require('../assets/cbsgolf.jpg'),
  ),
  new ChatRoom(
    '5',
    new Date(2021, 0, 1, 2, 2, 0),
    'CBS Poker',
    CHATMESSAGES_POKER,
    require('../assets/cbspoker.png'),
  ),
]

export const CHATROOM_PRVT = [
  new ChatRoom(
    '6',
    new Date(2021, 0, 1, 2, 0, 0),
    'Lara Thayer',
    CHATMESSAGES_PRVT,
    require('../assets/lara.jpg'),
  ),
  new ChatRoom(
    '7',
    new Date(2021, 0, 1, 2, 1, 0),
    'Alex Lee',
    CHATMESSAGES_PRVT,
    require('../assets/alex.jpg'),
  ),
  new ChatRoom(
    '8',
    new Date(2021, 0, 1, 2, 2, 0),
    'Felipe Grace',
    CHATMESSAGES_PRVT,
    require('../assets/felipe.jpg'),
  ),
  new ChatRoom(
    '9',
    new Date(2021, 0, 1, 2, 2, 0),
    'Board of directors',
    CHATMESSAGES_PRVT,
    require('../assets/cbssurf.jpg'),
  ),
]
