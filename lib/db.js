import firebase from 'firebase/app';
import 'firebase/firestore'

export function loadDB() {
  try {
    const config = {
      apiKey: "AIzaSyCfXNXP-1wyIhrHvm4xyzeWYPVqMQW_HyE",
      authDomain: "online-business-development.firebaseapp.com",
      databaseURL: "https://online-business-development.firebaseio.com",
      projectId: "online-business-development",
      storageBucket: "",
      messagingSenderId: "263782617880"
    };
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }
  return firebase
}