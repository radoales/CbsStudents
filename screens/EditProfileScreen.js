/* eslint-disable global-require */
import React from 'react'
import { StyleSheet, View, Image, Text, Button, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { utils } from '@react-native-firebase/app'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import InputBlock from '../components/InputBlock'
import ButtonBox from '../components/ButtonBox'
import { saveUser } from '../store/actions/UserActions'
import { mainColor } from '../constants'
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
    const ref = app.storage().ref(`${userId}.jpg`)
    const uri = ref.put(uploadedUri)

    console.log('uri', ref.getDownloadURL())
    if (userName.length !== 0 && title.length !== 0) {
      dispatch(saveUser(user, token, userName, title))
      navigation.goBack()
    }
  }

  React.useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          // eslint-disable-next-line no-alert
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setUploadedUri(result.uri)
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
            func={pickImage}
            alignItems="center"
            title="Pick an image"
            textColor="white"
            backgroundColor={mainColor}
          />
          {uploadedUri && (
            <Image source={{ uri: uploadedUri }} style={styles.imageIcon} />
          )}
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
