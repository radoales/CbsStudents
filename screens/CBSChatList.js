import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import ChatList from '../components/ChatList';

import { useSelector, useDispatch } from 'react-redux';


const CBSChatList = () => {
   const chatrooms = useSelector(state => state.chat.chatrooms); // selecting from redux store
   return (
         <View style={styles.room}>
            <FlatList
               data={chatrooms}
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