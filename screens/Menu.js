import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native'
import { comonStyles } from '../StyleSheets/Shared'
import { USERS } from '../data/dummy-data'

const Menu = () => {
  const authUser = USERS[0]

  const [isChatEnabled, setIsChatEnabled] = React.useState(false)
  const toggleSwitchChat = () =>
    setIsChatEnabled((previousState) => !previousState)

  const [isEventEnabled, setIsEventEnabled] = React.useState(false)
  const toggleSwitchEvent = () =>
    setIsEventEnabled((previousState) => !previousState)

  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={comonStyles.headerBox}>
        <Text style={comonStyles.headerText}>Menu</Text>
      </View>
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
      <TouchableOpacity
        style={{
          height: 35,
          backgroundColor: 'darkslateblue',
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            paddingTop: 7,
            fontWeight: 'bold',
          }}
        >
          Edit Profile
        </Text>
      </TouchableOpacity>

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
      <View style={styles.settingsBox}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 5, flexDirection: 'column', paddingLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 10 }}>
              Chat
            </Text>
            <Text style={styles.notificationText}>
              When you receive a new message
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Switch
              style={{ paddingVertical: 15 }}
              trackColor={{ false: 'darkgrey', true: 'rgba(72,61,139, 0.3)' }}
              thumbColor={isChatEnabled ? 'darkslateblue' : 'lightgrey'}
              onValueChange={toggleSwitchChat}
              value={isChatEnabled}
            />
          </View>
        </View>
      </View>
      <View style={styles.settingsBox}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 5, flexDirection: 'column', paddingLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 10 }}>
              Event Reminder
            </Text>
            <Text style={styles.notificationText}>
              An hour before events you are &aposgoing to&apos
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Switch
              style={{ paddingVertical: 15 }}
              trackColor={{ false: 'darkgrey', true: 'rgba(72,61,139, 0.3)' }}
              thumbColor={isEventEnabled ? 'darkslateblue' : 'lightgrey'}
              onValueChange={toggleSwitchEvent}
              value={isEventEnabled}
            />
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          height: 60,
          marginBottom: 10,
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: 'darkslateblue',
            fontSize: 20,
            paddingTop: 15,
            fontWeight: 'bold',
          }}
        >
          LOG OUT
        </Text>
      </TouchableOpacity>
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
  settingsBox: {
    backgroundColor: 'white',
    height: 60,
    margin: 20,
    marginBottom: 5,
    borderRadius: 5,
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

export default Menu
