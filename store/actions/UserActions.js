export const USER_SAVED = 'USER_SAVED'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_SIGNED_UP = 'USER_SIGNED_UP'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

export const saveUser = (name, title) => {
  return { type: USER_SAVED, payload: { name, title } }
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
      console.log(data)
      dispatch({
        type: USER_LOGGED_IN,
        payload: { id: response.localId, email, token: data.idToken },
      })
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
      console.log(data)
      dispatch({ type: USER_SIGNED_UP, payload: { password, data } })
    }
  }
}

export const signOut = () => {
  return { type: USER_SIGNED_OUT }
}
