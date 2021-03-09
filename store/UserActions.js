import { USERS } from '../data/dummy-data'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'

export const logIn = (email, password) => {
  return { type: USER_LOGGED_IN, payload: { email, password } }
}
