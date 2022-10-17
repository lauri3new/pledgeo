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

const app = firebase.initializeApp(process.env.REACT_APP_ENVIRONMENT === 'staging' ? stagingFirebaseConfig : sandboxFirebaseConfig)

firebase.firestore().enablePersistence()

export const db = app.firestore()