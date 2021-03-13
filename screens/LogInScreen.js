import React from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { logIn } from '../store/UserActions'
import ButtonBox from '../components/ButtonBox'
import InputBlock from '../components/InputBlock'

const LogInScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

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
          color: 'darkslateblue',
          fontWeight: 'bold',
          paddingLeft: 20,
        }}
      >
        Log in
      </Text>
      <View style={{ padding: 20 }}>
        <InputBlock
          value={email}
          setValue={setEmail}
          errorMessage="Enter e-mail"
          label="E-mail"
        />
        <View style={{ height: 10 }} />
        <InputBlock
          value={password}
          setValue={setPassword}
          errorMessage="Enter password"
          label="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text
          style={{
            color: 'darkslateblue',
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
            color: 'darkslateblue',
            alignSelf: 'center',
            paddingRight: 5,
          }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => handleSignUp()}>
          <Text
            style={{
              color: 'darkslateblue',
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
