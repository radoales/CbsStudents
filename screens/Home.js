import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { headerStyles } from '../StyleSheets/Shared'
import { db } from '../firebase'
import { updateChatRooms } from '../store/actions/ChatActions'

const Home = (props) => {
  const dispatch = useDispatch()

  const initDatabase = () => {
    db.ref('chatrooms/').on('value', (querySnapShot) => {
      const data = querySnapShot.val() ? querySnapShot.val() : {}
      const chatrooms = { ...data }
      console.log('called', new Date())

      // Binds the firebase data to the appropriate format
      const fetchedChatrooms = Object.keys(chatrooms).map((key) => ({
        ...chatrooms[key],
        id: key,
        chatMessages: Object.keys(chatrooms[key]?.chatMessages).map(
          (messageKey) => ({
            ...chatrooms[key]?.chatMessages?.[messageKey],
            id: messageKey,
          }),
        ),
      }))
      dispatch(updateChatRooms(fetchedChatrooms))
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
