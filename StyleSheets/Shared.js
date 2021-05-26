import { Platform, StyleSheet } from 'react-native'
import { mainColor, mainColorInactive } from '../constants'

const headerStyles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: mainColor,
    fontSize: 20,
    // fontFamily: Platform.OS === 'ios' ? 'Al Nile' : 'monospace',
  },
  headerBox: {
    backgroundColor: 'white',
  },
})

const chatListStyles = StyleSheet.create({
  dotUnread: {
    backgroundColor: mainColor,
    height: 10,
    width: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  dotRead: {
    height: 10,
    width: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  chatBlock: {
    flexDirection: 'row',
    height: 50,
    padding: 10,
  },
  chatTextUnread: {
    fontWeight: 'bold',
  },
  chatTextRead: {
    fontWeight: 'normal',
  },
  imageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  column: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  endColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  line: {
    margin: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
})

export { headerStyles, chatListStyles }
