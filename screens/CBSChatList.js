import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import ChatList from '../components/ChatList'

const CBSChatList = () => {
  const chatrooms = useSelector((state) => {
    return state.chat.chatrooms
  })
  return (
    <View style={styles.room}>
      <FlatList
        data={chatrooms}
        renderItem={(itemData) => (
          <React.Fragment key={itemData.index}>
            <ChatList index={itemData.index} chatroom={itemData.item} />
          </React.Fragment>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default CBSChatList
