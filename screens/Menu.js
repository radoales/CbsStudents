import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {comonStyles} from '../StyleSheets/Shared';

const Menu = props => {
   return (
      <View
      style={comonStyles.titleBox}>
      <Text style={comonStyles.titleText}>Menu</Text>
   </View>
   );
}

const styles = StyleSheet.create({
   
});

export default Menu;