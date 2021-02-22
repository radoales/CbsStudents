import { Platform, StyleSheet } from 'react-native';

const comonStyles = StyleSheet.create({
    titleText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "darkslateblue",
        fontSize: 20,
        fontFamily: Platform.OS === 'ios'? 'Al Nile' : 'monospace' 
    },
    titleBox: {
        height: 30,
        backgroundColor: "white"
    }
})

const chatListStyles = StyleSheet.create({
    dotUnread: {
        backgroundColor: 'darkslateblue',
        height: 10,
        width: 10,
        borderRadius: 5,
        alignSelf: 'flex-end'
    },
    dotRead: {

        height: 10,
        width: 10,
        borderRadius: 5,
        alignSelf: 'flex-end'
    },
    chatBlock: {
        flexDirection: 'row',
        height: 50,
        padding: 10
    },
    chatTextUnread: {
        fontWeight: 'bold'
    },
    chatTextRead: {
        fontWeight: 'normal'
    },
    imageIcon: {
        width: 40,
         height: 40,
         borderRadius: 20,
          resizeMode: 'contain'
    },
    column :{
        flexDirection: 'column', 
        paddingLeft: 10
    },
    endColumn :{
        flex: 1,
        alignItems: 'flex-end'
    }
});

export  {comonStyles, chatListStyles};