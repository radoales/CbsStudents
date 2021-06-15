/* eslint-disable global-require */
import React from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { utils } from '@react-native-firebase/app'
import ImagePicker from 'react-native-image-picker'
import InputBlock from '../components/InputBlock'
import ButtonBox from '../components/ButtonBox'
import { saveUser } from '../store/actions/UserActions'
import { mainColor, mainColorInactive } from '../constants'
import { app } from '../firebase'

const EditProfileScreen = ({ route }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const user = route.params.data
  console.log('user: ', user)
  const userId = useSelector((state) => state.user.loggedInUser.id)
  const token = useSelector((state) => state.user.token)

  const [userName, setUserName] = React.useState(user.name)
  const [title, setTitle] = React.useState(user.title)

  const [uploadedUri, setUploadedUri] = React.useState(user.title)

  const handleSave = () => {
    if (userName.length !== 0 && title.length !== 0) {
      dispatch(saveUser(user, token, userName, title))
      navigation.goBack()
    }
  }

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response)

    if (response.didCancel) {
      console.log('User cancelled image picker')
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error)
    } else {
      const { uri } = response
      setUploadedUri(uri)
    }
  })

  const reference = app.storage().ref('some.jpg')

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
          {/* <ButtonBox
            alignItems="center"
            title="Upload"
            textColor="white"
            backgroundColor={mainColor}
          /> */}
          <Button
            title="upload"
            onPress={async () => {
              // path to existing file on filesystem
              const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`
              // uploads file
              await reference.putFile(pathToFile)
            }}
          />
        </View>
        <Image source={{ uri: user.image }} style={styles.imageIcon} />
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
