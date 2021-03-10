import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { headerStyles } from '../StyleSheets/Shared'

const Home = (props) => {
  return (
    <View style={headerStyles.headerBox}>
      <Text style={headerStyles.headerText}>Feed</Text>
      <View style={{ paddingTop: 20 }}>
        <View style={styles.boxWithShadow} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxWithShadow: {
    height: 250,
    alignSelf: 'stretch',
    textAlign: 'center',
    margin: 20,
    marginBottom: 0,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
})

export default Home
