import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { headerStyles } from '../StyleSheets/Shared'
import { app } from '../firebase'
import { fetchChatRooms, updateChatRooms } from '../store/actions/ChatActions'

const Home = (props) => {
  const dispatch = useDispatch()

  const initDatabase = () => {
    app
      .database()
      .ref('chatrooms/')
      .on('value', (querySnapShot) => {
        const data = querySnapShot.val() ? querySnapShot.val() : {}
        const chatrooms = { ...data }
        console.log('Reference called')
        // Binds the firebase data to the appropriate format
        if (chatrooms) {
          const fetchedChatrooms = Object.keys(chatrooms).map((key) => ({
            ...chatrooms[key],
            id: key,
            chatMessages: chatrooms[key]?.chatMessages
              ? Object.values(chatrooms[key]?.chatMessages)
              : [],
          }))
          const chats = []
          fetchedChatrooms.forEach((room) => {
            const newRoom = {
              id: room.id,
              name: room.name,
              chatMessages: [...room.chatMessages.reverse()],
              users: room.users,
            }

            chats.push(newRoom)
          })
          console.log('new chatrooms', chats)
          dispatch(updateChatRooms(chats))
        }
      })
  }

  initDatabase()

  return (
    <View style={headerStyles.headerBox}>
      <Text style={headerStyles.headerText}>Feed</Text>
      <View style={{ paddingTop: 20 }}>
        <View style={styles.boxWithShadow} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxWithShadow: {
    height: 250,
    alignSelf: 'stretch',
    textAlign: 'center',
    margin: 20,
    marginBottom: 0,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
})

export default Home
