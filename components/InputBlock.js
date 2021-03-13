/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const InputBlock = (props) => {
  const [showError, setShowError] = React.useState(0)

  function CheckInputLenght() {
    setShowError(props.value.length === 0 ? 20 : 0)
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
        onBlur={() => CheckInputLenght()}
        secureTextEntry={props.secureTextEntry}
      />
      <View style={styles.line} />
      <Text style={[{ height: showError }, styles.errorMessage]}>
        {props.errorMessage}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    height: 100,
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
