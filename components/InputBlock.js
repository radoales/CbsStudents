/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const InputBlock = (props) => {
  const [value, setValue] = React.useState('')
  const [errorHeight, seterrorHeight] = React.useState(0)

  function FocusLost() {
    seterrorHeight(value.length === 0 ? 20 : 0)
  }
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={{ height: errorHeight }}>{props.errorMessage}</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Input text"
        multiline
        numberOfLines={4}
        onFocus={() => console.log('focus received')}
        onBlur={() => FocusLost()}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Input text"
        multiline
        numberOfLines={4}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputField: {
    margin: 10,
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    padding: 5,
  },
  label: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 10,
  },
})

export default InputBlock
