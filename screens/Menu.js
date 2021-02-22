import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import {comonStyles} from '../StyleSheets/Shared';
import ChatView from '../components/ChatView';

const Menu = ({route}) => {
   const { chatRoom} = route.params;

   return (
        <SafeAreaView style={styles.container}>
      <FlatList
        data={chatRoom.chatMessages}
        renderItem={({ item }) => (
    <ChatView message={item}  />
  )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Menu;