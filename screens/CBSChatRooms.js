import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ChatRoom from './../components/ChatRoom';
import { CHATROOM } from './../data/dummy-data';

const CBSChatRooms = () => {
   return (
      <View style={styles.room}>
         <FlatList
            data={CHATROOM}
            renderItem={itemData => (
               <ChatRoom chatroom={itemData.item}></ChatRoom>
            )}
            keyExtractor={item => item.id}
         />

      </View>
   );
}

const styles = StyleSheet.create({

});

export default CBSChatRooms;