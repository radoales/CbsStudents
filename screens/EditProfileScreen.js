/* eslint-disable global-require */
import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import InputBlock from '../components/InputBlock'
import ButtonBox from '../components/ButtonBox'

const EditProfileScreen = () => {
  return (
    <View style={{ paddingTop: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          marginBottom: 50,
          marginTop: 50,
        }}
      >
        <View style={{ width: 200, marginEnd: 50 }}>
          <Text style={{ paddingLeft: 20 }}>PROFILE PICTURE</Text>
          <ButtonBox title="Upload" screen="" />
        </View>
        <Image
          source={require('../assets/robert.jpg')}
          style={styles.imageIcon}
        />
      </View>
      <InputBlock
        label="WHAT IS YOUR NAME?"
        errorMessage="Please enter your name"
        placeholder="First name and last name"
      />
      <InputBlock
        label="STUDY PROGRAM"
        errorMessage="Please enter your study programme"
        placeholder="Programme"
      />
      <ButtonBox title="Save Changes" />
    </View>
  )
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 100,
    height: 100,
    borderRadius: 20,
    resizeMode: 'contain',
  },
})

export default EditProfileScreen
