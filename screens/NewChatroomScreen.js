/* eslint-disable global-require */
import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import InputBlock from '../components/InputBlock'
import ButtonBox from '../components/ButtonBox'
import { createChatroom, fetchChatRooms } from '../store/actions/ChatActions'

const NewChatroomScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [name, setName] = React.useState()

  const handleSave = () => {
    dispatch(createChatroom(name))
    dispatch(fetchChatRooms())
    // navigation.goBack()
  }
  const handleCall = () => {
    dispatch(fetchChatRooms())
    // navigation.goBack()
  }

  return (
    <View style={{ paddingTop: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          marginBottom: 50,
          marginTop: 50,
        }}
      />
      <View style={{ padding: 20 }}>
        <InputBlock
          value={name}
          setValue={setName}
          required
          label="WHAT IS THE CHATROOM'S NAME?"
          placeholder="chatroom name"
          initialState={name}
        />
      </View>
      <ButtonBox func={() => handleSave()} title="Create" />
      <ButtonBox func={() => handleCall()} title="Call" />
    </View>
  )
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 100,
    height: 100,
    borderRadius: 20,
    resizeMode: 'contain',
  },
})

export default NewChatroomScreen
