import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import comonStyles from '../StyleSheets/Shared';

const Tab = createMaterialTopTabNavigator();

const Home = props => {
   return (
      <View
         style={comonStyles.titleBox}>
         <Text style={comonStyles.titleText}>Feed</Text>
      </View>
   );
}

const styles = StyleSheet.create({

});

export default Home;