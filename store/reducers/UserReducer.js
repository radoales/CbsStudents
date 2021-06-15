import {
  USER_SAVED,
  USER_LOGGED_IN,
  USER_SIGNED_OUT,
  USER_SIGNED_UP,
  SET_USERS,
} from '../actions/UserActions'
import User from '../../models/User'

const initialState = {
  users: null,
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
      user.image = action.payload.image
      return {
        ...state,
        loggedInUser: user,
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.payload.users,
      }
    }
    case USER_LOGGED_IN: {
      const { payload } = action
      const user = {
        id: payload.id,
        name: payload.name ?? '',
        email: payload.email,
        title: payload.title,
        image: payload.image,
      }

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
