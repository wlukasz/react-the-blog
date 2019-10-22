import * as firebase from 'firebase'
import { once } from 'events'

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// }

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD5D6MX5m9DWudquD06JXzqNiLNBacMtX0",
  authDomain: "react-blog-a0ef4.firebaseapp.com",
  databaseURL: "https://react-blog-a0ef4.firebaseio.com",
  projectId: "react-blog-a0ef4",
  storageBucket: "react-blog-a0ef4.appspot.com",
  messagingSenderId: "571950119692",
  appId: "1:571950119692:web:3f44f99c8f19aca4d46729"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

