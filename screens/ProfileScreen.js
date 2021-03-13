/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import SwitchBlock from '../components/SwitchBlock'
import ButtonBox from '../components/ButtonBox'
import { signOut } from '../store/UserActions'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const authUser = useSelector((state) => state.user.loggedInUser)

  const [isChatEnabled, setIsChatEnabled] = React.useState(false)
  const toggleSwitchChat = () =>
    setIsChatEnabled((previousState) => !previousState)

  const [isEventEnabled, setIsEventEnabled] = React.useState(false)
  const toggleSwitchEvent = () =>
    setIsEventEnabled((previousState) => !previousState)

  const HandleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <View style={{ flexDirection: 'column', paddingEnd: 20 }}>
          <Image source={authUser.image} style={styles.imageIcon} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              fontSize: 20,
              color: 'darkslateblue',
              fontWeight: 'bold',
            }}
          >
            {authUser.name}
          </Text>
          <Text>{authUser.email}</Text>
          <Text>{authUser.title}</Text>
        </View>
      </View>
      <ButtonBox
        data={authUser}
        title="Edit Profile"
        func={() =>
          navigation.navigate('EditProfileScreen', { data: authUser })
        }
      />
      <View style={styles.line} />
      <Text
        style={{
          fontSize: 20,
          margin: 20,
          color: 'darkslateblue',
          fontWeight: 'bold',
        }}
      >
        NOTIFICATIONS
      </Text>
      <SwitchBlock
        name="Chat"
        info="When you receive a message"
        toggleSwitch={toggleSwitchChat}
        switchState={isChatEnabled}
      />
      <SwitchBlock
        name="Event Reminder"
        info={"An hour before events you are 'going to'"}
        toggleSwitch={toggleSwitchEvent}
        switchState={isEventEnabled}
      />
      <View style={styles.line} />
      <ButtonBox title="Sign Out" func={() => HandleSignOut()} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 70,
    height: 70,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  line: {
    margin: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  notificationText: {
    color: 'grey',
  },
})

export default ProfileScreen
