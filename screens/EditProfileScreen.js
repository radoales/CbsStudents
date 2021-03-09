import React from 'react'
import { StyleSheet, View } from 'react-native'
import InputBlock from "../components/InputBlock"

const EditProfileScreen = () => {
  return (
    <View>
      <InputBlock label="label" errorMessage={"missing text"} />
    </View>
  )
}

const styles = StyleSheet.create()

export default EditProfileScreen
