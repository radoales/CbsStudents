import React from 'react'
import { SearchBar } from 'react-native-elements'
import { View, Text, Button, StyleSheet } from 'react-native'
import { comonStyles } from '../StyleSheets/Shared'

const Discover = (props) => {
  const [search, setSearch] = React.useState('')
  return (
    <View>
      <View style={comonStyles.headerBox}>
        <Text style={[comonStyles.headerText, { paddingTop: 20 }]}>
          Discover
        </Text>
      </View>
      <View style={{ margin: 15 }}>
        <SearchBar
          containerStyle={{
            backgroundColor: 'white',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            borderRadius: 5,
          }}
          inputContainerStyle={{
            backgroundColor: 'white',
          }}
          searchIcon={{ size: 30, color: 'black' }}
          placeholder="Search for Events, Posts and More"
          onChangeText={setSearch}
          value={search}
        />
      </View>
      <View
        style={[
          styles.block,
          { backgroundColor: 'rgba(rgb(128,0,128),0.8)', alignItems: 'center' },
        ]}
      >
        <Text style={styles.text}>ALL EVENTS</Text>
      </View>
      <View
        style={[
          styles.block,
          { backgroundColor: 'rgba(72,61,139,0.8)', alignItems: 'center' },
        ]}
      >
        <Text style={styles.text}>ALL STUDENT ORGANIZATIONS</Text>
      </View>
      <View
        style={[
          styles.block,
          { backgroundColor: 'rgba(32,178,170, 0.8)', alignItems: 'center' },
        ]}
      >
        <Text style={styles.text}>ALL POSTS</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    height: 120,
    margin: 15,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 45,
  },
})

export default Discover
