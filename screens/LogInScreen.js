import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { logIn } from '../store/actions/UserActions'
import ButtonBox from '../components/ButtonBox'
import InputBlock from '../components/InputBlock'
import { mainColor } from '../constants'

const LogInScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const error = useSelector((state) => state.user.errorMessage)
  console.log(error)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const HandlelogIn = () => {
    dispatch(logIn(email, password))
  }
  const handleSignUp = () => {
    navigation.navigate('SignUpScreen')
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Image
        source={require('../assets/cbsstud.png')}
        style={styles.imageIcon}
      />
      <Text
        style={{
          fontSize: 20,
          color: mainColor,
          fontWeight: 'bold',
          paddingLeft: 20,
        }}
      >
        Log in
      </Text>
      <View style={{ padding: 20 }}>
        <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>
          {error}
        </Text>
        <InputBlock value={email} setValue={setEmail} label="E-mail" required />
        <View style={{ height: 10 }} />
        <InputBlock
          value={password}
          setValue={setPassword}
          required
          label="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text
          style={{
            color: mainColor,
            alignSelf: 'center',
            padding: 20,
            fontWeight: 'bold',
          }}
        >
          Forgot password?
        </Text>
      </TouchableOpacity>
      <ButtonBox title="Log In" func={() => HandlelogIn()} />
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}
      >
        <Text
          style={{
            color: mainColor,
            alignSelf: 'center',
            paddingRight: 5,
          }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => handleSignUp()}>
          <Text
            style={{
              color: mainColor,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
})

export default LogInScreen
