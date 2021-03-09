import { USER_LOGGED_IN } from '../UserActions'
import { USERS } from '../../data/dummy-data'

const initialState = {
  loggedInUser: USERS[0],
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN: {
        //Check if user exists
      const user = USERS.map((u) => u.email === action.payload.email)
      const passwordCorrect = user.password === action.payload.password
      return {
        ...state,
        loggedInUser: user,
      }
    }

    default:
      return state
  }
}

export default UserReducer
