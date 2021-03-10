import { USER_SAVED } from '../UserActions'
import { USERS } from '../../data/dummy-data'

const initialState = {
  loggedInUser: USERS[0],
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

    default:
      return state
  }
}

export default UserReducer
