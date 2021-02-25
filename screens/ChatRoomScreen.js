import React from 'react';
import {
   View, Image, StyleSheet, FlatList,
   SafeAreaView, TextInput, TouchableOpacity
} from 'react-native';
import ChatView from '../components/ChatView';
import Ionicons from '@expo/vector-icons/Ionicons';

const ChatRoomScreen = ({ route, navigation }) => {
   const { chatRoom } = route.params;
   const [value, onChangeText] = React.useState('');

   //Set Heder Title
   navigation.setOptions({
      title: chatRoom.name,
      topBar: {
         backButton: { color: 'white' }
      }
   });

   const sendButtonStyle = value.length == 0 ? styles.sendButtonViewActive : styles.sendButtonViewInActive;
   const isInputFieldEmpty = value.length == 0 ? true : false;

   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={chatRoom.chatMessages}
            renderItem={({ item }) => <ChatView message={item} />}
            keyExtractor={(item) => item.id}
         />
         <View style={{ flexDirection: 'row', borderColor: '#D9D9D9', borderWidth: 1 }}>
            <Image
               source={require('../assets/robert.jpg')}
               style={styles.imageIcon}
            />
            <TextInput
               style={styles.inputField}
               onChangeText={(text) => onChangeText(text)}
               value={value}
               placeholder='Write message'
               multiline
               numberOfLines={4}
               onFocus={() => console.log("focus received")}
               onBlur={() => console.log("focus lost")}
            />
            <TouchableOpacity disabled={isInputFieldEmpty}>
               <View style={sendButtonStyle}>
                  <Ionicons style={[{ transform: [{ rotate: '315deg' }] }]} name="send-sharp" size={25} color="white" />
               </View>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
   },
   imageIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      resizeMode: 'contain',
      margin: 10,
      marginRight: 0
   },
   inputField: {
      margin: 10,
      height: 40,
      width: 240,
      backgroundColor: '#D9D9D9',
      borderRadius: 5,
      padding: 5,
      marginRight: 0
   },
   sendButtonViewActive: {
      backgroundColor: 'rgba(72,61,139, 0.5)',
      width: 40,
      height: 40,
      paddingLeft: 5,
      paddingTop: 4,
      margin: 10,
      borderRadius: 5,
      alignItems: 'center'
   },
   sendButtonViewInActive: {
      backgroundColor: 'rgb(72,61,139)',
      width: 40,
      height: 40,
      paddingLeft: 5,
      paddingTop: 4,
      margin: 10,
      borderRadius: 5,
      alignItems: 'center'
   }
});

export default ChatRoomScreen;
