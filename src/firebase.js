import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgrCLYyHRmZu0T9W_6lwvdltWdKZ9L1w8",
  authDomain: "react-firebase-auth-16ed5.firebaseapp.com",
  projectId: "react-firebase-auth-16ed5",
  storageBucket: "react-firebase-auth-16ed5.appspot.com",
  messagingSenderId: "258250857775",
  appId: "1:258250857775:web:2b12ae812364bbb17bd5da",
  measurementId: "G-E7TMM7XCK2",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
