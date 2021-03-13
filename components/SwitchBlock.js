/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { mainColor, mainColorInactive } from '../constants'

const SwitchBlock = (props) => {
  return (
    <View style={styles.switchBox}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 5, flexDirection: 'column', paddingLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 10 }}>
            {props.name}
          </Text>
          <Text style={styles.infoText}>{props.info}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Switch
            style={{ paddingVertical: 15 }}
            trackColor={{ false: 'darkgrey', true: mainColorInactive }}
            thumbColor={props.switchState ? mainColor : 'lightgrey'}
            onValueChange={props.toggleSwitch}
            value={props.switchState}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  switchBox: {
    backgroundColor: 'white',
    height: 60,
    margin: 20,
    marginBottom: 5,
    borderRadius: 5,
  },

  infoText: {
    color: 'grey',
  },
})

export default SwitchBlock
