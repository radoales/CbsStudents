import { fetchChatRooms } from './ChatActions'

export const USER_SAVED = 'USER_SAVED'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_SIGNED_UP = 'USER_SIGNED_UP'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'
export const SET_USERS = 'SET_USERS'

export const saveUser = (name, title) => {
  return { type: USER_SAVED, payload: { name, title } }
}

const fetchContacts = (token) => {
  return async (dispatch) => {
    console.log('calling for all users')
    const response = await fetch(
      `https://cbsstudents-kea-default-rtdb.firebaseio.com/users.json?auth=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    console.log('data users', data)
    const users = Object.keys(data).map((key) => ({
      ...data[key],
    }))
    dispatch({
      type: SET_USERS,
      payload: { users },
    })
  }
}

export const logIn = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcvIpD40zd4J-lOEvlzRltraFlF15nA6w',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          returnSecureToken: true,
          email,
          password,
        }),
      },
    )

    if (!response.ok) {
      console.log('response not okay', response)
    } else {
      const data = await response.json()
      console.log('user data', data)
      dispatch({
        type: USER_LOGGED_IN,
        payload: { id: data.localId, email, token: data.idToken },
      })
      dispatch(fetchChatRooms())
      dispatch(fetchContacts(data.idToken))
    }
  }
}

export const signUp = (email, password) => {
  // return { type: USER_SIGNED_UP, payload: { email, password } }
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcvIpD40zd4J-lOEvlzRltraFlF15nA6w',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          returnSecureToken: true,
          email,
          password,
        }),
      },
    )

    if (!response.ok) {
      console.log('response not okay', response)
    } else {
      const data = await response.json()
      dispatch({ type: USER_SIGNED_UP, payload: { password, data } })
    }
  }
}

export const signOut = () => {
  return { type: USER_SIGNED_OUT }
}
