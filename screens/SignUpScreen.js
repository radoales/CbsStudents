import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox'
import { signUp } from '../store/actions/UserActions'
import ButtonBox from '../components/ButtonBox'
import InputBlock from '../components/InputBlock'
import { mainColor, mainColorInactive } from '../constants'

const SignUpScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [reapeatPassword, setReapeatPassword] = React.useState('')
  const [termsCheckBox, setTermsCheckBox] = React.useState(false)

  const passwordsMatch = password === reapeatPassword
  const errorMessage = passwordsMatch ? '' : "Passwords don't match"
  const HandleSignUp = () => {
    if (termsCheckBox && passwordsMatch) {
      dispatch(signUp(email, password))
    }
  }
  const handleTerms = () => {
    navigation.navigate('TermsScreen')
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
        Sign Up
      </Text>
      <View style={{ padding: 20 }}>
        <InputBlock
          value={email}
          setValue={setEmail}
          errorMessage=""
          label="E-MAIL"
          required
        />
        <View style={{ height: 10 }} />
        <InputBlock
          value={password}
          setValue={setPassword}
          errorMessage=""
          label="PASSWORD"
          secureTextEntry
          required
        />
        <View style={{ height: 10 }} />
        <InputBlock
          value={reapeatPassword}
          setValue={setReapeatPassword}
          errorMessage={errorMessage}
          label="REPEAT PASSWORD"
          required
          secureTextEntry
        />
      </View>
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}
      >
        <CheckBox
          disabled={false}
          value={termsCheckBox}
          onValueChange={(newValue) => setTermsCheckBox(newValue)}
          tintColors={{ false: 'darkgrey', true: mainColor }}
        />
        <Text
          style={{
            color: mainColor,
            alignSelf: 'center',
            paddingRight: 5,
          }}
        >
          I agree to the
        </Text>
        <TouchableOpacity
          onPress={() => handleTerms()}
          style={{ alignSelf: 'center' }}
        >
          <Text
            style={{
              color: mainColor,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}
          >
            terms and conditions
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonBox
        alignItems="center"
        backgroundColor={mainColor}
        textColor="white"
        title="Get Access"
        func={() => HandleSignUp()}
      />
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
          Already have a user?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogInScreen')}>
          <Text
            style={{
              color: mainColor,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}
          >
            Log In
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

export default SignUpScreen
