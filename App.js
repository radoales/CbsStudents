import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { LogBox, StyleSheet } from 'react-native'
import * as React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider, useSelector } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import { headerStyles } from './StyleSheets/Shared'

import ChatReducer from './store/reducers/ChatReducer'
import Home from './screens/Home'
import Discover from './screens/Discover'
import Chat from './screens/Chat'
import Menu from './screens/Menu'
import ChatRoomScreen from './screens/ChatRoomScreen'
import SignUpScreen from './screens/SignUpScreen'
import LogInScreen from './screens/LogInScreen'
import EditProfileScreen from './screens/EditProfileScreen'
import UserReducer from './store/reducers/UserReducer'
import { mainColor, mainColorInactive } from './constants'
import NewChatroomScreen from './screens/NewChatroomScreen'

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs()

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const rootReducer = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
})
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
)
// const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

function TabMenuStackNaigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Discover') {
            iconName = focused ? 'search' : 'search-outline'
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: mainColor,
        inactiveTintColor: 'gray',
        labelStyle: {
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Chat" component={ChatStackNavigator} />
      <Tab.Screen name="Menu" component={MenuStackNavigator} />
    </Tab.Navigator>
  )
}

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogInScreen"
        title="Log in"
        component={LogInScreen}
        options={{
          headerTitleStyle: headerStyles.headerText,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
          headerTitleStyle: headerStyles.headerText,
        }}
      />
    </Stack.Navigator>
  )
}

function ChatStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chat',
          headerTitleStyle: headerStyles.headerText,
        }}
      />
      <Stack.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: headerStyles.headerText,
        })}
      />
      <Stack.Screen
        name="NewChatroomScreen"
        component={NewChatroomScreen}
        options={{
          title: 'New Chatroom',
          headerTitleStyle: headerStyles.headerText,
        }}
      />
    </Stack.Navigator>
  )
}

function MenuStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Menu',
          headerTitleStyle: headerStyles.headerText,
          headerStyle: { height: 90 },
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          title: 'Edit Profile',
          headerTitleStyle: headerStyles.headerText,
        }}
      />
    </Stack.Navigator>
  )
}

function InitialStackNavigator() {
  const isSignedIn = useSelector((state) => state.user.token) !== null
  return isSignedIn ? <TabMenuStackNaigator /> : <AuthStackNavigator />
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <InitialStackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
