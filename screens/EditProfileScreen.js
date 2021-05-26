/* eslint-disable global-require */
import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import InputBlock from '../components/InputBlock'
import ButtonBox from '../components/ButtonBox'
import { saveUser } from '../store/actions/UserActions'
import { mainColor, mainColorInactive } from '../constants'

const EditProfileScreen = ({ route }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const user = route.params.data

  const [userName, setUserName] = React.useState(user.name)
  const [title, setTitle] = React.useState(user.title)

  const handleSave = () => {
    if (userName.length !== 0 && title.length !== 0) {
      dispatch(saveUser(userName, title))
      navigation.goBack()
    }
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
      >
        <View style={{ width: 200, marginEnd: 50 }}>
          <Text style={{ paddingLeft: 20 }}>PROFILE PICTURE</Text>
          <ButtonBox
            alignItems="center"
            title="Upload"
            textColor="white"
            backgroundColor={mainColor}
          />
        </View>
        <Image
          source={require('../assets/robert.jpg')}
          style={styles.imageIcon}
        />
      </View>
      <View style={{ padding: 20 }}>
        <InputBlock
          value={userName}
          setValue={setUserName}
          required
          label="WHAT IS YOUR NAME?"
          placeholder="First name and last name"
          initialState={user.name}
        />
        <View style={{ height: 10 }} />
        <InputBlock
          value={title}
          setValue={setTitle}
          required
          label="STUDY PROGRAM"
          placeholder="Programme"
        />
      </View>
      <ButtonBox
        alignItems="center"
        func={() => handleSave()}
        title="Save Changes"
        backgroundColor={mainColor}
        textColor="white"
      />
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

export default EditProfileScreen
