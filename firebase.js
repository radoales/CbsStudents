import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCcvIpD40zd4J-lOEvlzRltraFlF15nA6w',
  authDomain: 'cbsstudents-kea.firebaseapp.com',
  databaseURL: 'https://cbsstudents-kea-default-rtdb.firebaseio.com',
  projectId: 'cbsstudents-kea',
  storageBucket: 'cbsstudents-kea.appspot.com',
  messagingSenderId: '135149844075',
  appId: '1:135149844075:web:4576c70d8574cd816b232e',
}

export const app = firebase.initializeApp(firebaseConfig)
// export const db = app.database()
