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
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password,
      )
      if (user !== undefined) {
        return {
          ...state,
          loggedInUser: user,
        }
      }
      return {
        ...state,
      }
    }

    case USER_SIGNED_UP: {
      const user = new User(
        Math.random().toString(),
        '',
        action.payload.password,
        action.payload.email,
        '',
        '',
      )
      const newUsers = [...state.users, user]
      return {
        ...state,
        users: newUsers,
      }
    }

    case USER_SIGNED_OUT: {
      return {
        ...state,
        loggedInUser: null,
      }
    }

    default:
      return state
  }
}

export default UserReducer
