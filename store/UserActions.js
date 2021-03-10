export const USER_SAVED = 'USER_SAVED'

export const saveUser = (name, title) => {
  return { type: USER_SAVED, payload: { name, title } }
}
