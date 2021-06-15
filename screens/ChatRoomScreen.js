import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import MessageBlock from '../components/MessageBlock'
import { addToChats, sendMessage } from '../store/actions/ChatActions'
import { mainColor, mainColorInactive } from '../constants'

const ChatRoomScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()

  const chatRoom = useSelector((state) => state.chat.activeChatRoom)
  const authUser = useSelector((state) => state.user.loggedInUser)

  const [value, setValue] = React.useState('')

  function send() {
    dispatch(sendMessage(value))
    setValue('')
  }

  const isInputFieldEmpty = value.length === 0
  // If input has any charecters set button to active
  const sendButtonStyle = isInputFieldEmpty
    ? styles.sendButtonViewActive
    : styles.sendButtonViewInActive
  return chatRoom ? (
    <View style={styles.container}>
      <FlatList
        inverted
        data={chatRoom.chatMessages}
        renderItem={({ item }) => <MessageBlock message={item} />}
        keyExtractor={(item) => item.id}
      />
      <View
        style={{ flexDirection: 'row', borderColor: '#D9D9D9', borderWidth: 1 }}
      >
        <Image source={{ uri: authUser.image }} style={styles.imageIcon} />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setValue(text)}
          value={value}
          placeholder="Write message"
          multiline
          numberOfLines={4}
          onFocus={() => console.log('focus received')}
          onBlur={() => console.log('focus lost')}
        />
        <TouchableOpacity onPress={() => send()} disabled={isInputFieldEmpty}>
          <View style={sendButtonStyle}>
            <Ionicons
              style={[{ transform: [{ rotate: '315deg' }] }]}
              name="send-sharp"
              size={25}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ) : null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    margin: 10,
    marginRight: 0,
  },
  inputField: {
    margin: 10,
    height: 40,
    width: 240,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    padding: 5,
    marginRight: 0,
  },
  sendButtonViewActive: {
    backgroundColor: mainColorInactive,
    width: 40,
    height: 40,
    paddingLeft: 5,
    paddingTop: 4,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonViewInActive: {
    backgroundColor: mainColor,
    width: 40,
    height: 40,
    paddingLeft: 5,
    paddingTop: 4,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
})

export default ChatRoomScreen
