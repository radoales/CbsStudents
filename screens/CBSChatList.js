import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import ChatList from '../components/ChatList';
import { CHATROOM_CBS } from '../data/dummy-data';

const CBSChatList = () => {
   return (
         <View style={styles.room}>
            <FlatList
               data={CHATROOM_CBS}
               renderItem={itemData => (
                  <ChatList chatroom={itemData.item}/>
               )}
               keyExtractor={item => item.id}
            />
         </View>
   );
}

const styles = StyleSheet.create({

});

export default CBSChatList;