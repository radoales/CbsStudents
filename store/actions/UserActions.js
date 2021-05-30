import { fetchChatRooms } from './ChatActions'

export const USER_SAVED = 'USER_SAVED'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_SIGNED_UP = 'USER_SIGNED_UP'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'
export const SET_USERS = 'SET_USERS'

export const saveUser = (user, token, name, title) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://cbsstudents-kea-default-rtdb.firebaseio.com/users/${user.id}.json?auth=${token}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: user.id,
          email: user.email,
          name,
          title,
          image: user.image,
        }),
      },
    )
    if (!response.ok) {
      console.log('response not okay', response)
    } else {
      const data = await response.json()

      dispatch({ type: USER_SAVED, payload: { name, title } })
    }
  }
}

const fetchContacts = (token) => {
  return async (dispatch) => {
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
      // Get loggedin user from the realtime database
      const res = await fetch(
        `https://cbsstudents-kea-default-rtdb.firebaseio.com/users/${data.localId}.json?auth=${data.idToken}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const userFromDb = await res.json()
      dispatch({
        type: USER_LOGGED_IN,
        payload: {
          id: data.localId,
          email: userFromDb.email,
          name: userFromDb.name,
          title: userFromDb.title,
          token: data.idToken,
        },
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

      // Add the new user to the realtime database
      await fetch(
        `https://cbsstudents-kea-default-rtdb.firebaseio.com/users/${data.localId}.json?auth=${data.idToken}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            id: data.localId,
          }),
        },
      )
      dispatch({ type: USER_SIGNED_UP, payload: { password, data } })
    }
  }
}

export const signOut = () => {
  return { type: USER_SIGNED_OUT }
}
