/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonBox = (props) => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: 'darkslateblue',
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            paddingTop: 10,
            fontWeight: 'bold',
          }}
          onPress={() => navigation.navigate(props.screen)}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ButtonBox
