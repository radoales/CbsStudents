/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const InputBlock = (props) => {
  const [errorMessage, setErrorMesaage] = React.useState(props.errorMessage)

  function CheckInput() {
    console.log(props)
    if (props.required) {
      props.value.length === 0
        ? setErrorMesaage(`Enter ${props.label}`)
        : setErrorMesaage(props.errorMessage)
    }
  }
  return (
    <View style={styles.inputBox}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.inputField]}
        onChangeText={(text) => props.setValue(text)}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(72,61,139,0.5)"
        numberOfLines={4}
        onBlur={() => CheckInput()}
        secureTextEntry={props.secureTextEntry}
        required
      />
      <View style={styles.line} />
      <Text style={[{ height: 20 }, styles.errorMessage]}>{errorMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    height: 80,
    alignSelf: 'stretch',

    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  inputField: {
    height: 25,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: 'red',
    borderWidth: 0,
  },
  label: {
    paddingLeft: 10,
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    paddingLeft: 10,
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
})

export default InputBlock
