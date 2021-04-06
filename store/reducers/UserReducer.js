import {
  USER_SAVED,
  USER_LOGGED_IN,
  USER_SIGNED_OUT,
  USER_SIGNED_UP,
} from '../actions/UserActions'
import { USERS } from '../../data/dummy-data'
import User from '../../models/User'

const initialState = {
  users: USERS,
  loggedInUser: null,
  token: null,
  errorMessage: '',
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SAVED: {
      const user = state.loggedInUser
      user.name = action.payload.name
      user.title = action.payload.title
      return {
        ...state,
        loggedInUser: user,
      }
    }

    case USER_LOGGED_IN: {
      const user = new User(
        action.payload.localId,
        '',
        action.payload.email,
        '',
        '',
      )
      if (user !== undefined) {
        return {
          ...state,
          loggedInUser: user,
          errorMessage: '',
          token: action.payload.token,
        }
      }
      return {
        ...state,
        errorMessage: 'Wrong Email or Password',
      }
    }

    case USER_SIGNED_UP: {
      const { data } = action.payload

      const user = new User(data.localId, '', data.email, '', '')
      const newUsers = [...state.users, user]
      return {
        ...state,
        token: action.payload.token,
        users: newUsers,
      }
    }

    case USER_SIGNED_OUT: {
      return {
        ...state,
        loggedInUser: null,
        token: null,
      }
    }

    default:
      return state
  }
}

export default UserReducer
