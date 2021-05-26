/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { mainColor, mainColorInactive } from '../constants'
import { chatListStyles } from '../StyleSheets/Shared'

const ButtonBox = (props) => {
  return (
    <View style={{ marginBottom: 3 }}>
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: props.backgroundColor,
          marginLeft: 20,
          marginRight: 20,
          alignItems: props.alignItems,
          borderRadius: 5,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          {props.hasImage ? (
            <Image
              source={props.imageSource}
              style={chatListStyles.imageIcon}
            />
          ) : (
            <View />
          )}

          <Text
            style={{
              color: props.textColor,
              fontSize: 20,
              paddingTop: 10,
              fontWeight: 'bold',
            }}
            onPress={props.func}
          >
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ButtonBox
