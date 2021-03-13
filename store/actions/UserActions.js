export const USER_SAVED = 'USER_SAVED'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_SIGNED_UP = 'USER_SIGNED_UP'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

export const saveUser = (name, title) => {
  return { type: USER_SAVED, payload: { name, title } }
}

export const logIn = (email, password) => {
  return { type: USER_LOGGED_IN, payload: { email, password } }
}

export const signUp = (email, password) => {
  return { type: USER_SIGNED_UP, payload: { email, password } }
}

export const signOut = () => {
  return { type: USER_SIGNED_OUT }
}
