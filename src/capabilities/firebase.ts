import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDzVflALK3dE4cLljcVFl9U3PQsIssX8Nc",
  authDomain: "pledgeo.firebaseapp.com",
  projectId: "pledgeo",
  storageBucket: "pledgeo.appspot.com",
  messagingSenderId: "129706910823",
  appId: "1:129706910823:web:f7a1df095786bfd5c720c2",
  measurementId: "G-K6NQK6561X"
}

const app = firebase.initializeApp(firebaseConfig)

firebase.firestore().enablePersistence()

export const db = app.firestore()