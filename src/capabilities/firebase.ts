import firebase from "firebase"

const stagingFirebaseConfig = {
  apiKey: "AIzaSyDzVflALK3dE4cLljcVFl9U3PQsIssX8Nc",
  authDomain: "pledgeo.firebaseapp.com",
  projectId: "pledgeo",
  storageBucket: "pledgeo.appspot.com",
  messagingSenderId: "129706910823",
  appId: "1:129706910823:web:f7a1df095786bfd5c720c2",
  measurementId: "G-K6NQK6561X"
}

const sandboxFirebaseConfig = {
  apiKey: "AIzaSyDzDJckbKroc9AWd7Go3slA1H5bK_Pg0hU",
  authDomain: "pledgeosandbox.firebaseapp.com",
  projectId: "pledgeosandbox",
  storageBucket: "pledgeosandbox.appspot.com",
  messagingSenderId: "269944982534",
  appId: "1:269944982534:web:97331417afd3e935f50787",
  measurementId: "G-7224L3TC9P"
};

const prodFirebaseConfig = {
  apiKey: "AIzaSyCh_dJqYiMZxKVRBebwTgQTvOD3MFq95_c",
  authDomain: "pledgeoprod.firebaseapp.com",
  projectId: "pledgeoprod",
  storageBucket: "pledgeoprod.appspot.com",
  messagingSenderId: "352930725657",
  appId: "1:352930725657:web:0e1e89d3fdde4edbeb0f88",
  measurementId: "G-13JK54TWZG"
}

const app = firebase.initializeApp(process.env.REACT_APP_ENVIRONMENT === 'staging'
  ? stagingFirebaseConfig :
  process.env.REACT_APP_ENVIRONMENT === 'sandbox'
  ? sandboxFirebaseConfig :
  prodFirebaseConfig)

firebase.firestore().enablePersistence()

export const db = app.firestore()