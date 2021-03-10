/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const InputBlock = (props) => {
  const [value, setValue] = React.useState('')
  const [errorHeight, setErrorHeight] = React.useState(0)

  function CheckInputLenght() {
    setErrorHeight(value.length === 0 ? 20 : 0)
  }
  return (
    <View style={styles.inputBox}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.inputField]}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(72,61,139,0.5)"
        multiline
        numberOfLines={4}
        onFocus={() => console.log('focus received')}
        onBlur={() => CheckInputLenght()}
      />
      <View style={styles.line} />
      <Text style={[{ height: errorHeight }, styles.errorMessage]}>
        {props.errorMessage}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    height: 100,
    alignSelf: 'stretch',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  inputField: {
    height: 40,
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
