import { USER_SAVED, USER_LOGGED_IN, USER_SIGN_OUT } from '../UserActions'
import { USERS } from '../../data/dummy-data'

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
      const user = state.users.find((u) => u.email === action.payload.email)

      return {
        ...state,
        loggedInUser: user,
      }
    }

    case USER_SIGN_OUT: {
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
